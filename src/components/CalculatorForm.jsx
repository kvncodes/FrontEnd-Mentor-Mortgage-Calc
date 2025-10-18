import Form from "./Form";
import { useState } from "react";

const CalculatorForm = ({ setResult }) => {
	const [formData, setFormData] = useState({
		amount: "",
		term: "",
		rate: "",
		type: "",
	});

	const handleClick = () => {
		setResult({
			monthly: "",
			total: "",
		});

		setFormData({
			amount: "",
			term: "",
			rate: "",
			type: "",
		});
	};

	return (
		<div className="calculator-container">
			<div className="header">
				<h1>Mortgage Calculator</h1>
				<button onClick={handleClick} className="clear-btn">
					Clear All
				</button>
			</div>

			<Form
				setResult={setResult}
				formData={formData}
				setFormData={setFormData}
			/>
		</div>
	);
};
export default CalculatorForm;
