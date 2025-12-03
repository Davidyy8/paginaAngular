import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component'; // 👈 nota el doble "app/app"

bootstrapApplication(AppComponent)
  .catch(err => console.error(err));
