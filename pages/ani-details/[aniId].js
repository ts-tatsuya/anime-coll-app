import { gql, useQuery } from '@apollo/client/';
import { useRouter } from 'next/router';
import HeaderSection from '../../Components/header-section';


const GET_PAGE = gql`
  
    query ($id: Int!){
      Media(id: $id){
        title {
          romaji
          english
          native
          userPreferred
        }
        description
        coverImage{
          extraLarge
        }
      }
    }
`


function AniDetails() {

  const router = useRouter();
  const aniID = router.query.aniId;
  // const [aniID, setAniID] = useState(0);
  console.log(aniID);

  const { data, error, loading } = useQuery(GET_PAGE, {
    variables: { id: aniID }
  });

    if (loading) return 'Loading...';
    if (error) return `Errorz! ${error.message}`;
  
  


    return (
        <div>
            
            {data.Media.title.romaji}
            <br></br>
            {data.Media.description}
            <img src={data.Media.coverImage.extraLarge} style={{
              display: 'block',
              maxWidth: '300px',
              maxHeight: '500px'
            }}></img>
        </div>
    );
  }
  
export default AniDetails