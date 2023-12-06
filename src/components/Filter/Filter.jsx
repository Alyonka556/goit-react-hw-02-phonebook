import { StyledBox, StyledLabel, StyledInput } from './Filter.styled';

export const Filter = ({ filter, handleChange }) => (
  <StyledBox>
    <StyledLabel>Find contacts by Name </StyledLabel>
    <StyledInput
      type="text"
      name="filter"
      placeholder="Enter filter"
      value={filter}
      onChange={e => handleChange(e.target.value)}
    />
  </StyledBox>
);
