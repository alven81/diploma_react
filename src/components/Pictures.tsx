import { FC } from "react"

interface PicturesProps {
    key: number,
    src: string,
    alt: string
}

const Pictures: FC<PicturesProps> = ({key, src, alt}) => {
    return (
        <div>
            <img key={key} src={src} alt={alt} />
        </div>
    )
}

export default Pictures