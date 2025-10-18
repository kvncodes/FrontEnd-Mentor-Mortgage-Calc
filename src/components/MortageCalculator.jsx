import CalculatorForm from "./CalculatorForm";
import Results from "./Results";

import { useState } from "react";

const MortageCalculator = () => {
	const [result, setResult] = useState({
		monthly: "",
		total: "",
	});

	return (
		<section className="mortage-calc-container">
			<CalculatorForm setResult={setResult} />

			<Results monthly={result.monthly} total={result.total} />
		</section>
	);
};

export default MortageCalculator;
