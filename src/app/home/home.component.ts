import { Component, OnInit } from '@angular/core';
import _mock_data from '../_mock_data'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor() { }
  characters  = _mock_data
  ngOnInit(): void {
  }

}
