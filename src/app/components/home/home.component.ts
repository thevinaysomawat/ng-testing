import { Component, OnInit } from '@angular/core';
import { UnittestingService } from '../../services/unittesting.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public users;
  constructor(private unittestingService: UnittestingService) {
    this.users = unittestingService.getUsers();
  }

  ngOnInit(): void {
  }

}
