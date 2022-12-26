import IReview from "types/IReview";
import { ReviewText } from "pages/product/ReviewText";

interface ReviewProps {
	reviews: IReview;
}

const Review = ({ reviews }: ReviewProps) => {

	return (
		reviews.map((item: IReview) => (
			<div className="review" key={Math.random()}>
				<ReviewText item={item} />
			</div>
		))

	);
};

export { Review };
