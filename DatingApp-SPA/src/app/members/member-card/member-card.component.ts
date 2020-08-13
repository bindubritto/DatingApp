import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../_models/user';

@Component({
  selector: 'app-member-card',
  templateUrl: './member-card.component.html',
  styleUrls: ['./member-card.component.css']
})
export class MemberCardComponent implements OnInit {
  // MemberCard is a child component of MemberList Component.
  @Input() user: User;

  constructor() { }

  ngOnInit() {
  }

}
