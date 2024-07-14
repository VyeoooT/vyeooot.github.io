interface Props {
    title: string
}

function Title({ title }: Props) {
    return (
        <div className="flex flex-col mb-7">
            <h3 className="font-oswald text-2xl capitalize font-medium text-primary tracking-wide">{title}</h3>
        </div>
    )
}

export default Title
