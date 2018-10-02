import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'Tidak ada server baru yang telah dibuat!';
  serverName = 'TestServer';
  serverCreated = false;

  constructor() {
    // () => {} adalah arrow function atau lamda --> fitur ES6 javascript
    setTimeout(()=> {
      this.allowNewServer = true;
    }, 2000)
  }

  ngOnInit() {
  }

  onCreationStatus() {
    this.serverCreated = true;
    this.serverCreationStatus = 'Server telah dibuat!';
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}