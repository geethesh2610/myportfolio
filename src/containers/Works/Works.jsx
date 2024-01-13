import React, { useState } from "react";

import "./works.scss";
import { images } from "../../constants";
import { motion } from "framer-motion";
import { BsDot } from "react-icons/bs";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { NavigationDots, PageFooter, SocialMedia } from "../../components";

const mywork = [
	{
		image: images.ananya,
		title: "Portfolio",
		desc: "Ananya's portfolio is a concise showcase of her creative journey and professional achievements.",
		githublink: "#",
		weblink: "https://www.ananyaharshini.com/",
		type: "ReactJS",
	},
	{
		image: images.qtrip,
		title: "Qtrip",
		desc: "QTrip is a travel website aimed at travellers looking for a multitude of adventures in different cities. ",
		githublink: "https://gitlab.crio.do/me_qtripdynamic_stubs/me_qtripdynamic_module_deployment_stub",
		weblink: "https://qtrip-geethesh.netlify.app/",
		type: "ReactJS",
	},
	{
		image: images.snap,
		title: "Snap",
		desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque corrupti voluptas, odit culpa explicabo ",
		githublink: "https://github.com/geethesh2610/Snap",
		weblink: "https://jade-maamoul-ef32b5.netlify.app/",
		type: "UI",
	},
	{
		image: images.sunnyside,
		title: "Sunnyside",
		desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta sapiente officiis, alias sint",
		githublink: "https://github.com/geethesh2610/sunnyside",
		weblink: "https://sunnyside-007.netlify.app/",
		type: "UI",
	},
	{
		image: images.qkart,
		title: "Qkart",
		desc: "QKart is an e-commerce application offering a variety of products for customers to choose from.  ",
		githublink: "https://gitlab.crio.do/me_qkart_frontend_v2_stubs/ME_QKART_FRONTEND_V2_MODULE_DEPLOYMENT_STUB",
		weblink: "https://dashing-sawine-10734b.netlify.app/",
		type: "ReactJS",
	},
	{
		image: images.fylo,
		title: "Fylo",
		desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores delectus non dolorum .",
		githublink: "https://github.com/geethesh2610/fylo",
		weblink: "https://fylo-website-16b05d.netlify.app/",
		type: "UI",
	},
];

const Works = () => {
	const [activeFilter, setActiveFilter] = useState("All");

	const [filterWorks, setFilterWorks] = useState(mywork);

	const [works, setWorks] = useState(mywork);

	const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

	const handleWorkfunction = (item) => {
		setActiveFilter(item);
		setAnimateCard({ y: 100, opacity: 0 });

		setTimeout(() => {
			setAnimateCard({ y: 0, opacity: 1 });

			if (item === "All") {
				setFilterWorks(works);
			} else {
				setFilterWorks(works.filter((work) => work.type === item));
			}
		}, 500);
	};

	return (
		<div className="app__works" id="works">
			<motion.h2 className="app__works-heading" whileInView={{ x: [30, 1] }} transition={{ duration: 0.8 }}>
				My Creative <span>Work</span> Section
			</motion.h2>
			<motion.div className="app__works-filter" whileInView={{ y: [20, 0] }}>
				{["All", "ReactJS", "UI"].map((item, index) => (
					<div key={index} onClick={() => handleWorkfunction(item)} className={`app__works-filter-item app__flex ${activeFilter === item ? "item-active" : ""}`}>
						{item}
					</div>
				))}
			</motion.div>

			<motion.div animate={animateCard} transition={{ duration: 0.4, delayChildren: 0.5, staggerChildren: 0.5 }} className="app__works-mywork">
				{filterWorks.map((work, index) => (
					<motion.div className="app__works-single-work" key={index} whileHover={{ y: [0, -5] }} transition={{ duration: 0.1 }}>
						<div className="app__works-image">
							<img src={work.image} alt={work.title} />
							<div className="app__works-hover app__flex">
								<a href={work.weblink} target="_blank" rel="noreferrer">
									<motion.div whileInView={{ scale: [0, 1] }} whileHover={{ scale: [1, 0.9] }} transition={{ duration: 0.25 }} className="app__flex">
										<AiFillEye />
									</motion.div>
								</a>
								<a href={work.githublink} target="_blank" rel="noreferrer">
									<motion.div whileInView={{ scale: [0, 1] }} whileHover={{ scale: [1, 0.9] }} transition={{ duration: 0.25 }} className="app__flex">
										<AiFillGithub />
									</motion.div>
								</a>
							</div>
						</div>
						<div className="app__works-info">
							<p className="app__works-name">
								{work.title}{" "}
								<span className="app__flex" style={{ color: "#413f3f" }}>
									<BsDot />
								</span>
								<span className="app__works-type">{work.type}</span>
							</p>
							<p>{work.desc}</p>
						</div>
					</motion.div>
				))}
			</motion.div>
			<SocialMedia />
			<NavigationDots active={"works"} />
			<PageFooter />
			<img className="slant-dot" src={images.slantdot} alt="slant dot" />
		</div>
	);
};

export default Works;
