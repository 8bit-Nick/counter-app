import React, { useState } from "react";
import Counter from "./Counter/Counter";

function ContainerCounter() {
	let [counter, setCounter] = useState(0);

	const maxCount = 5;

	const counterHandler = () => {
		setCounter(counter + 1);
		if (counter === maxCount) {
			setCounter(maxCount);
		}
	};
	const resetCounter = () => {
		setCounter(0);
	};

	return (
		<div>
			<Counter
				counter={counter}
				maxCount={maxCount}
				counterHandler={counterHandler}
				resetCounter={resetCounter}
			/>
		</div>
	);
}

export default ContainerCounter;
