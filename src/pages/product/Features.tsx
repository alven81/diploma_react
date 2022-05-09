import { FC } from "react";
import IFeatures from "../../types/features";

interface FeaturesProps {
    features: IFeatures
}

const Features: FC<FeaturesProps> = ({features}) => {
    return (
        <>
            <h3>Характеристики</h3>
            <div className={(features.weight) ? "" : "hide"}>
                <p>Вид товара с упаковкой (г)</p><em></em><span>{features.weight}</span>
            </div>
            <div className={(features.creation.length) ? "" : "hide"}>
                <p>Вид творчества</p><em></em><span>{features.creation}</span>
            </div>
            <div className={(features.age.length) ? "" : "hide"}>
                <p>Возрастные ограничения</p><em></em><span>{features.age}</span>
            </div>
            <div className={(features.height_gross) ? "" : "hide"}>
                <p>Высота упаковки</p><em></em><span>{features.height_gross}</span>
            </div>
            <div className={(features.deep) ? "" : "hide"}>
                <p>Глубина упаковки</p><em></em><span>{features.deep}</span>
            </div>
            <div className={(features.width) ? "" : "hide"}>
                <p>Ширина упаковки</p><em></em><span>{features.width}</span>
            </div>
            <div className={(features.height) ? "" : "hide"}>
                <p>Высота изделия</p><em></em><span>{features.height}</span>
            </div>
            <div className={(features.creation.length) ? "" : "hide"}>
                <p>Страна производства</p><em></em><span>{features.origin}</span>
            </div>
        </>
    )
}
export { Features }