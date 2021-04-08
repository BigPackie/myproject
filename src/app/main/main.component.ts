import { Component, OnInit } from '@angular/core';
import { DataStoreService } from './data-store.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  providers: [DataStoreService],
})
export class MainComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
