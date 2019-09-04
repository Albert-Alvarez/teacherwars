---
layout: post
title:  GitHub como plataforma de desarrollo colaborativo
date:   2018-06-01 00:00:00 +0200
categories:
  - Episodio VI
top-text: Propuesta de mejora
featured-image: /assets/img/20180514_182539_featured.jpg
excerpt_separator: <!--more-->
image_sliders:
  - muestrasTrabajoAlumnos
---

"Capacidad de trabajo en un equipo multidisciplinar". Esta frase aparece en mil y un planes docentes o planes de estudio de diferentes asignaturas y grados. Pero ¿cuántas veces se trabaja realmente? El problema radica en que necesitas mezclar gente de diferentes disciplinas que normalmente están emplazadas en diferentes localizaciones. Veamos cómo podemos usar GitHub para solventar este problema. 

<!--more-->

# Introducción

Actualmente, como profesor asociado de la [Universitat de Barcelona (UB)](http://www.ub.edu/){:target="_blank"}, me encargo de impartir teoría y prácticas en la asignatura de [Mecatrónica y Robótica (MNIRT)](http://www.ub.edu/grad/plae/AccesInformePD?curs=2017&codiGiga=362708&idioma=CAT&recurs=publicacio){:target="_blank"} del grado de [Ingeniería Electrónica de Telecomunicaciones (GEET)](http://www.ub.edu/fisica/guia_grau_engelect/){:target="_blank"} y prácticas en la asignatura de [Robótica (RT)](http://www.ub.edu/grad/plae/AccesInformePD?curs=2017&codiGiga=364319&idioma=CAT&recurs=publicacio){:target="_blank"} del grado de [Ingeniería Informática (GEI)](https://mat.ub.edu/grauinformatica/){:target="_blank"}. Ambas son asignaturas optativas de 4º año y en ambas asignaturas, aparte de competencias transversales del propio grado, se trabajan competencias específicas relacionadas con la robótica o el desarrollo de sistemas autónomos.

Por definición, la **mecatrónica consiste en la unión sinérgica de diferentes ramas de la ingeniería** que van desde la ingeniería electrónica a la mecánica, pasando por la ingeniería de control y la de computación. Esta se trabaja en los grados <abbr title="Grado de Ingeniería Electrónica de Telecomunicaciones">GEET</abbr> y <abbr title="Grado de Ingeniería Informátic">GEI</abbr> poniendo el foco en la rama de la ingeniería de los grados respectivos. Así pues, **en el <abbr title="Grado de Ingeniería Electrónica de Telecomunicaciones">GEET</abbr> se trabaja más la vertiente electrónica** de la mecatrónica, mientras que **en el <abbr title="Grado de Ingeniería Informátic">GEI</abbr> se trabaja la vertiente computacional**. Para poder ser competente en mecatrónica, no es necesario ser competente en cada una de las ramas de la ingeniería que la conforman. En su lugar, sí que **es necesario ser capaz de trabajar en equipos multidisciplinares** formados por miembros especializados en cada una de las susodichas ramas. Por ello, la competencia de trabajo en equipos multidisciplinares toma especial relevancia.

{: align="center"}
![Ramas de la mecatrónica]({{ "/assets/img/Meca.svg" | absolute_url }}){:style="max-width:350px;"}

{:.fig-caption}
De <a target="_blank" href="//commons.wikimedia.org/w/index.php?title=User:Siddharta.najera&amp;action=edit&amp;redlink=1" class="new" title="User:Siddharta.najera (page does not exist)">Siddharta.najera</a> - <span class="int-own-work" lang="es">Trabajo propio</span>, <a target="_blank" href="https://creativecommons.org/licenses/by-sa/3.0" title="Creative Commons Attribution-Share Alike 3.0">CC BY-SA 3.0</a>, <a target="_blank" href="https://commons.wikimedia.org/w/index.php?curid=7999623">Enlace</a>.


# Objetivos de aprendizaje

Uno de los objetivos de aprendizaje, común en ambas asignaturas, es **controlar/programar un robot móvil terrestre**. En este caso, es un robot diseñado por la universidad basado en un microcontrolador [MSP430](http://www.ti.com/microcontrollers/msp430-ultra-low-power-mcus/overview.html){:target="_blank"} y una [Raspberry Pi](https://www.raspberrypi.org/){:target="_blank"} que utilizarán los estudiantes de ambos grados.

{: align="center"}
![Robot de prácticas]({{ "/assets/img/20180514_173958.jpg" | absolute_url }}){:style="max-width:100%;height:auto;"}

{:.fig-caption}
Robot utilizado para las prácticas de <abbr title="Mecatrónica y Robótica">MNIRT</abbr> y <abbr title="Robótica">RT</abbr>.

Para que el robot funcione, debe de desarrollarse el [*firmware*](https://es.wikipedia.org/wiki/Firmware){:target="_blank"} del microcontrolador (a cargo de los alumnos del <abbr title="Grado de Ingeniería Electrónica de Telecomunicaciones">GEET</abbr>,)y el *software* de la Raspberry Pi (a cargo de los alumnos del <abbr title="Grado de Ingeniería Informátic">GEI</abbr>). Sin ambos, el robot no funciona. Y ambos están íntimamente interrelacionados influenciando directamente el desarrollo del uno en el otro. Por ello, **la consecución de este objetivo de aprendizaje lleva implícitamente el desarrollo de las competencias relativas al trabajo en equipos multidisciplinares**. 


# En qué consiste la tarea

La tarea para los del <abbr title="Grado de Ingeniería Electrónica de Telecomunicaciones">GEET</abbr> consiste en programar el *firmware* del microcontrolador de tal modo que este se encargue de procesar la información proveniente de los sensores del robot y podérsela ofrecer a la Raspberry Pi (i.e. a los alumnos del <abbr title="Grado de Ingeniería Informátic">GEI</abbr>). Al mismo tiempo, debe de atender las órdenes de esta para controlar los motores que utiliza el robot para propulsarse.

Por otro lado, los alumnos del <abbr title="Grado de Ingeniería Informátic">GEI</abbr>, deben realizar el *software* que se ejecuta en la Raspberry Pi para que esta, a partir de la información del entorno que recibe desde el microcontrolador, controle el movimiento del robot.

Al ser ambas asignaturas optativas de 4º año, donde el alumnado se reparte en diferentes optativas según la especialización que hayan escogido, **el número de estudiantes suele ser bajo** rondando entre los 10 y 15 alumnos. Para realizar las prácticas/tareas se dispone de 5 robots. Así pues, los alumnos de ambas asignaturas se dividen 5 equipos (uno por robot) que no suelen superar más de los 3 alumnos por equipo.

{: align="center"}
![Alumnos de RT]({{ "/assets/img/20180514_182539.jpg" | absolute_url }}){:style="max-width:100%;height:auto;"}

{:.fig-caption}
Alumnos de <abbr title="Robótica">RT</abbr> reflexionando sobre estrategias a seguir para lograr que el robot siga correctamente una línea.

Para llevar a cabo esta tarea los alumnos necesitan:

- **Diseñar de manera conjunta** y **ponerse de acuerdo** con el protocolo de comunicación entre el microcontrolador y la Raspberry Pi.
- **Disponer** del código del otro grupo para poder hacer funcionar el robot.
- Puesto que se trabaja de manera colaborativa, una manera fácil de llevar un **control de cambios** y un historial de **versiones**.
- **Documentar** el trabajo realizado con un lenguaje técnico a la vez que **comprensible por el otro grupo** para que este último pueda realizar el pertinente desarrollo en consecuencia.
- Poder **alertar** de *bugs*/errores en el código.
- Poder **solventar el inconveniente de la distancia** entre ambos grupos (ambos operan en diferentes facultades en horarios distintos).

Con la intención de atender estas necesidades y mostrar una **herramienta muy utilizada en el ámbito profesional** de su campo, he propuesto utilizar la plataforma [**GitHub**](https://github.com/){:target="_blank"} como **herramienta basada en [Git](https://git-scm.com/){:target="_blank"} para el desarrollo colaborativo en línea**.

**Git** consiste en un *software* de **gestión de versiones gratuito y de código abierto**. Pese a que se puede utilizar para el control de versiones de todo tipo de archivos/productos digitales, es en el control de versiones de código donde el **software** explota todas sus funcionalidades ya que permite, a parte  del control de versiones, el trabajo colaborativo entre diferentes personas automatizando el proceso de unión de sus desarrollos. [+info sobre Git](https://vimeo.com/41027679){:target="_blank"}

Por otro lado, tenemos **GitHub** que consiste en una **plataforma en línea** que **utiliza Git** y que lo complementa con diferentes funcionalidades a modo de **red social** que facilita compartir código, opiniones, revisiones, alertas de errores, documentar proyectos con wikis, crear webs de proyectos, abrir peticiones de mejoras, etc. Un claro ejemplo de qué es GitHub, cómo funciona y cómo lo utilizan nuestros alumnos se muestra en el siguiente video.

<blockquote class="embedly-card" data-card-controls="0"><h4><a href="https://youtu.be/w3jLJU7DT5E">DynaPi | Primera prueba: Seguir una línea</a></h4><p>Primera prueba a realizar con nuestro robot!</p></blockquote>

{:.fig-caption}
Vídeo demostrativo de GitHub.

A los alumnos les pido que utilicen GitHub para llevar a cabo las prácticas. Allí suben/**comparten su desarrollo** con el resto de los equipos y con el otro grupo de la otra asignatura a la vez que lo **documentan mediante la wiki** asociada. De este modo todo el mundo dispone del código del resto y saben cómo operar con él al disponer de la correspondiente wiki. Además, los **guiones de prácticas también están subidos a GitHub** y **abiertos a que los alumnos los editen** en aquellos puntos que ellos creen que deben ser mejorados, necesitan ser más detallados o producen confusión. Por lo que no solo colaboran entre ellos, sino **también colaboran con el profesorado mejorando el material docente de la asignatura**.

GitHub es una plataforma que promueve el código abierto ofreciendo sus servicios de manera gratuita a aquellos que utilicen [repositorios](https://help.github.com/articles/github-glossary/#repository){:target="_blank"} gratuitos. Pero si quieres hacer uso de repositorios privados (que nadie pueda acceder a ellos), debes de pagar por sus servicios. Además, también debes pagar para poder gestionar usuarios, lo que se conoce como una cuenta de organización. Me puse en contacto con ellos para interesarme en una iniciativa suya sobre educación en la que ofrecen, con estudio previo, cuentas gratuitas de organización si se tiene como objetivo educacional. Para este año he logrado que **nos dieran una cuenta de organización de manera gratuita** con la que poder gestionar infinitos usuarios/alumnos, repositorios públicos y privados. Esta cuenta de organización es [RoboticsUB](https://github.com/RoboticsUB/){:target="_blank"}.

{: align="center"}
![Cuenta de organización RoboticsUB]({{ "/assets/img/Captura de pantalla 2018-06-08 a las 21.58.47.png" | absolute_url }}){:style="max-width:100%;height:auto;"}

{:.fig-caption}
*Dashboard* de la cuenta de organización RoboticsUB.

Por último, GitHub ofrece crear una página web por cuenta personal, una página web por cuenta de organización y una página web por repositorio/proyecto. Actualmente se está **desarrollando la [página web de la organización](https://roboticsub.github.io/){:target="_blank"}** donde se mostrará todo el trabajo que se realiza, tanto por el profesorado como por el alumnado, en las dos asignaturas.

# Criterios de evaluación

La evaluación se centra en 4 pilares:

- **Trabajo técnico desarrollado:** funcionalidad del desarrollo realizado, así como su eficiencia y estilo.
- **Redacción de textos científico-técnicos:** documentación de sus desarrollos.
- **Habilidad para el uso de herramientas de control de versiones:** aprender a usar Git y GitHub.
- **Capacidad de trabajo en equipo multidisciplinar:** capacidad para discutir entre pares adecuando su lenguaje al ámbito de especialización de su interlocutor. Capacidad para defender sus puntos de vista y saber negociar (saber cuándo ceder y cuándo no). Capacidad para criticar de manera profesional y educada a la vez que saber aceptar críticas.

Algunos ejemplos de las tareas realizadas por los alumnos:

{% include slider.html selector="muestrasTrabajoAlumnos" %}

Finalmente, una muestra de la consecución del objetivo de aprendizaje por parte de los alumnos haciéndo funcionar el robot. Este vídeo forma parte de una colección de vídeos creados para la asignatura con la intención de explicar conceptos que no hayan quedado claros en clase y necesiten de más explicación, para tutoriales, guiones de prácticas, etc. De este modo incluímos en la metodología una pincelada de la modalidad de *b-learning*.

<blockquote class="embedly-card" data-card-controls="0"><h4><a href="https://youtu.be/lPw9KB3WdAs">What is GitHub?</a></h4><p>Ever wondered how GitHub works? Let's see how Eddie and his team use GitHub.</p></blockquote>

{:.fig-caption}
Demostración del robot seguidor de línea a cargo de los alumnos de <abbr title="Mecatrónica y Robótica">MNIRT</abbr>.

<style>
#muestrasTrabajoAlumnos, #muestrasTrabajoAlumnos img {max-width:100%;height:auto;}
</style>
<script async src="//cdn.embedly.com/widgets/platform.js" charset="UTF-8"></script>

# La Semana de la Ciéncia como colofón

{: align="center"}
![Cuenta de organización RoboticsUB]({{ "/assets/img/semana-ciencia.jpg" | absolute_url }}){:style="max-width:600px;height:auto;"}

{:.fig-caption}
Cartel de la quinta edición de la Semana de la Ciéncia.

Como colofón a todo el trabajo realizado en el proyecto. Los alumnos de ambos grados, de ingeniería electrónica e informática, realizan un taller a modo exposición donde compiten para realizar una serie de objetivos. El taller sirve a los alumnos tanto para desarrollar nuevas habilidades técnicas afrontando nuevos retos, como para trabajar su capacidad comunicativa al tener que adabtar el lenguaje técnico a alumnos de primaria, secundaria y bachillerato que nos visitan durante el taller y vienen con preguntas y dudas suscitadas por su interés por el proyecto.

En el siguiente [enlace](http://www.ub.edu/laubdivulga/festacienciaub/festacienciaV/robots.html){:target="_blank"} podéis encontrar información sobre la actividad desarrollada.

Finalmente, quisiera agradecer su esfuerzo e implicación a los alumnos del Grado de Ingeniería Informática de la Facultad de Matemáticas, su jefe de estudios Dr. Eloi Puertas, a los alumnos del Grado de Ingeniería Electrónica de Telecomunicación de la Facultad de Física, su jefe de estudios Dr. Óscar Ruiz y al Dr. Manel Puig. En especial a este último por la confianza depositada en mi con este proyecto.

{: align="center"}
![Explicación proyecto]({{ "/assets/img/expansion-vertical.jpg" | absolute_url }}){:style="max-width:100%;height:auto;"}

{:.fig-caption}
Alumno universitario explicando el proyecto a alumnos de secundaria.