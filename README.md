
# Test Merqueo

## Tecnologías
- React
- Moment
- react-id-generator: para poder asignar un identificador único a los comentarios
- SASS
- Jest: para la implementación  de las pruebas
- enzyme: libreria de airbnb para testing

## Descripcion del proyecto
* Los post se guardan en localStorage
* Los primeros posts se traen del archivo llamado post.json 
* Los usuarios se toman de forma aleatoria del archivo llamado users.json, se envía uno en cada recarga del sitio para que sea este quien comente e interactúe con el sitio
* Solo se permite una reacción por publicación (like) las otras interacciones se pueden enviar indefinidamente y se almacenan en localstorage
* el testing se compone de validaciones de renderizado y correcto envío de props, también se genera un snapShot en el componente Header, ya que este no está presto a tener cambios en el UI del sitio (por la estructura definidad en los mockups).


## Comandos
### `npm install`
* proceso de instalación de las dependencias del sitio
### `npm start`
* inicio de la aplicaciónn
### `npm test`
* ejecutar testing
