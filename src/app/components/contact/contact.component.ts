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

  handleContactForm(formValues: any) {
    // These keys should not be publicly available like i am doing, it's just for a project.
    emailjs.send('service_ro80pyo', 'template_7ywl66f', formValues, 'user_4AtxMgTsmU9RsnzhIN1z1')
      .then((result: EmailJSResponseStatus) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  }

}
