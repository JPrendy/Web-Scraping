// npm install puppeteer --save
const puppeteer = require('puppeteer');
// https://codeburst.io/a-guide-to-automating-scraping-the-web-with-javascript-chrome-puppeteer-node-js-b18efb9e9921

let scrape = async () => {
    const browser = await puppeteer.launch();
    //const browser = await puppeteer.launch({headless: false});

    const page = await browser.newPage();

    await page.goto('https://www.nintendo.co.uk/Games/Upcoming-Games/Upcoming-Games-753286.html');

    const result = await page.evaluate(() => {
        let data = []; // Create an empty array that will store our data
        let elements = document.querySelectorAll('.page-title-text'); // Select all Products

        for (var element of elements){ // Loop through each proudct
            let title = element.innerText; // Select the title

            data.push({title}); // Push an object with the data onto our array
        }

        return data; // Return our data array
    });

    browser.close();
    return result; // Return the data
};

scrape().then((value) => {
    console.log(value); // Success!
});