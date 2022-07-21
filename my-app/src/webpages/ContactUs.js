function ContactUs() {
  return (
    <div className="contactUs">
      <div className="ContactUsText">
        <div className="Headline">
          <h1>Contact Us!</h1>
        </div>
        <div className="paragrpahcontainer">
          <span className="paragraph">
            For a better and faster customer service, we suggest you to contact
            us by email. Since we are short on staff, we will not be able to
            answer you right away via call.
          </span>
        </div>
      </div>
      <div className="right">
        <div className="emailAddress row">
          <p class="PECText">
            You can contact us by email or directly by phone. <br />
            <br />
            Email : <u>helpcenter@techu.ca</u>
            <br />
            Phone: (321)-654-0987
          </p>
        </div>
      </div>
      <div className="faq">
        <div className="accordion" id="accordionExample">
          <div className="faqtext">
            <h3>Frequently Asked Questions (FAQ)</h3>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                Do we get a certification after completing a course?
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <strong>YYEEESSSS, ABSOLUTELY!</strong> After completin a course
                you will get a certification for it, so that you can use it in
                your resumé or show it off to other people. ;)
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                Can cancel my purchase or get funded if I regret my choice?
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <strong>Yes!</strong> After you purchased a course you'll have
                30 days to ask for a repayment.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                Why would I take your courses instead of going to university?
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <strong>Good question.</strong> Firstly, if you already know
                that you want to work in the realm of Extended Reality (XR) then
                you don't need to go to university. Secondly, you'll learn
                efficiently through our courses, because we offer you a lot of
                oppurtunity to put your knowledge in practice.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingFour">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseFour"
                aria-expanded="false"
                aria-controls="collapseFour"
              >
                How can we trust you and your courses?
              </button>
            </h2>
            <div
              id="collapseFour"
              className="accordion-collapse collapse"
              aria-labelledby="headingFour"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <strong>Hmmm, interesting question!</strong> Well, our founders
                have gained a lot of experience in their respectif fields. For
                Example, <strong>Hossein H.</strong> is currently the CEO and
                Co-Founder of <strong>BB Inc.</strong>. Our founders wanted to
                share their knowledge and experience with the world through this
                courses.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ContactUs;
