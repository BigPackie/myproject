import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/auth.service';
import { take } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit(): void {}

  onSubmit(form: NgForm) {
    console.log(form.value);

    this.auth
      .login()
      .pipe(take(1))
      .subscribe((loginSuccess) => {
        if (loginSuccess) {
          this.router.navigateByUrl('/');
        } else {
          console.warn('login failed');

        }
      });
  }
}
