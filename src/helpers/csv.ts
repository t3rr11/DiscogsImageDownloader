import csv from 'csvtojson';
import { Record } from '../types/record';

export const LoadBarcodesFromCSV = async (): Promise<Record[]> => {
  if (!process.env.IMPORT_CSV_PATH) throw new Error('Missing import csv path in environment');

  return await csv({ noheader: false, output: 'json' })
    .fromFile(process.env.IMPORT_CSV_PATH)
    .then((csvRows) =>
      csvRows.map((row) => ({
        name: row.name,
        barcode: row.barcode,
      }))
    );
};

export const LoadNamesFromCSV = async (): Promise<Record[]> => {
  if (!process.env.IMPORT_SEARCH_CSV_PATH) throw new Error('Missing import search csv path in environment');

  return await csv({ noheader: false, output: 'json' })
    .fromFile(process.env.IMPORT_SEARCH_CSV_PATH)
    .then((csvRows) =>
      csvRows.map((row) => ({
        name: row.name,
        barcode: row.barcode,
      }))
    );
};