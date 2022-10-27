import { useSelector } from "react-redux";
import LikesElement from "pages/likes/LikesElement";

const Likes = () => {
    const likesList = useSelector((state) => state.loadLikes.inLikes);

    const calcLikesContent = likesList.reduce(
        (acum, cur) => Object.assign(acum, { [cur]: (acum[cur] | 0) + 1 }),
        {}
    );

    function setLikesList(likesContent) {
        let i = 0;
        const likesItemContent = [];

        for (let key in calcLikesContent) {
            likesItemContent[i] = {
                id: Number(key),
            };
            i++;
        }
        return likesItemContent;
    }

    const likesContent = setLikesList(calcLikesContent);

    return (
        <div className="likes container">
            <p className="likes_title">My favorites</p>    {/* Мои избранные товары */}
            <div className="likes_list">
                {likesContent.map((item) => (
                    <LikesElement key={item.id} item={item} />
                ))}
            </div>
        </div>
    );
};
export default Likes;
