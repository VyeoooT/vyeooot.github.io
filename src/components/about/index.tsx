import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare, faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FadeIn from "../effects";

function About() {
    return (
        // about
        <section id="about" className="relative container grid place-items-center before:absolute before:top-0 before:dark:bg-heroDark before:bg-heroLight before:size-full before:start-1/2 before:transform before:-translate-x-1/2 before:bg-no-repeat before:z-[-1]">
            <FadeIn>
                <div className="size-full max-w-6xl grid md:grid-cols-6 items-center justify-around gap-2 pt-20">
                    {/* info */}
                    <div className="lg:col-span-2 md:col-span-3 md:text-left text-center sm:pl-2">
                        {/* intro */}
                        <div className="space-y-5">
                            {/* title */}
                            <div>
                                <h5 className="font-oswald font-medium text-gray-600 dark:text-gray-200">Hi There !</h5>

                                <h1 className="font-oswald relative sm:text-5xl text-4xl font-medium !leading-normal dark:text-white">
                                    I'm <span className="text-primary">Truong Vu Linh</span>
                                    <br />
                                    Frontend Developer
                                </h1>
                            </div>

                            {/* button link */}
                            <div className="font-oswald md:hidden flex justify-center items-center space-x-4">
                                {/* <a href="mailto:vlinh52000@gmail.com">
                                    <button className="btn btn-filled">
                                        <FontAwesomeIcon icon={faEnvelope} />
                                        Contact Me
                                    </button>
                                </a> */}
                                
                                <a href="https://www.topcv.vn/xem-cv/Ug4DUlADUFECAQELUAUPU1AKVAFUVAVSDAMCUw1321" target="_blank" rel="noopener noreferrer">
                                    <button className="btn-link">
                                        <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                                        See Detail CV
                                    </button>
                                </a>
                            </div>
                        </div>

                        {/* desc */}
                        <div className="md:w-96 flex gap-2 md:ml-auto mt-9">
                            <ul className="font-oswald max-w-md lg:text-xl text-base space-y-2 md:pr-2 md:pl-0 px-2 mx-auto">
                                <li>Short-term goal: Desire to join the company to learn more work experience job.</li>
                                <li>Long-term goal: Desire to contribute to building the company and become a position important in the team.</li>
                            </ul>
                        </div>

                        {/* socials */}
                        <div className="font-oswald flex md:flex-row flex-col items-center md:justify-end justify-center gap-6 mt-9 text-gray-600 dark:text-gray-200">
                            <p className="md:text-base text-sm">Contact Me</p>

                            <div className="flex justify-end items-center gap-3">
                                <a className="bg-circle-social" href="tel:+84 365 037 985" target="_blank" rel="noopener noreferrer"  title="0365 037 985">
                                  <FontAwesomeIcon icon={faPhone} />
                                </a>
                                <a className="bg-circle-social" href="mailto:vlinh52000@gmail.com" target="_blank" rel="noopener noreferrer" title="vlinh52000@gmail.com">
                                  <FontAwesomeIcon icon={faEnvelope} />
                                </a>
                                <a className="bg-circle-social" href="https://www.linkedin.com/in/vulinhtruong/" target="_blank" rel="noopener noreferrer">
                                  <FontAwesomeIcon icon={faLinkedin} />
                                </a>
                                <a className="bg-circle-social" href="https://github.com/VyeoooT" target="_blank" rel="noopener noreferrer">
                                  <FontAwesomeIcon icon={faGithub} />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* img */}
                    <div className="lg:col-span-2 md:col-span-3">
                        <img className="md:w-full w-2/3 max-w-96 rounded-full md:mt-0 mt-5 mx-auto shadow-md" src="https://zpsocial-f44-org.zadn.vn/5a01933286236a7d3332.jpg" alt="" />
                    </div>

                    {/* info experience - project - button link */}
                    <div className="lg:h-96 lg:col-span-2 md:col-span-6 lg:bg-gradient-to-l md:bg-none bg-gradient-to-l from-gray-100 dark:from-slate-800 lg:mt-0 md:py-0 py-4 md:mt-9 mt-2">
                        <ul className="font-oswald h-full flex lg:flex-col md:flex-row flex-col items-center justify-center text-2xl text-center lg:gap-10 md:gap-7 gap-10">
                            <li>
                                <div data-slot="count" className="count">2 +</div>
                                <div>Year of <span className="text-primary">Experience</span></div>
                            </li>

                            <li>
                                <div data-slot="count" className="count">2 +</div>
                                <div>Completed <span className="text-primary">Project</span></div>
                            </li>

                            {/* button link */}
                            <li className="hidden md:flex lg:flex-row flex-col-reverse justify-center items-center gap-4">
                                {/* <a href="mailto:vlinh52000@gmail.com">
                                    <button className="btn btn-outline">
                                        <FontAwesomeIcon icon={faEnvelope} />
                                        Contact Me
                                    </button>
                                </a> */}
                                
                                <a href="https://www.topcv.vn/xem-cv/Ug4DUlADUFECAQELUAUPU1AKVAFUVAVSDAMCUw1321" target="_blank" rel="noopener noreferrer">
                                    <button className="md:btn-link btn btn-outline">
                                        <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                                        See Detail CV
                                    </button>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </FadeIn>
        </section>
    )
}

export default About
