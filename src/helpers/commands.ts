export const Help = () => {
  console.log(`
    Type: Start, To start the image downloader and read from the csv file. CSVRecords.csv located in /data.
    Type: Retry, To retry downloading the failed images from the json file. FailedRecords.json located in /data.
    Type: Help, For this menu.
  `);
}

export const NotYetImplemented = () => {
  console.log(`Command not yet implemented`);
}