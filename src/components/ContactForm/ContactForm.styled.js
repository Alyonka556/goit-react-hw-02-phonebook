import styled from 'styled-components';

export const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  padding: 40px 20px;
  background-color: rgba(17, 24, 39, 1);
  color: rgba(243, 244, 246, 1);
  width: 320px;
`;

export const StyledForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const StyledLabel = styled.label`
  display: flex;
  justify-content: flex-start;
  color: rgba(156, 163, 175, 1);
  margin-bottom: 4px;
  margin-top: 20px;
  font-size: 18px;
  line-height: 1.6;
  font-weight: 400;
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

export const StyledButton = styled.button`
  display: block;
  width: 100%;
  background-color: rgba(167, 139, 250, 1);
  padding: 12px;
  text-align: center;
  color: rgba(17, 24, 39, 1);
  border: none;
  border-radius: 0.375rem;
  font-weight: 600;
  margin-top: 40px;
`;
