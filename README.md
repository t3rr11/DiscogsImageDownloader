# Discogs Image Downloader

Basically you feed this a CSV full of barcodes and it will download all master images for those barcodes from discogs.

## Setup
- Add your csv of barcodes to the data folder named `import.csv` (example provided)
- Create a `.env` file (example provided) and add your discogs API key to the .env under the TOKEN param
- Run `npm install`
- Then run `npm run start`
- Type `start` and it should start running through your `import.csv` file downloading images and saving them to `/data/images`.

