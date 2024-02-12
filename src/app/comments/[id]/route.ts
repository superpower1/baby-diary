import { redirect } from "next/navigation"
import { comments } from "../data"

export const GET = (
  _request: Request,
  { params }: { params: { id: string } }
) => {
  if (parseInt(params.id) > comments.length) {
    redirect('/comments')
  }
  const comment = comments.find((comment) => comment.id === parseInt(params.id))
  return Response.json(comment)
}

export const PATCH = async (
  request: Request,
  { params }: { params: { id: string } }
) => {
  const body = await request.json();
  const { text } = body

  const commentIndex = comments.findIndex((comment) => comment.id === parseInt(params.id))

  comments[commentIndex].text = text;

  return Response.json(comments[commentIndex])
}

export const DELETE = async (
  request: Request,
  { params }: { params: { id: string } }
) => {
  const body = await request.json();
  const { text } = body

  const commentIndex = comments.findIndex((comment) => comment.id === parseInt(params.id))

  const deleteComment = comments[commentIndex];
  comments.splice(commentIndex, 1)

  return Response.json(deleteComment)
}