import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

	nombre = "Patricio";
	nombre2 = "pAtricio gonZalo seGUel moYa";

	arreglo = [1,2,3,4,5,6,7,8,9,10];

	PI = Math.PI;

	a = 0.234;

	salario = 1234.5;

	heroe = {
		nombre: "Logan",
		clave: "Wolverine",
		edad: 500,
		direccion:{
			calle: "Primera",
			casa: "29"
		}
	}


	valorDePromesa = new Promise( (resolve, reject )=>{

		setTimeout(()=>resolve('LLego la data!'), 3500);

	} )

	fecha = new Date();

	video = "quW6p2aEjB4";

	activar:boolean = true;
}
