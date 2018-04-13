import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  tcknControl = new FormControl('', [validateKN]);
}
function validateKN (control: FormControl) {
  if (control.value) {
    if (control.value.toString().length === 11) {
      const value = control.value.toString();
      const isEleven = /^[0-9]{11}$/.test(value);
      let totalX = 0;
      for (let i = 0 ; i < 10 ; i++) {
        totalX += Number(value.substr(i, 1));
      }
      const isRuleX = totalX % 10 === Number(value.substr(10, 1));
      let totalY1 = 0;
      let totalY2 = 0;
      for (let i = 0 ; i < 10 ; i += 2) {
        totalY1 += Number(value.substr(i, 1));
      }
      for (let i = 1 ; i < 10 ; i += 2) {
        totalY2 += Number(value.substr(i, 1));
      }
      const isRuleY = ((totalY1 * 7) - totalY2) % 10 === Number(value.substr(9, 0));
      if (isEleven && isRuleX && isRuleY) {
        return null;
      } else {
        return {'valid': false};
      }
    } else {
      return {'valid': false};
    }
  } else {
    return {'valid': false};
  }
}
