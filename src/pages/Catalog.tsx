import { FC } from "react"
import { useSelector, RootStateOrAny } from "react-redux"
import CatElement from "../components/catalog/CatElement"
import IElement from "../types/element"

const Catalog: FC = () => {

    const catalog = useSelector((state: RootStateOrAny) => state.loadCatalog);
    
    return (
        <div className="catalog_main container">
            { catalog &&
                <>
                    {
                        catalog.map((catalog: IElement) =><CatElement key={catalog.id} catalog={catalog} />)
                    }
                </>
            }
        </div>
    )
}
export default Catalog
