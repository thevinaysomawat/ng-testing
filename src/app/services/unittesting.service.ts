import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UnittestingService {

  constructor() { }

  getUsers(): Array<{}> {
    return [
        {
            name: 'Vinay',
            surname: 'Somawat'
        },
        {
          name: 'Aman',
          surname: 'Mittal'
        }
    ];
}
}
