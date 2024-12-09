import Navbar from "../../components/Navbar";
import Contact from "../contact/Contact";
import Products from "../products/Products";
import "./Home.css";

const Home = () => {
	return (
		<section className="home-mainContainer">
			<div className="home-navbarContainer">
				<Navbar />
			</div>
			<div className="home-infoContainer">
				<div className="home-leftContainer">
					<img src="/assets/img/home.png" alt="home image" />
					<p>
						Disfruta de los mejores productos importados y aprovecha de todos
						los descuentos que tenemos para ti
					</p>
				</div>
				<div className="home-rightContainer">
					<img src="/assets/img/home-group.png" alt="home right image" />
				</div>
			</div>
			<div id="products">
				<Products />
			</div>
			<div id="contact">
				<Contact />
			</div>
		</section>
	);
};

export default Home;
