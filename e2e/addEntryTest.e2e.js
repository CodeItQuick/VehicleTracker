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
});
