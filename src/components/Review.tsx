import { FC } from "react"
import IReview from "../types/review"

interface ReviewProps {
    reviews: IReview
}

const Review: FC<ReviewProps> = ({ reviews }) => {
    //console.log("rev", reviews);
    
    return (
        <>
            {
                reviews.map((item: IReview) => 
                    <div key={Math.random()}>
                        <p>
                            {item.data}
                        </p>
                        <p>
                            {item.user}
                        </p>
                        <p>
                            {item.text}
                        </p>
                    </div>
                )
            }
            
        </>
    )
}
export { Review }





//     user": "Alexander",
//     data": "17.04.2022",
