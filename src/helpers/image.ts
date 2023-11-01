import * as fs from 'fs';
import * as path from 'path';
import * as https from 'https';
import { Record } from '../types/record';
import { pipeline } from 'stream/promises';

export async function downloadImage(url: string, data: Record) {
  await new Promise(async (onSuccess) => {
    https.get(url, async (res) => {
      const fileWriteStream = fs.createWriteStream(path.join(`./data/images`, `${data.barcode}.jpeg`), {
        autoClose: true,
        flags: 'w',
      });
      await pipeline(res, fileWriteStream);
      onSuccess('success');
    });
  }).catch((err) => {
    //TODO: Add error handling
  });
}
