// Porto, 2022
// This code was made with love by Francisco Bastos (https://www.linkedin.com/in/francisco-bastos-031369160/)
// for the curriculum unit of Comprehension and Evolution of Software at the
// master's in Software Engineering at the Faculty of Engineering of the University of Porto.
// Feel free to contact the author if any questions arise.
//
import { Builder, By, until } from 'selenium-webdriver';
import assert from 'assert';

describe('Make a donation', function () {
  jest.setTimeout(60000);
  let driver;
  // eslint-disable-next-line no-unused-vars
  let vars;
  beforeEach(async function () {
    driver = await new Builder().forBrowser('chrome').build();
    vars = {};
  });
  afterEach(async function () {
    await driver.quit();
  });
  it('Make a donation', async function () {
    // Test name: Make a donation
    // Step # | name | target | value
    // 1 | open | / |
    await driver.get('http://localhost:3000/');
    // 2 | setWindowSize | 1920x1080 |
    await driver.manage().window().setRect({ width: 1920, height: 1080 });
    // 3 | click | xpath=//input |
    await driver.findElement(By.xpath('//input')).click();
    // 4 | click | xpath=//label[contains(.,'People of Color in Need')] |
    await driver
      .findElement(By.xpath("//label[contains(.,'People of Color in Need')]"))
      .click();
    // 5 | click | xpath=//label[contains(.,'Immigrants in Need')] |
    await driver
      .findElement(By.xpath("//label[contains(.,'Immigrants in Need')]"))
      .click();
    // 6 | click | xpath=//label[contains(.,'Seniors in Need')] |
    await driver
      .findElement(By.xpath("//label[contains(.,'Seniors in Need')]"))
      .click();
    // Apply timeout for 10 seconds
    await driver.manage().setTimeouts({ implicit: 10000 });
    // 7 | click | xpath=//select |
    await driver.findElement(By.xpath('//select')).click();
    // 8 | select | css=#amount and xpath=//option[. = '$5'] | label=$5
    {
      const dropdown = await driver.findElement(By.css('#amount'));
      await dropdown.findElement(By.xpath("//option[. = '$5']")).click();
    }
    // 9 | click | xpath=//form/div/button[2] |
    await driver.findElement(By.xpath('//form/div/button[2]')).click();
    // 10 | click | xpath=//input[@id='email'] |
    await driver.findElement(By.xpath("//input[@id='email']")).click();
    // 11 | type | xpath=//input[@id='email'] | francisco@gmail.com
    await driver
      .findElement(By.xpath("//input[@id='email']"))
      .sendKeys('francisco@gmail.com');
    // 12 | click | xpath=//div[@id='cardNumber-fieldset']/div/div/div/span/input |
    await driver
      .findElement(
        By.xpath("//div[@id='cardNumber-fieldset']/div/div/div/span/input")
      )
      .click();
    // 13 | type | xpath=//fieldset/div/div/div/div/span/input | 6011 1111 1111 1117
    await driver
      .findElement(By.xpath('//fieldset/div/div/div/div/span/input'))
      .sendKeys('6011 1111 1111 1117');
    // 14 | type | xpath=//div[@id='cardNumber-fieldset']/div[2]/div/div/span/input | 11 / 26
    await driver
      .findElement(
        By.xpath("//div[@id='cardNumber-fieldset']/div[2]/div/div/span/input")
      )
      .sendKeys('11 / 26');
    // 15 | type | xpath=//div[@id='cardNumber-fieldset']/div[3]/div/div/span/input | 123
    await driver
      .findElement(
        By.xpath("//div[@id='cardNumber-fieldset']/div[3]/div/div/span/input")
      )
      .sendKeys('123');
    // 16 | type | xpath=//div[3]/div/div/div/div/div[2]/div/div/div/div/span/input | Francisco
    await driver
      .findElement(
        By.xpath('//div[3]/div/div/div/div/div[2]/div/div/div/div/span/input')
      )
      .sendKeys('Francisco');
    // 17 | click | xpath=//div[3]/div/div/span/input |
    await driver.findElement(By.xpath('//div[3]/div/div/span/input')).click();
    // 18 | click | xpath=//div[@id='root']/div/div/div[2]/div/div[2]/form/div[2]/div[2]/button/div[3] |
    await driver
      .findElement(
        By.xpath(
          "//div[@id='root']/div/div/div[2]/div/div[2]/form/div[2]/div[2]/button/div[3]"
        )
      )
      .click();
    // 19 | waitForElementPresent | xpath=//h1[contains(.,'Thank You!')] | 60000
    await driver.wait(
      until.elementLocated(By.xpath("//h1[contains(.,'Thank You!')]")),
      60000
    );
    // 20 | assertText | //*[@id="__next"]/html/body/div/div[1]/div/div/h1 | Thank You!
    assert(
      (await driver
        .findElement(
          By.xpath('//*[@id="__next"]/html/body/div/div[1]/div/div/h1')
        )
        .getText()) == 'Thank You!'
    );
  });
});
