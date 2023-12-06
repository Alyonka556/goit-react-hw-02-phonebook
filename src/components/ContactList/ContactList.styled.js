import styled from 'styled-components';

export const StyledList = styled.ul``;

export const StyledItem = styled.li`
  display: flex;
  gap: 20px;
  justify-content: space-between;
  margin: 20px 0 20px;
`;

export const StyledButton = styled.button`
  font-weight: bold;
  letter-spacing: 0.1em;
  border: none;
  border-radius: 1.1em;
  background-color: rgba(17, 24, 39, 1);
  color: rgba(156, 163, 175, 1);
  padding: 1em 2em;
  transition: box-shadow ease-in-out 0.3s, background-color ease-in-out 0.1s,
    letter-spacing ease-in-out 0.1s, transform ease-in-out 0.1s;
  box-shadow: 3px 3px 6px #1c1c1c, -3px -3px 6px #262626;
  &:hover {
    box-shadow: 6px 6px 13px #121212, -6px -6px 13px #303030;
    background-color: rgba(167, 139, 250, 1);
    color: white;
  }
`;
