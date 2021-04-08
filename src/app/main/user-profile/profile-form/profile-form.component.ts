import { Component, HostBinding, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { DataStoreService } from '../../data-store.service';

@Component({
  selector: 'app-profile-form',
  templateUrl: './profile-form.component.html',
  styleUrls: ['./profile-form.component.css'],
})
export class ProfileFormComponent implements OnInit {
  defaultColor = 'white';
  @HostBinding('style.background') backgroundColor = this.defaultColor;

  successfulSubmit: boolean;

  customBgColor = new FormControl('');

  profileForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    phone_number: new FormControl(''),
  });

  constructor(private store: DataStoreService) {}

  ngOnInit(): void {}

  onSubmit() {
    this.profileForm.markAllAsTouched();
    if (this.profileForm.valid) {
      this.successfulSubmit = true;
      this.backgroundColor = this.customBgColor.value;
      this.store.setUserData(this.profileForm.value);
    } else {
      this.successfulSubmit = false;
    }
  }

  onReset() {
    this.backgroundColor = this.defaultColor;
    this.store.setUserData(null);
  }
}
