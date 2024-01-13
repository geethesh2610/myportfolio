import React from "react";
import "./App.scss";

import { Header, About, Skills, Works, Contact, Footer } from "./containers";
import { Navbar } from "./components";

function App() {
	return (
		<div className="app">
			<Navbar />
			<Header />
			<About />
			<Skills />
			<Works />
			<Contact />
			<Footer />
		</div>
	);
}

export default App;
