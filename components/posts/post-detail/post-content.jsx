import ReactMarkdown from 'react-markdown'

import classes from './post-content.module.css'
import PostHeader from './post-header'

// const DUMMY_POST = {
//   title: 'Getting Started with NextJS',
//   image: 'getting-started-nextjs.png',
//   date: '2022-02-10',
//   slug: 'getting-started-with-nextjs',
//   content: '# This is a first post'
// }

const PostContent = ({ post }) => {
  return (
    <article className={classes.content}>
      <PostHeader title={post.title} image={`/images/posts/${post.slug}/${post.image}`} />
      <ReactMarkdown>{post.content}</ReactMarkdown>
    </article>
  )
}

export default PostContent
