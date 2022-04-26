import { Rating } from "@mui/material"
import { FC } from "react"
import IReview from "../../types/review"

interface ReviewProps {
    reviews: IReview
}

const Review: FC<ReviewProps> = ({ reviews }) => {
    //console.log("rev", reviews);
    
    return (
        <>
            {
                reviews.map((item: IReview) =>

                    <div className="review" key={Math.random()}>
                        <div className="review-ava">
                            <img src="/assets/avatars/2.jpg" alt="Аватар"/>
                        </div>
                        <div className="review-info" >
                            <div className="review-info-user">
                                <p className="review-info-user-name">
                                    {item.user}
                                </p>
                                <p className="review-info-user-data">
                                    {item.data}
                                </p>
                            </div>
                            <div className="review-info-rating" >
                                <div>   
                                    <Rating 
                                        name="half-rating" 
                                        defaultValue={item.rate} 
                                        precision={0.5}
                                        readOnly
                                    />
                                </div>
                                <div className="review-info-rating-votes">
                                    <div>
                                        <button className="button-vote" />
                                        <span>0</span>
                                    </div>
                                    <div>
                                        <button className="button-vote button-vote-dislike" />
                                        <span>0</span>
                                    </div>
                                </div>
                            </div>
                            <div  className="review-info-text">
                                <p>
                                    {item.text}
                                </p>
                            </div>
                        </div>
                    </div>
                )
            }
            
        </>
    )
}
export { Review }





//     user": "Alexander",
//     data": "17.04.2022",
