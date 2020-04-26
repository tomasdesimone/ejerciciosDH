const fs = require('fs');
var heroes = JSON.parse(fs.readFileSync('./data/heroes.json', 'utf-8'))

var heroesController = {
    listado : function(req, res){
        res.send(heroes);
    },

    detalle: function (req,res) {
        // Acá lo primero será encontrar al héroe que corresponda
        let heroeEncontrado= "ninguno";
        heroes.forEach(function(heroe) {
            if(req.params.id == heroe.id){
                heroeEncontrado = heroe;
            }
        });
        if(heroeEncontrado == "ninguno"){
            res.send("no se encontro ninguno.");
        }else{
            res.send(heroeEncontrado.nombre + " - " + heroeEncontrado.profesion)
        }
    },

    detalleConBio: function(req, res){
        
        let heroeEncontrado= "ninguno";
	heroes.forEach(function(heroe) {
		if(req.params.id == heroe.id){
			heroeEncontrado = heroe;
		}
	});
	if(heroeEncontrado == "ninguno"){
		res.send("No encontramos un heroe para mostrarte su biografía");
	}else{
		if(req.params.ok == "ok"){
			res.send(heroeEncontrado.nombre + " " + heroeEncontrado.resenia)
		}else{
			res.send(heroeEncontrado.nombre + " Lamento que no quieras saber más de mi :(");
	};
		

	// Si NO se encuentra al héroe se envía un mensaje
	// Si se encuentra al héroe:
		// Se pregunta si vino el parámetro Y el valor esperado y se envía la información
		// Si nó vino el parámetro se envía el mensaje de error
	}
},

    }

module.exports = heroesController;