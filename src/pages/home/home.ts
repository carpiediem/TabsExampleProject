import { Component } from '@angular/core';
import { NavController, App } from 'ionic-angular';
import { MoreTabs } from '../more-tabs/more-tabs';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private _app: App) {

  }

  goToOtherTabs(): void {
    const root = this._app.getRootNav();
    root.push(MoreTabs, {foo: "bar"});
  }

}
