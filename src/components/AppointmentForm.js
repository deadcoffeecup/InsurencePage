import React from "react";
import styled from "styled-components";

const StyledForm = styled.form`
  grid-template-columns: 60%;
  margin-left: 20%;
  margin-right: 20%;
  margin-top: 5%;
  flex-direction: column;
  justify-content: center;
  display: flex;
  flex-flow: row wrap;
  background-color: #0090da;
  border-color: black;
  border-style: solid;
  border-radius: 20px;
`;

const StyledInput = styled.input`
  display: flex;
  min-width: 80%;
  border-radius: 10px;
  padding-top: 0.5em;
  padding-bottom: 0.5em;
  margin-top: 1em;
  font-size: 2em;
  text-align: center;
  border-style: none;
  ::placeholder {
    text-align: center;
    font-size: 1.5rem;
  }
  :focus {
    outline: none;
    border-color: #a4ce4e;
    border-style: solid;
    ::placeholder {
      font-size: 120%;
    }
  }
`;
const SubmitButton = styled(StyledInput)`
  justify-content: flex-start;
`;
class AppointmentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      phone: "",
      message: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    alert("Wysłano wiadomość, proszę czekać na telefon!");
    event.preventDefault();
  }

  render() {
    return (
      <StyledForm
        onSubmit={this.handleSubmit}
        action="https://formsubmit.co/adrian.golebiewski@agencja.metLife.pl"
        method="POST"
      >
        <StyledInput
          name="name"
          type="text"
          value={this.state.name}
          onChange={this.handleChange}
          placeholder="Imię"
        />
        <StyledInput
          name="email"
          type="email"
          value={this.state.email}
          onChange={this.handleChange}
          placeholder="e-mail"
        />
        <StyledInput
          name="phone"
          type="tel"
          value={this.state.phone}
          onChange={this.handleChange}
          placeholder="telefon"
        />
        <StyledInput
          name="message"
          type="text"
          value={this.state.message}
          onChange={this.handleChange}
          placeholder="preferowane godziny kontaktu"
        />
        <SubmitButton type="submit" value="Wyślij!" />
        <h6>
          Administratorem Pana/Pani danych jest firma Adrian Gołębiewski MetLife
          z siedzibą w Gdańsku, ul. Rogalińska 11A, 80-809 Gdańsk.
        </h6>
      </StyledForm>
    );
  }
}
export default AppointmentForm;
