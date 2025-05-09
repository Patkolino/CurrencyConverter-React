import rates from "../rates";
import { useState } from "react";
import FromCurrency from "./FromCurrency";
import DesiredCurrency from "./DesiredCurrency";
import Result from "./Result/result";
import "./style.css";

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
        <form className="form" onSubmit={onSubmit}>
            <fieldset className="form__fieldset">
                <legend className="form__legend">Currency converter</legend>
                <>
                    <FromCurrency
                        fromCurrency={fromCurrency}
                        onChange={({ target }) => setFromCurrency(target.value)}
                    />
                </>

                <p>
                    <label className="form__label">Insert amount*
                        <input
                            className="form__field"
                            type="number"
                            required
                            min="1"
                            step="1"
                            placeholder="Insert amount"
                            name="amount"
                            value={amount}
                            onChange={({ target }) => setAmount(target.value)}
                        />
                    </label>
                </p>

                <div>
                    <DesiredCurrency
                        toCurrency={toCurrency}
                        setToCurrency={setToCurrency}
                    />
                </div>

                <div className="form__buttons">
                    <button className="form__button form__button--convert">Convert</button>
                    <button onClick={formReset} className="form__button form__button--clear" type="button">Clear fields</button>
                </div>

                <Result result={result} />

            </fieldset>
        </form>
    );
}

export default Form;