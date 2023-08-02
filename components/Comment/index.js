export default function Comment({ comments }) {
  return (
    <>
      {comments &&
        comments.map((comment) => (
          <p key={comment.date}>
            {comment.date}: {comment.comment}
          </p>
        ))}
    </>
  );
}
