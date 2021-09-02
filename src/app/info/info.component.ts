import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import _mock_data from '../_mock_data'

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }
  character : any = []
  ngOnInit(): void {
    const id: string = (this.route.snapshot.queryParamMap.get('id') as string)
    this.character = _mock_data.filter((char) => char.id === parseInt(id))[0]
    debugger
  }

}
