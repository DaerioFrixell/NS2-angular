import { Component } from '@angular/core';
import { User } from 'src/dataTypes/User';
import { UserType } from 'src/dataTypes/UserType';

@Component({
  selector: 'user',
  templateUrl: './user.html',
  styleUrls: ['./user.scss']
})
export class UserComponent {
  user: User = {
    firstName: "first name",
    lastName: "last name",
    phoneNumber: "89879510466",
    type: UserType.CUSTOMER,
    createdAt: "123123123",
    modifiedAt: "123123123",

    id: 123
  }

  fakeField = "qwe"
}

const qwe = {
  na: "na",
  asd: "asd"
}


