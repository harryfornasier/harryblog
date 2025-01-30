-- CreateTable
CREATE TABLE "posts" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR NOT NULL,
    "content" TEXT NOT NULL,
    "created_at" TIMESTAMPTZ (6) DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "posts_pkey" PRIMARY KEY ("id")
);

CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "username" VARCHAR(255),
    "password" VARCHAR(255) NOT NULL,
    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);
