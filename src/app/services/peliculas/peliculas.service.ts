import { Injectable } from '@angular/core';
import { Observable, delay, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PeliculasService {
  constructor() {}

  getDataEstrenos(): Observable<any> {
    const data = [
      {
        id: 1,
        nombre: 'Intensamente 2',
        categoria: ['Familiar', 'Animación'],
        clas: 'S/C',
        duracion: '0',
        img: '../../../assets/img.jpg',
        horarios: [],
        sinopsis:
          'Una película de Disney y Pixar INTENSA-MENTE 2 regresa a la mente de la recién adolescente Riley justo cuando el cuartel general está sufriendo una repentina demolición para hacer sitio a algo totalmente inesperado: ¡nuevas emociones! Alegría, Tristeza, Furia, Temor y Desagrado, que llevan mucho tiempo llevando a cabo una operación exitosa, no están seguros de cómo sentirse cuando aparece Ansiedad. Y parece que no está sola. Maya Hawke da su voz en inglés a Ansiedad, junto a Amy Poehler como Alegría, Phyllis Smith como Tristeza, Lewis Black como Furia, Tony Hale como Temor y Liza Lapira como Desagrado. Dirigida por Kelsey Mann y producida por Mark Nielsen, INTENSA-MENTE 2 estrena en cines en 2024.',
      },
      {
        id: 2,
        nombre: 'Duna Parte Dos',
        categoria: ['Acción', 'Drama'],
        clas: 'S/C',
        duracion: '166',
        img: '../../../assets/img2.jpg',
        horarios: [],
        sinopsis:
          '"Duna: Parte Dos" explorará el viaje mítico de Paul Atreides mientras se une con Chani y los Fremen mientras está en un camino de venganza contra los conspiradores que destruyeron a su familia. Enfrentando una elección entre el amor de su vida y el destino del universo conocido, se esfuerza por evitar un futuro terrible que solo él pueda prever.',
      },
      {
        id: 3,
        nombre: '57 Segundos Atrás',
        categoria: ['Suspenso'],
        clas: 'S/C',
        duracion: '99 min',
        img: '../../../assets/img9.jpg',
        horarios: ['15:30', '20:45'],
        sinopsis:
          'Cuando un joven descubre los poderes de viaje en el tiempo de un misterioso anillo, lo empieza a usar para acceder al mundo de la gente más rica y poderosa, solo para encontrarse en una situación muy peligrosa cuando descubre que sus nuevos amigos son responsables de la muerte de su hermana.',
      },
      {
        id: 4,
        nombre: 'Bob Marley: La Leyenda',
        categoria: ['Musical', 'Drama'],
        clas: 'S/C',
        duracion: '104',
        img: '../../../img1.jp',
        horarios: [],
        sinopsis:
          'BOB MARLEY: LA LEYENDA celebra la vida y la música de un ícono que inspiró a generaciones a través de su mensaje de amor y unidad. Descubre por primera vez en la pantalla grande la poderosa historia de superación de la adversidad de Bob y el viaje detrás de su música revolucionaria. Producida en colaboración con la familia Marley y protagonizada por Kingsley Ben-Adir como el legendario músico y Lashana Lynch como su esposa Rita.',
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

  getDataMovies(): Observable<any> {
    const data = [
      {
        id: 1,
        nombre: 'Pobres Criaturas',
        categoria: ['minCiencia Ficción', 'Romance'],
        clas: 'C',
        duracion: '141',
        img: '../../../assets/images/pobres-criaturas.jpg',
        horarios: ['12:00', '14:15', '15:00', '18:00', '20:15', '21:00'],
        sinopsis:
          'Del realizador Yorgos Lanthimos y la productora Emma Stone, llega la historia increíble y evolución fantástica de Bella Baxter (Stone), una joven a la que el brillante y poco ortodoxo científico Dr. Godwin Baxter (Willem Dafoe) le devuelve la vida. Bajo la protección de Baxter, Bella está ansiosa por aprender. Deseosa de la experiencia que le falta, Bella huye con Duncan Wedderburn (Mark Ruffalo), un abogado astuto y libertino, en una aventura vertiginosa a través de los continentes. Libre de los prejuicios de su época, Bella crece firme en su propósito de defender la igualdad y la liberación.',
      },
      {
        id: 2,
        nombre: 'Aquaman y El Reino Perdido',
        categoria: ['Acción', 'Aventura'],
        clas: 'B',
        duracion: '127',
        img: '../../../assets/aquaman.jpg',
        horarios: ['16:25', '21:20'],
        sinopsis:
          'El director James Wan y el propio Aquaman, Jason Momoa—junto con Patrick Wilson, Amber Heard, Yahya Abdul-Mateen II y Nicole Kidman—regresan en la secuela de la película de DC más taquillera de todos los tiempos: “Aquaman y el Reino Perdido”. Al no poder derrotar a Aquaman la primera vez, Black Manta, todavía impulsado por la necesidad de vengar la muerte de su padre, no se detendrá ante nada para acabar con Aquaman de una vez por todas. Esta vez Black Manta es más formidable que nunca y ejerce el poder del mítico Tridente Negro, que desata una fuerza antigua y malévola. Para derrotarlo, Aquaman recurrirá a su hermano encarcelado Orm, el ex rey de la Atlántida, para forjar una alianza improbable. Juntos, deben dejar de lado sus diferencias para proteger su reino y salvar a la familia de Aquaman y al mundo de una destrucción irreversible.',
      },
      {
        id: 3,
        nombre: 'Wonka',
        categoria: ['Aventura', 'Acción'],
        clas: 'A',
        duracion: '117',
        img: '../../../assets/wonka.jpg',
        horarios: ['12:50', '15:30', '18:15', '21:00'],
        sinopsis:
          'Basado en el extraordinario personaje central de Charlie y la fábrica de chocolate, el libro infantil más icónico de Roald Dahl y uno de los libros infantiles más vendidos de todos los tiempos, "Wonka" cuenta la maravillosa historia de cómo el mayor inventor, mago y chocolatero se convirtió en el amado Willy Wonka que conocemos hoy. De Paul King, escritor/director de las películas de "Paddington", David Heyman, productor de "Harry Potter", "Gravity", "Animales Fantásticos" y "Paddington", y los productores Alexandra Derbyshire (las películas de "Paddington", "Jurassic World: Dominion”) y Luke Kelly (“The Witches de Roald Dahl”), llega una embriagadora mezcla de magia y música, caos y emoción, todo contado con un corazón y un humor fabulosos. Protagonizada por Timothée Chalamet en el papel principal, este irresistiblemente vívido e ingenioso espectáculo de pantalla grande presentará al público a un joven Willy Wonka, repleto de ideas y decidido a cambiar el mundo con un delicioso bocado a la vez, demostrando que las mejores cosas de la vida comienza con un sueño, y si tienes la suerte de conocer a Willy Wonka, todo es posible.',
      },
      {
        id: 4,
        nombre: 'Chicas Pesadas',
        categoria: ['Musical'],
        clas: 'B',
        duracion: '113',
        img: '../../../assets/images/chicas-pesadas.jpg',
        horarios: ['14:15', '16:45', '19:15'],
        sinopsis:
          "De la ingeniosa mente de Tina Fey llega un nuevo giro al clásico moderno, #ChicasPesadas. La nueva estudiante Cady Heron (Angourie Rice) es recibida en la cima de la cadena social alimenticia por el grupo de élite de chicas populares llamado 'Las Plásticas', liderado por intrigante Regina George (Reneé Rapp) y sus amigas Gretchen (Bebe Wood) y Karen (Avantika). Sin embargo, cuando Cady comete el grave error de enamorarse del exnovio de Regina, Aaron Samuels (Christopher Briney), se encontrará presa en su mira. Mientras Cady se dispone a acabar con la abeja reina con la ayuda de sus amigos marginados Janis (Auli'i Cravalho) y Damian (Jaquel Spivey), deberá aprender a mantenerse fiel a sí misma mientras navega por la jungla más despiadada de todas: la preparatoria.",
      },
      {
        id: 5,
        nombre: '¡Patos!',
        categoria: ['Animación', ' Infantil'],
        clas: 'AA',
        duracion: '92 min',
        img: '../../../assets/patos.jpg',
        horarios: ['14:00', '16:35'],
        sinopsis:
          'La familia Mallard está un poco estancada. Mientras que papá Mack se contenta con mantener a su familia a salvo remando en su estanque de Nueva Inglaterra para siempre, la mamá Pam está ansiosa por cambiar las cosas y mostrarles a sus hijos, el hijo adolescente Dax y la patita Gwen, todo el mundo. Después de que una familia de patos migratorios se posa en su estanque con emocionantes historias de lugares remotos, Pam convence a Mack para que se embarque en un viaje familiar, a través de la ciudad de Nueva York, a la tropical Jamaica. A medida que los patos silvestres se dirigen al sur para pasar el invierno, sus planes bien rápidamente se tuercen. Esta aventura los inspirará a expandir sus horizontes, abrirse a nuevos amigos y lograr más de lo que nunca creyeron posible, mientras les enseña más de lo que nunca imaginaron sobre los demás y sobre sí mismos.',
      },
      {
        id: 6,
        nombre: 'Después de la Muerte',
        categoria: ['Documental'],
        clas: 'A',
        duracion: '108',
        img: '../../../assets/depues-muerte.jpg',
        horarios: ['12:50', '16:20', '18:45', '21:20'],
        sinopsis:
          'After Death, creada por el mismo estudio de “Sonidos de Libertad”, película con una recaudación superior a los 12 millones de dólares, llega esta nueva producción documental estadounidense escrita y dirigida por Stephen Gray y Chris Radtke. La película narra las historias de varios sobrevivientes de experiencias cercanas a la muerte y presenta análisis de estos eventos por parte de autores y científicos mientras intentan determinar qué sucede después de que las personas mueren. La película presenta entrevistas, así como recreaciones de eventos, mientras las personas en el documental discuten lo que puede suceder después de la muerte.',
      },
    ];

    return of(data).pipe(delay(1500));
  }
}
