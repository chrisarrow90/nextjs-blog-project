import Head from 'next/head'
import FeaturedPosts from '../components/home-page/featured-posts'
import Hero from '../components/home-page/hero'

import { getFeaturedPosts } from '../lib/posts-util'

const HomePage = ({ posts }) => {
  return (
    <>
      <Head>
        <title>Chris' Web Development Blog</title>
        <meta
          name="description"
          content="Personal blog about learning modern web development frameworks"
        />
      </Head>

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
