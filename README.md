# Test-Routes

Este es un proyecto que tiene como finalidad mostrar una series de rutas y direcciones en un mapa. 

## Tabla de contenido

- [Test-Routes](#test-routes)
  - [Tabla de contenido](#tabla-de-contenido)
  - [Instalacion](#instalacion)
  - [Que esta incluido](#que-esta-incluido)
  - [Documentación](#documentación)
  - [Buggs](#buggs)
  - [Creador](#creador)

## Instalacion

Una vez descargado y clonado el proyecto se deben instalar las dependencias con el siguiente codigo.
```
npm i
```
## Que esta incluido 

En este proyecto se utilizo librerias y servicios como lo fueron.

```
Bootstrap(estilos), Fontaweasome(Iconos), @agm/core - npm(iniciaizar el mapa), googleMapsApi(servicio)
```
## Documentación

En esta documentación se hara un breve repaso de como se hicieron los puntos a evaluar.

1. Crear un JSON con un viaje de prueba, utiliza HttpClient para consultar
el JSON y pintar el viaje en el mapa. Debe pintarse por defecto cuando
se abre la página web. Eres libre de decidir cómo lo pintas.

- Para este paso, se desarrollo un pequeño Json con ayuda de la siguiente pagina web https://designer.mocky.io/design
  que luego se consumiria con el HttpClient y proseguir a pintarse las rutas que marcaba las direcciones obtenida por el Json generado.

- Para el marcado de las rutas se utiliza una funcion (detallada en el codigo) y un Polyline (documentacion de googleMapsApi).
  
2. Permite seleccionar direcciones definidas inicialmente (Favoritos).

- para este paso se crea un nuevo Json ayudado con la pagina web  https://designer.mocky.io/design y es el que luego se consume para mostrar la lista de favoritos, 
  y luego se utiliza un market (googleMapsApi) para seleccionar la dirección favorita seleccionada.

3. Permite navegar entre los pasos 1 (Origen) y 2 (Destino).
   
- Para este paso se, propone un nuevo diseño en la vista el cual puede facilitar mas al momento de elegir entre el origen y destino.

4. Con la navegación entre los pasos 1 y 2 cambia la URL.

- Para este paso se hace uso del app-routing mandando rutas parametrizadas.

5. Realiza un diseño responsive que funcione en dispositivos móviles.

- Para el diseño responive se hace uso de los media query (aun esta en proceso).
## Buggs

1. Al momento de incializar el mapa en ciertas ocaciones no lo carga, se debe actualizar nuevamente la pagina,
   esto se debe a un problema que viene por defecto del test de prueba de GoogleMapsApi en la version gratuita.
## Creador

**Nell David Guerra Jimenez**

- <https://github.com/gatho29/Prueba-mapa>
- <https://www.linkedin.com/in/nell-david-guerra-jim%C3%A9nez-843675206/>