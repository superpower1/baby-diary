import Link from "next/link";

const Folder1 = () => {
  return (
    <>
      <h1>Folder1</h1>
      <Link href='/folder1/folder2'>Folder2</Link>
    </>
  )
}

export default Folder1;