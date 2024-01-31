import { notFound } from "next/navigation"

const Docs = ({ params }: {
  params: { slug: string[] }
}) => {
  if (params.slug?.length >= 2) {
    notFound()
  }
  else if (params.slug?.length === 1) {
    return <h1>Doc of {params.slug[0]}</h1>
  }
  return (
    <>
      <h1>Doc homepage</h1>
    </>
  )
}

export default Docs;