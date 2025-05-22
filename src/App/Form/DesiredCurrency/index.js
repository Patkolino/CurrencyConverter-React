import currencies from '../../currencies';

import { StyledText, Radios, Wrapper } from './styled';

const DesiredCurrency = ({ toCurrency, setToCurrency }) => (
    <>
        <span>Select currency to which you want to convert*</span>
        <Wrapper>
            {currencies.map(({ currency, title }, index) => (
                <StyledText key={currency}>
                    <Radios
                        type="radio"
                        required
                        id={`form__radio${index}`}
                        name="desiredCurrency"
                        value={currency}
                        checked={currency === toCurrency}
                        onChange={({ target }) => setToCurrency(target.value)}
                    />
                    <label htmlFor={`form__radio${index}`} title={title}>{currency}</label>
                </StyledText>
            ))}
        </Wrapper>
    </>
);

export default DesiredCurrency;