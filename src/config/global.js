export default {
  global: {
    componenteFormativo: 'Desarrollar operaciones en máquinas de confección',
    descripcionCurso:
      'En este componente se abordarán conocimientos técnicos en la conceptualización de la industria de la confección, se incluyen conocimientos sobre la maquinaria a utilizar en la elaboración de prendas de vestir, incluyendo normatividad, aditamentos y tipos de puntadas.',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.svg'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Máquinas de confección',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Maquinaria y equipo de procesos de confección',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Operatividad para confección de prendas',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Agujas',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Aditamentos',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema6',
        icono: 'far fa-file-alt',
        numero: '6',
        titulo: 'Tipos de puntadas y costuras',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Armando sk. (2012). AGUJAS PARA MÁQUINA DE COSER / LITTLE POST.',
      link: 'https://www.pinterest.es/pin/157133474477830809/',
    },
    {
      referencia: 'Brildor. (2021). ¿Qué aguja debo comprar para mi máquina?',
      link: 'https://www.brildor.com/es/costura/agujas.html',
    },
    {
      referencia:
        'Confecciones con máquinas industriales. (2019). Maquina fileteadora, sobrehiladora u overlook.',
      link:
        'http://confecionesconmaquinasindustriales.blogspot.com/2011/08/maquina-fileteadorasobrehiladora-u.html',
    },
    {
      referencia:
        'El rincón de Celeste Cielo. (2012). Agujas de máquina según el tipo de tela y el hilo.',
      link:
        'https://elrincondecelestecielo.blogspot.com/2012/05/agujas-de-maquina-segun-el-tipo-de-tela.html#:~:text=Tipos%20de%20agujas%3A&text=Donde%20los%20n%C3%BAmero%209%2C%2010,de%20bola%20o%20media%20bola',
    },
    {
      referencia:
        'Groz, B. (2021). Sewing, Agujas para máquinas de coser para la industria de la confección.',
      link:
        'https://groz-beckert.com/mm/media/es/web/pdf/Sewing_machine_needles_for_the_apparel_industry.pdf ',
    },
    {
      referencia: 'Gutierrez S. (s.f). Enhebrado y calibración máquina plana.',
    },
    {
      referencia:
        'Gutierrez S. (s.f). Enhebrado y puesta a punto de máquina recubridora.',
    },
    {
      referencia:
        'Jiménez, A. (2014). Partes y funciones de la máquina collarín. (2021).',
      link:
        'https://prezi.com/me9vvu-vchcj/partes-y-funciones-de-la-maquina-collarin/',
    },
    {
      referencia: 'Máquina de Coser. (2016). La Aguja y sus partes.',
      link: 'https://maquinadecoser.com.pe/la-aguja-y-sus-partes/',
    },
    {
      referencia:
        'Pardo, M. (2012). GUÍAS, PIES ADITAMENTOS PARA LA INDUSTRIA DE LA CONFECCIÓN.',
      link:
        'https://drive.google.com/file/d/1AcqRumpgJ8tC1jikb2bfXNrcPhlr7OFG/view?usp=sharing',
    },
    {
      referencia: 'SENA. (s.f.). Control de calidad en confección.',
    },
    {
      referencia:
        'SENA. (2021). Componente formativo 15, parte A: Taller básico de máquinas. Repositorios SENA.',
    },
    {
      referencia:
        'Top Máquinas de Coser. (s.f). Partes de la máquina de coser industrial.',
      link:
        'https://topmaquinasdecoser.es/partes-de-la-maquina-de-coser-industrial/',
    },
  ],
  glosario: [
    {
      termino: 'Ajuste',
      significado:
        'Elementos mecánicos que se ajustan a cada tipo de material o tejido, bien sea liviano, semi pesado o pesado.',
    },
    {
      termino: 'Alimentación o transporte',
      significado:
        'Alimentación en la maquinaria de confección se refiere al desplazamiento del material a coser.',
    },
    {
      termino: 'Barra de aguja',
      significado:
        'Elemento mecánico su movimiento es rectilíneo vertical, sostiene la aguja en posición.',
    },
    {
      termino: 'Barra prénsatela',
      significado:
        'Elemento mecánico barra que sujeta el prénsatela o pie de la máquina.',
    },
    {
      termino: 'Calibre de aguja',
      significado: 'Es la que determina el tipo o grosor del material a coser',
    },
    {
      termino: 'Corchete',
      significado:
        'Elemento mecánico utilizado para producir la puntada de cadeneta a un hilo.',
    },
    {
      termino: 'Costura',
      significado: 'Unión de dos o más materiales o tejidos.',
    },
    {
      termino: 'Diente',
      significado:
        'Este dispositivo mecánico es el encargado de desplazar el material a coser.',
    },
    {
      termino: 'Extensor',
      significado:
        'Elemento mecánico utilizado en la mayoría de las veces como auxiliar de los looper, corchetes para formar la puntada.',
    },
    {
      termino: 'Guía hilos',
      significado:
        'Elemento mecánico que sirve para guiar el hilo durante todo su recorrido.',
    },
    {
      termino: 'Lanzadera',
      significado:
        'Elemento mecánico que junto con la aguja, sirve para formar la puntada, su movimiento es oscilatorio.',
    },
    {
      termino: 'Looper',
      significado:
        'Elemento mecánico que tiene hilo propio o sea se puede enhebrar como las agujas, es decir tiene ojo.  ',
    },
  ],
  complementario: [
    {
      texto:
        'BIC., (2015). “2 minutos para entender el desarrollo sostenible – Spanish”',
      tipo: 'Video',
      link: 'https://www.google.com/',
    },
    {
      texto:
        'Arnold, M. y Osorio, F., (1998). Introducción a los conceptos básicos de la Teoría general de sistemas. Cinta moebio 3: 40-49',
      tipo: 'Página web',
      descarga: '/downloads/prueba.pdf',
    },
    {
      texto:
        'Balboa, C. y Dominguez, M. (2014). Economía circular como marco para el ecodiseño: el modelo ECO-3. Informador Técnico (Colombia) Volumen 78, No. 1. Pág. 52-90.',
      tipo: 'Artículo científico',
      link: 'https://www.google.com/',
    },
    {
      texto: 'Economía de Rosquilla. (s.f.).',
      tipo: 'Página web',
      descarga: '/downloads/prueba.pdf',
    },
    {
      texto: '2 minutos para entender el desarrollo sostenible – Spanish',
      tipo: 'Video',
      link: 'https://www.google.com/',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Ericka Alexandra Blanco Sánchez',
        cargo: 'Experta temática',
        centro:
          'Centro de formación en diseño, confección y moda - Regional Antioquia',
      },
      {
        nombre: 'Vilma Lucia Perilla M',
        cargo: 'Diseñadora instruccional',
        centro: ' Centro de Gestión Industrial - Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Oscar Julian Marquez Sanabria',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Luis Gabriel Urueta Alvarez',
        cargo: 'Desarrollo Front-End',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Yenny Patricia Ulloa Villamizar',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
