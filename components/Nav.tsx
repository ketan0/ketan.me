import Link from 'next/link'

interface NavItemProps {
  href: string
  isActive?: boolean
}

const NavItem: React.FC<NavItemProps> = ({ href, isActive, children }) => (
  <li>
    <Link href={href}>
      <a
        className={`font-display block px-4 py-2${isActive ? 'bg-blue-200 text-blue-700' : ''}`}
      >
        {children}
      </a>
    </Link>
  </li>
)

// <NavItem href="https://laboratory.ketan.me/"><h1>Laboratory</h1></NavItem>
const Nav = () => (
  <nav className="p-4 flex justify-between">
    <ul className="flex space-x-2 items-center">
      <NavItem href="/"><h1 className="font-bold text-2xl">Ketan Agrawal</h1></NavItem>
    </ul>
    <ul className="flex items-center">
      <NavItem href="https://twitter.com/_ketan0">
        <img src="/twitter.svg" alt="Ketan Agrawal's twitter" width="25" height="25" />
      </NavItem>
      <NavItem href="https://github.com/ketan0">
        <img src="/github.svg" alt="Ketan Agrawal's github" width="25" height="25" />
      </NavItem>
      <NavItem href="https://www.linkedin.com/in/ketan-jay-agrawal/">
        <img src="/linkedin.svg" alt="Ketan Agrawal's linkedin" width="25" height="25" />
      </NavItem>
    </ul >
  </nav >
)

export default Nav
