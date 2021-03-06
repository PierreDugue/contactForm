import { Component, OnInit } from '@angular/core';
import { AccessDatasService } from '../services/access-datas.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  public myString;
  public testArray = [{ title: 'Test' }, { title: 'Test2' }];
  constructor(private accessDatasService: AccessDatasService) { }

  ngOnInit() {
    console.log('INIT');
    this.accessDatasService.getDatas().subscribe((datas) => {
      this.myString = datas;
      console.log('My string : ', this.myString);
    },
      error => {
        console.log('Error: ', error);
      }
    );

    this.accessDatasService.getOne(1).subscribe(data => {
      console.log('ROW : ', data);
    },
      error => {
        console.log('ERROR: ', error);
      });
  }



  setNext() {
    this.accessDatasService.setNext(this.testArray);
  }
}
