import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'my-navbar',
  styleUrl: 'my-navbar.css',
  shadow: true,
})
export class MyNavbar {

  @Prop() isadmin: boolean;
  @Prop() isallowed: boolean;
  @Prop() type: string;
  @Prop() islogged: boolean;
  @Prop() hasnewaccount: boolean;


  getClientClass() {
    return {
      [`client-allowed__${this.type}`]: this.isallowed
    }
  }

  render() {
    return (
        <ul>
          <li>Inicio</li>
          {
            !!this.isadmin && <li>Dashboard</li>
          }
          <li class={this.getClientClass()}>Clientes</li>
          {this.islogged ? <p>Hola bienvenido a tu cuenta </p> : <p>No estas logueado</p> }
          {
            !!this.hasnewaccount && <p>Felicidades! Has abierto tu cuenta bancaria, puedes recoger tu tarjeta en el banco</p>
          }
        </ul>
      
    );
  }

}
