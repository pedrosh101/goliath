import type { NextApiRequest, NextApiResponse } from "next";
import { parfum } from "../../../data/parfum";
import { Parfum } from '../../../src/@types/main';


export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Parfum | undefined>
) {
  res.status(200).json(parfum);
}
