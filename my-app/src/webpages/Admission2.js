function Admission2() {
  return (
    <div className="step2">
      <div className="progressBar">
        <div className="step1Text">
          <h3>Enrollment Form</h3>
        </div>
        <div className="progress">
          <div
            className="progress-bar"
            role="progressbar"
            style={{ width: "66.6%" }}
            aria-valuenow="66.6"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
        <div className="step1Text2">
          <h5>Step 2 of 3 - Payment Method</h5>
        </div>
      </div>
      <div className="paymentMethod">
        <div className="cardHolderInfo">
          <form className="row g-3 needs-validation" novalidate>
            <div className="col-md-3">
              <label for="validationCustom01" className="form-label">
                First name
              </label>
              <input
                type="text"
                className="form-control"
                id="validationCustom01"
                placeholder="John"
                required
              />
              <div className="valid-feedback">Looks good!</div>
            </div>
            <div className="col-md-3">
              <label for="validationCustom02" className="form-label">
                Last name
              </label>
              <input
                type="text"
                className="form-control"
                id="validationCustom02"
                placeholder="Doe"
                required
              />
              <div className="valid-feedback">Looks good!</div>
            </div>
            <div class="col-6">
              <label for="inputBirthDate" class="form-label">
                Date of Birth
              </label>
              <input
                type="date"
                class="form-control"
                id="inputBirthDate"
                placeholder="YYYY/MM/DD"
                required
              />
              <div class="invalid-feedback">
                Please enter the following format YYYY/MM/DD
              </div>
            </div>
            <div className="col-md-6">
              <label for="validationCustom01" className="form-label">
                Email Address
              </label>
              <input
                type="text"
                className="form-control"
                id="validationCustom01"
                placeholder="name@example.com"
                required
              />
              <div className="valid-feedback">Looks good!</div>
            </div>
            <div className="col-md-6">
              <label for="validationCustom01" className="form-label">
                Card Holder Name
              </label>
              <input
                type="text"
                className="form-control"
                id="validationCustom01"
                placeholder="Name on Card"
                required
              />
              <div className="valid-feedback">Looks good!</div>
            </div>
            <div className="col-md-6">
              <label for="validationCustom01" className="form-label">
                Card Number
              </label>
              <input
                type="text"
                className="form-control"
                id="validationCustom01"
                placeholder="0000000000000000"
                required
              />
              <div className="valid-feedback">Looks good!</div>
            </div>
            <div className="col-md-3">
              <label for="validationCustom01" className="form-label">
                Expiration Date
              </label>
              <input
                type="text"
                className="form-control"
                id="validationCustom01"
                placeholder="YY/MM"
                required
              />
              <div className="valid-feedback">Looks good!</div>
            </div>
            <div className="col-md-3">
              <label for="validationCustom02" className="form-label">
                CVC
              </label>
              <input
                type="text"
                className="form-control"
                id="validationCustom02"
                placeholder="123"
                required
              />
              <div className="valid-feedback">Looks good!</div>
            </div>
            <div className="col-md-4">
              <label for="validationCustom03" className="form-label">
                City
              </label>
              <input
                type="text"
                className="form-control"
                id="validationCustom03"
                required
              />
              <div className="invalid-feedback">
                Please provide a valid city.
              </div>
            </div>
            <div className="col-md-4">
              <label for="validationCustom04" className="form-label">
                State
              </label>
              <select className="form-select" id="validationCustom04" required>
                <option selected disabled value="">
                  Choose...
                </option>
                <option>Alberta</option>
                <option>British Columbia.</option>
                <option>Manitoba</option>
                <option>New-Brunswick</option>
                <option>Newfoundland and Labrador</option>
                <option>Northwest Territories</option>
                <option>Nova Scotia</option>
                <option>Nunavut</option>
                <option>Ontario</option>
                <option>Prince Edward Island</option>
                <option>Québec</option>
                <option>Saskatchewan</option>
                <option>Yukon</option>
              </select>
              <div className="invalid-feedback">
                Please select a valid state.
              </div>
            </div>
            <div className="col-md-4">
              <label for="validationCustom05" className="form-label">
                Zip
              </label>
              <input
                type="text"
                className="form-control"
                id="validationCustom05"
                required
              />
              <div className="invalid-feedback">
                Please provide a valid zip.
              </div>
            </div>
            <div className="col-12">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="invalidCheck"
                  required
                />
                <label className="form-check-label" for="invalidCheck">
                  Agree to terms and conditions
                </label>
                <div className="invalid-feedback">
                  You must agree before submitting.
                </div>
              </div>
            </div>
            <div className="col-12">
              <button className="btn btn-primary" type="submit">
                <a href="/Admission3">Submit form</a>
              </button>
            </div>
          </form>
        </div>
        <div className="programInfo"></div>
      </div>
    </div>
  );
}
export default Admission2;
