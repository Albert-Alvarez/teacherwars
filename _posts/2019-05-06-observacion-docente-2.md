---
layout: post
title:  A ver qué podemos mejorar hoy...
date:   2019-05-06 00:00:00 +0200
categories:
  - Episodio VI
top-text: Reflexión sobre la práctica docente (4/4)
featured-image: /assets/img/2019-05-06-observacion-docente-2-featured.jpg
excerpt_separator: <!--more-->
---

Hoy vamos a grabar la misma sesión de prácticas para ver qué hemos mejorado (o qué se nos resiste y aún no logramos mejorarlo). Recordemos: estamos en una sesión de prácticas de la asignatura de [Electrónica Aplicada](http://grad.ub.edu/grad3/plae/AccesInformePDInfes?curs=2019&assig=363827&ens=TG1074&recurs=pladocent&n2=1&idioma=CAT){:target="_blank"} del [Grado en Ingeniería Biomédica de la Universitat de Barcelona](https://www.ub.edu/portal/web/medicina-ciencies-salut/grau/-/ensenyament/detallEnsenyament/4917593){:target="_blank"}. En el día de hoy, con el profesor Marc Mir. ¡Veamos!

<!--more-->

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
      videoId: 'MMBK_AXsGYE',
      playerVars: {
        'showinfo': 0
      }
    });
  }
</script>