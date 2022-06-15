import { gql, useQuery } from '@apollo/client/';
import { useState } from 'react';
import AniItem from './ani-item';


const GET_MEDIA = gql`
query ($page: Int!){
    Page(page: $page, perPage: 10){
    
      pageInfo{
        currentPage
        total
        lastPage
        hasNextPage
      }
      media(sort:TRENDING_DESC,format_not_in: [MANGA, ONE_SHOT]){
        id
      }
  }
} 
`;
function AniList() {

  const [page, setPage] = useState(1);

  const { data, error, loading } = useQuery(GET_MEDIA, {
    variables: {page: page}
  });

    if (loading) return 'Loading...';
    if (error) return `Errorz! ${error.message}`;
    
    const pagination = (pageNumber, next) =>{

      switch (next) {
        case true:
          if(data.Page.pageInfo.hasNextPage){
            setPage(pageNumber);
          }else{
            console.log("nopage");
            break;
          }
          break;
        case false:
          if(pageNumber < 1){
            console.log("nopage");
            break;
          }else{
            setPage(pageNumber);
          }
          break;
        default:
          break;
      }
      
    }

    const pageSubmit = (event) =>{

      event.preventDefault();
      const pageData = new FormData(event.target);
      console.log(pageData.get('pageNum'));
      setPage(pageData.get('pageNum'));


    }

    const collSubmit = (event) =>{

      event.preventDefault();
      console.log(event.target)
      const collAddData = new FormData(event.target);
      console.log(collAddData.get('aniItem'))
      localStorage.setItem('coll', JSON.stringify(collAddData.get('aniItem')));
      console.log(localStorage.getItem('coll'));


    }

    console.log(data.Page.pageInfo.lastPage)


    return (
        <div>
          <form onSubmit={(e) => collSubmit(e)}>
            {data.Page.media.map((media) =>(
              <div key={media.id} style={{
                backgroundColor: 'black'
              }}>
              <AniItem id={media.id}></AniItem>
              </div>
            ))}
            <button type='submit'>submit</button>
            </form>
            <div>
              <button onClick={() => pagination(page-1, false)} disabled={page === 1 ? true : false}>Prev</button>
              <form onSubmit={(e) => pageSubmit(e)}>
                <input id='pageNum' name='pageNum' placeholder={"Page:" + page}></input>
                </form>
              <button onClick={() => pagination(page+1, true)} disabled={data.Page.pageInfo.hasNextPage ? false : true}>Next</button>
            </div>


        </div>
    );
  }
  
export default AniList