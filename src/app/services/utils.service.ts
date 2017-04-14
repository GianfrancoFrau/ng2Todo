import { Injectable } from '@angular/core';

@Injectable()
export class Utils {
  pad(n: number) {
    return n > 9 ? '' + n : '0' + n;
  }
}
