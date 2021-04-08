import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { concat, throwError } from 'rxjs';
import { catchError, finalize, tap } from 'rxjs/operators';

const API_BASE = 'https://postman-echo.com/get';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
})
export class UserProfileComponent implements OnInit {
  fetching: boolean;
  failed: boolean;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetching = true;
    concat(this.getData(1), this.getData(2), this.getData(3))
      .pipe(
        tap(() => {
          this.fetching = true;
        }),
        catchError(this.handleError.bind(this)),
        finalize(() => {
          this.fetching = false;
        })
      )
      .subscribe((results) => {
        console.log(results);
      });
  }

  private getData(num: number) {
    return this.http.get(`${API_BASE}?foo=bar${num}`);
  }

  private handleError(error: HttpErrorResponse) {
    this.failed = true;
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` + `body was: ${error.error}`
      );
    }
    return throwError('Something bad happened; please try again later.');
  }
}
