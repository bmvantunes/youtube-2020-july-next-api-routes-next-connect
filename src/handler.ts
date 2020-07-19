import { verify } from 'jsonwebtoken';
import { NextApiRequest, NextApiResponse } from 'next';
import nextConnect from 'next-connect';

export interface NextApiRequestExtended extends NextApiRequest {
  userId: number | null;
  username: string | null;
}

export default function getHandler() {
  return nextConnect<NextApiRequestExtended, NextApiResponse>({
  onError(error, req, res) {
    res.status(501).json({ error: `Sorry something Happened! ${error.message}` });
  },
  onNoMatch(req, res) {
    res.status(405).json({ error: `Method ${req.method} Not Allowed` });
  },
}).use((req, res, next) => {
  req.userId = null;
  req.username = null;

  const { authorization } = req.headers;

  if (!authorization) {
    next();
  } else {
    verify(authorization, 'bruno-secret', (error: any, decoded: any) => {
      if (!error && decoded) {
        req.userId = decoded.userId;
        req.username = decoded.name;
      }

      next();
    });
  }
})};
