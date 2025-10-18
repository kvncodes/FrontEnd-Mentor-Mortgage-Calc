import { useEffect } from "react";
import illustrationEmpty from "../assets/images/illustration-empty.svg";

const Results = ({ monthly, total }) => {
	return monthly === "" && total === "" ? (
		<div className="results-container">
			<img className="result-image" src={illustrationEmpty} />
			<h2 style={{ textAlign: "center" }}>Results shown here</h2>
			<p style={{ textAlign: "center" }}>
				Complete the form and click “calculate repayments” to see what
				your monthly repayments would be.
			</p>
		</div>
	) : (
		<div className="results-container" style={{ justifyContent: "start" }}>
			<h2>Your results</h2>
			<p>
				Your results are shown below based on the information you
				provided. To adjust the results, edit the form and click
				“calculate repayments” again.
			</p>

			<div className="result-display">
				<div className="result-group">
					<p>Your monthly repayments</p>
					<h3 className="monthly">&pound;{monthly}</h3>
				</div>
				<hr className="line" />
				<div className="result-group">
					<p>Total you'll repay over the term</p>
					<h3 className="total">&pound;{total}</h3>
				</div>
			</div>
		</div>
	);
};

export default Results;
