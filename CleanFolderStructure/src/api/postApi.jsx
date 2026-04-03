export const getPosts = async (search, page, limit=5) => {
  const url = search
    ? `https://jsonplaceholder.typicode.com/posts?q=${encodeURIComponent(search)}&_limit=${limit}&_page=${page}`
    : `https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${page}`;

  const res = await fetch(url);

  if (!res.ok) {
    throw new Error("Failed to fetch");
  }

  return res.json();
};