import FadeIn from "../effects"
import Title from "../title"
import ProcessSkill from "./processSkill"

function Skills() {
    return (
        <section id="skills">
            <FadeIn>
                <div className="text-center xl:max-w-screen-xl sm:container px-5 mx-auto">
                    <Title title="Skills" description="what i do" />
                    <ProcessSkill />
                </div>
            </FadeIn>
        </section>
    )
}

export default Skills
