import "./style.css";

const Result = ({ result }) => (
    <p className="result">
        {result &&
            <>
                For <strong>{result.inputAmount} {result.from}</strong> you will receive{" "}
                <strong>{result.outputAmount} {result.to}</strong>.
            </>
        }
    </p>
);

export default Result;