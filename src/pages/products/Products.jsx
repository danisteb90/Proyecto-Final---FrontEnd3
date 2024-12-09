import { useEffect, useState } from "react";
import { fetchProducts } from "../../service/GetProducts";
import { Link } from "react-router";

import "./Products.css";

const Products = () => {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		fetchProducts().then((data) => setProducts(data));
	}, []);

	return (
		<div>
			<div id="products" className="home-productsContainer">
				{products.map((product) => (
					<Link
						to={`/product/${product.id}`}
						key={product.id}
						className="product-card"
					>
						<div className="product-image">
							<img src={product.image} alt={product.title} />
						</div>
						<div className="product-info">
							<h2>{product.category}</h2>
							<h3>{product.title}</h3>
							<p>${product.price}</p>
						</div>
					</Link>
				))}
			</div>
		</div>
	);
};

export default Products;
