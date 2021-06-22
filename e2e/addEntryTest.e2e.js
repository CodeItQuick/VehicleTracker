/* eslint-disable no-undef */
describe('Add an Entry', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('has an add entry button', async () => {
    await expect(element(by.id('addEntryButton'))).toBeVisible();
  });

  it('updates the total price', async () => {
    await element(by.id('addEntryButton')).tap();

    await element(by.id('fuelAmountInput')).replaceText('75.24');
    await element(by.id('fuelPriceInput')).replaceText('15.74');

    await expect(element(by.id('totalPriceInput'))).toHaveValue('1184.28');

    await element(by.id('fuelAmountInput')).replaceText('36.51');

    await expect(element(by.id('totalPriceInput'))).toHaveValue('574.67');

    await element(by.id('fuelPriceInput')).replaceText('16.39');

    await expect(element(by.id('totalPriceInput'))).toHaveValue('598.40');
  });

  it('shows and hides the date picker when tapping on the date', async () => {
    await element(by.id('addEntryButton')).tap();

    await expect(element(by.id('dateInput'))).toBeNotVisible();

    await element(by.id('dateText')).tap();

    await expect(element(by.id('dateInput'))).toBeVisible();

    await element(by.id('dateText')).tap();

    await expect(element(by.id('dateInput'))).toBeNotVisible();
  });
});
