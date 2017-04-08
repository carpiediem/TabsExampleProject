import { Component } from '@angular/core';
import { NavController, App } from 'ionic-angular';
import { MoreTabs } from '../more-tabs/more-tabs';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private _app: App) {
    // The constructor is being re-run every time the user switched back and forth between TabsPage and MoreTabs
    console.log("Running constructor for HomePage");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

  goToOtherTabs(): void {
    const root = this._app.getRootNav();
    root.push(MoreTabs, {foo: "bar"});
  }

}
