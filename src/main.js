import "./style.css";
import { Test } from "./test.js";

const defaultDon = "1.0";

document.querySelector("#app").innerHTML = `
  <div>
    
    <h1>Faites un don</h1>
<fieldset>
  <legend>Selectioner un montant</legend>

  <div>
    <input type="radio" id="don_1" name="dons" value="${defaultDon}" checked />
    <label for="don_1">1€</label>
  </div>

  <div>
    <input type="radio" id="don_2" name="dons" value="2.0" />
    <label for="don_2">2€</label>
  </div>

  <div>
    <input type="radio" id="don_5" name="dons" value="5.0" />
    <label for="don_5">5€</label>
  </div>
</fieldset>


  
    <p class="read-the-docs">
      Scanner le qr code avec votre application bancaire,
    </p>
    <canvas id="canvas"></canvas>
  </div>
`;

document.querySelectorAll(`input[type="radio"]`).forEach((elem) => {
	elem.addEventListener("input", (e) => {
		Test(document.querySelector("#canvas"), e.target.value);
	});
});

Test(document.querySelector("#canvas"), defaultDon);
