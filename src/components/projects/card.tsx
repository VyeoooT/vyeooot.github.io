import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faEye } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

interface Props {
    label: string
    description: string
    linkPreview: string
    linkGithub: string
    imgSrc: string
    tag: string[]
}

function ProjectCard({ label, description, tag, linkPreview, linkGithub, imgSrc }: Props) {
    return (
        // project card
        <div className="relative w-80 h-96 place-self-center dark:bg-slate-700 bg-white border shadow-sm rounded-xl overflow-hidden group">
            <a
                href={linkPreview}
                target="_blank"
                rel="noopener noreferrer"
                className="space-y-2"
            >
                {/* img */}
                <div className="w-[19rem] h-40 mx-auto pt-2">
                    <img
                        className="w-full h-full object-top object-cover rounded-lg group-hover:scale-125 transition-all duration-500"
                        src={imgSrc}
                        alt={label}
                    />
                </div>

                <div className="absolute top-40 size-full flex flex-col dark:bg-slate-700 bg-white py-2 z-[1]">
                    <div className="flex flex-col items-start px-4 space-y-3">
                        {/* tag */}
                        {tag && tag.length > 0 &&
                            <div className="mt-[-0.25rem] space-x-2">
                                {tag.map((item: string, idx: number) => (
                                    <span
                                        key={idx} 
                                        className="min-w-10 px-2 py-[0.1rem] text-xs dark:text-white text-black/80 border border-gray-300 rounded-full">{item}
                                    </span>
                                ))}
                            </div>
                        }

                        {/* label */}
                        <div className="text-start space-y-2">
                            <span className="text-2xl font-medium text-primary">{label}</span>
                            
                            <p className="md:text-sm text-xs leading-[1.2rem] font-normal">{description}</p>
                        </div>
                    </div>
                </div>
            </a>

            {/* link */}
            <div className="absolute bottom-0 w-full md:hidden flex justify-center items-center gap-5 py-2 shadow-inner dark:bg-slate-800 bg-white z-[2]">
                {/* link github repo (src code) */}
                <a className="dark:text-white group" href={linkGithub} target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon className="dark:shadow-sm dark:shadow-gray-50/50 group-hover:shadow-none rounded-full duration-200" icon={faGithub} size="lg" />
                </a>

                {/* link demo */}
                <a className="dark:text-white group" href={linkPreview} target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon className="dark:shadow-sm dark:shadow-gray-50/50 group-hover:shadow-none rounded-full duration-200" icon={faEye} size="lg" />
                </a>
            </div>
        </div>
    )
}

export default ProjectCard
