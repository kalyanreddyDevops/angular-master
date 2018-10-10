import {Injectable} from "@angular/core";

import {Subject} from "rxjs/Subject"

export interface Message{
    type:String;
    likes:number
}
@Injectable()
export class LikeService{
likeSubject:Subject<Message> = new Subject();

    constructor(){
        console.log("Like Service created !!");
    }

    private _homeLikes:number  = 0;
    get homeLikes(){
        return this._homeLikes;
    }

    set homeLikes(value:number){
        this._homeLikes = value;
        //publish the message
        this.likeSubject.next({
            type:'Home',
            likes: this._homeLikes
        })
    }

private _contactLikes:number  = 0;
    get contactLikes(){
        return this._contactLikes;
    }

    set contactLikes(value:number){
        this._contactLikes = value;
        //publish the message
        this.likeSubject.next({
            type:'Contact',
            likes: this._contactLikes
        })
    }
    
        
}