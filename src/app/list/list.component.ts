import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

var TAG = "[ListComponent] ";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  childrenArray = [
    {'name': 'Arina', 'surname': 'Gordejeva', 'balance': '1.99'},
    {'name': 'Arina 1', 'surname': 'Gordejeva 1', 'balance': '1.99'},
    {'name': 'Arina 2', 'surname': 'Gordejeva 2', 'balance': '1.99'},
    {'name': 'Arina 3', 'surname': 'Gordejeva 3', 'balance': '1.99'},
    {'name': 'Arina 4', 'surname': 'Gordejeva 4', 'balance': '1.99'},
    {'name': 'Arina', 'surname': 'Gordejeva', 'balance': '1.99'},
    {'name': 'Arina 1', 'surname': 'Gordejeva 1', 'balance': '1.99'},
    {'name': 'Arina 2', 'surname': 'Gordejeva 2', 'balance': '1.99'},
    {'name': 'Arina 3', 'surname': 'Gordejeva 3', 'balance': '1.99'},
    {'name': 'Arina 4', 'surname': 'Gordejeva 4', 'balance': '1.99'},
    {'name': 'Arina', 'surname': 'Gordejeva', 'balance': '1.99'},
    {'name': 'Arina 1', 'surname': 'Gordejeva 1', 'balance': '1.99'},
    {'name': 'Arina 2', 'surname': 'Gordejeva 2', 'balance': '1.99'},
    {'name': 'Arina 3', 'surname': 'Gordejeva 3', 'balance': '1.99'},
    {'name': 'Arina 4', 'surname': 'Gordejeva 4', 'balance': '1.99'},
    {'name': 'Arina', 'surname': 'Gordejeva', 'balance': '1.99'},
    {'name': 'Arina 1', 'surname': 'Gordejeva 1', 'balance': '1.99'},
    {'name': 'Arina 2', 'surname': 'Gordejeva 2', 'balance': '1.99'},
    {'name': 'Arina 3', 'surname': 'Gordejeva 3', 'balance': '1.99'},
    {'name': 'Arina 4', 'surname': 'Gordejeva 4', 'balance': '1.99'},
    {'name': 'Arina', 'surname': 'Gordejeva', 'balance': '1.99'},
    {'name': 'Arina 1', 'surname': 'Gordejeva 1', 'balance': '1.99'},
    {'name': 'Arina 2', 'surname': 'Gordejeva 2', 'balance': '1.99'},
    {'name': 'Arina 3', 'surname': 'Gordejeva 3', 'balance': '1.99'},
    {'name': 'Arina 4', 'surname': 'Gordejeva 4', 'balance': '1.99'}
  ];

  constructor(private router: Router){
    
    let childrenArrayStr = JSON.stringify(this.childrenArray);

    //localStorage.setItem("children", childrenArrayStr);

  }

  ngOnInit(){
    
    let childrenArraStr = localStorage.getItem("children"); 

    console.log(TAG+" children: "+childrenArraStr);
  }

  _listOnClick() {
    console.log(TAG+" _listOnClick called with arguments: "+JSON.stringify(arguments, null, 2));

    this.router.navigate(["details"]);
  }

}
