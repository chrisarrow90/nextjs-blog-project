import Head from 'next/head'

import { getAllPosts } from '../../lib/posts-util'
import AllPosts from '../../components/posts/all-posts'

const AllPostsPage = ({ posts }) => {
  return (
    <>
      <Head>
        <title>Chris' Web Development Blog - All Posts</title>
        <meta name="description" content="List of all educational web development posts" />
      </Head>
      <AllPosts posts={posts} />
    </>
  )
}

export default AllPostsPage

export async function getStaticProps() {
  const allPosts = getAllPosts()
  return { props: { posts: allPosts }, revalidate: 600 }
}
