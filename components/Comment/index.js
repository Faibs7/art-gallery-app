import { styled } from "styled-components";

export default function Comment({ comments }) {
  return (
    <StyledSection>
      <hr />
      <h2>Comments:</h2>
      <ul>
        {comments &&
          comments.map((comment) => (
            <li key={comment.date}>
              <p>{comment.date}:</p>
              <h4>{comment.comment}</h4>
            </li>
          ))}
      </ul>
    </StyledSection>
  );
}

const StyledSection = styled.section`
  margin-top: 2rem;

  & ul {
    margin: 0;
    padding: 0;
  }

  & li:nth-of-type(odd) {
    background-color: #f1f1f1;
  }

  & li {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin-bottom: 1rem;
    width: 100%;
    padding: 1rem;
    border-radius: 0.5rem;

    & h4,
    p {
      margin: 0;
      padding: 0;
      line-height: 1.5;
    }

    & p {
      font-size: 0.75rem;
    }
  }
`;
