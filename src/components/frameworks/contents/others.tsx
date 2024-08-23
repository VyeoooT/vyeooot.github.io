import assets from "../../../assets"
import Grid from "../grid"
import Title from "../titleFramework"

function Others() {
    return (
        <>
            {/* Others */}
            <div className="max-md:mb-12 last:mb-0">
                {/* title */}
                <Title title="Others" />

                {/* grid logo components */}
                <div className="grid xl:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-14">
                    <Grid imgSrc={assets.vscode} label="VS Code"/>
                    <Grid imgSrc={assets.figma} label="Figma"/>
                    <Grid imgSrc={assets.github} label="Github"/>
                    <Grid imgSrc={assets.gitlab} label="Gitlab"/>
                </div>
            </div>
        </>
    )
}

export default Others
