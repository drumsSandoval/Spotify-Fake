import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AlbumPage } from '../pages/album/album';
import { ArtistPage} from '../pages/artist/artist'
import { PlayPage } from '../pages/play/play'
import { ReviewPage } from '../pages/review/review'

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AlbumPage,
    ArtistPage,
    PlayPage,
    ReviewPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AlbumPage,
    ArtistPage,
    PlayPage,
    ReviewPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
