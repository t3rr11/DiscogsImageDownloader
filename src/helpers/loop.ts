import * as fs from 'fs';
import json2csv from 'json2csv';
import { AxiosError } from 'axios';
import { Release, ReleaseResponse } from '../types/release';
import { LoadBarcodesFromCSV, LoadNamesFromCSV } from './csv';
import { request } from './request';
import { Record } from '../types/record';
import { MasterResponse } from '../types/master';
import { downloadImage } from './image';
import { sleep } from './sleep';
import { logger } from './logger';

export const run = async () => {
  const records = await LoadBarcodesFromCSV();

  for (let record of records) {
    // Sleep for 2 seconds to wait out the rate limit
    await sleep(2200);

    logger('INFO', `Starting: ${record.barcode}`);
    const release = await getRelease(record);
    if (!release) continue;
    if (release.master_id === 0) continue;

    const master = await getMaster(release);
    if (!master) continue;

    // Update the record with title and name
    record.title = master.title;
    record.artist = master.artists[0].name;

    await downloadImage(master.images[0].uri, record).catch((err: Error) => {});
  }

  // Save CSV file
  await fs.writeFileSync('./data/import.csv', json2csv.parse(records));

  logger('INFO', `Finished loop`);
};

export const runSearch = async () => {
  const records = await LoadNamesFromCSV();

  for (let record of records) {
    // Sleep for 2 seconds to wait out the rate limit
    await sleep(2200);

    logger('INFO', `Starting: ${record.name}`);
    const release = await search(record);
    if (!release) continue;
    if (release.master_id === 0) continue;

    const master = await getMaster(release);
    if (!master) continue;

    // Update the record with title and name
    record.title = master.title;
    record.artist = master.artists[0].name;

    await downloadImage(master.uri, record).catch((err: Error) => {});
  }

  // Save CSV file
  await fs.writeFileSync('./data/import.csv', json2csv.parse(records));

  logger('INFO', `Finished loop`);
};

const search = async (record: Record): Promise<Release | void> => {
  return await request<ReleaseResponse>(
    `https://api.discogs.com/database/search?q=${record.name}&type=Release`
  )
    .then((release) => {
      if (release.results.length > 0) {
        return release.results[0];
      } else {
        logger('WARN', `No release found for name: ${record.name}`);
      }
    })
    .catch((err: AxiosError) => {
      // TODO: Add error handling
      logger('ERROR', `Failed to retrieve release for name: ${record.name}`);
    });
};

const getRelease = async (record: Record): Promise<Release | void> => {
  return await request<ReleaseResponse>(
    `https://api.discogs.com/database/search?barcode=${record.barcode}&type=Release`
  )
    .then((release) => {
      if (release.results.length > 0) {
        return release.results[0];
      } else {
        logger('WARN', `No release found for barcode: ${record.barcode}`);
      }
    })
    .catch((err: AxiosError) => {
      // TODO: Add error handling
      logger('ERROR', `Failed to retrieve release for barcode: ${record.barcode}`);
    });
};

const getMaster = async (release: Release): Promise<MasterResponse | void> => {
  return await request<MasterResponse>(`https://api.discogs.com/masters/${release.master_id}`)
    .then((master) => {
      if (master.images.length > 0) {
        return master;
      } else {
        logger('WARN', `No images found found for master_id: ${release.master_id}`);
      }
    })
    .catch((err: AxiosError) => {
      // TODO: Add error handling
      logger('ERROR', `Failed to retrieve master for master_id: ${release.master_id}`);
    });
};
