import { useNavigate } from "react-router";
import Navbar from "../../components/Navbar";
import "./Checkout.css";

const Checkout = () => {
	const navigate = useNavigate();

	return (
		<div className="checkout-container">
			<Navbar />
			<div className="checkout-content">
				<h1>¡Gracias por tu compra!</h1>
				<p>La factura será enviada a tu correo electrónico</p>
				<button className="checkout-button" onClick={() => navigate("/")}>
					Volver a la tienda
				</button>
			</div>
		</div>
	);
};

export default Checkout;
