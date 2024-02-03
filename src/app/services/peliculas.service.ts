import { Injectable } from '@angular/core';
import { Observable, delay, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PeliculasService {
  constructor() {}

  getDataApi(): Observable<any> {
    const data = [
      {
        id: 1,
        nombre: 'Cachorros Espaciales',
        categoria: ['Aventura'],
        clas: 'AA',
        duracion: '92 min',
        img: '../../../assets/images/cachorros_espaciales.jpg',
        horarios: ['13:50', '16:50', '19:00'],
        sinopsis:
          'Tres extraterrestres, han estrellado su nave en la tierra y ahora deben arreglarla para volver a casa. Para poder pasar desapercibidos se transforman en adorables perritos y con la ayuda de dos valientes niños vivirán una divertida aventura para regresar a su planeta.',
      },
      {
        id: 2,
        nombre: 'Pobres Criaturas',
        categoria: ['Ciencia Ficción', 'Romance'],
        clas: 'C',
        duracion: '141 min',
        img: '../../../assets/images/pobres_criaturas.jpg',
        horarios: ['14:35', '15:05', '17:40', '20:30', '21:20'],
        sinopsis:
          'Del realizador Yorgos Lanthimos y la productora Emma Stone, llega la historia increíble y evolución fantástica de Bella Baxter (Stone), una joven a la que el brillante y poco ortodoxo científico Dr. Godwin Baxter (Willem Dafoe) le devuelve la vida. Bajo la protección de Baxter, Bella está ansiosa por aprender. Deseosa de la experiencia que le falta, Bella huye con Duncan Wedderburn (Mark Ruffalo), un abogado astuto y libertino, en una aventura vertiginosa a través de los continentes. Libre de los prejuicios de su época, Bella crece firme en su propósito de defender la igualdad y la liberación.',
      },
      {
        id: 3,
        nombre: 'Godzilla Minus One',
        categoria: ['Acción'],
        clas: 'B',
        duracion: '125 min',
        img: '../../../assets/images/godzilla.jpg',
        horarios: ['15:30', '20:45'],
        sinopsis:
          '#Godzillaminusone: Un Espectáculo Cinematográfico Celebrando 70 Años de Destrucción del icónico gigante. Después de la guerra, un Japón desolado es testigo del surgimiento de Godzilla, llevando al país a una destrucción aún mayor. En el momento de mayor desesperación, ¿quién se atreverá a resistir? Se testigo del Godzilla más aterrador y destructivo en cines.',
      },
      {
        id: 4,
        nombre: 'Evie: El Demonio Entre Nosotros',
        categoria: ['Terror'],
        clas: 'B',
        duracion: '103 min',
        img: '../../../assets/images/el-demonio-entre-nosotros.jpg',
        horarios: ['14:45', '21:00'],
        sinopsis:
          'Una joven vuelve a su casa familiar con la desesperación de descubrir al autor del asesinato de su hermana Evie 20 años antes. Tras una serie de aterradores encuentros con el fantasma de Evie a las 09:09 de la noche, Margot sabe que debe luchar para conocer la verdad de una vez por todas.',
      },
      {
        id: 5,
        nombre: 'Anatomía de Una Caída',
        categoria: ['Drama', 'Thriller'],
        clas: 'B',
        duracion: '151 min',
        img: '../../../assets/images/anatomia.jpg',
        horarios: ['15:30', '20:10', '21:40'],
        sinopsis:
          'Sandra es una escritora alemana que vive con su esposo francés, Samuel y su hijo Daniel de 11 años, quienes durante el último tiempo han tenido una vida aislada en un pueblo remoto en los Alpes franceses. Su vida calma y tranquila se desmorona cuando encuentren a Samuel muerto sobre la nieve en las afueras de su chalet. La policía comenzará a investigar la muerte de Samuel de la que Sandra podría ser la principal sospechosa. Poco a poco el juicio se transformará no solo en una investigación de las circunstancias de la muerte de Samuel, sino en un inquietante viaje psicológico a las profundidades de la conflictiva relación entre Sandra y Samuel.',
      },
      {
        id: 6,
        nombre: 'RE Oppenheimer',
        categoria: ['Drama'],
        clas: 'B15',
        duracion: '183 min',
        img: '../../../assets/images/oppenheimer.jpg',
        horarios: ['19:10'],
        sinopsis:
          'Oppenheimer es una próxima película biográfica estadounidense escrita y dirigida por Christopher Nolan, basada en American Prometheus, una biografía de J. Robert Oppenheimer.',
      },
      {
        id: 7,
        nombre: 'RE Barbie',
        categoria: ['Comedia'],
        clas: 'B',
        duracion: '114 min',
        img: '../../../assets/images/barbie.jpg',
        horarios: ['19:30'],
        sinopsis:
          'Vivir en la tierra de Barbie es ser un ser perfecto en un lugar perfecto. A menos que tengas una crisis existencial total. O seas un Ken.',
      },
      {
        id: 8,
        nombre: 'Chicas Pesadas',
        categoria: ['Musical'],
        clas: 'B',
        duracion: '113 min',
        img: '../../../assets/images/chicas_pesadas.jpg',
        horarios: ['14:15', '16:45', '19:15'],
        sinopsis:
          "De la ingeniosa mente de Tina Fey llega un nuevo giro al clásico moderno, #ChicasPesadas. La nueva estudiante Cady Heron (Angourie Rice) es recibida en la cima de la cadena social alimenticia por el grupo de élite de chicas populares llamado 'Las Plásticas', liderado por intrigante Regina George (Reneé Rapp) y sus amigas Gretchen (Bebe Wood) y Karen (Avantika). Sin embargo, cuando Cady comete el grave error de enamorarse del exnovio de Regina, Aaron Samuels (Christopher Briney), se encontrará presa en su mira. Mientras Cady se dispone a acabar con la abeja reina con la ayuda de sus amigos marginados Janis (Auli'i Cravalho) y Damian (Jaquel Spivey), deberá aprender a mantenerse fiel a sí misma mientras navega por la jungla más despiadada de todas: la preparatoria.",
      },
      {
        id: 9,
        nombre: '¡Patos!',
        categoria: ['Animación', ' Infantil'],
        clas: 'AA',
        duracion: '92 min',
        img: '../../../assets/images/patos.jpg',
        horarios: ['14:00', '16:35'],
        sinopsis:
          'La familia Mallard está un poco estancada. Mientras que papá Mack se contenta con mantener a su familia a salvo remando en su estanque de Nueva Inglaterra para siempre, la mamá Pam está ansiosa por cambiar las cosas y mostrarles a sus hijos, el hijo adolescente Dax y la patita Gwen, todo el mundo. Después de que una familia de patos migratorios se posa en su estanque con emocionantes historias de lugares remotos, Pam convence a Mack para que se embarque en un viaje familiar, a través de la ciudad de Nueva York, a la tropical Jamaica. A medida que los patos silvestres se dirigen al sur para pasar el invierno, sus planes bien rápidamente se tuercen. Esta aventura los inspirará a expandir sus horizontes, abrirse a nuevos amigos y lograr más de lo que nunca creyeron posible, mientras les enseña más de lo que nunca imaginaron sobre los demás y sobre sí mismos.',
      },
      {
        id: 10,
        nombre: 'Aquaman y El Reino Perdido',
        categoria: ['Acción', 'Aventura'],
        clas: 'B',
        duracion: '127 min',
        img: '../../../assets/images/aqua_man.jpg',
        horarios: ['12:00', '14:45', '17:30', '20:15'],
        sinopsis:
          'El director James Wan y el propio Aquaman, Jason Momoa—junto con Patrick Wilson, Amber Heard, Yahya Abdul-Mateen II y Nicole Kidman—regresan en la secuela de la película de DC más taquillera de todos los tiempos: “Aquaman y el Reino Perdido”. Al no poder derrotar a Aquaman la primera vez, Black Manta, todavía impulsado por la necesidad de vengar la muerte de su padre, no se detendrá ante nada para acabar con Aquaman de una vez por todas. Esta vez Black Manta es más formidable que nunca y ejerce el poder del mítico Tridente Negro, que desata una fuerza antigua y malévola. Para derrotarlo, Aquaman recurrirá a su hermano encarcelado Orm, el ex rey de la Atlántida, para forjar una alianza improbable. Juntos, deben dejar de lado sus diferencias para proteger su reino y salvar a la familia de Aquaman y al mundo de una destrucción irreversible.',
      },
    ];

    return of(data).pipe(delay(1500));
  }
}
