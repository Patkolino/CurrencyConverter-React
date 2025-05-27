import rates from "../rates";
import { useState } from "react";
import FromCurrency from "./FromCurrency";
import DesiredCurrency from "./DesiredCurrency";
import Result from "./Result/result";
import Clock from "../Clock";
import { Wrapper, Field, Title, LabelText, ButtonsWrapper, Button, FormField, ErrorMessage, ErrorWrapper } from "./styled";
import { useError } from "./useError";

const calculateResult = (amount, from, to, rates) => {
    if (from === to) {
        return null;
    }

    const rate = rates[from][to];
    const outputAmount = (amount * rate).toFixed(2);

    return {
        inputAmount: +amount,
        from,
        to,
        outputAmount,
    }
};

const Form = () => {
    const [fromCurrency, setFromCurrency] = useState("EUR");
    const [amount, setAmount] = useState("");
    const [toCurrency, setToCurrency] = useState();
    const [result, setResult] = useState();
    const [error, setError] = useError();

    const onSubmit = (event) => {
        event.preventDefault();
        const result = calculateResult(amount, fromCurrency, toCurrency, rates);

        if (!result) {
            setError("⚠️ From and to currency must be different!");
            return;
        }

        setError("");
        setResult(result);
    };

    const formReset = () => {
        setAmount("");
        setFromCurrency("EUR");
        setToCurrency();
        setResult();
        setError("");
    };

    return (
        <Wrapper onSubmit={onSubmit}>
            <Clock />
            <Field>
                <Title>Currency converter</Title>
                <>
                    <FromCurrency
                        fromCurrency={fromCurrency}
                        onChange={({ target }) => setFromCurrency(target.value)}
                    />
                </>

                <p>
                    <LabelText>Insert amount*
                        <FormField
                            type="number"
                            required
                            min="1"
                            step="1"
                            placeholder="Insert amount"
                            name="amount"
                            value={amount}
                            onChange={({ target }) => setAmount(target.value)}
                        />
                    </LabelText>
                </p>

                <ErrorWrapper>
                    <DesiredCurrency
                        toCurrency={toCurrency}
                        setToCurrency={setToCurrency}
                    />
                    {error && <ErrorMessage>{error}</ErrorMessage>}
                </ErrorWrapper>

                <ButtonsWrapper>
                    <Button $convert>Convert</Button>
                    <Button onClick={formReset} type="button" $clear>Clear fields</Button>
                </ButtonsWrapper>

                <Result result={result} />

            </Field>
        </Wrapper>
    );
}

export default Form;