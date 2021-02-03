import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'meetup-button',
  styleUrl: 'meetup-button.css',
  shadow: true,
})
export class MeetupButton {

  render() {
    return (
      <div>
        Hola este es mi boton
      </div>
    );
  }

}
