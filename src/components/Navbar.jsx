import { Link } from "react-router";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router";

import "./Navbar.css";
import { FaShoppingBasket } from "react-icons/fa";

const Navbar = () => {
	const { cartCount } = useCart();
	const navigate = useNavigate();

	const handleBack = () => {
		navigate("/#products");

		setTimeout(() => {
			const element = document.getElementById("products");
			element?.scrollIntoView({ behavior: "smooth" });
		}, 500);
	};

	return (
		<nav className="navbar-mainContainer">
			<div className="navbar-linksContainer">
				<a href="/#">Inicio</a>
				<button onClick={handleBack}>Productos</button>
				<a href="/#contact">Contacto</a>
			</div>
			<div className="navbar-brand">
				<Link to="/">
					<h1 className="paralucent-light-italic">DeTodito</h1>
				</Link>
			</div>
			<div className="navbar-shoppingCart">
				<Link to="/cart">
					{<FaShoppingBasket />}({cartCount})
				</Link>
			</div>
		</nav>
	);
};

export default Navbar;
