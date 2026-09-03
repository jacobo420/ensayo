/* Datos de ejemplo del blog "El Lado Extracultural".
   En un backend real esto vendría de una base de datos / API. */

const POSTS = [
  {
    id: 1,
    title: "5 Tendencias Virales que Nacieron en TikTok y Cambiaron la Cultura Pop",
    excerpt:
      "Desde bailes hasta movimientos sociales: así es como un video de 15 segundos puede reescribir la cultura popular en cuestión de horas.",
    content: `TikTok dejó de ser "la app de bailes" hace mucho tiempo. Hoy es un laboratorio cultural en tiempo real donde nacen tendencias que después migran a la música, la moda, el cine y hasta la política.

En este artículo repasamos cinco fenómenos que arrancaron como un simple video y terminaron convertidos en movimientos culturales globales: el resurgimiento de géneros musicales olvidados, nuevas formas de activismo digital, estéticas visuales que hoy dominan las pasarelas y hasta palabras que ya están en el diccionario.

Lo interesante no es solo qué se vuelve viral, sino por qué. Analizamos los patrones detrás del algoritmo y cómo una comunidad pequeña pero constante puede empujar una idea hasta el mainstream.

Si algo nos enseña "El Lado Extracultural" es que la cultura ya no baja de arriba hacia abajo: ahora nace en comentarios, dúos y remixes.`,
    category: "Tendencias Virales",
    date: "2026-08-28",
    image: "https://picsum.photos/seed/extracultural-trend1/900/600",
    readTime: 6,
  },
  {
    id: 2,
    title: "El Arte Urbano que Nadie te Cuenta: Muralistas Under que Debes Conocer",
    excerpt:
      "Detrás de cada muro pintado hay una historia que la ciudad prefiere ignorar. Conoce a los artistas que están transformando el paisaje urbano.",
    content: `El arte urbano siempre ha vivido en la frontera entre el vandalismo y la expresión legítima. En este recorrido visitamos colectivos y artistas independientes que usan la calle como galería sin pedir permiso.

Hablamos de técnicas, de mensajes ocultos en los murales y de cómo estas piezas terminan documentando la memoria de un barrio mejor que cualquier libro de historia oficial.

También exploramos la tensión entre la gentrificación y el arte urbano: qué pasa cuando una marca "adopta" el grafiti para venderlo, y cómo los artistas originales responden a esa apropiación.

Una invitación a mirar tu ciudad con otros ojos la próxima vez que camines por ahí.`,
    category: "Arte Urbano",
    date: "2026-08-24",
    image: "https://picsum.photos/seed/extracultural-art2/900/600",
    readTime: 8,
  },
  {
    id: 3,
    title: "Curiosidades Culturales que Te Van a Volar la Cabeza",
    excerpt:
      "Rituales, creencias y datos que suenan a mito pero son completamente reales. Una selección para sorprender en cualquier conversación.",
    content: `La cultura popular está llena de datos que parecen inventados pero tienen raíces históricas sólidas. En este artículo reunimos las curiosidades más comentadas de nuestra comunidad en TikTok.

Desde festividades que combinan tradiciones prehispánicas con el catolicismo, hasta objetos cotidianos con orígenes insospechados, cada dato viene acompañado de contexto para que no te quedes solo con el "wow" sino también con el "por qué".

Esta es la esencia de "El Lado Extracultural": tomar lo que parece anécdota y convertirlo en una puerta de entrada a la historia real.`,
    category: "Curiosidades Culturales",
    date: "2026-08-19",
    image: "https://picsum.photos/seed/extracultural-curio3/900/600",
    readTime: 5,
  },
  {
    id: 4,
    title: "La Música Under Latinoamericana que Está Rompiendo Fronteras",
    excerpt:
      "Sin grandes disqueras ni presupuestos millonarios, estos proyectos están construyendo audiencias globales desde el under.",
    content: `El under latinoamericano vive un momento explosivo. Plataformas digitales y redes sociales permitieron que artistas sin respaldo de una disquera lleguen a audiencias en otros continentes.

Repasamos escenas emergentes en distintos países, los géneros híbridos que están naciendo de la mezcla de sonidos tradicionales con producción electrónica moderna, y cómo estos artistas usan el contenido corto para construir comunidad antes de lanzar un álbum completo.

La conclusión es clara: la industria musical ya no dicta quién triunfa, la comunidad lo hace.`,
    category: "Música",
    date: "2026-08-14",
    image: "https://picsum.photos/seed/extracultural-music4/900/600",
    readTime: 7,
  },
  {
    id: 5,
    title: "Series y Películas de Culto que Marcaron una Generación",
    excerpt:
      "No fueron un éxito de taquilla, pero su legado sigue vivo. Un repaso por el cine que se volvió culto gracias al boca a boca.",
    content: `Hay películas que fracasan en cartelera y años después se convierten en piezas fundamentales de la cultura pop. En este artículo exploramos ese fenómeno: qué hace que una obra "de culto" perdure más que un blockbuster.

Analizamos el rol de los fans, las comunidades online y los memes en mantener viva la conversación alrededor de estas producciones, y por qué muchas de ellas anticiparon temas que hoy son centrales en el debate cultural.`,
    category: "Cine y Series",
    date: "2026-08-09",
    image: "https://picsum.photos/seed/extracultural-cine5/900/600",
    readTime: 6,
  },
  {
    id: 6,
    title: "Historias Ocultas: Los Secretos que la Historia Oficial no Cuenta",
    excerpt:
      "Cada libro de texto deja huecos. Aquí llenamos algunos de esos vacíos con investigación y fuentes verificadas.",
    content: `La historia que aprendemos en la escuela suele ser una versión editada. En esta serie de investigación reconstruimos hechos poco difundidos, voces silenciadas y episodios que cambiarían la forma en que entendemos nuestro presente.

Cada capítulo está respaldado por fuentes documentales, y el objetivo nunca es la polémica por la polémica, sino abrir preguntas que inviten a seguir investigando por cuenta propia.`,
    category: "Historia Oculta",
    date: "2026-08-03",
    image: "https://picsum.photos/seed/extracultural-hist6/900/600",
    readTime: 9,
  },
  {
    id: 7,
    title: "Cómo TikTok Está Redefiniendo el Consumo Cultural",
    excerpt:
      "El formato corto cambió no solo cómo consumimos contenido, sino cómo se produce el arte, la música y hasta el periodismo.",
    content: `El video corto no es solo una moda de formato, es una nueva gramática cultural. Analizamos cómo esta gramática está afectando la manera en que se componen canciones, se editan películas y se cuentan noticias.

También abordamos las críticas: la reducción de la atención, la superficialidad y los riesgos de una cultura que premia lo instantáneo por encima de lo elaborado. Pero también destacamos los casos donde el formato corto amplificó voces que antes no tenían espacio en medios tradicionales.`,
    category: "Tendencias Virales",
    date: "2026-07-28",
    image: "https://picsum.photos/seed/extracultural-trend7/900/600",
    readTime: 7,
  },
  {
    id: 8,
    title: "Subculturas Urbanas: De los Grafitis al Streetwear",
    excerpt:
      "Un viaje por las tribus urbanas que definieron estética, música y actitud durante las últimas décadas.",
    content: `Las subculturas urbanas siempre han sido motores de innovación estética. En este recorrido conectamos el grafiti, el breakdance, el skate y el streetwear como parte de un mismo árbol genealógico cultural.

Vemos cómo marcas grandes terminaron absorbiendo estéticas que nacieron como resistencia, y qué queda hoy de ese espíritu original en las nuevas generaciones que crecieron viendo todo esto a través de una pantalla.`,
    category: "Arte Urbano",
    date: "2026-07-22",
    image: "https://picsum.photos/seed/extracultural-street8/900/600",
    readTime: 6,
  },
];

const CATEGORIES = [
  { name: "Tendencias Virales", icon: "fa-solid fa-fire" },
  { name: "Arte Urbano", icon: "fa-solid fa-spray-can" },
  { name: "Curiosidades Culturales", icon: "fa-solid fa-magnifying-glass" },
  { name: "Música", icon: "fa-solid fa-music" },
  { name: "Cine y Series", icon: "fa-solid fa-film" },
  { name: "Historia Oculta", icon: "fa-solid fa-scroll" },
];

function getPostById(id) {
  return POSTS.find((p) => p.id === Number(id));
}

function formatDate(iso) {
  const d = new Date(iso + "T00:00:00");
  return d.toLocaleDateString("es-ES", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
