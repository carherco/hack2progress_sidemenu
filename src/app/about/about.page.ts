import { Component, OnInit } from '@angular/core';
import { CallNumber } from '@ionic-native/call-number/ngx';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage {

  nombre = 'Hack2Progress';
  direccion = 'Avenida del progreso';
  email = 'progreso@hack2progress.com';
  telefono = '111-222-333';

  constructor(private callNumber: CallNumber) {}

  llamar() {
    this.callNumber.callNumber(this.telefono, true)
      .then(res => console.log('Llamando', res))
      .catch(err => console.log('Error activando el dialer', err));
  }
}
