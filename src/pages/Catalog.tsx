import axios from "axios"
import { FC, useEffect, useState } from "react"
import CatElement from "../components/CatElement"
import IElement from "../types/element"

const Catalog: FC = () => {

    const [catalogData, setCatalogData] = useState<IElement[]>([])

    useEffect(() => {
        axios.get<IElement[]>('http://localhost:3004/products')
        .then(res => setCatalogData(res.data))
        //.then(res => console.log(res.data))
    }, [])

    return (
            <div className="catalog_main container">
                {
                    catalogData.map(catalog => <CatElement key={catalog.id} catalog={catalog} />)
                }
            </div>
    )
}
export default Catalog
