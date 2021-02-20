import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'meetup-button',
  styleUrl: 'meetup-button.css',
  shadow: true,
})
export class MeetupButton {

  @Prop() textbutton: string;
  @Prop() labeltext: string;

  render() {
    return (
      <div>
        <label>{this.labeltext}</label>
        <br/>
        <button>{this.textbutton}</button>
      </div>
    );
  }

}
