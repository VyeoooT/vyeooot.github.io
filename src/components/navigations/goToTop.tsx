import { faArrowUp } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useEffect, useState } from "react"

function GoToTop() {
    const [isGoToTop, setIsGoToTop] = useState<boolean>(false)

    const handleGoToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
        setIsGoToTop(false)
    }

    const unSubscribe = () => {
        const position = window.scrollY

        if (position > 300) {
            setIsGoToTop(true)
        }
        else {
            setIsGoToTop(false)
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", unSubscribe)

        return () => {
            window.removeEventListener("scroll", unSubscribe)
        }
    }, [])

    return (
        <div className={`fixed right-7 cursor-pointer transition-all duration-700 ${isGoToTop ? 'opacity-100 bottom-7' : 'opacity-0 -bottom-7'}`}>
            <button
                className="w-12 aspect-square px-1 flex justify-center items-center bg-primary shadow-sm shadow-white rounded-full"
                onClick={handleGoToTop}
            >
                <FontAwesomeIcon icon={faArrowUp} size="1x" color="white" />
            </button>
        </div>
    )
}

export default GoToTop
