function getSearchProduct(searchText) {
	return (dispatch) => {
		fetch(`http://localhost:3004/products?q=${searchText}`).then((res) =>
			dispatch(setSearchProduct(res.json()))
		);
	};
}

function setSearchProduct(load) {
	return {
		type: "GET_SEARCH_RESULT",
		payload: load,
	};
}

export { getSearchProduct };
