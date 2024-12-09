/* eslint-disable react/prop-types */
import { useState, useContext, createContext } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
	const [cart, setCart] = useState([]);

	const addToCart = (product) => {
		setCart((prevState) => {
			const existingProduct = prevState.find((item) => item.id === product.id);

			if (existingProduct) {
				return prevState.map((item) =>
					item.id === product.id
						? { ...item, quantity: (item.quantity || 1) + 1 }
						: item
				);
			}
			return [...prevState, { ...product, quantity: 1 }];
		});
	};

	const deleteFromCart = (id) => {
		setCart((prevState) => {
			const existingProduct = prevState.find((item) => item.id === id);

			if (existingProduct.quantity > 1) {
				return prevState.map((item) =>
					item.id === id ? { ...item, quantity: item.quantity - 1 } : item
				);
			} else {
				return prevState.filter((product) => product.id !== id);
			}
		});
	};

	const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

	return (
		<CartContext.Provider
			value={{
				cart,
				addToCart,
				deleteFromCart,
				cartCount,
			}}
		>
			{children}
		</CartContext.Provider>
	);
};

// eslint-disable-next-line react-refresh/only-export-components
export const useCart = () => useContext(CartContext);
