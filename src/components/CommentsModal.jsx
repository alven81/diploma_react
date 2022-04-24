import { Rating } from "@mui/material"
import axios from "axios";
import { useEffect, useState } from "react"


const Comments = ({ onClick, handleShowComments, itemIndex, showComment }) => {
    
    const [text, setText] = useState("");
    const [id] = useState(itemIndex);
    const [message, setMessage] = useState();

    const handleText = (e) => {
        setText(e.target.value);
    }

    const sendComment = (e) => {

        setMessage(
            [
                {
                    "user": "Alexander",
                    "data": Date(),
                    "text": text
                }
            ]
        );
        //console.log(message);
        axios.patch(`http://localhost:3004/products/${id}`, 
        {review: message});

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

export default Comments




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