import { FC } from "react"
import { Link, NavLink } from "react-router-dom"
import Product from "../pages/Product"
import IElement from "../types/element"

interface CatElementProps {
    catalog: IElement
} 

const CatElement: FC<CatElementProps> = ({ catalog }) => {

const discountPercent = Math.round((catalog.price - catalog.discount_price) / catalog.price*100)


// return (
//     <div className="user-page">
//         <form
//         onSubmit={handleFilter}>
//             <input ref={input} name="value"/>
//             <button>Filter</button>
//         </form>
//         {
//             userList.map(user => <Link key={user.id} to={`/users/${user.id}`}><UserItem user={user} /></Link>)
//         }
//     </div>
// )


    return (
            <div className="catalog_main-element">
                <div className="catalog_main-element-image">
                    <img className={catalog.new === true ? "new" : "hide"} src="./assets/img/new.svg" alt=""/>
                    <div>
                        <Link key={catalog.id} to={`product:${catalog.id}`}><img className="catalog_main-element-image-main" src={`http://localhost:3000${catalog.image}`} alt=""/></Link>
                    </div>
                    <div className={catalog.discount === true ? "discount_block" : "hide"}>
                        <div className="catalog_main-element-disc_top">
                            СКИДКА
                        </div>
                        <div className="catalog_main-element-disc_bottom">
                            {discountPercent}%
                        </div>
                    </div>
                </div>
                <div className="catalog_main-element-price">
                    <p className={catalog.discount === true ? "overline" : ""}>
                        {`${catalog.price} руб.`}
                    </p>
                    <p className={catalog.discount === true ? "discount" : "hide"}>
                        {`${catalog.discount_price} руб.`}
                    </p>
                </div>
                <div className="catalog_main-element-title">
                    <p>{catalog.title}</p>
                </div>
            </div>
    )
}
export default CatElement                

//<p>{catalog.id}</p>             
//<p>{catalog.new}</p>
                
                
