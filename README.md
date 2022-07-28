# MEVN Node.js Express VUE & MongoDB 
Carga atenciones medicas en una base Mongo local
la aplicacion es funcional y subida a github para poder ser base de desarrollo de otras aplicaciones

#instalar
yarn install
cd atenciones
yarn install (son dos packaje.json separados, uno para la API y otro para la pagina web)
yarn build
cd ..
yarn nodemon
esto mostrará la pagina que se encuentra en \atenciones\dist

#uso
la pagina se ve en http://localhost
para modificar la pagina, parado en \atenciones correr yarn serve
con esto se puede abrir un navegador en el otro puerto asignado e ir probando, una vez listo correr yarn serve
