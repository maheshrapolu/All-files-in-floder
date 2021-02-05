import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  model: any = { };
  
  onSubmit(f: NgForm) {
    alert('Student Details!! :-)\n\n' + JSON.stringify(this.model));
    console.log(this.model);
    f.resetForm();
  }

}
