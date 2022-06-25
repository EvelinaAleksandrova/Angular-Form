import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import {RouterModule, Routes} from "@angular/router";
import { ConditionsPageComponent } from './ConditionsPage/conditions-page/conditions-page.component';
import { FormComponent } from './Form/form/form.component';
import { MatButtonModule } from '@angular/material/button';
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatInputModule} from "@angular/material/input";
import {MatOptionModule} from "@angular/material/core";
import {MatSelectModule} from "@angular/material/select";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



const appRoutes: Routes = [
  {path: '', component: FormComponent },
  {path: 'conditions', component: ConditionsPageComponent }
]
@NgModule({
  declarations: [
    AppComponent,
    ConditionsPageComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    MatCheckboxModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
