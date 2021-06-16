import React, { PureComponent } from "react";

class Article extends PureComponent {
	render() {
		const { article, isOpen, onButtonClick } = this.props;
		const body = isOpen && (
			<section className="card-text">{article.text}</section>
		);

		return (
			<div className="card mx-auto" style={{ width: "70%" }}>
				<div className="card-header">
					<h2>
						{article.title}
						<button
							onClick={onButtonClick}
							className="btn btn-secondary btn-lg float-end"
						>
							{isOpen ? "close" : "open"}
						</button>
					</h2>
					<div className="card-body">
						{body}
						<h6 className="card-subtittle text-muted">
							creation date: {new Date(article.date).toDateString()}
						</h6>
					</div>
				</div>
			</div>
		);
	}
}

export default Article;
