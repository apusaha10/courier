import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() toggleSidebarForMe: EventEmitter<any> = new EventEmitter();

  constructor(private router: Router) { }
  // isShowDiv = false;
  // isShowDivLogin= true;

  ngOnInit(): void {
  }
  toggleSidebar(){
    this.toggleSidebarForMe.emit()
  }
  btnClick(){
    this.router.navigateByUrl('/login');
  }
  // sign in button to userimage toogle
  // toggleDisplayDiv(){
  //   this.isShowDiv = !this.isShowDiv;
  // }
  // toggleDisplayDivLogin(){
  //   this.isShowDivLogin = !this.isShowDivLogin;
  // }
  userImage="assets/user.png"
}
