export default function CommentForm({ onSubmit, slug }) {
  return (
    <form onSubmit={(event) => onSubmit(event, slug)}>
      <label htmlFor="commentInput">Add comment:</label>
      <textarea id="commentInput" name="commentInput" rows="4" />
      <button type="submit">Send</button>
    </form>
  );
}
