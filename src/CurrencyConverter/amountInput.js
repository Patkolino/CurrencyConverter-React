const AmountInput = ({ value, onChange }) => (
    <label className="form__label">Insert amount*
        <input
            className="form__field"
            type="number"
            required
            min="1"
            step="1"
            placeholder="Insert amount"
            name="amount"
            value={value}
            onChange={onChange}
        />
    </label>
);

export default AmountInput;