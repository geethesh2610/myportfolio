import React, { useState } from "react";

import "./navbar.scss";
import { motion } from "framer-motion";

import { AiOutlineCloudDownload } from "react-icons/ai";
import { BiMenu } from "react-icons/bi";
import { HiX } from "react-icons/hi";

import { images, pdf } from "../../constants";

const Navbar = () => {
	const [toggle, setToggle] = useState(false);

	return (
		<motion.div
			className="app__navbar"
			initial={{ y: -30, opacity: 0 }}
			animate={{ y: 0, opacity: 1 }}
			transition={{ duration: 0.8, ease: "easeInOut" }}
		>
			<div className="app__navbar-logo">
				<a href="#">geet.io</a>
			</div>
			<ul className="app__navbar-links">
				{["home", "about", "skills", "works", "contact"].map((item) => (
					<li className="app__navbar-link" key={item}>
						<div />
						<a href={`#${item}`}>{item}</a>
					</li>
				))}
			</ul>

			{/* mobile device */}

			<div className="app__navbar-menu">
				<BiMenu onClick={() => setToggle(true)} />

				{toggle && (
					<motion.div
						whileInView={{ x: [300, 0] }}
						transition={{ duration: 0.8, ease: "easeInOut" }}
					>
						<HiX onClick={() => setToggle(false)} />
						<ul>
							{["home", "about", "skills", "works", "contact"].map((item) => (
								<li key={item}>
									<a href={`#${item}`} onClick={() => setToggle(false)}>
										{item}
									</a>
								</li>
							))}
						</ul>
					</motion.div>
				)}
			</div>
		</motion.div>
	);
};

export default Navbar;
