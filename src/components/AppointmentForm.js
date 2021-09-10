import React from "react";
import styled from "styled-components";
import { StyledHeader } from "../components/Layout";

const StyledForm = styled.form`
  text-align: center;
  flex-direction: column;
  margin-left: 20%;
  margin-right: 20%;
  margin-top: 5%;
  display: flex;
  background-color: white;
  box-shadow: 0 0.5rem 1rem rgb(0 0 0 / 15%);
`;

const StyledInput = styled.input`
  display: flex;
  padding-top: 1rem;
  padding-bottom: 1rem;
  margin: 3%;
  margin-left: 4rem;
  margin-right: 4rem;
  font-size: 2em;
  text-align: center;
  border-style: none;
  box-shadow: 0 0.5rem 1rem rgb(0 0 0 / 15%);
  ::placeholder {
    text-align: center;
    font-size: 1.5rem;
  }
  :focus {
    border: none;
    outline-color: lightgray;
    outline-style: solid;
    ::placeholder {
      color: white;
    }
  }
`;
const SubmitButton = styled.button`
  border-style: none;
  border-radius: 15px;
  max-width: 20%;
  min-width: 70px;
  border-color: #0066a2;
  font: bold 2em arial, sans-serif;
  text-shadow: none;
  margin-left: auto;
  margin-right: auto;
  padding: 1rem 2rem;
  :focus {
    outline: none;
    background: lightgray;
  }
  :hover {
    cursor: pointer;
  }
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
        <StyledHeader>
          Masz jakieś pytania?
          <br /> Napisz już teraz!
        </StyledHeader>

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
          required
        />
        <StyledInput
          name="message"
          type="text"
          value={this.state.message}
          onChange={this.handleChange}
          placeholder="godziny kontaktu"
          required
        />
        <SubmitButton type="submit" value="">
          Wyślij
        </SubmitButton>
        <h6>
          Administratorem Pana/Pani danych jest firma Adrian Gołębiewski MetLife
          z siedzibą w Gdańsku, ul. Rogalińska 11A, 80-809 Gdańsk.
        </h6>
      </StyledForm>
    );
  }
}
export default AppointmentForm;
