import Link from 'next/link'
import { SetStateAction, useState } from 'react'

interface ExpandableTitleProps {
  title: string
  titleHref?: string
  expanded: boolean
  setExpanded: React.Dispatch<SetStateAction<boolean>>
}

interface ExpandableProps {
  title: string
  titleHref?: string
  flipped?: boolean
}


const ExpandableTitle: React.FC<ExpandableTitleProps> = ({ title, titleHref, expanded, setExpanded }) => (
  titleHref ? (
    <Link href={titleHref}>
      <a>
        <p
          className={"cursor-pointer font-bold text-center " +
            (!expanded ? "hover:text-pink-600" : "text-pink-600")}
          onClick={() => setExpanded(!expanded)}>
          {title}
        </p>
      </a>
    </Link>
  ) : (
      <p
        className={"cursor-pointer font-bold text-center " +
          (!expanded ? "hover:text-pink-600" : "text-pink-600")}
        onClick={() => setExpanded(!expanded)}>
        {title}
      </p>
    )
)


const Expandable: React.FC<ExpandableProps> = ({ title, titleHref, flipped, children }) => {
  const [expanded, setExpanded] = useState(false)
  const styles = "flex flex-col items-center space-y-4"
  const titleP = <ExpandableTitle
    title={title}
    titleHref={titleHref}
    expanded={expanded}
    setExpanded={setExpanded}
  />;
  return (
    <div
      style={{ minWidth: "30%", maxWidth: "30%" }}
      className={styles}
    >
      {!flipped && titleP}
      {expanded && children}
      {flipped && titleP}
    </div>
  )
}

interface MyLinkProps {
  href: string
}
const MyLink: React.FC<MyLinkProps> = ({ href, children }) => (
  <a className="text-blue-600 hover:underline" href={href}>
    {children}
  </a>
)

const IndexPage = () => {
  const [darkTheme, setDarkTheme] = useState(true)
  return (
    <div className={`h-screen flex flex-col justify-start ${darkTheme ? "text-white bg-black" : "text-black bg-white"
      }`}>
      <button className="self-end" onClick={() => setDarkTheme(!darkTheme)}>{darkTheme ? "light theme" : "dark theme"}</button>
      <div className="flex flex-col space-y-8 justify-center items-stretch h-full">
        <div style={{ minHeight: "20%", maxHeight: "20%" }} className="flex flex-row justify-around items-end">
          <Expandable title="Who am I?" flipped>
            <p>
              Well, I'm still figuring that out.
              But for now, I'm a Stanford student, studying Symbolic Systems and Computer Science.
              I spend my free time&nbsp;
                            <MyLink href="https://twitter.com/_ketan0/status/1333332491365658624">drawing</MyLink>,
        writing notes in my digital garden,
        and building whatever I can dream up.
                        </p>
          </Expandable>
          <Expandable title="What makes me tick?" flipped>
            <p>
              I am most interested in studying fascinating, complex systems,
              whether they be made of neurons or transistors. I am dreaming about new ways
              that humans and computers can interact with each other.
            </p>
          </Expandable>
          <Expandable title="Hit me up" flipped>
            <p>
              I'm always looking to make new friends on&nbsp;
                <MyLink href="https://twitter.com/_ketan0">
                Twitter
                </MyLink>!
                You can also send me an&nbsp;
                <MyLink href="mailto:agrawalk@stanford.edu">email</MyLink>,
                or check out my open-source projects on&nbsp;
                <MyLink href="https://github.com/ketan0/">Github</MyLink>.
            </p>
          </Expandable>
        </div>
        <p className="text-7xl md:text-9xl self-center text-center">
          <span style={{ "color": "rgba(50,141,242)", }}>Ketan </span>
          <span style={{ "color": "rgba(46,0,213)", }}>Agrawal</span>
          {/*<span style={{ "color": "rgba(152,0,218)", }}>Agrawal</span>*/}
        </p>

        <div style={{ minHeight: 250 }} className="flex flex-row justify-around items-start">
          <Expandable title="Explore my writing">
            <p>Coming soon!</p>
          </Expandable>
          <Expandable
            title="Explore my digital garden 🌱"
            titleHref="https://garden.ketan.me"
          />
        </div>
      </div>
      <p className="self-center"><MyLink href="/resume.pdf">Resume</MyLink></p>
    </div >
  )
}

// interesting red-purplish: 173,0,96
// <span style={{ "color": "rgba(57,255,20)", }}>Agrawal</span>

export default IndexPage
