import { render, screen } from "@testing-library/react";
import { describe, test, expect } from "vitest";
import { BrowserRouter } from "react-router";
import { CartProvider } from "../context/CartContext";
import Products from "../pages/products/Products";
import ShoppingCart from "../pages/shoppingCart/ShoppingCart";

describe("Seccion Productos se renderiza correctamente", () => {
	test("Seccion Productos se renderiza correctamente", () => {
		render(<Products />);

		const productContainer = screen.getByTestId("products-container");
		expect(productContainer).toBeDefined();
	});
});

describe("Renderizar texto no hay productos en el carrito", () => {
	test("Renderizar texto no hay productos en el carrito", () => {
		render(
			<BrowserRouter>
				<CartProvider>
					<ShoppingCart />
				</CartProvider>
			</BrowserRouter>
		);

		const noProductsText = screen.getByText("No hay productos en el carrito");
		expect(noProductsText).toBeDefined();
	});
});
