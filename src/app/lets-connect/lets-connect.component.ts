import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-lets-connect',
  templateUrl: './lets-connect.component.html',
  styleUrls: ['./lets-connect.component.scss']
})
export class LetsConnectComponent implements OnInit {

  feedbackForm =  new FormGroup({
    name:  new FormControl('', Validators.required),
    email:  new FormControl('', [Validators.required, Validators.email]),
    message:  new FormControl('', Validators.maxLength(500))
  });

  constructor() { }

  ngOnInit(): void {
  }

  submitFeedback(){
    alert("Currently this app does not have the capability to do transactions, please try again!");
    this.feedbackForm.reset();
    // alert("Your message/feedback was submitted successfully!");
  }

}
