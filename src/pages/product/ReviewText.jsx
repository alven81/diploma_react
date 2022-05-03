import { Rating } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";

const ReviewText = ({ item }) => {

    const { userId, rate, text, data } = item;
    const [id, setId] = useState({});
    const { firstName, lastName, avatar } = id;

    useEffect(  () => {
        const getUserForReviewById = async (id) =>  {
           return await axios.get(`http://localhost:3004/users/${id}`)
            .then((res) => res.data)
            .catch(function (error) {
                console.log(error);
            })
        }
        getUserForReviewById(userId).then(res => setId(res))
    }, [userId])


    return (
        <>
            <div className="review-ava">
                <img src={avatar} alt={`${firstName} ${lastName}`}/>
            </div>
            <div className="review-info" >
                <div className="review-info-user">
                    <p className="review-info-user-name">
                        {`${firstName} ${lastName}`}
                    </p>
                    <p className="review-info-user-data">
                        {data}
                    </p>
                </div>
                <div className="review-info-rating" >
                    <div>   
                        <Rating
                            name="half-rating"
                            defaultValue={rate}
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
                        {text}
                    </p>
                </div>
            </div>
        </>
    )
}
export { ReviewText }

