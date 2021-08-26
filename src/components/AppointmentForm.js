import React from "react";

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
      <form
        onSubmit={this.handleSubmit}
        action="https://formsubmit.co/adrian.golebiewski@agencja.metLife.pl"
        method="POST"
      >
        <label>
          Imię:
          <input
            name="name"
            type="text"
            value={this.state.name}
            onChange={this.handleChange}
          />
        </label>
        <label>
          e-mail:
          <input
            name="email"
            type="email"
            value={this.state.email}
            onChange={this.handleChange}
          />
        </label>
        <label>
          telefon:
          <input
            name="phone"
            type="tel"
            value={this.state.phone}
            onChange={this.handleChange}
          />
        </label>
        <label>
          Preferowane godziny kontaktu:
          <input
            name="message"
            type="text"
            value={this.state.message}
            onChange={this.handleChange}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
export default AppointmentForm;
