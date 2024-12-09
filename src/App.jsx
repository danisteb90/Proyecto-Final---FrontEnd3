import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./pages/home/Home";
import Products from "./pages/products/Products";
import Contact from "./pages/contact/Contact";
import ProductDetail from "./pages/productDetail/ProductDetail";
import { CartProvider } from "./context/CartContext";
import ShoppingCart from "./pages/shoppingCart/ShoppingCart";
import Checkout from "./pages/checkout/Checkout";

function App() {
	return (
		<main className="paralucent-light">
			<CartProvider>
				<BrowserRouter>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/products" element={<Products />} />
						<Route path="/contact" element={<Contact />} />
						<Route path="/product/:id" element={<ProductDetail />} />
						<Route path="/cart" element={<ShoppingCart />} />
						<Route path="/checkout" element={<Checkout />} />
					</Routes>
				</BrowserRouter>
			</CartProvider>
		</main>
	);
}

export default App;
