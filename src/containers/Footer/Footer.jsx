import React from "react";

import "./footer.scss";

import { motion } from "framer-motion";

const Footer = () => {
	return (
		<motion.div
			className="app__footer"
			whileInView={{ opacity: [0, 1] }}
			transition={{ duration: 0.5 }}
		>
			<h2>geet.io</h2>
			<p>© 2022 — Designed & developed by Geethesh G Nair</p>
		</motion.div>
	);
};

export default Footer;
