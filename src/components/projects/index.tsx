import ProjectCard from "./card"
import Title from "../title"
import assets from "../../assets"

function Projects() {
    return (
        // Projects
        <section id="projects">
            <div className="text-center xl:max-w-screen-xl sm:container px-5 mx-auto">
                <Title title="Visit my portfolio and keep your feedback" description="My Projects" />

                <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
                    <ProjectCard
                        tag={[
                            "Vite",
                            "React Typescript",
                            "Tailwindcss",
                            "Shadcn",
                        ]}
                        label="Photogram"
                        description="Build a simple photo posting social network written in React Typescript with basic features."
                        linkGithub="https://github.com/VyeoooT/study-photogram"
                        linkPreview="https://photogram.linhtv.io.vn/"
                        imgSrc={assets.photogram}
                    />

                    <ProjectCard
                        tag={[
                            "Vite",
                            "React Typescript",
                            "Tailwindcss",
                            "FontAwesome",
                        ]}
                        label="Cards Catalog"
                        description="Design beautiful cards with tailwindcss and Typescript."
                        linkGithub="https://github.com/VyeoooT/study-vite-cards"
                        linkPreview="https://cards-catalog.linhtv.io.vn/"
                        imgSrc={assets.cardsCatalog}
                    />

                    <ProjectCard
                        tag={[
                            "Vite",
                            "React Typescript",
                            "Tailwindcss",
                        ]}
                        label="Project 3"
                        description=""
                        linkGithub="#"
                        linkPreview="#"
                        imgSrc="https://contents.rizerssoft.com/uploads/large_banhang28_rizerssoft_online_a4b22f10f5.png"
                    />
                </div>
            </div>
        </section>
    )
}

export default Projects
