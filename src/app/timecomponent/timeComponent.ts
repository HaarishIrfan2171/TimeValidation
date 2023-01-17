import { Component, OnInit, ViewChild } from '@angular/core';
import * as moment from 'moment';


@Component({
  selector: 'app-time',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.scss'],
})
export class TimeComponent implements OnInit {
  fromTime: any;
  toTime: any;
  fromValidation: boolean = false;
  time: any = {
    from_Time: '',
    to_Time: '',
  }
  @ViewChild('timeForm') timeForm: any;
  ngOnInit(): void {}

  onFromTimeChange(event) {
    console.log(event.target.value)
    let time = this.fromTime.split(':');
    let date = moment(`2023-01-01 ${this.fromTime}:00`);
    let date1 = moment(`2023-01-01 ${this.toTime}`);
    console.log(time, date,moment(`2023-01-01 ${this.fromTime}:00`));
    if (this.toTime && this.fromTime) {
      console.log(moment(date1).isBefore(date))
      if(moment(date1).isBefore(date)){
        this.fromValidation = true;
      }
      else{
        this.fromValidation = false;
      }
    }
  }

  onToTimeChange(event) {
    console.log(event.target.value)
    let date = moment(`2023-01-01 ${this.fromTime}:00`);
    let date1 = moment(`2023-01-01 ${this.toTime}:00`);
    if (this.toTime && this.fromTime) {
      if(moment(date1).isBefore(date)){
        this.fromValidation = true;
      }
      else{
        this.fromValidation = false;
      }
    }
  }

  from_TimeChange(event){
    console.log(event.target.value)
    let date = moment(`2023-01-01 ${this.timeForm.form.get('from_Time').value}:00`);
    let date1 = moment(`2023-01-01 ${this.timeForm.form.get('to_Time').value}:00`);
    console.log(date)
    if (this.timeForm.form.get('from_Time').value && this.timeForm.form.get('to_Time').value) {
      if(moment(date1).isBefore(date)){
        this.timeForm.form.get('to_Time').setErrors({graterError: true});
      }
      else{
        this.timeForm.form.get('to_Time').setErrors(null);
      }
    }
    console.log(this.timeForm,  this.timeForm.form.get('to_Time'));
    
  }

  to_TimeChange(event){
    console.log(event.target.value)
    let date = moment(`2023-01-01 ${this.timeForm.form.get('from_Time').value}:00`);
    let date1 = moment(`2023-01-01 ${this.timeForm.form.get('to_Time').value}:00`);
    if (this.timeForm.form.get('from_Time').value && this.timeForm.form.get('to_Time').value) {
      if(moment(date1).isBefore(date)){
        this.timeForm.form.get('to_Time').setErrors({graterError: true});
      }
      else{
        this.timeForm.form.get('to_Time').setErrors(null);
      }
    }
    console.log(this.timeForm);
  }
}
