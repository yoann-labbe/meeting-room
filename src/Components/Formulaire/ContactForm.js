import React from "react";
import { useState } from "react";
import { TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";


const useStyles = makeStyles((theme) => ({
    button: {
      borderRadius: "45px",
      backgroundColor: "#cf9f25",
      color: "white",
      width: "225px",
      height: "45px",
      border: "none",
      outline: "none",
      shadow: "none",
      marginTop: "20px",
      marginBottom: "10px",
      marginLeft:"50px",
      textTransform: "uppercase",
      "&:hover": {
        backgroundColor: "#FFC93C",
      },
    },
  }));

const ContactForm = () => {
  const classes = useStyles();
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  //const [value, setValue] = React.useState(new Date());


  const handleSubmit = (e) => {
    e.preventDefault();
    let nameS = document.getElementById("name");
    let emailS = document.getElementById("email");
    let messageS = document.getElementById("message");
    let formMess = document.querySelector(".form-message");

    const isEmail = () => {
      let isMail = document.getElementById("not-mail");
      let regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

      if (email.match(regex)) {
        isMail.style.display = "none";
        return true;
      } else {
        isMail.style.display = "block";
        isMail.style.animation = "dongle 1s";
        setTimeout(() => {
          isMail.style.animation = "none";
        }, 1000);
        return false;
      }
    };

    if (name && isEmail() && message) {
      const templateId = "template_45djblq";
      const serviceID = "gmail";
 

    //   nameS.classList.remove("red");
    //   emailS.classList.remove("red");
    //   messageS.classList.remove("red");

      sendFeedback(serviceID, templateId, {
        name,
        company,
        phone,
        email,
        message,
      });
    } else {
      formMess.innerHTML = "Merci de remplir correctement les champs requis *";
      formMess.style.background = "rgb(253, 87, 87)";
      formMess.style.opacity = "1";

      if (!name) {
        nameS.classList.add("error");
      }
      if (!email) {
        emailS.classList.add("error");
      }
      if (!message) {
        messageS.classList.add("error");
      }
    }
  };

  const sendFeedback = (serviceID, templateId, variables) => {
    let formMess = document.querySelector(".form-message");

    window.emailjs
      .send(serviceID, templateId, variables)
      .then((res) => {
        formMess.innerHTML =
          "Message envoyé ! ";
        formMess.style.background = "#00c1ec";
        formMess.style.opacity = "1";

        document.getElementById("name").classList.remove("error");
        document.getElementById("email").classList.remove("error");
        document.getElementById("message").classList.remove("error");
        setName("");
        setCompany("");
        setPhone("");
        setEmail("");
        setMessage("");

        setTimeout(() => {
          formMess.style.opacity = "0";
        }, 5000);
      })
      .catch(
        (err) =>
          (formMess.innerHTML =
            "Une erreur s'est produite, veuillez réessayer.")
      );
  };

  return (
    <div>
    <form >
      <h2 style={{ display:"flex", justifyContent:"center"}}>Réservation</h2>
      
      <TextField
      style={{display:"flex", marginBottom: "5px"}}
        id="outlined-basic"
        label="Société" 
        variant="outlined"
        type="text"
        onChange={(e) => setCompany(e.target.value)}
        placeholder="Société"
        value={company}
        />

        <TextField
        style={{display:"flex", marginBottom: "5px"}}
          id="outlined-basic"
          label="Nom" 
          variant="outlined"
          type="text"
          required
          onChange={(e) => setName(e.target.value)}
          placeholder="Nom *"
          value={name}
        />

        <TextField
        style={{display:"flex", marginBottom: "5px"}}
          id="outlined-basic"
          label="Téléphone" 
          variant="outlined"
          type="text"
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Téléphone"
          value={phone}
        />
       
        <div className="email-content">
          <label id="not-mail">Email non valide</label>
          <TextField
          style={{display:"flex", marginBottom: "5px"}}
            id="outlined-basic"
            label="Email" 
            variant="outlined"
            type="mail"
            required
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email *"
            value={email}
          />
        </div>
        <TextField
        style={{display:"flex", marginBottom: "5px"}}
          id="outlined-multiline-static"
          label="Message"
          variant="outlined"
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Message *"
          value={message}
          required
        />
      <button className={classes.button} 
      onClick={handleSubmit}    
      type="submit"
      value="envoyer">Envoyer</button>
      <div className="form-message"></div>

    </form>
   
    </div>
  );
};

export default ContactForm;