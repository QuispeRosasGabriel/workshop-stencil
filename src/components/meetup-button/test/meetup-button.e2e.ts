import { newE2EPage } from '@stencil/core/testing';

describe('meetup-button', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<meetup-button></meetup-button>');

    const element = await page.find('meetup-button');
    expect(element).toHaveClass('hydrated');
  });
});
