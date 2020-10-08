import React, { useEffect } from "react";

const Posts = ({ posts, loading }) => {
  const [val, getVal] = React.useState("None");
  const [count, setCount] = React.useState(0);

  useEffect(() => {}, [count]);
  if (loading) {
    return <h2> Loading ...</h2>;
  }

  return (
    <ul className="list-group-mb-4">
      {posts.map((post) => (
        <li key={post.id} className="list-roup-item">
          {post.question}
          <br />
          <button onClick={() => getVal("answer_a")}>
            {post.answers.answer_a}
          </button>
          <button onClick={() => getVal("answer_b")}>
            {" "}
            {post.answers.answer_b}
          </button>
          <br />
          <br />
          <button onClick={() => getVal("answer_c")}>
            {" "}
            {post.answers.answer_c}
          </button>
          <button onClick={() => getVal("answer_d")}>
            {" "}
            {post.answers.answer_d}
          </button>
          if(post.correct_answer === val)
          {setCount((prevCount) => prevCount + 1)}
          {post.correct_answer}
          {val}
          <h2> {count}/</h2>
        </li>
      ))}
    </ul>
  );
};

export default Posts;
