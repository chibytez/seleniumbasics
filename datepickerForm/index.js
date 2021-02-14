const {Builder, By} = require("selenium-webdriver")

const driver = new Builder()
    .forBrowser("firefox")
    .build();

async function datepickerForm() {
    try {
        await driver.get("https://rori4.github.io/selenium-practice/#/pages/practice/datepicker-form");
        await driver.findElement(By.xpath("//input[@formcontrolname='dateOne']")).sendKeys("Apri 16, 2019");
        await driver.findElement(By.xpath("//input[@formcontrolname='dateTwo']")).sendKeys("Feb 2, 2021 - Feb 4, 2021");
        await driver.findElement(By.name("submit")).click();

    } catch (error) {
        console.log(error);
    }
}

datepickerForm(); 