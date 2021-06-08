
# Test Merqueo

## Tecnologías
- React
- Moment
- react-id-generator: para poder asignar un identificador unico a los comentarios
- SASS
- Jest: para la implementacion de las pruebas
- enzyme: libreria de airbnb para testing

* Los posts se guardan en localStorage
* Los primeros posts se traen del archivo llamado post.json 
* Los usuarios se toman de forma aleatoria del archivo llamado users.json, se envia uno en cada recarga del sitio para que sea este quien comente e interactue con el sitio
* Solo se permite una reacción por publicación (like) las otras interacciones se puede indefinidamente y se almacenan en localstorage
* el testing se compone de validaciones de renderizado y correcto envio de props, tambien se genera un snapShot en el componente Header, ya que este no esta presto a tener cambios en el UI del sitio. 


## Comandos
### `npm install`
* proceso de intalacion de las dependecias del sitio
### `npm start`
* inicia la aplicación
### `npm test`
* ejecutar testing
