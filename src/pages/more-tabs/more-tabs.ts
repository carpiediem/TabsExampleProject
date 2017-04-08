import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { MoreA } from '../more-a/more-a';
import { MoreB } from '../more-b/more-b';
import { MoreC } from '../more-c/more-c';

@Component({
  selector: 'page-more-tabs',
  templateUrl: 'more-tabs.html'
})
export class MoreTabs {

  tab1Root: any = MoreA;
  tab2Root: any = MoreB;
  tab3Root: any = MoreC;

  constructor(public navCtrl: NavController) {}

}
