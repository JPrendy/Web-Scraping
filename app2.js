//For this application to work you need to install
//request and cheerio
//---------------------------
// A good video reference https://www.youtube.com/watch?v=LoziivfAAjE
//  npm install cheerio --save
//  npm install request --save
const request = require("request");
const cheerio = require("cheerio");
const fs = require("fs");
const writeStream = fs.createWriteStream('post.csv');

//Write Headers
writeStream.write(`Title \n`);

request("https://jamesmauriceprendergast.com", (error, response, html) => {
if(!error && response.statusCode == 200){
  const $ = cheerio.load(html);

  const siteHeading = $(".navbar-brand");

  console.log();
  //console.log(siteHeading.find('span').text());
  // Write to CSV
  writeStream.write(`${siteHeading.text()}`);
}   
});