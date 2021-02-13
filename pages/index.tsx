import Link from 'next/link'
import Image from 'next/image'

interface NavItemProps {
  href: string
  isActive?: boolean
}

const NavItem: React.FC<NavItemProps> = ({ href, isActive, children }) => (
  <li>
    <Link href={href}>
      <a
        className={`block px-4 py-2 hover:bg-blue-100 rounded-md ${isActive ? 'bg-blue-200 text-blue-700' : ''}`}
      >
        {children}
      </a>
    </Link>
  </li>
)

const Nav: React.FC = ({ children }) => (
  <nav className="p-4 flex justify-between">
    <ul className="flex space-x-2 items-center">
      {children}
    </ul>
    <ul className="flex items-center">
      <NavItem href="https://twitter.com/_ketan0"> <Image src="/twitter.png" width="25" height="25" /> </NavItem>
      <NavItem href="https://github.com/ketan0"> <Image src="/github.png" width="25" height="25" /> </NavItem>
      <NavItem href="https://www.linkedin.com/in/ketan-jay-agrawal/"> <Image src="/linkedin.png" width="25" height="25" /> </NavItem>
    </ul >
  </nav >
)

const Box: React.FC = ({ children }) => (
  <div className=" px-4 flex-1">
    {children}
  </div>
)

const Card: React.FC = ({ children }) => (
  <div className="border-2 border-black w-60 h-60 p-4 mb-2 flex-grow-0 flex-shrink-0 rounded">
    {children}
  </div>
)

const IndexPage = () => (
  <div className="divide-y divide-gray-100">
    <Nav>
      <p className="font-bold px-4 py-2 text-xl">Ketan Agrawal</p>
      <NavItem href="/" isActive>Home</NavItem>
      <NavItem href="/blog">Blog</NavItem>
      <NavItem href="/garden">Garden</NavItem>
    </Nav>
    <div className="space-y-6 p-6">
      <div className="flex flex-col md:flex-row justify-around align-items-center pb-8">
        <Box><div className="rounded-full flex items-center justify-center"><Image className="rounded-full" src="/me2.jpg" width="300" height="300" /></div></Box>
        <Box>
          <div className="flex-col space-y-4">
            <p className="text-2xl font-semibold">Who am I?</p>
            <p>Hey! I'm Ketan. I am a student at Stanford University, studying Symbolic Systems and Computer Science.</p>
            <p>I'm a human contemplating our increasing melding with computers.</p>
            <p>I'm a programmer, teaching CS106B at Stanford and writing code for Amazon.</p>
            <p>In my free time I like to play the violin, pet my cats, and go for walks.</p>
          </div>
        </Box>
      </div>
      <p className="text-lg px-4 font-bold">Work Experience</p>
      <div className="flex space-x-4 overflow-x-auto">
        <Card>
          <p className="font-bold">Software Development Intern</p>
          <p>Amazon Fire TV, 2020</p>
        </Card>
        <Card>
          <p className="font-bold">Research Assistant</p>
          <p>Partnership for AI-Assisted Care, 2020-</p>
        </Card>
        <Card>
          <p className="font-bold">Research Assistant</p>
          <p>Language and Cognition Lab, 2018-2020</p>
        </Card>
        <Card>
          <p className="font-bold">Section Leader</p>
          <p>CS 106 classes, Stanford</p>
        </Card>
      </div>
      <p className="text-lg px-4">Explore my <b>writing</b>:</p>
      <div className="flex space-x-4 overflow-x-auto">
        Coming soon!
      </div>
      <p className="text-lg px-4">Explore my <b className="text-green-200">digital garden</b>:</p>
      <div className="flex space-x-4 overflow-x-auto">
        Coming soon!
      </div>
    </div>
    <footer className="flex justify-center">
      <p>© 2021 Ketan Agrawal. Icons from <a href="https://icons8.com/">Icons8</a>.</p>
    </footer>
  </div>)

export default IndexPage
