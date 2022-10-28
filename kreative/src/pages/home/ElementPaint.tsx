interface IElementPaint {
	bkgClass: string;
}

const ElementPaint = ({ bkgClass }: IElementPaint) => {

	return (
		<>
			<div className={bkgClass}>
				<p>
					<img src="/assets/img/paint.png" alt="" />
				</p>
			</div>
		</>
	);
};

export { ElementPaint };
