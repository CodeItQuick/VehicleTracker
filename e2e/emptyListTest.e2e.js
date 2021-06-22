/* eslint-disable no-undef */
describe('Empty List', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('displays the entries', async () => {
    await expect(element(by.id('entriesList'))).toBeVisible();
  });

  it('shows that there are no entries', async () => {
    await expect(element(by.text('There are no entries.'))).toBeVisible();
  });
});
