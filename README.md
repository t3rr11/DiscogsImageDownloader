# Discogs Image Downloader
Basically you feed this a CSV full of barcodes and it will download all master images for those barcodes from discogs.

Build using Node 18.18.0

## Requirements
- Node >= 18
- Discogs API Key
- Bunch of release barcodes in a csv (names not required)

## Setup
- Add your csv of barcodes to the data folder named `import.csv` (example provided)
- Create a `.env` file (example provided) and add your discogs API key to the .env under the TOKEN param
- Run `npm install`
- Then run `npm run start`
- Type `start` and it should start running through your `import.csv` file downloading images and saving them to `/data/images`
- Or Type `start search` and it should start running through your `search.csv` file downloading images and saving them to `/data/images`
