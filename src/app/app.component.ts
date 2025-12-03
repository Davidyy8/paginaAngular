import { Component } from '@angular/core';
import { CentrosComponent } from "./centros/centros";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [CentrosComponent]
})
export class AppComponent {
  public title: string = 'Mi primer contador en Angular';
  public contador: number = 0;

  incrementarPor(): void {
    this.contador += 1;
  }

  decrementarPor(): void {
    this.contador -= 1;
  }

  reset(): void {
    this.contador = 0;
  }
}
