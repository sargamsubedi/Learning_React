import { useEffect, useState } from "react";

function Check_data() {
  const [data, setData] = useState([]);
  const [isLoading, setIsloading] = useState(true);
  const [isError, setIserror] = useState(false);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(res => res.json())
      .then(data => {
        setData(data.slice(0, 5)); // ✅ first 5 posts
        setIsloading(false);
      })
      .catch(() => {
        setIserror(true);
        setIsloading(false);
      });
  }, []);

  if (isError) {
    return <p>Something went wrong</p>;
  }

  if (isLoading) {
    return <p>Data is loading... please wait</p>;
  }

  return (
    <>
      <h1>Details</h1>
      {data.map((user) => (
        <p key={user.id}>
          {user.id} {user.title}
        </p>
      ))}
    </>
  );
}

export default Check_data;