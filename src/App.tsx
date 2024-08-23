import About from "./components/about"
import Contact from "./components/contact"
import LibraryFramework from "./components/frameworks"
import Footer from "./components/navigations/footer"
import GoToTop from "./components/navigations/goToTop"
import Header from "./components/navigations/header"
import Projects from "./components/projects"
import Resumes from "./components/resume"
// import Skills from "./components/skills"

function App() {
  return (
    <>
      <Header />
      <div className="space-y-14">
        <About />
        {/* <Skills /> */}
        <LibraryFramework />
        <Resumes />
        <Projects />
        <Contact />
        <Footer />
      </div>
      <GoToTop />
    </>
  )
}

export default App
