import rates from "./rates";
import { useState } from "react";
import FromCurrency from "./fromCurrency";
import AmountInput from "./amountInput";
import DesiredCurrency from "./desiredCurrency";
import Result from "./result";
import "./style.css";

const CurrencyForm = () => {
    const [fromCurrency, setFromCurrency] = useState("EUR");
    const [amount, setAmount] = useState("");
    const [toCurrency, setToCurrency] = useState();
    const [result, setResult] = useState();

    const onSubmit = (event) => {
        event.preventDefault();

        if (fromCurrency === toCurrency) {
            alert("Please choose different currency");
            return;
        }

        const rate = rates[fromCurrency][toCurrency];
        const converted = amount * rate;

        setResult({
            inputAmount: +amount,
            from: fromCurrency,
            to: toCurrency,
            outputAmount: converted.toFixed(2),
        });
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
                        value={fromCurrency}
                        onChange={({ target }) => setFromCurrency(target.value)}
                    />
                </>

                <p>
                    <AmountInput
                        value={amount}
                        onChange={({ target }) => setAmount(target.value)}
                    />
                </p>

                <div>
                    <DesiredCurrency
                        toCurrency={toCurrency}
                        setToCurrency={setToCurrency}
                    />
                </div>

                <div className="form__buttons">
                    <button className="form__button form__button--convert">Convert</button>
                    <button onClick={formReset} className="form__button form__button--clear" type="reset">Clear fields</button>
                </div>

                <Result result={result} />

            </fieldset>
        </form>
    );
}

export default CurrencyForm;