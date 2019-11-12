import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import  { AlbumPage } from '../album/album';
import { ArtistPage } from '../artist/artist';
import { PlayPage } from '../play/play';
import { ReviewPage } from '../review/review';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  albun = AlbumPage;
  artist = ArtistPage;
  play = PlayPage;
  review = ReviewPage;
  discs = [
    {
      artist: 'Pearl Jam',
      name: 'Ten',
      year: '1991',
      stars: [1,2,3,4],
      img:"../../assets/imgs/Ten.jpg",
      imgBand:"../../assets/imgs/pearl-jam.png",
      biography: `
        <p>Pearl Jam es un grupo de grunge y rock alternativo formado en Seattle, Estados Unidos, en el año 1990,
        con integrantes de las bandas Mother Love Bone y Temple Of The Dog.</p>
        <p>
        Con la edición de su álbum debut Ten en 1991,
        Pearl Jam irrumpiría con fuerza en el ámbito musical alternativo.
        Junto a Nirvana, Alice in Chains y Soundgarden están considerados como una de las
        bandas más grandes e influyentes de toda la escena del rock de Seattle.
        Sus miembros fundadores y que aun siguen en el grupo son Eddie Vedder (voz),
        Mike McCready (guitarra principal), Stone Gossard (guitarra rítmica) y Jeff Ament (bajo).
        </p>
      `,
      songs: [
        'Once','Even Flow', 'Alive', 'Why Go', 'Black', 'Jeremy', 'Oceans', 'Porch',
        'Garden', 'Deep', 'Release'
      ],
      reviews:[
        {
          usuario: 'Juan Ernesto',
          stars: [1,2,3,4],
          comments: '3 comments',
          likes: 9,
          review: `
            <p>
              iba a poner algo motivando a que compres este disco pero sé que si estas viendo esto
               es por que ya piensas comprarlo, gran banda para ser tan infravalorada.
            </p>
            <p>
            sobre el envió, como se puede ver en la foto, llegó con unos golpes en la parte trasera,
            a mi no me molesta mucho pero sé que hay gente que si y luego hacen un problemón,
            tenganle mas cariño al envió.
            </p>
          `
        },
        {
          usuario: 'Oscar Sandoval',
          stars: [1,2,3,4,5],
          comments: '95 comments',
          likes:369,
          review:`
            <p>
            A mi en lo personal es uno de los discos de grunge que más me gustan.
            Me encanta la voz de Eddie Vedder. Curiosamente cuando fui joven no le presté mucha atención.
            Es un disco que en verdad no defrauda. Buenas composiciones y muy buena música.
            </p>
          `
        }

      ]
    },
    {
      artist: 'Tool',
      name: '10,000 days',
      year: '2006',
      stars: [1,2,3],
      img:"../../assets/imgs/Tool.jpeg",
      imgBand:"../../assets/imgs/tool.jpg",
      biography:`
        <p>
          Tool es una banda estadounidense de metal progresivo surgida en 1990 en Los Ángeles,
          California. Ha vendido más de trece millones de discos en todo el mundo y ha ganado tres premios Grammy hasta la fecha;
          ha encabezado giras y prestigiosos festivales y ha producido exitosos álbumes que alcanzaron
          grandes niveles de ventas gracias a su estatus de culto en el mundo de la música.1​
          Está formada por el baterista Danny Carey, el guitarrista Adam Jones,
          el vocalista Maynard James Keenan y el bajista Justin Chancellor,
          que sustituyó a Paul D'Amour en 1995.
        </p>
        <p>
          Tras quince años en el panorama musical,
          Tool había adquirido lo que Dan Epstein de la revista Revolver definió como
          «seguidores de culto»64​ y se comenzaron a propagar rumores sobre su próximo disco,
          que tendría influencias de Meshuggah y Fantômas, compañeros de gira en varias ocasiones.
          65​ El principal objeto de estos rumores era el título del álbum: en un principio se difundió
          que se llamaría Teleincision, hasta que la web oficial reveló que el título sería 10.000 Days.
        </p>
      `,
      songs:[
        'Vicarious','Jambi','Wings for Marie', '10,000 Days','The pot','Lipan Conjuring',
        'Lost Keys (Blame Hofmann)',
        'Rosetta Stoned',
        'Intension',
        'Right In Two',
        'Viginti Tres'
      ],
      reviews:[
        {
          usuario: 'Oscar Sandoval',
          stars: [1,2,3,4,5],
          comments: '15 comments',
          likes: 754,
          review:`
          <p>
          En cuanto a la música: es envolvente, es profunda, es Tool; no hay mucho más que decir, es un disco perfecto.
          En cuanto a la caja del disco: superó mis espectativas, Tool no sólo se preocupa por el arte auditivo,
          sino también por el visual; la caja tiene un diseño increíble.
          Y en cuanto al envío: todo bien, llegó en excelentes condiciones y a tiempo.
          <p>
          `
        },
        {
          usuario: 'Carlos Martz',
          stars: [1,2,3,4],
          likes: 65,
          comments: '185 comments',
          review:`
          <p>
          Ya conocía la música, y es increíble... Pero el arte del disco me impresionó, es maravilloso.
           Toda una experiencia completa.
          </p>
          `
        }

      ]
    },
    {
      artist: 'Porcupine Tree',
      name: 'Deadwing',
      year: '2005',
      stars: [1,2,3],
      img:"../../assets/imgs/Porcupine.jpg",
      imgBand:"../../assets/imgs/pocupine.jpg",
      biography:`
        <p>
          Porcupine Tree fue una banda de rock progresivo formada en Hemel Hempstead,
          Reino Unido. Esta banda es el proyecto más exitoso del músico Steven Wilson.
        </p>
        <p>
          Con una mezcla de rock psicodélico, rock progresivo, música ambiental y, más recientemente,
          heavy metal, han desarrollado piezas musicales que se caracterizan por su diversidad
          y la calidad distintiva del sonido en sus grabaciones. Wilson, un músico autodidacta
          amante de diversos géneros musicales,1​ y que comenzó con el proyecto como una parodia
          cómica de los grupos progresivos de los '70 paralelo a otro de sus múltiples proyectos,
          No-Man, ha trabajado con una buena cantidad de músicos y artistas,
          entre los que destacan Marillion, Opeth o Dream Theater.
        </p>
      `,
      songs:[
        'Deadwing','Shallow','Lazarus','Halo',
        'Arriving Somewhere But Not Here',
        'Mellotron Scratch','Open Car',
        'The Start of Something Beautiful',
        'Glass Arm Shattering',
        'Shesmovedon'
      ],
      reviews:[
        {
          usuario: 'Bogart Misael',
          stars: [1,2,3,4,5],
          comments: '15 comments',
          likes: 754,
          review:`
          <p>
          The album came in mediocre condition, scratched and with the inner sleeves broken.
          Sound quality was a bit frustrated from the damage, but this is an awesome album nevertheless.
          Amazon responded with the corresponding refund. After several cleanings I can get a decent
          listen out of it. It is such a masterpiece that I would totally recommend buying
          it and taking the risk (I'm pretty sure I just had bad luck + bad shipping).
          <p>
          `
        },
        {
          usuario: 'Monse Martz',
          stars: [1,2,3,4],
          likes: 65,
          comments: '185 comments',
          review:`
          <p>
          One of the many things I love about the Tree (as I have come to call them)
          and its planter and tender, the godlike genius that is Steven Wilson, is that
          there's always so much going on in their/his music.
          The intriguingly named Deadwing is definitely no exception.
          </p>
          `
        }
      ]
    },
    {
      artist: 'Deftones',
      name: 'Around the Fur',
      year: '1997',
      stars: [1,2],
      img:"../../assets/imgs/Deftones.jpg",
      imgBand:"../../assets/imgs/deftones.webp",
      biography:`
        <p>
          Deftones es una banda estadounidense de metal alternativo formada en Sacramento,
          California, en el año 1988. Son considerados los pioneros del género nu metal junto con Korn.
        </p>
        <p>
          Sus integrantes son Chino Moreno (vocalista), Stephen Carpenter (guitarrista),
          Abe Cunningham (baterista), Sergio Vega (bajista) y Frank Delgado (samplers).
          El bajista original de la banda era Chi Cheng, quien quedó en coma después de un accidente
          en 2008, y murió en 2013. Desde su formación, la banda ha lanzado ocho álbumes de estudio,
          dos EP, un álbum recopilatorio y once sencillos, además de un box set que incluye todos sus
          álbumes.
        </p>
        <p>
          La banda cuenta con un disco de oro y tres discos de platino.​
        </p>
      `,
      songs:[
        'My Own Summer (Shove it)','Lhabia','Mascara',
        'Around the Fur','Rickets',
        'Be Quiet and Drive (Far Away)', 'Lotion',
        'Dai The Flu', 'Headup', 'MX',
        'Bong Hit', 'Damone'
      ],
      reviews:[
        {
          usuario: 'Sammy  Macias',
          stars: [1,2,3,4,5],
          comments: '15 comments',
          likes: 754,
          review:`
          <p>
          Around the Fur was released during Deftones' nu metal days before they
          delivered their avant-garde opus White Pony and were still sinking their
          feet into the alternative metal scene. This album may not be their best but it's
          still an all around fantastic album with intense guitar melodies and raw production.
          Chino Moreno's vocals are some of the best in metal, ranging from eerie whispers to tortured
          melodic singing to head splitting screaming. As soon as the drums and the guitars burst
          through on 'My Own Summer', this album just grips you and excites you with ten tracks of
          nu metal brilliance.
          A powerful record from one of the best metal bands ever and a must own.
          <p>
          `
        },
        {
          usuario: 'Antonio Ramirez',
          stars: [1,2,3,4],
          likes: 65,
          comments: '185 comments',
          review:`
          <p>
          Conocí a Deftones por la primera canción del disco y al poco tiempo se convirtió en una banda de mis favoritas,
          el disco contiene de las mejores canciones de la banda manteniendo las en una cohesión que no llega
           a ser mono tomo en una escucha continua. De cualquier forma es un excelente discos recomendado
           para los ''abiertos'' a generos del heavy metal, rock o hard rock.
          </p>
          `
        }
      ]

    }
  ];
  constructor(public navCtrl: NavController) {

  }
  clickFoto(album,foto) {
      this.navCtrl.push(this.albun,{
        album: album,
        foto:foto
      });
  }

  clickName(band,biography,img){
    this.navCtrl.push(this.artist,{
      band: band,
      biography: biography,
      img:img
    })
  }
  clickPlay(songs,album,year,img){
    this.navCtrl.push(this.play,{
      songs: songs,
      album: album,
      year: year,
      img:img,
    });
  }
  clickReview(reviews){
    this.navCtrl.push(this.review,{
      reviews:reviews
    });
  }

}
