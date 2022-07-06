function getSearchProduct(searchText) {
    return (dispatch) => {
		fetch(
			`http://localhost:3004/products?q=${searchText}`
		)
		.then(res => res.json())
		.then(res => dispatch(setSearchProduct(res)))
    };
    }

function setSearchProduct(load) {
	return {
		type: "GET_SEARCH_RESULT",
		payload: load,
	};
}

export { getSearchProduct };

// export const getSearchProduct = async (searchText) => {
// 	try {
// 		const response = await fetch(
// 			`http://localhost:3004/products?q=${searchText}`
// 		);
// 		const json = await response.json();
// 		console.warn("action: ", json);
// 		if (json) {
// 			dispatch(setSearchProduct(json));
// 		} else {
// 			console.warn("Unable to fetch");
// 		}
// 	} catch (error) {
// 		console.error(error);
// 	}
// };