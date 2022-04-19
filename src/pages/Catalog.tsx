import { FC } from "react"
import { useSelector, RootStateOrAny } from "react-redux"
import CatElement from "../components/CatElement"
import IElement from "../types/element"

const Catalog: FC = () => {

    const catalog = useSelector((state: RootStateOrAny) => state.catalogData.catalogList)
    // const dispatch = useDispatch()

    // useEffect(() => {
    //     axios.get<IElement[]>('http://localhost:3004/products')
    //     .then(res => dispatch(addCatalogData(res.data)))

    // }, [dispatch])

    return (
            <div className="catalog_main container">
                {
                    catalog.map((catalog: IElement) =><CatElement key={catalog.id} catalog={catalog} />)
                }
            </div>
    )
}
export default Catalog
