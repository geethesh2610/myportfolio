import React from "react";

import { images } from "../../constants";
import { FiArrowUpRight } from "react-icons/fi";
import { RiSendPlaneFill } from "react-icons/ri";
import { motion } from "framer-motion";
import { NavigationDots, PageFooter, SocialMedia } from "../../components";
import { TypeAnimation } from "react-type-animation";

import "./header.scss";

const Header = () => {
	return (
		<div>
			<div id="home" className="app__header">
				<img src={images.dot} alt="dot" className="dot" />
				<motion.div
					className="app__header-info"
					whileInView={{ opacity: [0, 1], x: [-20, 0] }}
					transition={{ duration: 0.8, ease: "easeInOut" }}
				>
					<p>Hello, I am</p>
					<h2>
						<span>👋</span>Geethesh G <span className="sname">Nair</span>
					</h2>
					<p className="app__header-info-desig">
						<div></div>
						<TypeAnimation
							sequence={["Frontend Developer", 1000, "UI/UX Developer", 1000]}
							speed={40}
							wrapper="span"
							repeat={Infinity}
						/>
					</p>
					<p className="app__header-info-detail">
						I am a creative web developer based in Kerala, India.{" "}
					</p>
					<div className="app__header-info-button">
						<a href="#works" className="app__header-info-button1">
							<p>My Works</p>
							<span>
								<FiArrowUpRight />
							</span>
						</a>
						<a href="#contact" className="app__header-info-button2">
							<p>Say Hello</p>
							<span>
								<RiSendPlaneFill />
							</span>
						</a>
					</div>
				</motion.div>
				<div className="app__header-image">
					<motion.div
						className="app__header-myimage"
						whileInView={{ opacity: [0, 1], x: [20, 0] }}
						transition={{ duration: 0.8, ease: "easeInOut" }}
					>
						<img className="app__header-me" src={images.home} alt="my-image" />
					</motion.div>
					<img className="app__header-bg" src={images.imagebg} alt="bg" />
					<motion.div
						className="app__header-fragments"
						whileInView={{ opacity: [0, 1], scale: [0, 1] }}
						transition={{ duration: 0.8, ease: "easeInOut" }}
					>
						<img src={images.html} alt="html" />
					</motion.div>
					<motion.div
						className="app__header-fragments"
						whileInView={{ opacity: [0, 1], scale: [0, 1] }}
						transition={{ duration: 0.8, ease: "easeInOut" }}
					>
						<img src={images.css} alt="css" />
					</motion.div>
					<motion.div
						className="app__header-fragments"
						whileInView={{ opacity: [0, 1], scale: [0, 1] }}
						transition={{ duration: 0.8, ease: "easeInOut" }}
					>
						<img src={images.javascript} alt="javascript" />
					</motion.div>
				</div>
			</div>
			<motion.a
				href="#about"
				className="container"
				whileInView={{ opacity: [0, 1], y: [-20, 0] }}
				transition={{ duration: 0.8, ease: "easeInOut" }}
			>
				<div className="chevron"></div>
				<div className="chevron"></div>
				<div className="chevron"></div>
				<span>Scroll down</span>
			</motion.a>
			<SocialMedia />
			<NavigationDots active={"home"} />
			<PageFooter />
		</div>
	);
};

export default Header;
