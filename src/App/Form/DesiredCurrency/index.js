import currencies from '../../currencies';

const DesiredCurrency = ({ toCurrency, setToCurrency }) => (
    <>
        <span>Select currency to which you want to convert*</span>
        <div className="form__container">
            {currencies.map(({ currency, title }, index) => (
                <span className="form__span" key={currency}>
                    <input
                        className="form__radio"
                        type="radio"
                        required
                        id={`form__radio${index}`}
                        name="desiredCurrency"
                        value={currency}
                        checked={currency === toCurrency}
                        onChange={({ target }) => setToCurrency(target.value)}
                    />
                    <label htmlFor={`form__radio${index}`} title={title}>{currency}</label>
                </span>
            ))}
        </div>
    </>
);

export default DesiredCurrency;