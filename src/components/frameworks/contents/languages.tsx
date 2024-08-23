import assets from "../../../assets"
import Grid from "../grid"
import Title from "../titleFramework"

function Languages() {
    return (
        <>
            {/* Languages */}
            <div className="max-md:mb-12 last:mb-0">
                {/* title */}
                <Title title="Language" />

                {/* grid logo components */}
                <div className="grid xl:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-14">
                    <Grid imgSrc={assets.html5} label="HTML5"/>
                    <Grid imgSrc={assets.css3} label="CSS3"/>
                    <Grid imgSrc={assets.js} label="Javascript"/>
                    <Grid imgSrc={assets.typescript} label="Typescript"/>
                    {/* <Grid imgSrc={assets.php} label="PHP"/> */}
                    <Grid imgSrc={assets.cpp} label="C++"/>
                </div>
            </div>
        </>
    )
}

export default Languages
