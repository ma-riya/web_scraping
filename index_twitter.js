const puppeteer = require("puppeteer");
const twitter = require("./twitter");
const fs = require("fs");
const Json2csvParser = require("json2csv").Parser;

(async () => {
  const USERNAME = "mariya82589116";
  const PASSWORD =
    "*********************************MASKED*****************************************";

  await twitter.initialize();
  await twitter.login(USERNAME, PASSWORD);
  // let details = await twitter.getUser('udemy');
  // await twitter.postTweet('Hello world, this is just a test message');

  let tweets = await twitter.getTweets("udemy", 50);
  const json2csvParser = new Json2csvParser();
  const csv = await json2csvParser.parse(tweets);
  await fs.writeFileSync("./twitter_data.csv", csv, "utf-8");
  await twitter.end();
})();
