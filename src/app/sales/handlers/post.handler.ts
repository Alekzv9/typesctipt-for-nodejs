import { RequestHandler } from 'express';
import { Req, Res } from '@customTypes';

export const handler: RequestHandler[] = [
  // Middlewares
  async (_: Req, res: Res) => {
    res.json('Sales post handler');
  },
];
