import { Container, Form, TitleAndButtonContainer, Error } from "./style";
import emailjs from "emailjs-com";
import { useState } from "react";
import { Curly } from "../Curly";

export const Contact = () => {
  const [senderEmail, setSenderEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [isSent, setSent] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    let templateParams = {
      senderEmail: senderEmail,
      subject: subject,
      message: message,
    };

    if (senderEmail === "") {
      setError("Email should not be Empty!");
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
            setSent(true);
            setSenderEmail("");
            setSubject("");
            setMessage("");
            setError('');
          },
          function (error) {
            console.log("FAILED...", error);
          }
        );
    }
  };

  return (
    <div>
      <Curly />
      <Container>
        <div data-aos="zoom-in-up" id="contact">
          <Form onSubmit={onSubmit}>
            <TitleAndButtonContainer>
              <h3>Don't be shy, say Hi! 😀</h3>
            </TitleAndButtonContainer>
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

            <Error>{error}</Error>

            <TitleAndButtonContainer>
              <button>Send</button>
            </TitleAndButtonContainer>
          </Form>
        </div>
      </Container>
    </div>
  );
};
