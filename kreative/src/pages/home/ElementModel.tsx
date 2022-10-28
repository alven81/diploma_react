interface IElementModel {
	bkgClass: string;
}

const ElementModel = ({ bkgClass }: IElementModel) => {

	return (
		<div className={bkgClass}>
			<div>
				<p>
					<img src="/assets/img/modeling.png" alt="" />
				</p>
			</div>
		</div>
	);
};

export { ElementModel };
