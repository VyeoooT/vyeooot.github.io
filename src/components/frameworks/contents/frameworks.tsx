import assets from "../../../assets"
import Grid from "../grid"
import Title from "../titleFramework"

function Frameworks() {
    return (
        <>
            {/* Frameworks */}
            <div className="max-md:mb-12 last:mb-0">
                {/* title */}
                <Title title="Frameworks" />

                {/* grid logo components */}
                <div className="grid xl:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-14">
                    <Grid imgSrc={assets.react} label="React"/>
                    <Grid imgSrc={assets.nextjs} label="Nextjs"/>
                    <Grid imgSrc={assets.tailwind} label="Tailwind CSS"/>
                </div>
            </div>
        </>
    )
}

export default Frameworks
