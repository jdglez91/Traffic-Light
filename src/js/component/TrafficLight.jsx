import React from "react";

export default class TrafficLight extends React.Component {
	constructor() {
		super();
		this.state = {
			clickedLight: null
		};
	}
	render() {
		let redExtraclass = "";
		if (this.state.clickedLight == "red") redExtraclass = "selected";
		let yellowExtraclass = "";
		if (this.state.clickedLight == "yellow") yellowExtraclass = "selected";
		let greenExtraclass = "";
		if (this.state.clickedLight == "green") greenExtraclass = "selected";
		return;
		<div>
			<div id="trafficTop" />
			<div id="container">
				<div
					className={"red light " + redExtraclass}
					onClick={() => this.setState({ clickedLight: "red" })}
				/>
				<div
					className={"yellow light " + yellowExtraclass}
					onClick={() => this.setState({ clickedLight: "yellow" })}
				/>
				<div
					className={"green light " + greenExtraclass}
					onClick={() => this.setState({ clickedLight: "green" })}
				/>
			</div>
		</div>;
	}
}
