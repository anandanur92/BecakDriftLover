import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tugas3',
  templateUrl: './tugas3.component.html',
  styleUrls: ['./tugas3.component.css']
})
export class Tugas3Component implements OnInit {
kalimat;
status=true;
// log=[];
  constructor() { }

  ngOnInit() {
  }
  clickOnMe(){
    if(this.status=== true){
      this.kalimat="Politeknik Negeri Malang";
      this.status=false;
    }else{
      this.kalimat='';
      this.status=true;
      
    }
  
  }
}
