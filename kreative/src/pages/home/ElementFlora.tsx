interface IElementFlora {
	bkgClass: string;
}

const ElementFlora = ({ bkgClass }: IElementFlora) => {

	return (
		<div className={bkgClass}>
			<p>
				<img src="/assets/img/flora.png" alt="" />
			</p>
		</div>
	);
};

export { ElementFlora };
