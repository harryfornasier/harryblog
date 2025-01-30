import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function post({ params }: any) {
  const post = await prisma.posts.findUnique({
    where: {
      id: parseInt(params.id),
    },
  });

  console.log(post);

  return (
    <>
      <h1>{post?.title}</h1>
    </>
  );
}
