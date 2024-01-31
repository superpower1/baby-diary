import Link from "next/link"
import { generateArrayOfNumber } from "../_lib/array"

export const metadata = {
  title: {
    absolute: 'Blog Dashboard'
  }
}

const Blog = () => {

  return (
    <>
      <h1>Blog page</h1>
      <h2><Link href='/'>Home</Link></h2>
      {
        generateArrayOfNumber(3).map((number: number, index: number) => {
          return <h2 key={index}><Link href={`/blogs/${number}`}>Blog {number}</Link></h2>
        })
      }
    </>
  )
}

export default Blog;
