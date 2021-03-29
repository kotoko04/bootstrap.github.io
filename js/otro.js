var  part  =  "" ;
$ . getJSON ( 'partidos.json' ,  function ( datos ) {
	$ ( "#contenido" ) . html ( '' ) ;
	$ . each ( datos [ "partidos" ] ,  function ( idx ,  partido ) {
		$ ( "#contenido" ) . añadir ( "<tr>"  +
			"<td>" + partido [ "fecha" ] + "</td> <td>" + partido [ "equipo1" ] + "</td> <td>"
			+ partido . equipo2 + "</td>"  +
			"</tr>" ) ;
	} ) ;
} ) ;