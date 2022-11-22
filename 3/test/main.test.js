const { By, Key, Builder } = require('selenium-webdriver');
const { GITHUB_LOGIN, GITHUB_PASSWORD } = require('../secret');
require('geckodriver');


describe('Initializing Selenium Webdriver Tests', () => {
  jest.setTimeout(1000 * 10 * 6);
  test('Logins to GitHub', async () => {
    let githubDriver = await new Builder().forBrowser('firefox').build();

    await githubDriver.get('https://github.com/');
    await githubDriver.findElement(By.partialLinkText('Sign in')).click();
    await githubDriver.findElement(By.name('login')).sendKeys(GITHUB_LOGIN);
    await githubDriver.findElement(By.name('password')).sendKeys(GITHUB_PASSWORD, Key.RETURN);

    const result = await githubDriver.findElement(By.className('flash-close js-flash-close')).isDisplayed();

    expect(result).toBe(true);
  });

  test('Adding Elements On Simple Page', async () => {
    let elementDriver = await new Builder().forBrowser('firefox').build();

    await elementDriver.get('https://the-internet.herokuapp.com/add_remove_elements/');
    let addButton = await elementDriver.findElement(By.xpath('//*[contains(text(),\'Add Element\')]'));

    for (let i = 0; i < 5; i++) {
      await addButton.click();
    }

    // let createdButtons = await elementDriver.findElements(By.className('added-manually'));
    const buttons = await elementDriver.findElements(By.className('added-manually'));
    expect(buttons.length).toEqual(5);
  });
});

// async function github_login() {
//
//
//   // await driver.get('https://the-internet.herokuapp.com/');
//   // await driver.findElement(By.linkText('Basic Auth')).click();
//   // await driver.wait(until.alertIsPresent());
//   //
//   // let alert = await driver.switchTo().alert();
//   // await alert.sendKeys('admin');
//
//   // await driver.findElement(By.name('q')).sendKeys('Hello, World!', Key.RETURN);
// }

// async function addAndCountElements() {
//   let driver = await new Builder().forBrowser('firefox').build();
//
//   await driver.get('https://the-internet.herokuapp.com/add_remove_elements/');
//   let addButton = await driver.findElement(By.xpath('//*[contains(text(),\'Add Element\')]'));
//
//   for (let i = 0; i < 5; i++) {
//     await addButton.click();
//   }
//
//   let createdButtons = await driver.findElements(By.className('added-manually'));
//
//
//   console.log(createdButtons);
//   console.log(createdButtons.length);
// }
//
// // github_login();
// addAndCountElements();