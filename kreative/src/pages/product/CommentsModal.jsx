import { Rating } from "@mui/material";
import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { showAlertMessage } from "../../store/actions/AlertAction";

const CommentsModal = ({ onClick, handleShowComments, id, showComment }) => {
	const dispatch = useDispatch();

	const [text, setText] = useState("");
	const itemIndex = id - 1;
	const [newCatalog, setNewCatalog] = useState({});
	const catalog = useSelector((state) => state.loadData.loadCatalog);
	const [localRate, setLocalRate] = useState(0);
	const [reviewText, setReviewText] = useState({});

	const user = useSelector((state) => state.isUserLogIn.isUserLogInInfo);

	const textareaText = useRef();

	useEffect(() => {
		if (!catalog) return;
		setNewCatalog(catalog[itemIndex].review);
	}, [catalog, itemIndex]);

	const handleText = (e) => {
		setText(e.target.value);
	};

	const handleRate = (e) => {
		setLocalRate(e.target.value);
	};

	useEffect(() => {
		setReviewText({
			userId: user.id,
			data: new Date().toLocaleDateString(),
			text: text,
			rate: localRate,
		});
	}, [localRate, text, user.id]);

	const sendComment = async (e) => {
		if (textareaText.current.value === "")
			return dispatch(
				showAlertMessage({
					status: true,
					message: "You cannot save an empty review.",   //Вы не можете сохранить пустой отзыв
				})
			);
		const review = newCatalog;
		review.push(reviewText);
		axios
			.patch(`http://localhost:3004/products/${id}`, { review: review })
			.then(setNewCatalog(review))
			.catch((error) => {
				console.log(error);
			});
		handleShowComments();
		textareaText.current.value = "";
		setText("");
	};

	return (
		<div className="fullscreen-box">
			<div className="comments">
				<div className="comments-name">
					<p>{user.firstName}, write your review about the product:</p>   {/* напишите ваш отзыв о товаре */}
					<button
						className="cross-button"
						onClick={handleShowComments}
					/>
				</div>
				<div className="comments-rating">
					<textarea
						ref={textareaText}
						className="comments-block-text"
						onChange={(e) => handleText(e)}
					/>
				</div>
				<div className="comments-block">
					<Rating
						name="half-"
						defaultValue={null}
						precision={0.5}
						onClick={onClick}
						onChange={(e) => handleRate(e)}
					/>
					<div className="comments-block-button button_container">
						<button
							className="button"
							onClick={() => sendComment()}
						>
							{" "}
							Send   {/* Отправить */}
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CommentsModal;
