import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users-service.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor( public authServiceAK: UsersService) { }

  ngOnInit(): void {
  }

}
