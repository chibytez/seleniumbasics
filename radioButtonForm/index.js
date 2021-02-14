const { Builder, By } = require("selenium-webdriver");

const driver = new Builder()
  .forBrowser("firefox")
  .build();
 
  async function radioButtonForm(){
      try {
           await driver.get("https://rori4.github.io/selenium-practice/#/pages/practice/radio-button-form")
           await driver.findElement(By.css('#title')).sendKeys("This is my perfect title");
           await driver.findElement(By.css('#description')).sendKeys("Description must be add least 20 char");
           await driver.findElement(By.css('div.form-check:nth-child(1) > label:nth-child(1) > span:nth-child(3)')).click();
           await driver.findElement(By.css('#submit')).click()
        } catch (error) {
          console.log(error);
      }
  } 
 
  radioButtonForm()