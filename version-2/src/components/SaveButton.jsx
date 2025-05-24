function SaveButton({ onClick, text }) {
  {
    /* Sets name and param names  */
  }
  return (
    <div className="wrapper">
      <button className="post-like" onClick={onClick}>
        {/*post-like makes the bootstrap formatting render something circular-adjacent */}
        {text}
      </button>{" "}
      {/*The button text is a param passed down from the parent */}
    </div>
  );
}
export default SaveButton;
