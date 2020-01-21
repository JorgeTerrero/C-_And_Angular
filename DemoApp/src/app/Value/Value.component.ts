import { Component, OnInit } from '@angular/core';
import { ValueService } from '../Service/value.service';

@Component({
  selector: 'app-Value',
  templateUrl: './Value.component.html',
  styleUrls: ['./Value.component.css']
})
export class ValueComponent implements OnInit {

  constructor(private service: ValueService) { }

  ngOnInit() {
    this.service.getValue().subscribe(res => console.log(res))
  }

}
