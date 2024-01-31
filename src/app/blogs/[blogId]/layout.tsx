export const metadata = {
  title: 'Blog Details'
}

export default function BlogDetailsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <h2>Blog Details</h2>
      {children}
    </>
  )
}
