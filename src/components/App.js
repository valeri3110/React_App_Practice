import React, { Component } from "react";
import ArticleList from "./ArticleList/ArticleList";
import articles from "../data";
import "bootstrap/dist/css/bootstrap.css";

class App extends Component {
	state = {
		reverted: false,
	};

	articles = articles.slice();

	render() {
		return (
			<div>
				<div className="bg-dark text-light p-5 m-4">
					<h1 className="display-4">
						Articles List
						<button
							className="btn btn-light btn-lg float-end"
							onClick={this.revert}
						>
							Revert
						</button>
					</h1>
				</div>
				<ArticleList
					articles={this.state.reverted ? articles.slice().reverse() : articles}
				/>
			</div>
		);
	}

	revert = () => {
		this.setState({
			reverted: !this.state.reverted,
		});
	};
}

export default App;
