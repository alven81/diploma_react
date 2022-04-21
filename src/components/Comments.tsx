import { Rating } from "@mui/material"
import { FC } from "react"

interface CommentsProps {
    onClick: React.MouseEventHandler<HTMLButtonElement>;
    className: string
}

const Comments: FC<CommentsProps> = ({ onClick, className }) => {
    return (
        <div className="comments">
            <div className="comments-rating">
                <Rating 
                    name="half-rating" 
                    defaultValue={0} 
                    precision={0.5} 
                    onClick={onClick}
                />
            </div>
            <div className="comments-block">
                <textarea className="comments-block-text">

                </textarea>
                <div className="button_container">
                    <button className="button">Отправить</button>
                </div>
            </div>
        </div>
    )
}

export default Comments