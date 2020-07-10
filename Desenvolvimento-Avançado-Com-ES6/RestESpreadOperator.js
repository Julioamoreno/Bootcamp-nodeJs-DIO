const obj = {
	test: 123,
};

// const obj2 = obj; //As duas var apontam pro mesmo obj
// obj2.test = 444; // Altera os 2 objetos

//Atentar que esse é um shallow clone, se o objeto
// a ser copiado tiver mais de um nivel vai ser modificado
//na referencia e copia
const obj2 = { ...obj };
obj2.test = 444;
console.log(obj);
