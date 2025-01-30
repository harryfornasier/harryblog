import Link from "next/link";
import "../../styles/global.scss";
import "./posts.scss";

async function getPosts() {
  const res = await fetch(
    "http://127.0.0.1:8090/api/collections/posts/records?page=1&perPage=30",
  );
  const data = await res.json();
  return data?.items as any[];
}

export default async function Posts() {
  const posts = await getPosts();

  return (
    <main className="main">
      <section className="container">
        <h1>Posts</h1>

        {posts?.map((post) => {
          return <Post key={post.id} post={post} />;
        })}
      </section>
    </main>
  );
}

function Post({ post }: any) {
  const { id, title, content, created } = post || {};

  return (
    <div className="card">
      <Link href={`/posts/${id}`} className="link">
        <h2 className="card__title">{title}</h2>
      </Link>
      <h5 className="card__content">{content}</h5>
      <p className="Card__date">{created}</p>
    </div>
  );
}
