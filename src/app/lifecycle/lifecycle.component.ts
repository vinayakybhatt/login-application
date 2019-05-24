import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.css']
})

export class LifeCycleComponent {    
    data:number=1;
    constructor() {
        console.log(`new - data is ${this.data}`);
    }
    ngOnChanges() {
        console.log(`ngOnChanges - data is ${this.data}`);
    }
    ngOnInit() {
        var x =10;
        console.log(`ngOnInit  - data is ${this.data}`);
        console.log('========', x)
    }
    ngDoCheck() {
        console.log("ngDoCheck")
    }
    ngAfterContentInit() {
        console.log("ngAfterContentInit");
    }
    ngAfterContentChecked() {
        console.log("ngAfterContentChecked");
    }
    ngAfterViewInit() {
        console.log("ngAfterViewInit");
    }
    ngAfterViewChecked() {
        console.log("ngAfterViewChecked");
    }
    ngOnDestroy() {
        console.log("ngOnDestroy");
    }
    fnAddNumber():void{
        this.data+=1;
    }
    deleteNumber():void{
        this.data -=1;
    }
}

