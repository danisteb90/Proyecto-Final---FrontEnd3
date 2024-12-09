import "./Contact.css";
import { FaInstagram, FaFacebook, FaPinterest } from "react-icons/fa";

const Contact = () => {
	return (
		<footer className="footer-container">
			<div className="footer-content">
				<div className="contact-info">
					<h3>Información de Contacto</h3>
					<p>📍 Isla San Cristobal, Quito, Ecuador</p>
					<p>📞 +593 993-8475-33333</p>
					<p>✉️ info@detodito.com</p>
				</div>

				<div className="social-links">
					<h3>Síguenos en Redes</h3>
					<div className="social-icons">
						<a
							href="https://instagram.com"
							target="_blank"
							rel="noopener noreferrer"
						>
							<FaInstagram className="social-icon" />
						</a>
						<a
							href="https://facebook.com"
							target="_blank"
							rel="noopener noreferrer"
						>
							<FaFacebook className="social-icon" />
						</a>
						<a
							href="https://pinterest.com"
							target="_blank"
							rel="noopener noreferrer"
						>
							<FaPinterest className="social-icon" />
						</a>
					</div>
				</div>
			</div>

			<div className="footer-bottom">
				<p>&copy; 2024 DETODITO. Todos los derechos reservados.</p>
			</div>
		</footer>
	);
};

export default Contact;
