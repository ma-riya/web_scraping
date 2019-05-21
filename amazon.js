const puppeteer = require('puppeteer');

let browser = null;
let page = null;

const BASE_URL = 'https://amazon.com';

const amazon = {
  initialize: async () => {
    browser = await puppeteer.launch({
      headless: false
    })
    page = await browser.newPage();

    await page.goto(BASE_URL, { waitUntil: 'networkidle2' });
  },

  getProductDetails: async (link) => {
    await page.goto(link, { waitUntil: 'networkidle2' });
    let details = await page.evaluate(() => {
      let title = document.querySelector('#productTitle').innerText;
      let manufacturer = document.querySelector('#bylineInfo').innerText;
      let price = document.querySelector('#priceblock_ourprice,#priceblock_dealprice').innerText;
      let rating = document.querySelector('#acrPopover').getAttribute('title');
      let totalRatings = document.querySelector('#acrCustomerReviewText').innerText;
      return {
        title,
        manufacturer,
        price,
        rating,
        totalRatings

      }
    });
    return details;


  },

  end: async () => {
    await browser.close();
  }

}

module.exports = amazon;
