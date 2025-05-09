import currencies from "../../currencies";

const FromCurrency = ({ fromCurrency, onChange }) => (
    <label className="form__label">Choose currency*
        <select
            className="form__select"
            name="currency"
            value={fromCurrency}
            onChange={onChange}
        >
            {currencies.map(({ currency, title }) => (
                <option key={currency} value={currency} title={title}>{currency}
                </option>
            ))}
        </select>
    </label>
);

export default FromCurrency;