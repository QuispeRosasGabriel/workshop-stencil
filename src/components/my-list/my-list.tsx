import { Component, h, Prop } from '@stencil/core';
@Component({
  tag: 'my-list',
  styleUrl: 'my-list.css',
  shadow: true,
})
export class MyList {
  @Prop() members: number;
  @Prop() hasmanymembers: boolean;

  hasMemberMessage(): string {
    return `Su familia tiene la cantidad de ${this.members}`;
  }

  render() {
    const clientslist: Array<string> = ['Pepe', 'Juan', 'Mario'];


    return (
      <div>
        <ul>
          {
            clientslist.map((client) => (<li>{client}</li>))
          }
        </ul>
        {
          !!this.hasmanymembers ?
            <p>

              {this.hasMemberMessage()}</p>
            :
            <p>Su familia no tiene la cantidad de miembros suficiente</p>
        }

      </div>

    );
  }

}
