import { useState } from "react";
import { useSelector } from "react-redux"

const Reviews = () => {

    const catalog = useSelector((state) => state.loadData.loadCatalog);
    const user = useSelector((state) => state.isUserLogIn.isUserLogInInfo);
    const userId = user.id;
    const [array, setArray] = useState([])

    let arr = [];

    const reviewsList = (user) => {
        catalog.forEach((value, index) => {
            let prodId = {id: value.id}
            value.review.forEach((value) => {
                if (value.userId === user) {
                    arr[index] = {review: value, id: prodId}
                    setArray(arr.filter(n => n));
                };
            })
        })
        console.log(array)     
    }

    return (
        <section className="container">
            Reviews 
            <button onClick={() => reviewsList(userId)}>ОТЗЫВЫ</button>
        </section>
    )
}

export default Reviews