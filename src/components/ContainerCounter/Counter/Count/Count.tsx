import "./count.css";

import React from "react";

type CountPropsType = {
	counter: number;
	maxCount: number;
};

const Count: React.FC<CountPropsType> = (props) => {
	return (
		<div
			className={
				props.counter === props.maxCount ? "max + counter-body" : "counter-body"
			}
		>
			<div className="counter">{props.counter}</div>
		</div>
	);
};

export default Count;
