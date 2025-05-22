import { Wrapper } from "./styled";

const Result = ({ result }) => (
    <Wrapper>
        {result &&
            <>
                For <strong>{result.inputAmount} {result.from}</strong> you will receive{" "}
                <strong>{result.outputAmount} {result.to}</strong>.
            </>
        }
    </Wrapper>
);

export default Result;