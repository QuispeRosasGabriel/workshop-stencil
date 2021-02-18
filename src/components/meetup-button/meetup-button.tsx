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
      <div>
        <p>Hola como estas</p>
        <button>{this.textbutton}</button>
      </div>
    );
  }

}
