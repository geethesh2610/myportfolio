import React from "react";

import "./Skills.scss";
import { images } from "../../constants";
import { motion } from "framer-motion";
import { NavigationDots, PageFooter, SocialMedia } from "../../components";

const Skills = () => {
	const skills = [
		{
			image: images.html,
			name: "Html",
		},
		{
			image: images.css,
			name: "Css",
		},
		{
			image: images.javascript,
			name: "JavaScript",
		},
		{
			image: images.gsap,
			name: "Gsap",
		},
		{
			image: images.react,
			name: "React",
		},
		{
			image: images.tailwind,
			name: "Tailwind",
		},
		{
			image: images.mu5,
			name: "Material UI",
		},
		{
			image: images.bootstrap,
			name: "Bootstrap",
		},
		{
			image: images.sass,
			name: "Sass",
		},
		{
			image: images.php,
			name: "PHP",
		},
		{
			image: images.laravel,
			name: "Laravel",
		},
		{
			image: images.livewire,
			name: "Livewire",
		},
	];

	const education = [
		{
			year: "2023 - Present",
			company: "ArtWorksIT",
			post: "Frontend Developer",
		},
	];

	return (
		<motion.div id="skills" className="app__skills" whileInView={{ opacity: [0, 1] }} transition={{ duration: 0.8, ease: "easeIn", when: "beforeChildren" }}>
			<motion.div whileInView={{ opacity: [0, 1], y: [40, 0] }} transition={{ duration: 0.8, ease: "easeInOut" }}>
				<h2 className="app__skills-heading">
					Skills <span>&</span> Experience
				</h2>
			</motion.div>

			<div className="app__skills-education">
				<div className="app__skills-section">
					{skills.map((skill) => (
						<motion.div className="app__skills-div" key={`skill-${skill.name}`} whileInView={{ scale: [0, 1] }} transition={{ duration: 0.8 }}>
							<div className="app__skills-single">
								<img src={skill.image} alt="skill" />
							</div>
							<p>{skill.name}</p>
						</motion.div>
					))}
				</div>
				<div className="app__skills-edu-section">
					{education.map((edu) => (
						<motion.div className="app__edu-single" key={`edu-${edu.course}`} whileInView={{ y: [-40, 0] }} transition={{ duration: 0.8 }}>
							<p className="app__edu-year">{edu.year}</p>
							<div className="app__edu">
								<p className="app__edu-course">{edu.company}</p>
								<span className="app__edu-std">{edu.post}</span>
							</div>
						</motion.div>
					))}
				</div>
			</div>

			<img className="pink-dot" src={images.pink} alt="pink dot" />
			<SocialMedia />
			<NavigationDots active={"skills"} />
			<PageFooter />
		</motion.div>
	);
};

export default Skills;
