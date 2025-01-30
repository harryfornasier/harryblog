import "../../../styles/global.scss";

async function getPost(postId: string) {
  const res = await fetch(
    `http://127.0.0.1:8090/api/collections/posts/records/${postId}`,
  );
  const data = await res.json();
  return data;
}

export default async function Post({ params }: any) {
  const post = await getPost(params.id);

  return (
    <>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </>
  );
}
