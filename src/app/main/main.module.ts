import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { SubmittedDataComponent } from './submitted-data/submitted-data.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { ProfileFormComponent } from './user-profile/profile-form/profile-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    MainComponent,
    SubmittedDataComponent,
    UserProfileComponent,
    ProfileFormComponent,
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
})
export class MainModule {}
