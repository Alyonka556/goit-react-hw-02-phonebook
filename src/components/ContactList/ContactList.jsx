import { StyledButton, StyledItem, StyledList } from './ContactList.styled';

export const ContactList = ({ contacts, handleDelete }) => (
  <div>
    <StyledList>
      {contacts.map((contact, id) => (
        <StyledItem key={id}>
          {contact.name}: {contact.number}
          <StyledButton type="button" onClick={() => handleDelete(contact.id)}>
            Delete
          </StyledButton>
        </StyledItem>
      ))}
    </StyledList>
  </div>
);
