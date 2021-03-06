import { Component } from '@angular/core';
import { NavController, NavParams, App } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';

@Component({
  selector: 'page-more-b',
  templateUrl: 'more-b.html',
})
export class MoreB {

  constructor(public navCtrl: NavController, public navParams: NavParams, private _app: App) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MoreB');
  }

  backToPrimaryTabs(): void {
    //this.navCtrl.pop();  //Error: You can't remove all the pages in the navigation stack. nav.pop() is probably called too many times.
    const root = this._app.getRootNav();
    root.push(TabsPage);
  }

}
