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

  it('returns to the entrylist screen after saving an entry', async () => {
    await element(by.id('addEntryButton')).tap();

    await expect(element(by.id('addEntryForm'))).toBeVisible();

    await element(by.id('dateInput')).typeText('2020-06-18');
    await element(by.id('odometerInput')).typeText('123455');
    await element(by.id('fuelAmountInput')).typeText('75,24');
    await element(by.id('fuelPriceInput')).typeText('15,75');
    await element(by.id('totalPriceInput')).typeText('1185,19');

    await element(by.text('Save')).tap();

    await expect(element(by.id('entriesList'))).toBeVisible();
  });
});
