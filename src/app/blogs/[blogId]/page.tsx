import { Metadata } from 'next';

interface Props {
  params: { 
    blogId: string
  }
}

export const generateMetadata = ({ params }: Props): Metadata => {
  return {
    title: `Blog ${params.blogId}`
  }
}

const BlogDetails = ({ params }: Props) => {
  return (
    <>
      <h1>Blog details of {params.blogId}</h1>
    </>
  )
}

export default BlogDetails;