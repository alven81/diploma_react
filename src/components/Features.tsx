import { FC } from "react";
import IFeatures from "../types/features";

interface FeaturesProps {
    features: IFeatures
}

const Features: FC<FeaturesProps> = ({features}) => {
    return (
        <>
            <h3>Характеристики</h3>
            <div>
                <p>Вид товара с упаковкой (г)</p><span>{features.weight}</span>
            </div>
            <div>
                <p>Вид творчества</p><span>{features.creation}</span>
            </div>
            <div>
                <p>Возрастные ограничения</p><span>{features.age}</span>
            </div>
            <div>
                <p>Высота упаковки</p><span>{features.height_gross}</span>
            </div>
            <div>
                <p>Глубина упаковки</p><span>{features.deep}</span>
            </div>
            <div>
                <p>Ширина упаковки</p><span>{features.width}</span>
            </div>
            <div>
                <p>Высота изделия</p><span>{features.height}</span>
            </div>
            <div>
                <p>Страна производства</p><span>{features.origin}</span>
            </div>
        </>
    )
}
export { Features }