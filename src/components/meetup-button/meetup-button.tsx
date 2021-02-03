import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'meetup-button',
  styleUrl: 'meetup-button.css',
  shadow: true,
})
export class MeetupButton {

  @Prop() textbutton: string;

  render() {
    return (
      <button>{this.textbutton}</button>
    );
  }

}
