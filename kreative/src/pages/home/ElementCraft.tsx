interface IElementCraft {
	bkgClass: string;
}

const ElementCraft = ({ bkgClass }: IElementCraft) => {

	return (
		<div className={bkgClass}>
			<p>
				<img src="/assets/img/bear.png" alt="" />
			</p>
		</div>
	);
};
export { ElementCraft };
