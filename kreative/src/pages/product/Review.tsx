import { FC } from "react";
import IReview from "../../types/review";
import { ReviewText } from "./ReviewText";

interface ReviewProps {
	reviews: IReview;
}

const Review: FC<ReviewProps> = ({ reviews }) => {
	return (
		<>
			{reviews.map((item: IReview) => (
				<div className="review" key={Math.random()}>
					<ReviewText item={item} />
				</div>
			))}
		</>
	);
};
export { Review };
