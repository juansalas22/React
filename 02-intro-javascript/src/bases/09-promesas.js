import { getHeroeById } from "./08-imp-exp";

//const promesa = new Promise((resolve, reject) => {
//    setTimeout(() => {
//        //Tarea
//        //importen el:
//        const p1 = getHeroeById(2);
//        resolve(p1);
//    }, 2000)
//});
//
//promesa.then((heroe) => {
//    console.log(`Heroe ${heroe}`);
//})
//.catch(err => console.warn(err));

const getHeroeByIdAsync = (id) => {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const p1 = getHeroeById(id);
            if (p1) {
                resolve(p1);
            } else {
                reject('No se encontro el heroe');
            }
            
        }, 2000)
    });

}

getHeroeByIdAsync(2)
.then(console.log)
.catch(console.warn);