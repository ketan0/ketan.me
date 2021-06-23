import Link from 'next/link'

const IndexPage = () => (
  <div className="flex justify-center">
    <div className="grid grid-cols-1 md:grid-cols-2 p-8 gap-16 max-w-5xl">
      <div className="flex justify-center items-center">
        <img className="rounded-full" src="/me.jpg" alt="Ketan Agrawal headshot 2021" width="400" height="400" />
      </div>
      <div className="flex flex-col space-y-4">
        <h1 className="font-bold text-xl">About Me</h1>
        <p>
          Hi! I'm a fourth-year student at Stanford University studying
          Symbolic Systems (B.S.) and Computer Science (M.S.) During my time
          at Stanford, I've been involved with several&nbsp;
            <Link href="#research_interests">
            <a className="normal-link">research labs</a>
          </Link>
            , with a broad focus on human-centered artificial
            intelligence. I also enjoy creating&nbsp;
    <Link href="#projects">
            <a className="normal-link">projects</a>
          </Link> that entertain me. My
    pet interests include customizing Emacs, digital gardening, and my
    cats.
          </p>
        <p>
          For more info, please see <Link href="/resume.pdf"><a className="normal-link">my resume</a></Link>.
          </p>
      </div>
      <div className="flex flex-col space-y-4">
        <a id="research_interests">
          <h1 className="font-bold text-xl">Research Interests</h1>
        </a>
        <p>
          A common thread through my research is that I'm interested in using
          artificial intelligence to cooperate with and benefit humanity.
          </p>
        <p>
          In my work with the&nbsp;
            <Link href="https://langcog.stanford.edu"><a className="normal-link">Language and Cognition Lab</a></Link>
            , I applied modern computer vision algorithms to a large, naturalistic
            dataset of infant headcam footage. This analysis helped shed light on how
            babies' perceptual scenes change over time, and was accepted as a talk at
            CogSci 2020. The&nbsp;
            <Link href="https://github.com/brialorelle/headcam-algo/"><a className="normal-link">code</a></Link>
            &nbsp;and&nbsp;
            <Link href="https://psyarxiv.com/z7tdg/"><a className="normal-link">preprint</a></Link>
            &nbsp;are available.
          </p>
        <p>
          With the&nbsp;
            <Link href="https://aicare.stanford.edu"><a className="normal-link">Stanford Partnership in AI-Assisted Care</a></Link>
            , I have been exploring how we can use multimodal neural networks
            for automated screening of mental health problems, such as
            depression and anxiety.
          </p>
        <p>
          Most recently, I have been working in the&nbsp;
            <Link href="https://hci.stanford.edu"><a className="normal-link">Stanford HCI Group</a></Link>
            , building a novel system for human-AI co-creation of artistic
            content. One offshoot of the project thus far, interactive music
            generation, can be seen&nbsp;
            <Link href="https://music220c.ketan.me/">
            <a className="normal-link">here</a>
          </Link>.
          </p>
      </div>
      <div className="flex flex-col space-y-4">
        <a id="projects"><h1 className="font-bold text-xl">Projects</h1></a>
        <div className="grid grid-cols-2 w-80 h-80 md:w-96 md:h-96">
          <Link href="https://github.com/ketan0/smart-glove">
            <a>
              <div className="relative w-5/6 h-5/6">
                <img src="/glove.jpg" alt="raspberry pi smart glove" />
                <div className="absolute inset-0 flex justify-center items-center transition duration-500 ease-in-out bg-gray-800 bg-opacity-0 opacity-0 hover:bg-opacity-50 hover:opacity-100">
                  <p className="font-sans font-bold text-white text-center">SMART GLOVE</p>
                </div>
              </div>
            </a>
          </Link>
          <Link href="https://github.com/ketan0/org-twitter">
            <a>
              <div className="relative w-5/6 h-5/6">
                <img src="/org-twitter.png" alt="org-twitter project logo" />
                <div className="absolute inset-0 flex justify-center items-center transition duration-500 ease-in-out bg-gray-800 bg-opacity-0 opacity-0 hover:bg-opacity-50 hover:opacity-100">
                  <p className="font-sans font-bold text-white text-center">ORG-TWITTER</p>
                </div>
              </div>
            </a>
          </Link>
          <Link href="https://laboratory.ketan.me/">
            <a>
              <div className="relative w-5/6 h-5/6">
                <img src="/seedling-solid.svg" alt="digital garden logo (seedling)" />
                <div className="absolute inset-0 flex justify-center items-center transition duration-500 ease-in-out bg-gray-800 bg-opacity-0 opacity-0 hover:bg-opacity-50 hover:opacity-100">
                  <p className="font-sans font-bold text-white text-center">DIGITAL GARDEN</p>
                </div>
              </div>
            </a>
          </Link>
          <Link href="https://github.com/ketan0/selfdriving-rc">
            <a>
              <div className="relative w-5/6 h-5/6">
                <img src="/selfdrivingcar.jpg" alt="autonomous rc car" />
                <div className="absolute inset-0 flex justify-center items-center transition duration-500 ease-in-out bg-gray-800 bg-opacity-0 opacity-0 hover:bg-opacity-50 hover:opacity-100">
                  <p className="font-sans font-bold text-white text-center">AUTONOMOUS RC CAR</p>
                </div>
              </div>
            </a>
          </Link>
        </div>
      </div>
    </div>
  </div>

)

export default IndexPage
