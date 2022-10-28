interface IElementDecor {
	bkgClass: string;
}

const ElementDecor = ({ bkgClass }: IElementDecor) => {
	return (
		<div className={bkgClass}>
			<p>
				<img src="/assets/img/decor.png" alt="" />
			</p>
		</div>
	);
};
export { ElementDecor };
