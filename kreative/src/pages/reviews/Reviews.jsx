import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { ReviewUsers } from "pages/reviews/ReviewUsers";

const Reviews = () => {
	const catalog = useSelector((state) => state.loadData.loadCatalog);
	const user = useSelector((state) => state.isUserLogIn.isUserLogInInfo);
	const userId = user.id;
	const [array, setArray] = useState([]);

	let userReviewList = [];

	const findReviews = (user) => {
		for (let reviewsArray of catalog) {
			for (let message of reviewsArray.review) {
				if (message.userId === user) {
					userReviewList.push({
						productId: reviewsArray,
						review: message,
					});
				}
			}
		}
		setArray(userReviewList);
	};

	useEffect(() => {
		findReviews(userId);
	}, [catalog]);

	return (
		<section className="container">
			<div className="reviews-title">
				<p>Ваши отзывы</p>
			</div>
			{!array.length ? (
				<></>
			) : (
				<ol>
					{array.map((array) => (
						<ReviewUsers key={Math.random()} array={array} />
					))}
				</ol>
			)}
		</section>
	);
};
export default Reviews;
