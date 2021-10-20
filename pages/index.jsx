import FeaturedPosts from '../components/home-page/featured-posts'
import Hero from '../components/home-page/hero'

import { getFeaturedPosts } from '../lib/posts-util'

const HomePage = ({ posts }) => {
  return (
    <>
      <Hero />
      <FeaturedPosts posts={posts} />
    </>
  )
}

export default HomePage

export async function getStaticProps() {
  const featuredPosts = getFeaturedPosts()
  return { props: { posts: featuredPosts }, revalidate: 600 }
}
