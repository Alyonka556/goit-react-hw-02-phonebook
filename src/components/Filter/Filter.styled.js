import styled from 'styled-components';

export const StyledBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 10px;
  padding: 40px 20px;
  background-color: rgba(17, 24, 39, 1);
  color: rgba(243, 244, 246, 1);
  width: 320px;
`;

export const StyledLabel = styled.label`
  font-size: 18px;
  line-height: 1.6;
  font-weight: 400;
  color: rgba(156, 163, 175, 1);
  margin: 20px 0 4px;
`;

export const StyledInput = styled.input`
  width: 100%;
  border-radius: 10px;
  border: 1px solid rgba(55, 65, 81, 1);
  outline: 0;
  background-color: rgba(17, 24, 39, 1);
  padding: 12px 18px;
  color: rgba(243, 244, 246, 1);
`;
