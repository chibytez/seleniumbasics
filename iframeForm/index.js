const {Builder, By} = require("selenium-webdrive");
const { buildPath } = require("selenium-webdriver/http");

const driver = new Builder()
    .forBrowser("firefox")
    .build()

async function iframeForm(){
    try {
        await driver.get("https://rori4.github.io/selenium-practice/#/pages/practice/iframe-form");
         await driver.switchTo().frame(0);
    } catch (error) {
        console.log(error);
    }
}

iframeForm()