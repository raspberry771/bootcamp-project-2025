import Image from 'next/image'; 
import Link from 'next/link'; 

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="background-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
        </div>
        <div className="hero-text-container">
          <h1>Hi, I'm Karson</h1>
          <p>
            A passionate developer creating unique and impactful web applications
            and tools. Welcome to my portfolio.
          </p>
          <a href="#projects" className="btn">
            View My Work
          </a>
        </div>
      </section>

      <section id="about" className="about">
        <h2>About Me</h2>
        <p>
          Hi im Karson and I'm currently a freshmen at Cal Poly Slo. I like to
          code on my free time and make interesting projects that make me learn
          things I haven't seen before and potentially make money. I find it
          extremeely rewarding when I complete a project and that there is an
          actual impact or change in what people do and so a lot of my projects
          revolve around this theme. Hit me up if you ever have fun projects I'm
          always open to doing random stuff. I've also worked at a restaurant in
          Taiwan so I can cook some Taiwanese cuisine and I've gotten an
          internship at a web design company.
        </p>
        <h3>My Skills</h3>
        <div className="skills">
          <span>HTML</span>
          <span>CSS</span>
          <span>JavaScript</span>
          <span>React</span>
          <span>Node.js</span>
          <span>Python</span>
          <span>Discord.js</span>
          <span>Google SEO</span>
        </div>
      </section>

      <section id="projects" className="projects">
        <h2>My Projects</h2>
        <div className="project-grid">
          <div className="project-card project-1">
            {/* CORRECTED: Switched to Next.js Image component with correct src */}
            <Image 
              src="/tradeicon.png"
              alt="Congress Trading Bot"
              width={500} 
              height={300} 
              style={{ objectFit: 'cover' }} 
            />
            <h3>Congress Trades Discord Bot</h3>
            <p>
              A bot that notifies users of congressional stock trades, leading to
              profitable insights.
            </p>
            <div className="project-tags">
              <span>Discord.js</span>
              <span>Node.js</span>
              <span>API</span>
            </div>
            <Link href="/project-congress-bot" className="btn-secondary">
              View Case Study
            </Link>
          </div>

          <div className="project-card project-2">
            {/* CORRECTED: Correct src path */}
            <Image
              src="/badgeGen.png"
              alt="Badge Generator Website"
              width={500}
              height={300}
              style={{ objectFit: 'cover', objectPosition: '25% 50%' }}
            />
            <h3>Karson Badge Generator</h3>
            <p>
              A simple and intuitive web app for creating custom badges for event
              planners.
            </p>
            <div className="project-tags">
              <span>HTML</span>
              <span>CSS</span>
              <span>JavaScript</span>
            </div>
            <Link href="/project-badge-generator" className="btn-secondary">
              View Case Study
            </Link>
          </div>

          <div className="project-card project-3">
            {/* CORRECTED: Correct src path */}
            <Image
              src="/aqing.png"
              alt="Aqing Seafood Website"
              width={500}
              height={300}
              style={{ objectFit: 'cover' }}
            />
            <h3>AqingSeafood.com</h3>
            <p>
              A professional website for a local business to improve their
              online presence.
            </p>
            <div className="project-tags">
              <span>Client Project</span>
              <span>Web Design</span>
              <span>Food Photography</span>
            </div>
            <Link href="/project-aqing-seafood" className="btn-secondary">
              View Case Study
            </Link>
          </div>
        </div>
      </section>

      <section id="contact" className="contact">
        <h2>Get In Touch</h2>
        <p>I'm currently open to new opportunities. Feel free to reach out!</p>
        <a href="mailto:raspberry11771@gmail.com" className="btn">
          Email Me
        </a>
        <div className="social-links">
          <a href="https://www.instagram.com/krazyraspberry/" target="_blank">
            <i className="fab fa-instagram"></i> Instagram
          </a>
          <a href="#" target="_blank">
            <i className="fab fa-linkedin"></i> LinkedIn
          </a>
        </div>
      </section>
    </main>
  );
}