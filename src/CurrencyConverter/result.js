const Result = ({ result }) => (
    <p className="form__paragraph">
        {result ?
            <>
                For <strong>{result.inputAmount} {result.from}</strong> you will receive{" "}
                <strong>{result.outputAmount} {result.to}</strong>.
            </>
            :
            <>&nbsp;</>
        }
    </p>
);

export default Result;