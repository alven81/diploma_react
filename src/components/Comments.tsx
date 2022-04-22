import { Rating } from "@mui/material"
import axios from "axios";
import { FC, useEffect, useRef, useState } from "react"

interface CommentsProps {
    onClick: React.MouseEventHandler<HTMLButtonElement>;
    className: string;
    handleShowComments: React.MouseEventHandler<HTMLButtonElement>
}

// useEffect(() => {
//     if (!catalogList) return;
//     raiting.push(Number(e.target.value));
//     axios.patch(`http://localhost:3004/products/${catalogList.id}`, 
//     {raiting: raiting})
//     .then(updateRaiting(raiting))
//     .then(resp => {console.log(resp.data)})
//     .catch(error => {console.log(error)});
// )


const Comments: FC<CommentsProps> = ({ onClick, handleShowComments }) => {
    
    //const [textComment, setTextComment] = useState<string>("")
    const textComment = useRef<HTMLTextAreaElement>(null);


    const sendComment = () => {
        console.log(textComment.current?.value);
        
    }


    return (
        <div className="fullscreen-box">
            <div className="comments">
                <div className="comments-name">
                    <p>
                        Напишите ваш отзыв о товаре:
                    </p>
                    <button onClick={handleShowComments}>
                        x
                    </button>
                </div>
                {/* <form onSubmit={sendComment}> */}
                    <div className="comments-rating">
                        <textarea ref={textComment} className="comments-block-text" />
                    </div>
                    <div className="comments-block">
                        <Rating 
                            name="half-rating" 
                            defaultValue={0} 
                            precision={0.5} 
                            onClick={onClick}
                        />
                        <div className="comments-block-button button_container">
                            <button className="button" onClick={(e) => sendComment()} > Отправить</button>
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