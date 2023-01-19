import type { NextApiRequest, NextApiResponse } from "next";
import { parfums } from "../../../data/parfums";
import { Parfum } from '../../../src/@types/main';


export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Parfum | undefined>
) {
  res.status(200).json(parfums);
}
