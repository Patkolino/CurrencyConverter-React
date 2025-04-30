import './style.css';

function App() {
  return (
    <form className="form">
      <fieldset className="form__fieldset">
        <legend className="form__legend">Currency converter</legend>
        <p>
          <label className="form__label">Choose currency *
            <select className="form__select" name="currency">
              <option title="Euro" value="EUR">EUR</option>
              <option title="United States dollar" value="USD">USD</option>
              <option title="British pound sterling" value="GBP">GBP</option>
              <option title="Polish zloty" value="PLN">PLN</option>
            </select>
          </label>
        </p>
        <p>
          <label className="form__label">Insert amount*
            <input className="form__field" type="number" placeholder="Insert amount" required min="1" step="1" name="amount" title="Insert amount you want to convert" />
          </label>
        </p>
        <p>
          <span className="form__span">Select currency to which you want to convert*</span>
          <input className="form__radio" type="radio" id="form__radio1" name="desiredCurrency" value="EUR" required title="Euro" />
          <label for="form__radio1" title="Euro">EUR</label>
          <input className="form__radio" type="radio" id="form__radio2" name="desiredCurrency" value="USD" title="United States dollar" />
          <label for="form__radio2" title="United States dollar">USD</label>
          <input className="form__radio" type="radio" id="form__radio3" name="desiredCurrency" value="GBP" title="British pound sterling" />
          <label for="form__radio3" title="British pound sterling">GBP</label>
          <input className="form__radio" type="radio" id="form__radio4" name="desiredCurrency" value="PLN" title="Polish zloty" />
          <label for="form__radio4" title="Polish zloty">PLN</label>
        </p>

        <div className="form__container">
          <button className="form__button form__button--convert">Convert</button>
          <button className="form__button form__button--clear" type="reset">Clear fields</button>
        </div>

        <p className="form__paragraph form__paragraph--hidden">For <strong></strong> you will receive <strong ></strong></p>
      </fieldset>
    </form>
  );
}

export default App;