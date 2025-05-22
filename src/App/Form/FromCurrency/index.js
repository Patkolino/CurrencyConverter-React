import currencies from "../../currencies";
import { Select, LabelText } from "./styled";

const FromCurrency = ({ fromCurrency, onChange }) => (
    <LabelText>Choose currency*
        <Select
            name="currency"
            value={fromCurrency}
            onChange={onChange}
        >
            {currencies.map(({ currency, title }) => (
                <option key={currency} value={currency} title={title}>{currency}
                </option>
            ))}
        </Select>
    </LabelText>
);

export default FromCurrency;