function Registration() {
  return (
    <>
      <div className="registration-wrap limit__content">
        <form className="registrationForm" action="#">
          <div className="registrationFormItems">
            <div className="registrationTitle">Your Name</div>
            <input
              className="registrationInput"
              type="text"
              placeholder="First Name"
            />
            <input
              className="registrationInput"
              type="text"
              placeholder="Last Name"
            />
          </div>
          <div className="registrationRadio">
            <input type="radio" name="radio" />
            <span className="registrationRadioText">Male</span>
            <input type="radio" name="radio" />
            <span className="registrationRadioText">Female</span>
          </div>

          <div className="registrationFormItems">
            <div>Login details</div>
            <input
              className="registrationInput"
              type="email"
              placeholder="Email"
            />
            <input
              className="registrationInput"
              type="password"
              placeholder="Password"
            />
          </div>
          <p className="registratioDiscription">
            Please use 8 or more characters, with at least 1 number and a
            mixture of uppercase and lowercase letters
          </p>
          <button className="registrationButton">
            JOIN NOW <img src="img/arrow.svg" alt="arrow" />
          </button>
        </form>
        <div className="registrationPerks">
          <div className="registrationPerksTitle">LOYALTY HAS ITS PERKS</div>
          <p>
            Get in on the loyalty program where you can earn points and unlock
            serious perks. Starting with these as soon as you join:
          </p>
          <ul className="registrationList">
            <li>15% off welcome offer</li>
            <li>Free shipping, returns and exchanges on all orders</li>
            <li>$10 off a purchase on your birthday</li>
            <li>Early access to products</li>
            <li>Exclusive offers & rewards</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Registration;
