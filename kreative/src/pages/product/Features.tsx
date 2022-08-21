import { FC } from "react";
import IFeatures from "../../types/features";

interface FeaturesProps {
	features: IFeatures;
}

const Features: FC<FeaturesProps> = ({ features }) => {
	return (
		<>
			<h3>Characteristics</h3> {/*Характеристики*/}
			<div className={features.weight ? "" : "hide"}>
				<p>Product weight with packaging (g)</p> {/* Вес товара с упаковкой (г) */}
				<em></em>
				<span>{features.weight}</span>
			</div>
			<div className={features.creation.length ? "" : "hide"}>
				<p>Type of creativity</p>   {/* Вид творчества */}
				<em></em>
				<span>{features.creation}</span>
			</div>
			<div className={features.age.length ? "" : "hide"}>
				<p>Age restrictions</p>   {/* Возрастные ограничения */}
				<em></em>
				<span>{features.age}</span>
			</div>
			<div className={features.height_gross ? "" : "hide"}>
				<p>Packing height (cm)</p> {/* Высота упаковки (см) */}
				<em></em>
				<span>{features.height_gross}</span>
			</div>
			<div className={features.deep ? "" : "hide"}>
				<p>Packing depth (cm)</p>    {/* Глубина упаковки (см) */}
				<em></em>
				<span>{features.deep}</span>
			</div>
			<div className={features.width ? "" : "hide"}>
				<p>Packing width (cm)</p> {/* Ширина упаковки (см) */}
				<em></em>
				<span>{features.width}</span>
			</div>
			<div className={features.height ? "" : "hide"}>
				<p>Product height (cm)</p>  {/* Высота изделия (см) */}
				<em></em>
				<span>{features.height}</span>
			</div>
			<div className={features.creation.length ? "" : "hide"}>
				<p>Country of origin</p>  {/* Страна производства */}
				<em></em>
				<span>{features.origin}</span>
			</div>
		</>
	);
};
export { Features };
