import { Component, OnInit } from '@angular/core';
import { Mahasiswa } from '../shared/mahasiswa';

@Component({
  selector: 'app-data-mahasiswa',
  templateUrl: './data-mahasiswa.component.html',
  styleUrls: ['./data-mahasiswa.component.css']
})
export class DataMahasiswaComponent implements OnInit {
nim='';
nama='';
kelas='';
dftrMhs:Mahasiswa[]=[];
mhs;

  constructor() { }

  ngOnInit() {
  }
  tambahMhs(){
    this.mhs=new Mahasiswa(this.nim,this.nama,this.kelas);
    this.dftrMhs.push(this.mhs)
    this.nim="";
    this.nama="";
    this.kelas="";
  }
}