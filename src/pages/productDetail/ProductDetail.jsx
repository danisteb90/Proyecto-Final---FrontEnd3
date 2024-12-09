import { useNavigate, useParams } from "react-router";
import { useEffect, useState } from "react";
import { BiArrowBack, BiLoader } from "react-icons/bi";

import "./ProductDetail.css";
import { fetchProductById } from "../../service/GetProductsById";
import { useCart } from "../../context/CartContext";
import Navbar from "../../components/Navbar";

const ProductDetail = () => {
	const { addToCart } = useCart();
	const { id } = useParams();
	const navigate = useNavigate();
	const [product, setProduct] = useState(null);

	const handleBack = () => {
		navigate("/#products");

		setTimeout(() => {
			const element = document.getElementById("products");
			element?.scrollIntoView({ behavior: "smooth" });
		}, 500);
	};

	useEffect(() => {
		fetchProductById(id).then((product) => setProduct(product));
	}, [id]);

	if (!product) {
		return (
			<div className="product-loader">
				<div className="product-loaderIcon">
					<BiLoader />
				</div>
				<h3>Cargando...</h3>
			</div>
		);
	}

	return (
		<section className="product-detailContainer">
			<Navbar />
			<div className="product-detail">
				<div className="product-detailImage">
					<button className="product-detailBackButton" onClick={handleBack}>
						<BiArrowBack />
					</button>
					<img src={product.image} alt={product.title} />
				</div>
				<div className="product-detailInfo">
					<h1>{product.title}</h1>
					<h2>Categoría: {product.category}</h2>
					<p>Precio: ${product.price}</p>
					<p>{product.description}</p>
					<button
						className="product-detailAddToCartButton"
						onClick={() => addToCart(product)}
					>
						Agregar al carrito
					</button>
				</div>
			</div>
		</section>
	);
};

export default ProductDetail;
