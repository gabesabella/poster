import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../prisma/client";

export default async function handler(req: any, res: any) {
  if (req.method === "GET") {
    // Get auth users posts
    try {
      const data = await prisma.post.findUnique({
        where: {
          id: req.query.details,
        },
        include: {
          user: true,
          Comment: {
            orderBy: {
              createdAt: "desc",
            },
            include: {
              user: true,
            },
          },
        },
      });
      return res.status(200).json(data);
    } catch (err) {
      res.status(403).json({ err: "Error has occured while trying to post" });
    }
  }
}
