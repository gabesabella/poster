import prisma from "../../../prisma/client";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../auth/[...nextauth]";

export default async function handler(req: any, res: any) {
  const session = await getServerSession(req, res, authOptions);
  if (!session) {
    return res
      .status(401)
      .json({ message: "Please signin to post a comment." });
  }
  //Get User
  const prismaUser = await prisma.user.findUnique({
    where: { email: session.user.email },
  });
  if (req.method === "POST") {
    const { title, postId } = req.body.data;
    if (!title.length) {
      return res.status(401).json({ message: "Please enter some text" });
    }
    try {
      const result = await prisma.comment.create({
        data: {
          title,
          userId: prismaUser.id,
          postId,
        },
      });
      res.status(200).json(result);
    } catch (err) {
      res.status(403).json({ err: "Error has occured while making a post" });
    }
  }
}
