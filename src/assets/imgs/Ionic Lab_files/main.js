webpackJsonp([2],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlbumPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the AlbumPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AlbumPage = /** @class */ (function () {
    function AlbumPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.album = '';
        this.foto = '';
        this.album = navParams.get('album');
        this.foto = navParams.get('foto');
    }
    AlbumPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AlbumPage');
    };
    AlbumPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-album',template:/*ion-inline-start:"/Users/drumssand/SpotifyFake/src/pages/album/album.html"*/'<!--\n  Generated template for the AlbumPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title class="app-theme">\n      <p ion-text color="light">{{album}}</p>\n    </ion-title>\n  </ion-navbar>\n</ion-header >\n\n<ion-content padding class="app-theme">\n  <ion-card>\n    <img [src]="foto">\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"/Users/drumssand/SpotifyFake/src/pages/album/album.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], AlbumPage);
    return AlbumPage;
}());

//# sourceMappingURL=album.js.map

/***/ }),

/***/ 110:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 110;

/***/ }),

/***/ 151:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/album/album.module": [
		271,
		1
	],
	"../pages/artist/artist.module": [
		270,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 151;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__album_album__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__artist_artist__ = __webpack_require__(99);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomePage = /** @class */ (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
        this.albun = __WEBPACK_IMPORTED_MODULE_2__album_album__["a" /* AlbumPage */];
        this.artist = __WEBPACK_IMPORTED_MODULE_3__artist_artist__["a" /* ArtistPage */];
        this.discs = [
            {
                artist: 'Pearl Jam',
                name: 'Ten',
                year: '1991',
                stars: [1, 2, 3, 4],
                img: "../../assets/imgs/Ten.jpg",
                imgBand: "../../assets/imgs/pearl-jam.png",
                biography: "\n        <p>Pearl Jam es un grupo de grunge y rock alternativo formado en Seattle, Estados Unidos, en el a\u00F1o 1990,\n        con integrantes de las bandas Mother Love Bone y Temple Of The Dog.</p>\n        <p>\n        Con la edici\u00F3n de su \u00E1lbum debut Ten en 1991,\n        Pearl Jam irrumpir\u00EDa con fuerza en el \u00E1mbito musical alternativo.\n        Junto a Nirvana, Alice in Chains y Soundgarden est\u00E1n considerados como una de las\n        bandas m\u00E1s grandes e influyentes de toda la escena del rock de Seattle.\n        Sus miembros fundadores y que aun siguen en el grupo son Eddie Vedder (voz),\n        Mike McCready (guitarra principal), Stone Gossard (guitarra r\u00EDtmica) y Jeff Ament (bajo).\n        </p>\n      "
            },
            {
                artist: 'Tool',
                name: '10,000 days',
                year: '2006',
                stars: [1, 2, 3],
                img: "../../assets/imgs/Tool.jpeg",
                imgBand: "../../assets/imgs/tool.jpg",
                biography: "\n        <p>\n          Tool es una banda estadounidense de metal progresivo surgida en 1990 en Los \u00C1ngeles,\n          California. Ha vendido m\u00E1s de trece millones de discos en todo el mundo y ha ganado tres premios Grammy hasta la fecha;\n          ha encabezado giras y prestigiosos festivales y ha producido exitosos \u00E1lbumes que alcanzaron\n          grandes niveles de ventas gracias a su estatus de culto en el mundo de la m\u00FAsica.1\u200B\n          Est\u00E1 formada por el baterista Danny Carey, el guitarrista Adam Jones,\n          el vocalista Maynard James Keenan y el bajista Justin Chancellor,\n          que sustituy\u00F3 a Paul D'Amour en 1995.\n        </p>\n        <p>\n          Tras quince a\u00F1os en el panorama musical,\n          Tool hab\u00EDa adquirido lo que Dan Epstein de la revista Revolver defini\u00F3 como\n          \u00ABseguidores de culto\u00BB64\u200B y se comenzaron a propagar rumores sobre su pr\u00F3ximo disco,\n          que tendr\u00EDa influencias de Meshuggah y Fant\u00F4mas, compa\u00F1eros de gira en varias ocasiones.\n          65\u200B El principal objeto de estos rumores era el t\u00EDtulo del \u00E1lbum: en un principio se difundi\u00F3\n          que se llamar\u00EDa Teleincision, hasta que la web oficial revel\u00F3 que el t\u00EDtulo ser\u00EDa 10.000 Days.\n        </p>\n      "
            },
            {
                artist: 'Porcupine Tree',
                name: 'Deadwing',
                year: '2005',
                stars: [1, 2, 3],
                img: "../../assets/imgs/Porcupine.jpg",
                imgBand: "../../assets/imgs/pocupine.jpg",
                biography: "\n        <p>\n          Porcupine Tree fue una banda de rock progresivo formada en Hemel Hempstead,\n          Reino Unido. Esta banda es el proyecto m\u00E1s exitoso del m\u00FAsico Steven Wilson.\n        </p>\n        <p>\n          Con una mezcla de rock psicod\u00E9lico, rock progresivo, m\u00FAsica ambiental y, m\u00E1s recientemente,\n          heavy metal, han desarrollado piezas musicales que se caracterizan por su diversidad\n          y la calidad distintiva del sonido en sus grabaciones. Wilson, un m\u00FAsico autodidacta\n          amante de diversos g\u00E9neros musicales,1\u200B y que comenz\u00F3 con el proyecto como una parodia\n          c\u00F3mica de los grupos progresivos de los '70 paralelo a otro de sus m\u00FAltiples proyectos,\n          No-Man, ha trabajado con una buena cantidad de m\u00FAsicos y artistas,\n          entre los que destacan Marillion, Opeth o Dream Theater.\n        </p>\n      "
            },
            {
                artist: 'Deftones',
                name: 'Around the Fur',
                year: '1997',
                stars: [1, 2],
                img: "../../assets/imgs/Deftones.jpg",
                imgBand: "../../assets/imgs/deftones.webp",
                biography: "\n        <p>\n          Deftones es una banda estadounidense de metal alternativo formada en Sacramento,\n          California, en el a\u00F1o 1988. Son considerados los pioneros del g\u00E9nero nu metal junto con Korn.\n        </p>\n        <p>\n          Sus integrantes son Chino Moreno (vocalista), Stephen Carpenter (guitarrista),\n          Abe Cunningham (baterista), Sergio Vega (bajista) y Frank Delgado (samplers).\n          El bajista original de la banda era Chi Cheng, quien qued\u00F3 en coma despu\u00E9s de un accidente\n          en 2008, y muri\u00F3 en 2013. Desde su formaci\u00F3n, la banda ha lanzado ocho \u00E1lbumes de estudio,\n          dos EP, un \u00E1lbum recopilatorio y once sencillos, adem\u00E1s de un box set que incluye todos sus\n          \u00E1lbumes.\n        </p>\n        <p>\n          La banda cuenta con un disco de oro y tres discos de platino.\u200B\n        </p>\n      "
            }
        ];
    }
    HomePage.prototype.clickFoto = function (album, foto) {
        this.navCtrl.push(this.albun, {
            album: album,
            foto: foto
        });
    };
    HomePage.prototype.clickName = function (band, biography, img) {
        this.navCtrl.push(this.artist, {
            band: band,
            biography: biography,
            img: img
        });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/drumssand/SpotifyFake/src/pages/home/home.html"*/'<ion-header >\n  <ion-navbar >\n    <ion-title  class="app-theme">\n\n      <p ion-text color="light">Mis Discos</p>\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content  class="app-theme">\n  <ion-card>\n    <ion-item  *ngFor="let disc of discs" class="app-theme" >\n      <ion-thumbnail item-start>\n        <img (click)="clickFoto(disc.name,disc.img)" [src]="disc.img">\n      </ion-thumbnail>\n      <h2 (click)="clickName(disc.artist,disc.biography,disc.imgBand)" style="color: aliceblue;">{{disc.artist}}</h2>\n      <p>{{disc.year}}</p>\n      <ion-col *ngFor="let number of disc.stars">\n        <ion-icon color=\'light\' name="star"></ion-icon>\n      </ion-col>\n      <p> <ion-icon color=\'light\' name="play-outline"></ion-icon></p>\n    </ion-item>\n    </ion-card>\n</ion-content>\n'/*ion-inline-end:"/Users/drumssand/SpotifyFake/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(219);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 219:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_album_album__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_artist_artist__ = __webpack_require__(99);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_album_album__["a" /* AlbumPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_artist_artist__["a" /* ArtistPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/artist/artist.module#ArtistPageModule', name: 'ArtistPage', segment: 'artist', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/album/album.module#AlbumPageModule', name: 'AlbumPage', segment: 'album', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_album_album__["a" /* AlbumPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_artist_artist__["a" /* ArtistPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 269:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(195);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/drumssand/SpotifyFake/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/drumssand/SpotifyFake/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArtistPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ArtistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ArtistPage = /** @class */ (function () {
    function ArtistPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.artist = '';
        this.biography = '';
        this.img = '';
        this.artist = navParams.get('band');
        this.biography = navParams.get('biography');
        this.img = navParams.get('img');
    }
    ArtistPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ArtistPage');
    };
    ArtistPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-artist',template:/*ion-inline-start:"/Users/drumssand/SpotifyFake/src/pages/artist/artist.html"*/'<!--\n  Generated template for the ArtistPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title class="app-theme" ><p ion-text color="light">{{artist}}</p></ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="app-theme">\n  <ion-card>\n    <img [src]="img"/>\n    <ion-card-content padding>\n      <ion-card-title color="light">\n        {{artist}}\n       </ion-card-title>\n       <div [innerHTML]="biography">\n\n       </div>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"/Users/drumssand/SpotifyFake/src/pages/artist/artist.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], ArtistPage);
    return ArtistPage;
}());

//# sourceMappingURL=artist.js.map

/***/ })

},[196]);
//# sourceMappingURL=main.js.map