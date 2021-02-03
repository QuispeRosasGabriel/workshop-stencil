import { newSpecPage } from '@stencil/core/testing';
import { MeetupButton } from '../meetup-button';

describe('meetup-button', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MeetupButton],
      html: `<meetup-button></meetup-button>`,
    });
    expect(page.root).toEqualHtml(`
      <meetup-button>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </meetup-button>
    `);
  });
});
