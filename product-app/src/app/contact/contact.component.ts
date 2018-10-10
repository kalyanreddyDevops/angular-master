import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { LikeService, Message } from "../shared/like.service";

@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

address: any;//undefined

@ViewChild("para1")
para1: ElementRef;

contactLikes:number = 600;

  constructor (private likeService:LikeService){
console.log("Contact component created..")

}
//View is initialized
  ngOnInit() {
    //nativeElement is real dom element
    this.para1.nativeElement.textContent = "From TS";

    this.likeService.likeSubject
    .subscribe ( (message: Message) => {
      this.contactLikes = message.likes;
      console.log("contact subs called");
    })
  }

}
