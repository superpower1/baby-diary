import Link from "next/link"
import Image from "next/image"
import { photos } from './photos'

const Home = () => {
  return (
    <main className="container mx-auto">
      <h1 className="text-center text-3xl font-bold my-4">
        Baby Photos
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {photos.map(({ id, src, name }) => (
          <Link key={id} href={`/photo-feed/${id}`}>
            <Image
              alt={name}
              src={src}
              className="w-full object-cover aspect-square"
            />
          </Link>
        ))}
      </div>
    </main>
  )
}