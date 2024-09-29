import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ConferenceComponent } from './conference/conference.component';

const routes: Routes = [
  { path: '', component: AppComponent },
  //{ path: 'conference', component: ConferenceComponent } // Ruta para el componente conference
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
