import * as S from "./style";
import emailjs from "emailjs-com";
import { useEffect, useState } from "react";
import { Curly } from "../Curly";

export const Contact = () => {
  const [senderEmail, setSenderEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [isSent, setIsSent] = useState(false);
  const [isHide, setIsHide] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const regexExp =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/gi;

    let templateParams = {
      senderEmail: senderEmail,
      subject: subject,
      message: message,
    };

    setIsHide(true);
    if (senderEmail === "") {
      setError("Email should not be Empty!");
    } else if (!regexExp.test(senderEmail)) {
      setError("Please enter a valid Email");
    } else if (subject === "") {
      setError("Subject should not be Empty!");
    } else if (message === "") {
      setError("Message should not be Empty!");
    } else {
      emailjs
        .send(
          "service_hvulxqr",
          "template_wqufufj",
          templateParams,
          "m-m1mHmXoS2R-8-H5"
        )
        .then(
          function (response) {
            console.log("SUCCESS!", response.status, response.text);
            setSenderEmail("");
            setSubject("");
            setMessage("");
            setIsSent(true);
            setError("SUCCESS");
          },
          function (error) {
            setError("ERROR Sending message");
            console.log("FAILED...", error);
          }
        );
    }
  };

  useEffect(() => {
    if (isSent) {
      setTimeout(() => {
        setIsSent(false);
        setError("");
      }, 4000);
    }

    if (error) {
      setTimeout(() => {
        setError("");
      }, 4000);
    }

    if (isHide) {
      setTimeout(() => {
        setIsHide(false);
      }, 3000);
    }
  }, [isSent, error, isHide]);

  return (
    <div>
      <Curly />
      <S.Container>
        <div data-aos="zoom-in-up" id="contact">
          <S.Form onSubmit={onSubmit}>
            <S.TitleAndButtonContainer>
              <h3>Don't be shy, say Hi! 😀</h3>
            </S.TitleAndButtonContainer>
            <label>Your Email</label>
            <input
              value={senderEmail}
              onChange={(e) => setSenderEmail(e.target.value)}
            />
            <label>Subject</label>
            <input
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
            <label>Message</label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />

            <S.Error isSuccess={isSent}>{error}</S.Error>
            {!isHide && (
              <S.TitleAndButtonContainer>
                <button>Send</button>
              </S.TitleAndButtonContainer>
            )}
          </S.Form>
        </div>
      </S.Container>
    </div>
  );
};
