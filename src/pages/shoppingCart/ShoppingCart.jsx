import { RxCross1 } from "react-icons/rx";
import Navbar from "../../components/Navbar";
import { useCart } from "../../context/CartContext";
import "./ShoppingCart.css";
import { useNavigate } from "react-router";

const ShoppingCart = () => {
	const navigate = useNavigate();

	const handleBack = () => {
		navigate("/#products");

		setTimeout(() => {
			const element = document.getElementById("products");
			element?.scrollIntoView({ behavior: "smooth" });
		}, 500);
	};

	const { cart, deleteFromCart, clearCart } = useCart();
	const totalPrice = cart.reduce(
		(sum, item) => sum + item.price * item.quantity,
		0
	);

	return (
		<div className="shopping-cartContainer">
			<div>
				<Navbar />
			</div>
			{cart.length === 0 ? (
				<p className="shopping-cartEmpty">No hay productos en el carrito</p>
			) : (
				<>
					<ul className="shopping-cartList">
						{cart.map((item) => (
							<li key={item.id} className="shopping-cartItem">
								<div className="shopping-cartItemDetails">
									<p className="shopping-cartItemTitle">{item.title}</p>
									<p className="shopping-cartItemPrice">${item.price}</p>
									<p className="shopping-cartItemQuantity">
										Cantidad: {item.quantity}
									</p>
								</div>
								<button
									className="shopping-cartDeleteButton"
									onClick={() => deleteFromCart(item.id)}
								>
									<RxCross1 />
								</button>
							</li>
						))}
					</ul>
					<div className="shopping-cartFooter">
						<div className="shopping-cartTotal">
							<p>Total: ${totalPrice.toFixed(2)}</p>
						</div>
						<button
							className="shopping-cartCheckoutButton"
							onClick={() => {
								clearCart();
								navigate("/checkout");
							}}
							role="buy-button"
						>
							Comprar
						</button>
						<button
							className="shopping-cartCheckoutButton"
							onClick={handleBack}
						>
							Seguir comprando
						</button>
					</div>
				</>
			)}
		</div>
	);
};

export default ShoppingCart;
