import React from "react";
import styled from "styled-components";

import { StyledWrapper } from "./Layout";

const StyledInput = styled.input`
  display: flex;
  border-radius: 10px;
  border-style: none;
  padding-top: 1em;
  padding-bottom: 1em;
  margin: 1em;
  ::placeholder {
    text-align: center;
    font-size: 1rem;
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
      <StyledWrapper>
        <form
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
          <StyledInput type="submit" value="Submit" />
        </form>
      </StyledWrapper>
    );
  }
}
export default AppointmentForm;
