import { FC } from "react"
import IReview from "../../types/review"
import { ReviewText } from "./ReviewText";

interface ReviewProps {
    reviews: IReview
    //userId: any,
}

const Review: FC<ReviewProps> = ({ reviews }) => {

    return (
        <>
            {
                reviews.map((item: IReview) =>             
                    <div className="review" >
                        <ReviewText key={Math.random()} item={item}/>
                    </div>
                )
            }
            
        </>
    )
}
export { Review }
