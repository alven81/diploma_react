import { FC, useEffect, useState } from "react"
import { useSelector, RootStateOrAny } from "react-redux"
import CatElement from "./CatElement"
import { New } from "../product/New"
import IElement from "../../types/element"

const Catalog: FC = () => {

    // const [userId, setUserId] = useState(false)

    // useEffect(() => {
    //     const loggedInUser = localStorage.getItem("userId");
    //     if (loggedInUser) {
    //       const foundUser = JSON.parse(loggedInUser);
    //       setUserId(foundUser);
    //     }
    //   }, []);

    const catalog = useSelector((state: RootStateOrAny) => state.loadData.loadCatalog);
    
    return (
        <>
            <div className="catalog_main container">
                
                { catalog &&
                    <>
                        {
                            catalog.map((catalog: IElement) =><CatElement key={catalog.id} catalog={catalog} />)
                        }
                    </>
                }
            </div>
            <div className="container">
                <New />
            </div>
        </> 
    )
    
}
export default Catalog