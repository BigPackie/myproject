import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataStoreService } from '../data-store.service';

@Component({
  selector: 'app-submitted-data',
  templateUrl: './submitted-data.component.html',
  styleUrls: ['./submitted-data.component.css'],
})
export class SubmittedDataComponent implements OnInit {
  constructor(public store: DataStoreService) {}

  ngOnInit(): void {}
}
