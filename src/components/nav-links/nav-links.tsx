'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const NavLinks = (
  { navLinks }: { navLinks: { name: string, href: string }[] }
) => {
  const pathname = usePathname();
  return (
    <div>
      {
        navLinks.map(link => {
          const isActive = pathname.startsWith(link.href);
          return (
            <Link
              key={link.name}
              href={link.href}
              className={isActive ? 'font-bold mr-4' : 'text-blue-500 mr-4'}
            >
              {link.name}
            </Link>
          )
        })
      }
    </div>
  )
}

export default NavLinks;