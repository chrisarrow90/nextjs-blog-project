import { getAllPosts } from '../../lib/posts-util'
import AllPosts from '../../components/posts/all-posts'

const AllPostsPage = ({ posts }) => {
  return <AllPosts posts={posts} />
}

export default AllPostsPage

export async function getStaticProps() {
  const allPosts = getAllPosts()
  return { props: { posts: allPosts }, revalidate: 600 }
}
