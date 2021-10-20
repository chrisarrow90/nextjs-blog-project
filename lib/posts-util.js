import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const postsDirectory = path.join(process.cwd(), 'content', 'posts')

function getPostData(fileName) {
  const filePath = path.join(postsDirectory, fileName)
  const fileContent = fs.readFileSync(filePath, 'utf-8')
  const { data, content } = matter(fileContent)

  const postSlug = fileName.replace(/\.md$/, '') // remove file extension
  const postData = { slug: postSlug, ...data, content }

  return postData
}

export function getAllPosts() {
  const postFiles = fs.readdirSync(postsDirectory)

  const allPosts = postFiles
    .map((postFile) => getPostData(postFile))
    .sort((a, b) => (a.date > b.date ? -1 : 1))

  return allPosts
}

export function getFeaturedPosts() {
  const allPosts = getAllPosts()
  return allPosts.filter((post) => post.isFeatured)
}
