import { useState } from 'react'
interface ExpandableProps {
  title: string
  flipped?: boolean
}
const Expandable: React.FC<ExpandableProps> = ({ title, flipped, children }) => {
  const [expanded, setExpanded] = useState(false)
  const styles = "flex flex-col items-center space-y-4"
  const titleP = (
    <p
      className={"cursor-pointer font-bold text-center" + (!expanded ? ' hover:' : ' ') + 'text-pink-600'}
      onClick={() => setExpanded(!expanded)}>
      {title}
    </p>
  );
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

const IndexPage = () => {
  const [darkTheme, setDarkTheme] = useState(true)
  return (
    <div className={`flex flex-col justify-start ${darkTheme ? "text-white bg-black" : "text-black bg-white"
      }`}>
      <button className="self-end" onClick={() => setDarkTheme(!darkTheme)}>{darkTheme ? "light theme" : "dark theme"}</button>
      <div className="flex flex-col space-y-8 justify-center items-stretch h-screen">
        <div style={{ minHeight: "20%", maxHeight: "20%" }} className="flex flex-row justify-around items-end">
          <Expandable title="Who am I?" flipped>
            <p>Stanford student studying Symbolic Systems and Computer Science. AI researcher. Human-focused interface designer. Cat lover, violin player, sushi eater. Second-generation Indian American.</p>
          </Expandable>
          <Expandable title="What makes me tick?" flipped>
            <p>I am most interested in studying fascinating, complex systems, whether they be made of neurons or transistors.</p>
          </Expandable>
          <Expandable title="Hit me up" flipped>
            <p>
              I'm always looking to make new friends on <a className="text-blue-600 hover:underline" href="https://twitter.com/_ketan0">Twitter</a>!
You can also send me an <a className="text-blue-600 hover:underline" href="mailto:agrawalk@stanford.edu">email</a>,
or check out my open-source projects on <a className="text-blue-600 hover:underline" href="https://github.com/ketan0">Github</a>.
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
          <Expandable title="Explore my digital garden 🌱">
            <p>Coming soon!</p>
          </Expandable>
        </div>
      </div >
    </div>
  )
}

// interesting red-purplish: 173,0,96
// <span style={{ "color": "rgba(57,255,20)", }}>Agrawal</span>

export default IndexPage
