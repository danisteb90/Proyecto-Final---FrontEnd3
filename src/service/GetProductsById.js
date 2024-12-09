export const fetchProductById = async (id) => {
	try {
		const response = await fetch(`https://fakestoreapi.com/products/${id}`);
		const data = await response.json();
		return data;
	} catch (error) {
		console.log("Error al obtener el producto", error);
	}
};
