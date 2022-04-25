import { Rating } from "@mui/material"
import axios from "axios";
import { useEffect, useState } from "react"
import { useSelector } from "react-redux";


const CommentsModal = ({ onClick, handleShowComments, id, showComment }) => {
    
    const [text, setText] = useState([]);
    const itemIndex = id - 1;
    const [newCatalog, setNewCatalog] = useState();
    const catalog = useSelector((state) => state.loadCatalog);
    console.log("id", id, ", ", "itemIndex", itemIndex);
    
    useEffect(() => {
        if (!catalog) return;
        setNewCatalog(catalog[itemIndex].review);
        //console.log('newCatalog ', newCatalog)
    }, [catalog, itemIndex])


    const handleText = (e) => {
       setText(
                {
                    "user": "Alexander",
                    "data": Date(),
                    "text": e.target.value
                }
        );
        
    }

    const sendComment = (e) => {
        const review = newCatalog;
         
        //if (e.target.value) 
            review.push(text);
            console.log("review", review);
            axios.patch(`http://localhost:3004/products/${id}`, 
            {review: review})
            .then(setNewCatalog(review))
            // .then(resp => {console.log(resp.data)})
            // .catch(error => {console.log(error)});
    }

    return (
        <div className="fullscreen-box">
            <div className="comments">
                <div className="comments-name">
                    <p>
                        Напишите ваш отзыв о товаре:
                    </p>
                    <button className="cross-button" onClick={handleShowComments} />
                </div>
                {/* <form onSubmit={sendComment}> */}
                    <div className="comments-rating">
                        <textarea  className="comments-block-text" onChange={(e) => handleText(e)} />
                    </div>
                    <div className="comments-block">
                        <Rating 
                            name="half-rating" 
                            defaultValue={0} 
                            precision={0.5} 
                            onClick={onClick}
                        />
                        <div className="comments-block-button button_container">
                            <button className="button" onClick={() => sendComment()} > Отправить</button>
                        </div>
                    </div>
                {/* </form> */}
            </div>
        </div>
    )
}

export default CommentsModal




////////////////////////////



// const Users: FC = () => {
//     const [userList, setUserList] = useState<IUser[]>([])
//     const input = useRef<HTMLInputElement>(null);

//     useEffect(() => {
//         axios.get<IUser[]>("https://jsonplaceholder.typicode.com/users").then(res => {
//             setUserList(res.data)
//         })
//     }, [])

//     const handleFilter = (e: FormEvent<HTMLFormElement>) => {
//         e.preventDefault();
//         if (input.current) {
// //        setFilterString(input.current.value)
//         }
//     }

//     return (
//         <div className="user-page">
//             <form
//             onSubmit={handleFilter}>
//                 <input ref={input} name="value"/>
//                 <button>Filter</button>
//             </form>
//             {
//                 userList.map(user => <Link key={user.id} to={`/users/${user.id}`}><UserItem user={user} /></Link>)
//             }
//         </div>
//     )
// }

// export default Users