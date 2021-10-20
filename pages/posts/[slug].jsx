import { getPostData, getPostsFiles } from '../../lib/posts-util'
import PostContent from '../../components/posts/post-detail/post-content'

const PostDetailPage = ({ post }) => {
  return <PostContent post={post} />
}

export async function getStaticProps(context) {
  const { slug } = context.params
  const post = getPostData(slug)

  return { props: { post }, revalidate: 600 }
}

export async function getStaticPaths() {
  const postFilenames = getPostsFiles()

  const slugs = postFilenames.map((filename) => filename.replace(/\.md$/, ''))

  return {
    paths: slugs.map((slug) => ({
      params: {
        slug
      }
    })),
    fallback: false
  }
}

export default PostDetailPage
