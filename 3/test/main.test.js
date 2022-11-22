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