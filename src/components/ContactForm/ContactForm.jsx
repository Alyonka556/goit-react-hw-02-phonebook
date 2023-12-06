import React from 'react';

import {
  StyledWrapper,
  StyledForm,
  StyledLabel,
  StyledInput,
  StyledButton,
} from './ContactForm.styled';

export class ContactForm extends React.Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.handleSubmit({ ...this.state });
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    const { name, number } = this.state;
    const handleChange = this.handleChange;

    return (
      <StyledWrapper>
        <StyledForm onSubmit={this.handleSubmit}>
          <StyledLabel>Name </StyledLabel>
          <StyledInput
            type="text"
            name="name"
            required
            placeholder="Enter name"
            value={name}
            onChange={handleChange}
          />
          <StyledLabel>Number </StyledLabel>
          <StyledInput
            type="tel"
            name="number"
            required
            placeholder="Enter phone number"
            value={number}
            onChange={handleChange}
          />
          <StyledButton type="submit">Add contact</StyledButton>
        </StyledForm>
      </StyledWrapper>
    );
  }
}
