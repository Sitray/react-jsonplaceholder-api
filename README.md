
### `npm install`

Primero hacer un npm install para instalar las dependencias que haya, después de eso un npm run start 


### `npm run start`

Abrir en  [http://localhost:3000](http://localhost:3000) 

### `npm test`

para lanzar los Test que hay.

### Explicación

Al final como se pedía he hecho un mock de hacer las llamadas a la API mediante fetch(Están comentadas por el código). Junto a dos helpers y un custom hook para hacer el fetch.

Lo demás está hecho con **redux** y **redux-thunk** para hacer las llamádas a la api y almacenarlo en un estado. 

Con eso me ha permitido añadir una funcionalidad de poder filtrar las cartas que hay por **nombre** y **descripción**. Es por eso que en la navbar hay un buscador. Y se van mostrándo de forma dinámica mientras escribes.

Una vez editada la carta queda guardada en el estado de Redux y por lo tanto también estará diponible en el buscador. 

He usado esta paleta de colores, para los botones, la carta y la navbar.

![a](https://user-images.githubusercontent.com/22580527/140395930-7437c3ce-18d7-4404-be3f-77277146c1d6.png)



