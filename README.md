## TP6

Tienen tiempo hasta el viernes 19 de octubre a las 21Hs para terminar el trabajo.

Partiendo del trabajo anterior donde se componentizó el listado de personas, deben refactorizar la app para que utilice el router de Vue. El sistema debe permitir al usuario crear, editar, listar y borrar personas, además de filtrar como lo veníamos haciendo por sexo. El listado de personas debe ser persistido de manera que al cerrar y abrir el navegador los datos sigan estando disponibles y debe tener las vistas y componentes que consideren necesarias para realizar la tarea. Como base pueden utilizar el proyecto `2018-10-12.Servicios` que se subió al Drive compartido. 

### Lineamientos básicos

- El código y el PR que creen cuando terminen tienen que ir contra la rama `tp6`.
- Crear una carpeta con su nombre y dentro de esta la app. *No crear una carpeta dentro de otra carpeta*.
- No se evalúa estilos. No es necesario utilizar un framework CSS.
- Se evalúan las verificaciones básicas de las que hablamos en el otro trabajo: edades lógicas, campos vacíos, inputs sin labels / placeholders, tipos de datos, estructuras, etc.
- Manejo de errores.
- Está prohibido utilizar JS que no sea Vue.js o funciones / códigos propios.
- No borrar su repo forkeado y forkear de vuelta. Tienen que utilizar las herramientas que provee git para actualizar.
- Utilicen tags HTML5 y no solamente `div`. Tengan en cuenta los diferentes tags disponibles y los atributos de cada uno de ellos.
- El canal de Slack está para que todos nos saquemos las dudas, pregunten las veces que sea necesario.
- Utilicen el medio de persistencia que utilicen, la key para guardar debe ser `people`. Ej: `localStorage.setItem('people', /* un objeto stringifeado*/)`.
- Pueden agregar toda la funcionalidad que consideren necesaria, no tienen que limitarse a lo que dice este trabajo.
