import { Component, OnInit } from "@angular/core"

@Component({
selector: 'product-app',//HTML element/tag
templateUrl:"app.component.html" //View Name

})
export class AppComponent implements OnInit {
        
        
    title:string ="Product Application";


//View is not hosted
    cosntructor(){

    }
//Called after view is hosted in browser
    ngOnInit() {
            
        }

}

