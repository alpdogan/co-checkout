import "./styles/scss/style.scss";
import { useState } from 'react'

const CheckoutForm = () => {
  const [email, setEmail] = useState('');
  return (
  <div class="main">
    <div class="container">
      <form method="POST" id="checkout-form" class="checkout-form" action="#">
        <div>
          <fieldset>
            <input type="text" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} onBlur={(e) => { setEmail('') }}  />
            <label for="email" class="form-label">
              01. Your email
            </label>
          </fieldset>
        </div>
      </form>
    </div>
  </div>
)};

function App() {
  return (
    <div className="App">
      <CheckoutForm></CheckoutForm>
    </div>
  );
}

export default App;
