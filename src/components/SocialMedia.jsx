import React from "react";

import { AiFillInstagram } from "react-icons/ai";
import { FaFacebookSquare } from "react-icons/fa";
import { ImLinkedin } from "react-icons/im";

const SocialMedia = () => {
	return (
		<div className="app__social">
			<a
				href="https://www.instagram.com/g.e.e.t.h.e.s.h/"
				target="_blank"
				rel="noreferrer"
			>
				<AiFillInstagram />
			</a>
			<a
				href="https://www.facebook.com/geethesh.nair.56"
				target="_blank"
				rel="noreferrer"
			>
				<FaFacebookSquare />
			</a>
			<a
				href="https://www.linkedin.com/in/geethesh-g-nair-8070a120b/"
				target="_blank"
				rel="noreferrer"
			>
				<ImLinkedin />
			</a>
		</div>
	);
};

export default SocialMedia;
