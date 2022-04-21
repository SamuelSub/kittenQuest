import { Component, OnInit } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  showSuccessBox = false;
  successMsg = 'Email Sent Successfully!'
  
  showAlertBox = false;
  validationMsg = ''

  displayAlertBox() {
    this.showAlertBox = true;
    setTimeout(() => {
      this.showAlertBox = false;
    }, 2500);
  }

  displaySuccessBox() {
    this.showSuccessBox = true;
    setTimeout(() => {
      this.showSuccessBox = false
    }, 2500);
  }

  handleContactForm(formValues: any) {
    // These keys should not be publicly available like i am doing, it's just for a project.
    if(formValues.terms === '') {
      this.validationMsg = 'You Need To Agree With The Terms & Conditions!';
      this.displayAlertBox()
      return
    }  

    emailjs.send('service_ro80pyo', 'template_7ywl66f', formValues, 'user_4AtxMgTsmU9RsnzhIN1z1')
      .then((result: EmailJSResponseStatus) => {
        console.log(result.text);
        this.displaySuccessBox()
      }, (error) => {
        console.log(error.text);
        this.validationMsg = 'Email Wasnt Sent Please Try Again';
        this.displayAlertBox();
      });
  }

}
