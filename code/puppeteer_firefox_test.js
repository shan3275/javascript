const puppeteerFirefox = require('puppeteer-firefox');
(async () => {
    const test = async browser => {
        const page = await browser.newPage();
        await page.setViewport({
            width: 1280,
            height: 800
        });
        await page.goto('https://www.bbc.com/news');   
        await page.hover('#nw-c-most-read-heading__title');
        await page.screenshot({ path: 'bcc-most-read.png' })
        await browser.close();
    }
    const firefox = await puppeteerFirefox.launch({
        headless: false,
        slowMo: 50
    });
    await test(firefox);
})();
