import moment from "moment";

export const logger = (type: string, message: string) => {
  let timestamp = moment(new Date()).format('hh:mm:ss A');
  console.log(`${timestamp} - [${ type }] - ${message}`);
}