const puppeteer = require('puppeteer-extra');
const StealthPlugin = require('puppeteer-extra-plugin-stealth')
var fs = require("fs");

(async () => {
    try {
      puppeteer.use(StealthPlugin())
      var browser = await puppeteer.launch({
          headless: false,
        });
      var page = await browser.newPage();
      await page.goto(`https://www.tiktok.com/@miss_extra2.0`);
      await page.waitFor(5000)
      await browser.close();
    } catch (err) {
      await browser.close();
    }
  })();

