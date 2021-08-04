<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal
      .titulo-principal__numero
        span 3
      h1 Operatividad para confección de prendas
    
    .row.justify-content-center(data-aos="fade-left")
      .col-lg-11
        .bloque-texto-g.color-acento-contenido.BG02.p-3.p-sm-4.p-md-5.mb-5
          .bloque-texto-g__img.BGpostLeft(
            :style="{'background-image': `url(${require('@/assets/curso/tema3/img01.jpg')})`}"
          )
          .bloque-texto-g__texto.d-grid.p-4
            p.mb-4 Las agujas tienen una referencia, especificaciones técnicas de uso, clasificación y grosor lo cual realizaremos una descripción de cada parte y servicio que pueden desarrollar y agilizar las operaciones en la confección.
            p.mb-4 De acuerdo con el sitio web Máquina de Coser (2016), la aguja se considera como una herramienta indispensable para la costura en la introducción en las máquinas para la confección, determinadas para penetrar el insumo y transportar el hilo que permita unir con el hilo.
            .row.d-flex.justify-content-center
              .col-lg-8
                a.anexo(:href="obtenerLink('/downloads/Anexo4_Calidad_confeccion.pdf')" target="_blank")
                  .anexo__icono
                    img(src="@/assets/template/icono-pdf.svg")
                  .anexo__texto
                    p.d-inline #[strong Anexo.] Calidad en la confección.
    
    h2(data-aos="fade") Puntadas por pulgada (PPP)

    p.mb-5 Cuando la sucesión de puntadas está hecha sobre un mismo material entrelazado con el mismo (dobladillado) o no, recibe el nombre de pespuntes. Estos apoyan y afirman las costuras internas, lo cual genera a modo visual una apariencia estética, pero estas costuras también generan refuerzo a diversos materiales que necesitan tener una mayor resistencia por la composición de la tela; están clasificados así:

    .row.justify-content-center.align-items-center.mb-4(data-aos="fade-up")
      .col-lg-8
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--gris")
          div(titulo="Resistencia de la costura")
            p Generalmente, entre más puntadas por pulgada, mayor es la resistencia de la costura. Existen algunos casos raros donde agregar puntadas por pulgada puede causar daño a la tela de forma que la costura es debilitada, como sea, esto solamente pasa en telas específicas que pueden ser fácilmente dañadas por excesivas penetraciones de la aguja.
          
          div(titulo="Apariencia de la puntada")
            p Cada tipo de puntada tiene un aspecto característico de acuerdo a la manera que se emplee. Las costuras se definen según el tipo de puntada y se emplean según las características de las máquinas a ejecutar.
          
          div(titulo="Elasticidad de la costura en telas elásticas")
            p La costura la conforma el entrelazado de uno o más hilo, por la secuencia de movimientos por unas partes especificas donde se genera las puntadas, las puntadas de las maquinas clasifican dentro de un rango de elasticidad, donde es importante la participación de la composición de la tela y que tanta elasticidad esta representa.
      .col-8.col-lg-4
        figure
          img(src='@/assets/curso/tema3/img02.svg', alt='Puntadas por pulgada (PPP)')
    
    p.mb-4 Ahora bien, el tamaño de la puntada debe ser medido contando la cantidad de entradas de la aguja en la tela dentro de una pulgada.

    .BG01.p-4.brdFull.mb-5(data-aos="flip-up")
      p.mb-0.fst-italic Existen diferentes contadores de puntadas que hacen esta medida fácil. De igual manera, existe la opción de  colocar una cinta métrica enseguida del pespunte y hacer la misma función en 2,54 cm que es el equivalente a una pulgada.
    
    .row.justify-content-center
      .col-lg-10
        .row.justify-content-center
          .col-lg-6.mb-4.mb-lg-0(data-aos="fade-left")
            p.mb-5 Como se puede ver en la imagen, en esta costura se evidencia 9 puntadas por pulgada (PPP).
            .titulo-sexto.color-acento-contenido
              h5 Fiigura 1
              span Imagen de 9 puntadas por pulgada (PPP)
            figure
              img(src='@/assets/curso/tema3/img04.svg', alt='Imagen de 9 puntadas por pulgada (PPP)')
          .col-10.col-lg-6(data-aos="fade")
            figure
              img(src='@/assets/curso/tema3/img03.svg', alt='Puntadas por pulgada (PPP)')

</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass" scoped></style>
