import { useState } from "react";

const State = () => {
  const [count, setCount] = useState(0);
  const [sharedLikes, setSharedLikes] = useState(0);
  const [thumbsUp, setThumbsUp] = useState(0);
  const [thumbsDown, setThumbsDown] = useState(0);

  const handleIncrement = () => setCount(count + 1);
  const handleShare = () => setSharedLikes(sharedLikes + 10);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={handleIncrement}>Increment</button>
      <br />
      <h1>Like and Dislike count</h1>
      <button onClick={() => setThumbsUp(thumbsUp + 1)}>👍 {thumbsUp}</button>
      <button onClick={() => setThumbsDown(thumbsDown + 1)}>👎 {thumbsDown}</button>

      <h1>Likes: {sharedLikes}</h1>
      <button onClick={handleShare}>Share 📤</button>
    </div>
  );
};

export default State;
