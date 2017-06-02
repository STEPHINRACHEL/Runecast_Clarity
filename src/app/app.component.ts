import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {GlobalService} from "./global.service";

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    constructor(private router: Router,private global:GlobalService) {
    }
}
