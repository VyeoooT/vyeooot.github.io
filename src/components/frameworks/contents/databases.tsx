import assets from "../../../assets"
import Grid from "../grid"
import Title from "../titleFramework"

function Databases() {
    return (
        <>
            {/* Databases */}
            <div className="max-md:mb-12 last:mb-0">
                {/* title */}
                <Title title="Databases" />

                {/* grid logo components */}
                <div className="grid xl:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-14">
                    <Grid imgSrc={assets.mysql} label="MySQL"/>
                    <Grid imgSrc={assets.sqlServer} label="SQL Server"/>
                    {/* <Grid imgSrc="https://contents.rizerssoft.com/uploads/thumbnail_85s8xk2j3k89b67xr8c7vwmv_130d46a646.png" label="MongoDB"/>
                    <Grid imgSrc="https://contents.rizerssoft.com/uploads/thumbnail_Oracle_logo_svg_6a5fda9095.png" label="Oracle Database"/> */}
                </div>
            </div>
        </>
    )
}

export default Databases
