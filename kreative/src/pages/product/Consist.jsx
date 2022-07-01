const Consist = ({ consist }) => {
	return (
		<>
			<ul>
				{consist.map((value, id) => (
					<li key={id}>{value}</li>
				))}
			</ul>
		</>
	);
};
export { Consist };
