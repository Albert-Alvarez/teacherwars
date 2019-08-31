---
layout: post
title:  Preparados, cámara y... ¡acción!
date:   2019-03-16 00:00:00 +0200
categories:
  - Episodio III
top-text: Reflexión sobre la práctica docente
featured-image: /assets/img/2019-03-16-observacion-docente-1-featured.jpg
excerpt_separator: <!--more-->
---

A todos nos ha pasado que tenemos una imagen de nosotros mismos y de cómo actuamos que luego difieren en gran medida de lo que los demás perciben. ¡Incluso a veces de nos ocurre para con nostros mismos al vernos en un vídeo! Por ellos, vamos a grabarnos dando una clase para comprobar si lo hacemos tan bien o tan mal como creíamos...

<!--more-->

## Yo quería ser YouTuber...

...pero mi madre me dijo que estudiara. ([¡Gracias, mamá!](https://clipset.20minutos.es/youtuber-mas-ingresos-2018/){:target="_blank"}) En lugar de grabarme o hacer un streaming echando una partida al Fortnite (cosa que mi sobrino pequeño me pide continuamente), nos grabaremos haciendo una clase.

Esta clase es una sesión de prácticas de la asignatura de [Electrónica Aplicada](http://grad.ub.edu/grad3/plae/AccesInformePDInfes?curs=2019&assig=363827&ens=TG1074&recurs=pladocent&n2=1&idioma=CAT){:target="_blank"} del [Grado en Ingeniería Biomédica de la Universitat de Barcelona](https://www.ub.edu/portal/web/medicina-ciencies-salut/grau/-/ensenyament/detallEnsenyament/4917593){:target="_blank"}. Las sesiones de prácticas las realizo junto a la profesora [Yaiza Montes](https://ymontes9.wixsite.com/website){:target="_blank"} (que también está realizando el máster de docencia igual que yo). En esta sesión de prácticas, lo que haremos será utilizar un PC para estudiar un circuito simple RC mediante instrumentación virtual.

## ¿Y por qué grabas esta clase y no otra?

Buena pregunta, querido mi querido Watson. Aún está muy fresco en mi memoria la primera sesión de laboratorio en la que habían dos profesores... Eso era la guerra... Profesores que se pisaban, se contradecían en las indicaciones, no lograban atender las dudas de los alumnos,... Aún me acuerdo del dolor de brazos que cogí con el brazo levantado esperando que alguien viniera a mi mesa... Y, aunque eran dos, parece que siempre iban por las mismas mesas o que daban por hecho que el otro profesor atendía dudas que luego ninguno de los dos acababa resolviendo.

En mi corta experiencia como docente no he tenido oportunidad de trabajar con otro profesor en el aula. Este año ha sido la primera vez y no me gustaría estar haciendo lo mismo... Por ello, me gustaría ver en esta sesión cómo me coordino con mi compañera. En este caso, una compañera con la que también hice el grado y sabe de lo que hablo...

Un seguno punto son las coletillas. Sé que las tengo: "¿Sí", "¿Vale?", "¿De acuerdo?", "¿Lo habéis entendido?",... No es un problema exclusivo mío, y suele ser uno de los problemas más comunes, pero me gustaría solucionarlo.

¡Vamos a ver cómo lo he hecho!

## La muestra

<style>
  .player-container {
    position: relative;
    padding-bottom: 56.25%; /* 16:9 */
    height: 0;
    margin: 45px 0;
  }
  .player-container iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
</style>
<div class="player-container">
  <div id="player"></div>
</div>


<script>
  var tag = document.createElement('script');
  var w = 640*2;
  var h = 360*2;

  tag.src = "https://www.youtube.com/iframe_api";
  var firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

  var player;
  function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
      height: h,
      width: w,
      videoId: '396-hx-Mp5c',
      playerVars: {
        'showinfo': 0
      }
    });
  }
</script>

## La charla después del partido

Pues teniendo el vídeo hecho, cómo los grandes equipos de futbol, vamos a ver la grabación para reflexionar cómo lo hemos hecho. Podéis encontrar la reflexión en el siguiente [enlace]({% post_url 2019-04-01-reflexion-observacion-docente-2 %}).