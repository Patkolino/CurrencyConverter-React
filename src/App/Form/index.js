import rates from "../rates";
import { useState } from "react";
import FromCurrency from "./FromCurrency";
import DesiredCurrency from "./DesiredCurrency";
import Result from "./Result/result";
import Clock from "../Clock";
import { Wrapper, Field, Title, LabelText, ButtonsWrapper, Button, FormField } from "./styled";

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

    const onSubmit = (event) => {
        event.preventDefault();

        const result = calculateResult(amount, fromCurrency, toCurrency, rates);

        if (!result) {
            alert("From and to currency must be different!");
            return;
        }

        setResult(result);
    };

    const formReset = () => {
        setAmount("");
        setFromCurrency("EUR");
        setToCurrency();
        setResult();
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

                <div>
                    <DesiredCurrency
                        toCurrency={toCurrency}
                        setToCurrency={setToCurrency}
                    />
                </div>

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