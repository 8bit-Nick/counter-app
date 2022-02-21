import "./button.css";

import React from "react";

type ButtonPropsType = {
	name: string;
	disabled: boolean;
	counter: number;
	maxCount: number;
	callback: () => void;
};

const Button: React.FC<ButtonPropsType> = (props) => {
	return (
		<div className="button-body">
			<button
				className={"btn"}
				onClick={props.callback}
				disabled={props.disabled}
			>
				{props.name}
			</button>
		</div>
	);
};

export default Button;
