import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PlayPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-play',
  templateUrl: 'play.html',
})
export class PlayPage {
  songs='';
  year='';
  img='';
  album=''

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.songs=navParams.get('songs');
    this.year=navParams.get('year');
    this.img=navParams.get('img');
    this.album=navParams.get('album');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PlayPage');
  }

}
