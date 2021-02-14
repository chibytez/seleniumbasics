const {Builder, By} = require("selenium-webdriver");

const driver = new Builder()
    .forBrowser("firefox")
    .build()

async function fileFormExample(){
    try {
        await driver.get("https://rori4.github.io/selenium-practice/#/pages/practice/file-form");
        await driver.findElement(By.xpath("//input[@formcontrolname='file']")).sendKeys(__dirname+"\\controller.PNG")
        await driver.findElement(By.name("submit")).click()
    } catch (error) {
        console.log(error);
    }
}

fileFormExample()