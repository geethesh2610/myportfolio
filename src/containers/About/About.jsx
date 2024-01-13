import React, { useEffect, useState } from "react";

import "./about.scss";
import { images, pdf } from "../../constants";
import { HiOutlineDocumentDownload } from "react-icons/hi";
import { motion } from "framer-motion";
import { NavigationDots, PageFooter, SocialMedia } from "../../components";
const About = () => {
	const myResume = pdf.resume;
	
	const [age, setAge] = useState(calculateAge());

	function calculateAge() {
		const birthdate = new Date("2000-04-10");
		const currentDate = new Date();

		let age = currentDate.getFullYear() - birthdate.getFullYear();

		if (currentDate.getMonth() < birthdate.getMonth() || (currentDate.getMonth() === birthdate.getMonth() && currentDate.getDate() < birthdate.getDate())) {
			age--;
		}

		return age;
	}

	useEffect(() => {
		const intervalId = setInterval(() => {
			setAge(calculateAge());
		}, 31536000000);

		return () => clearInterval(intervalId);
	}, []);

	return (
		<div id="about">
			<div className="app__about">
				<motion.div className="app__about-image" whileInView={{ x: [-60, 0], opacity: [0, 1] }} transition={{ duration: 1, ease: "easeInOut" }}>
					<img src={images.about} alt="aboutimage" />
				</motion.div>

				<motion.div className="app__about-info" whileInView={{ opacity: [0, 1], y: [60, 0] }} transition={{ duration: 1, ease: "easeInOut" }}>
					<h3 className="app__about-name">Geethesh G Nair</h3>
					<span className="app__about-desig">Frontend Developer</span>
					<p className="app__about-info1">Hi, my name is Geethesh G Nair and I’m very passionate to my work.</p>
					<p className="app__about-info2">
						I’m very keen to learn new technologies, a trait that has significantly contributed to my ability to learn quickly. Over time, I have cultivated a diverse skill set, enabling me to tackle various aspects of tech projects. I take pride in having built numerous industry-grade projects from scratch, demonstrating both my passion for technology and my proficiency in applying it to real-world scenarios. Notably, I have successfully completed 20+ projects, further solidifying
						my practical experience and problem-solving capabilities in the tech industry. Check out my projects <a href="#works">here</a> :)
					</p>
					<div className="app__about-hr" />
					<div className="app__about-details">
						<div className="left">
							<p>Birthday :</p>
							<p>Age :</p>
							<p>Address :</p>
							<p>Phone : </p>
							<p>Email :</p>
						</div>
						<div className="right">
							<p>10/04/2000</p>
							<p>{age}</p>
							<p>Chengannur, Kerala</p>
							<p>+91 6282414631</p>
							<p>geetheshnair123@gmail.com</p>
						</div>
					</div>
					<a href={myResume} download className="app__about-resume">
						Download CV
						<span>
							<HiOutlineDocumentDownload />
						</span>
					</a>
				</motion.div>
			</div>

			<img className="yellow-dot" src={images.yellow} alt="yellow dot" />
			<img className="violet-dot" src={images.violet} alt="violet dot" />
			<SocialMedia />
			<NavigationDots active={"about"} />
			<PageFooter />
		</div>
	);
};

export default About;
