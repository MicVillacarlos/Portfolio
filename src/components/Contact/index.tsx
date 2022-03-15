import { Container,Form,TitleAndButtonContainer} from './style'
import emailjs from 'emailjs-com';
import { useState } from 'react';
import { Curly } from '../Curly'


export const Contact = () => {
const [senderEmail,setSenderEmail] = useState('')
const [subject, setSubject] = useState('')
const [message,setMessage] = useState('')


  const onSubmit =(e:React.FormEvent)=>{
    e.preventDefault()

    let templateParams = {
      senderEmail: senderEmail,
      subject: subject,
      message: message
      };
   
    emailjs.send("service_hvulxqr","template_wqufufj", templateParams,
    "m-m1mHmXoS2R-8-H5")
      .then(function(response) {
         console.log('SUCCESS!', response.status, response.text);
      }, function(error) {
         console.log('FAILED...', error);
      });
    
    setSenderEmail('');
    setSubject('');
    setMessage('');
  }

  return (
    <div>
      <Curly/>
      <Container>
        <div data-aos="zoom-in-up" id='contact'>
          <Form onSubmit={onSubmit}>
            <TitleAndButtonContainer>
              <h3>Don't be shy, say Hi! 😀</h3>
            </TitleAndButtonContainer>
            <label>Your Email</label>
              <input 
                value={senderEmail} 
                onChange={(e)=>setSenderEmail(e.target.value)}/>
            <label>Subject</label>
              <input 
                value={subject} 
                onChange={(e)=>setSubject(e.target.value)}/>
            <label>Message</label>
              <textarea 
                value={message} 
                onChange={(e)=>setMessage(e.target.value)}/>
            <TitleAndButtonContainer>
              <button>Send</button>
            </TitleAndButtonContainer>
          </Form>
        </div>
      </Container> 
    </div>   
  );
};
