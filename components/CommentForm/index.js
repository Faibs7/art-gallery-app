import { styled } from "styled-components";

export default function CommentForm({ onSubmit, slug }) {
  return (
    <StyledForm onSubmit={(event) => onSubmit(event, slug)}>
      <label htmlFor="commentInput">Add comment:</label>
      <textarea id="commentInput" name="commentInput" rows="4" />
      <button type="submit">Send</button>
    </StyledForm>
  );
}

const StyledForm = styled.form`
  margin-top: 4rem;
  background: #f1f1f1;
  padding: 2rem;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  & button {
    padding: 1rem 3rem;
    border-radius: 1rem;
    border: none;
    background: orange;
    font-size: 1.125rem;
  }

  & textarea {
    width: 100%;
    border: 1px solid #3c3c3c;
    border-radius: 1rem;
    background-color: #f1f1f1;
    min-height: 6rem;
    padding: 1rem;
  }

  & label {
    font-size: 1.125rem;
  }
`;
