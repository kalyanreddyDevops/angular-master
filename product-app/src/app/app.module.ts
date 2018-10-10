//node_modules
import {NgModule} from "@angular/core";

//node_modules
import { BrowserModule } from "@angular/platform-browser"

import {RouterModule} from "@angular/router";

//Project specific
import { AppComponent } from "./app.component";
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { SharedModule } from "./shared/shared.module";
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

import { routes } from "./app.routing"
//import { ProductModule } from "./product/product.module";

import {environment} from "../environments/environment"

console.log("Environment  ", environment);

import { LocationStrategy, HashLocationStrategy, PathLocationStrategy } from "@angular/common"
import { AuthModule } from "./auth/auth.module";
import { ErrorModule } from "./error/error.module";
//ng serve (environment.ts)
//ng build --prod (environment.prod.ts)



@NgModule({
    //for prior module dependencies
imports:[
BrowserModule,
SharedModule,
RouterModule.forRoot(routes),
AuthModule,
ErrorModule
//ProductModule,
//AuthModule
],
declarations:[
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    HeaderComponent,
    FooterComponent,
    //AboutComponent,
    //ContactComponent,
    //HighlightDirective
    //Pipe
],

bootstrap:[
    AppComponent,
    //ChatAppComponent //Not recommended : Rule of thumb is only one Componet should keep here
],
providers:[
    {
        provide:LocationStrategy,
        useClass:HashLocationStrategy
    },
    {
            provide: "apiEndPoint",
           // useValue: environment.apiEndPoint
             useValue: "http://localhost:7070"
        }
]

})

export class AppModule{


}