// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../prisma/client";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    // Fetch all posts

    try {
      const data = await prisma.post.findMany({
        // Getting data from user table
        include: {
          user: true,
          Comment: true,
        },
        orderBy: {
          createdAt: "desc",
        },
      });
      console.log(data);
      res.status(200).json(data);
    } catch (err) {
      res.status(403).json({ err: "Error fetching posts" });
    }
  }
}