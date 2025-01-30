import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function Home() {
  const posts = await prisma.posts.findMany();

  return (
    <>
      <h1>Harry's Blog</h1>

      {posts.map((post) => (
        <h2>{post.title}</h2>
      ))}
    </>
  );
}
