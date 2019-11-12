import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AlbumPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-album',
  templateUrl: 'album.html',
})
export class AlbumPage {
  album='';
  foto='';
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.album = navParams.get('album');
    this.foto = navParams.get('foto');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AlbumPage');
  }

}
