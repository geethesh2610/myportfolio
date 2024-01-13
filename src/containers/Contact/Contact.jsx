import React, { useState, useRef } from "react";
import emailjs from "emailjs-com";

import "./contact.scss";

import { NavigationDots, PageFooter, SocialMedia } from "../../components";
import { motion } from "framer-motion";
import { images } from "../../constants";

const Contact = () => {
	const form = useRef();

	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
	});
	const [isFormSubmitted, setIsFormSubmitted] = useState(false);
	const [loading, setLoading] = useState(false);

	const handleChangeInput = (e) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	const { name, email, message } = formData;

	const handleSubmit = (e) => {
		e.preventDefault();
		setLoading(true);

		emailjs
			.sendForm(
				"service_d5jhsre",
				"template_9shhiwm",
				form.current,
				"r6jIe3mYJ_U-maYtU"
			)
			.then(
				(result) => {
					console.log(result.text);
					setLoading(false);
					setIsFormSubmitted(true);
					setFormData({ name: "", email: "", message: "" });
				},
				(error) => {
					console.log(error.text);
				}
			);
	};

	return (
		<div id="contact" className="app__contact">
			<motion.h2
				className="app__contact-heading"
				whileInView={{ x: [30, 1] }}
				transition={{ duration: 0.8 }}
			>
				<p>
					{" "}
					Lets have a <span>chat</span>
				</p>
				<img src={images.coffee} alt="coffee" />
			</motion.h2>

			<motion.div
				className="app__contact-info"
				whileInView={{ x: [-30, 1] }}
				transition={{ duration: 0.8 }}
			>
				<div className="app__contact-gmail">
					<img src={images.gmail} alt="gmail" />
					<a
						href="mailto:geetheshnair123@gmail.com"
						target="_blank"
						rel="noreference"
					>
						geetheshnair123@gmail.com
					</a>
				</div>
				<div className="app__contact-phone">
					<img src={images.smartphone} alt="smartphone" />
					<a href="tel:+916282414631" target="_blank" rel="noreference">
						(+91) 6282414631
					</a>
				</div>
			</motion.div>

			{!isFormSubmitted ? (
				<motion.form
					ref={form}
					className="app__contact-form"
					autoComplete="off"
					whileInView={{ y: [-30, 1] }}
					transition={{ duration: 0.8 }}
					onSubmit={handleSubmit}
				>
					<input
						type="text"
						name="name"
						id="name"
						placeholder="Name"
						value={name}
						onChange={handleChangeInput}
						required
					/>
					<input
						type="email"
						name="email"
						id="email"
						placeholder="Email"
						value={email}
						onChange={handleChangeInput}
						required
					/>
					<textarea
						name="message"
						id="message"
						rows="10"
						placeholder="Message"
						value={message}
						onChange={handleChangeInput}
						required
					></textarea>
					<button className="app__contact-button">
						<p>{!loading ? "Send Message" : "Sending..."}</p>
					</button>
				</motion.form>
			) : (
				<div>
					<h3 className="head-text">Thank you for getting in touch!</h3>
				</div>
			)}

			<SocialMedia />
			<NavigationDots active={"contact"} />
			<PageFooter />
		</div>
	);
};

export default Contact;
