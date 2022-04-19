import { Rating } from "@mui/material"
import { FC } from "react"

interface CommentsProps {
    onClick: React.MouseEventHandler<HTMLButtonElement>;
    className: string
}

const Comments: FC<CommentsProps> = ({ onClick, className }) => {
    return (
        <>
            <div>
                <Rating 
                    name="half-rating" 
                    defaultValue={0} 
                    precision={0.5} 
                    onClick={onClick}
                />
            </div>
            <div>
                блок для написания ревью
                <button>Отправить</button>
            </div>
        </>
    )
}

export default Comments