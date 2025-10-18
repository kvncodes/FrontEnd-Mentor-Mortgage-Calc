import calcIcon from "../assets/images/icon-calculator.svg";

const Form = ({ setResult, formData, setFormData }) => {
	const handleChange = (e) => {
		// Extract name (Input name : amount , term...) , value and type (number , radio) from e.target which is the input thats used
		const { name, value, type } = e.target;

		// Update form data
		setFormData((prev) => ({
			// Get Prev State
			...prev, // Add the old so nothing is deleted
			[name]: type === "number" ? Number(value) : value, // [name] is the input target name that with be updated if type of it is number and then this number is converted
		}));
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		const months = formData.term * 12;
		const monthlyInterestRate = formData.rate / 12 / 100;

		if (formData.type === "repayment") {
			setResult({
				monthly: parseFloat(
					(
						(formData.amount *
							(monthlyInterestRate *
								(1 + monthlyInterestRate) ** months)) /
						((1 + monthlyInterestRate) ** months - 1)
					).toFixed(2)
				),
				total: parseFloat(
					(
						((formData.amount *
							(monthlyInterestRate *
								(1 + monthlyInterestRate) ** months)) /
							((1 + monthlyInterestRate) ** months - 1)) *
						months
					).toFixed(2)
				),
			});
		} else if (formData.type === "interest") {
			setResult({
				monthly: parseFloat(
					(formData.amount * monthlyInterestRate).toFixed(2)
				),
				total: parseFloat(
					formData.amount * monthlyInterestRate * months +
						formData.amount
				).toFixed(2),
			});
		}
	};

	return (
		<form onSubmit={handleSubmit}>
			<div className="form-group">
				<div className="input-label-group">
					<label htmlFor="amount">Mortgage Amount</label>
					<div className="input-group">
						<div className="input-icon">
							<p>&pound;</p>
						</div>
						<input
							type="number"
							name="amount"
							id="amount"
							value={formData.amount}
							onChange={handleChange}
						/>
					</div>
				</div>

				<div className="flex-group">
					<div className="input-label-group">
						<label htmlFor="term">Mortgage Term</label>
						<div className="input-group">
							<input
								className="right-inp"
								type="number"
								name="term"
								id="term"
								value={formData.term}
								onChange={handleChange}
							/>
							<div className="input-icon right">
								<p>years</p>
							</div>
						</div>
					</div>

					<div className="input-label-group">
						<label htmlFor="rate">Interest Rate</label>
						<div className="input-group">
							<input
								className="right-inp"
								type="number"
								name="rate"
								id="rate"
								value={formData.rate}
								onChange={handleChange}
							/>
							<div className="input-icon right">
								<p>%</p>
							</div>
						</div>
					</div>
				</div>

				<div className="input-label-group">
					<label htmlFor="type">Mortgage Type</label>
					<div className="mortage-type-container">
						<div className="type-group">
							<input
								type="radio"
								name="type"
								id="repayment"
								value="repayment"
								checked={formData.type === "repayment"}
								onChange={handleChange}
							/>
							<label htmlFor="repayment">Repayment</label>
						</div>

						<div className="type-group">
							<input
								type="radio"
								name="type"
								id="interest"
								value="interest"
								checked={formData.type === "interest"}
								onChange={handleChange}
							/>
							<label htmlFor="interest">Interest Only</label>
						</div>
					</div>
				</div>

				<button className="calc-btn" type="submit">
					<img src={calcIcon} alt="Calculator Icon" />
					<p>Calculate Repayments</p>
				</button>
			</div>
		</form>
	);
};

export default Form;
