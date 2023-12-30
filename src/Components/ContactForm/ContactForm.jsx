import React, { useEffect, useRef, useState } from "react";
import { toast } from "react-hot-toast";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const form = useRef();
  const emailRef = useRef();
  const nameRef = useRef();
  const numRef = useRef();
  const textboxRef = useRef();
  const submitBtnRef = useRef();
  const [emailVerified, setEmailVerified] = useState(false);
  const [nameVerified, setNameVerified] = useState(false);
  const [numberVerified, setNumberVerified] = useState(true);
  const [textBoxVerified, setTextBoxVerified] = useState(false);
  const [tooShort, setTooShort] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(true);

  const emailValidator = (email) => {
    if (!email) {
      setEmailVerified(false);
      emailRef.current.style.borderColor = "#d9d9d9";
      return;
    }
    // const res = await fetch(`https://api.emailvalidation.io/v1/info?apikey=ema_live_hb2cAGkpZDGTRJGBwzmn46CwSx3662XqVVPrVINu&email=${email}`)
    // const result = await res.json()
    // console.log(result);
    // if (result.reason !== 'valid_mailbox') {
    //     emailRef.current.style.borderColor = 'red'
    //     setEmailVerified(false)
    // }
    // else {
    //     emailRef.current.style.borderColor = 'green'
    //     setEmailVerified(true)
    // }
    if (!email.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
      // toast.warn("Email Id is not valid")
      emailRef.current.style.borderColor = "red";
      setEmailVerified(false);
    } else {
      emailRef.current.style.borderColor = "green";
      setEmailVerified(true);
    }
  };

  const nameValidator = (name) => {
    if (!name) {
      nameRef.current.style.borderColor = "#d9d9d9";
      setNameVerified(false);
      return;
    }
    // if (!name.match(/^[A-Za-z]+$/) || !name.match(/^[a-zA-Z]+ [a-zA-Z]+$/)) {
    // if (name.startsWith(" ") || name.endsWith(" ")) {
    //     nameRef.current.style.borderColor = 'red'
    //     setNameVerified(false)
    // }
    else {
      nameRef.current.style.borderColor = "green";
      setNameVerified(true);
    }
  };

  const numberValidator = async (number) => {
    if (!number) {
      numRef.current.style.borderColor = "#d9d9d9";
      setNumberVerified(true);
      return;
    }
    // const res = await fetch(`http://apilayer.net/api/validate?access_key=2a9e2a1ba8fbe772ca83e9b9f29082d0&number=${number}&country_code=IN&format=1`)
    // const result = await res.json()
    // console.log(result);
    // if (result.valid) {
    //     numRef.current.style.borderColor = 'green'
    //     setNumberVerified(true)
    // }
    // else {
    //     setNumberVerified(false)
    //     numRef.current.style.borderColor = 'red'
    // }
  };

  const handlSubmission = (e) => {
    submitBtnRef.current.innerText = "Sending.....";
    emailRef.current.style.opacity = 0.5;
    numRef.current.style.opacity = 0.5;
    nameRef.current.style.opacity = 0.5;
    textboxRef.current.style.opacity = 0.5;
    e.preventDefault();
    emailjs
      .sendForm(
        "service_ro8oh0i",
        "template_btgybrg",
        form.current,
        "jYLOTl3Rkd-bMEbKQ"
      )
      .then(
        (result) => {
          // console.log(result.text);
          setEmailVerified(false);
          setNameVerified(false);
          setNumberVerified(true);
          setTextBoxVerified(false);
          setTooShort(false);
          setButtonDisabled(true);
          emailRef.current.value = "";
          nameRef.current.value = "";
          numRef.current.value = "";
          textboxRef.current.value = "";
          emailRef.current.style.borderColor = "#d9d9d9";
          numRef.current.style.borderColor = "#d9d9d9";
          nameRef.current.style.borderColor = "#d9d9d9";
          textboxRef.current.style.borderColor = "#d9d9d9";
          emailRef.current.style.opacity = 1;
          numRef.current.style.opacity = 1;
          nameRef.current.style.opacity = 1;
          textboxRef.current.style.opacity = 1;
          form.current.reset();
          toast.success("Message Successfully Sent");
          submitBtnRef.current.innerHTML = `Send Message <i class="fa-regular fa-paper-plane"></i>`;
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const buttonHover = () => {
    if (!numberVerified) {
      toast.error("Number is not valid");
    }
    if (!textBoxVerified && !tooShort) {
      toast.error("Message is not valid");
    }
    if (!emailVerified) {
      toast.error("Email Id is not valid");
    }
    if (tooShort) {
      toast.error("Message is too short");
    }
    if (!nameVerified) {
      toast.error("Name is not valid");
    }
  };

  const handleVerification = () => {
    if (emailVerified && nameVerified && textBoxVerified && numberVerified) {
      submitBtnRef.current.disabled = false;
      submitBtnRef.current.style.opacity = 1;
      submitBtnRef.current.style.cursor = "auto";
      submitBtnRef.current.classList.remove("no-hover");
      setButtonDisabled(false);
    } else {
      submitBtnRef.current.disabled = true;
      submitBtnRef.current.style.opacity = 0.2;
      submitBtnRef.current.style.cursor = "not-allowed";
      submitBtnRef.current.classList.add("no-hover");
      setButtonDisabled(true);
    }
  };

  useEffect(() => {
    handleVerification();
  }, []);
  useEffect(() => {
    handleVerification();
  }, [emailVerified, textBoxVerified, nameVerified, numberVerified]);

  return (
    <form
      ref={form}
      onSubmit={(e) => !buttonDisabled && handlSubmission(e)}
      className="contactForm"
    >
      <div className="field">
        <label htmlFor="Name">Name</label>
        <input
          autoComplete="off"
          ref={nameRef}
          type="text"
          id="Name"
          name="user_name"
          onChange={(e) => {
            nameValidator(e.target.value);
          }}
          placeholder="Insert Your Name"
        />
      </div>
      <div className="field">
        <label htmlFor="Email">Mail</label>
        <input
          autoComplete="on"
          ref={emailRef}
          type="email"
          id="Email"
          name="user_email"
          onChange={(e) => {
            emailValidator(e.target.value);
          }}
          placeholder="Insert Your Mail"
        />
      </div>
      <div className="field">
        <label htmlFor="Phone">Phone</label>
        <input
          autoComplete="off"
          ref={numRef}
          type="number"
          id="Phone"
          name="user_mobile"
          onChange={(e) => numberValidator(e.target.value)}
          placeholder="Phone (optional)"
        />
      </div>
      <div className="field">
        <label htmlFor="Message">Project</label>
        <textarea
          autoComplete="off"
          ref={textboxRef}
          id="Message"
          name="message"
          onChange={(e) => {
            if (e.target.value.length > 5) {
              document.querySelector("textarea").style.borderColor = "green";
              setTextBoxVerified(true);
              setTooShort(false);
            } else if (e.target.value.length > 0 && e.target.value.length < 6) {
              document.querySelector("textarea").style.borderColor = "red";
              setTextBoxVerified(false);
              setTooShort(true);
            } else {
              document.querySelector("textarea").style.borderColor = "#d9d9d9";
              setTextBoxVerified(false);
              setTooShort(false);
            }
          }}
          cols="30"
          rows="5"
          placeholder="Write Your Project"
        ></textarea>
      </div>
      <button
        onMouseEnter={() => buttonDisabled && buttonHover()}
        type="submit"
        ref={submitBtnRef}
      >
        Send Message <i className="fa-regular fa-paper-plane"></i>
      </button>
    </form>
  );
}
