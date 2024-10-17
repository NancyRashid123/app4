
import PostCard from '../../componants/postCard/PostCard'
import Loading from '../../componants/loading/Loading';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

export default function Posts() {

  const{data , isLoading} = useQuery({
    queryKey: ['posts'],
    queryFn: () =>  axios.get("https://fakestoreapi.com/products"),
})
console.log(data);
  

  return (
    <div className='posts-container'>
      {isLoading && <Loading/>}
      { data?.data?.map((post)=>(
        <PostCard  key={post.id} title={post.title} desc={post.description} id={post.id} />
      ))}
    </div>
  )
}
