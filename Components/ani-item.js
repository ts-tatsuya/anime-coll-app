import { gql, useQuery } from '@apollo/client/';
import { useState, useContext } from 'react';
import { css, jsx } from '@emotion/css'
import Link from 'next/link';


const GET_ANI_ITEM = gql`
  
    query ($id: Int!){
      Media(id: $id){
        title {
          romaji
          english
          native
          userPreferred
        }
        coverImage{
          extraLarge
        }
      }
    }
`

function AniItem({id}) {

    // const [openPage, setOpenPage] = useState(false);
    const { data, error, loading } = useQuery(GET_ANI_ITEM, {
      variables: { id: id }
    });

    if (loading) return 'Loading...';
    if (error) return `Errorz! ${error.message}`;



    return (
        <div style={{
          margin: 'auto',
          width: '50%'
        }}>   
          <br></br>
          <Link href={"/ani-details/" + id}>
            <img src={data.Media.coverImage.extraLarge} style={{
              display: 'block',
              maxWidth: '300px',
              maxHeight: '300px',
              minWidth: '100px',
              minHeight: '100px'
            }}></img>
          </Link>
          <Link href={"/ani-details/" + id}>
            <a className={css`
              color: white;
              &:hover {
                color: ${'red'};
              }
            `}
            >{data.Media.title.romaji}</a>
          </Link><input type='checkbox' id={'aniItem' + id} name={'aniItem' + id} value={id}/>
        </div>
    );
  }
  
export default AniItem