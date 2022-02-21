import "./counter.css";

import React from "react";
import Count from "./Count/Count";
import Button from "./Button/Button";

type CounterPropsType = {
	counter: number;
	maxCount: number;
	counterHandler: () => void;
	resetCounter: () => void;
};

const Counter: React.FC<CounterPropsType> = (props) => {
	return (
		<div className="wrapper">
			<Count counter={props.counter} maxCount={props.maxCount} />
			<div className="button-body">
				<Button
					name="INC"
					disabled={props.counter === props.maxCount}
					counter={props.counter}
					maxCount={props.maxCount}
					callback={props.counterHandler}
				/>
				<Button
					name="RESET"
					disabled={props.counter < 1}
					counter={props.counter}
					maxCount={props.maxCount}
					callback={props.resetCounter}
				/>
			</div>
		</div>
	);
};

export default Counter;
