
function Footer() {
	return ( <>
	<footer className="footer">
          <div className="footer__content">
            <div className="footer__wrap limit__content">
              <div className="img__comment">
                <img src="img/comment.png" alt="comment" />
                <div className="comment">
                  “Vestibulum quis porttitor dui! Quisque viverra nunc mi, a
                  pulvinar purus condimentum“
                </div>
              </div>
              <div className="subscribe">
                <div className="subscribe__title">
                  SUBSCRIBE
                  <br />
                  FOR OUR NEWLETTER AND PROMOTION
                </div>
                <form className="input__footer">
                  <input
                    className="input"
                    type="email"
                    placeholder="Enter Your Email"
                  />
                  <button className="subscribe__btn" type="submit">
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className="footer__bottom">
            <div className="footer__reserved limit__content">
              <div className="reserved">© 2021 Brand All Rights Reserved.</div>
              <div className="social">
                <img src="img/facebook.svg" alt="facebook" />
                <img src="img/instagramm.svg" alt="instagramm" />
                <img src="img/Pinterest.svg" alt="Pinterest" />
                <img src="img/tweeter.svg" alt="tweeter" />
              </div>
            </div>
          </div>
        </footer>
	</> );
}

export default Footer;