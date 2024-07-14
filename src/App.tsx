import About from "./components/about"
import Contact from "./components/contact"
import LibraryFramework from "./components/frameworks"
import Footer from "./components/navigations/footer"
import Header from "./components/navigations/header"
import Projects from "./components/projects"
import Resumes from "./components/resume"
import Skills from "./components/skills"

function App() {
  return (
    <>
      <Header />
      <div className="space-y-14">
        <About />
        <Skills />
        <Resumes />
        <Projects />
        <LibraryFramework />
        <Contact />
        <Footer />
      </div>
    </>
  )
}

export default App
