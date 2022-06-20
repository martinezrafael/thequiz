//declarar uma variável com seu nome
let firstName = "Rafael";
console.log(firstName);

//declarar uma variável com seu ultimo sobrenome
let lastName = "Martinez";
console.log(lastName);

//declarar uma variável que concatene seu nome e sobrenome
let fullName = `${firstName} ${lastName}`;
console.log(fullName);

//declarar uma variável com a sua idade
let age = 31;
console.log(age);

//declarar uma variável com a sua comida favorita e não atribuir valor
let favoriteFood;
console.log(`Minha comida favorita é ${favoriteFood}`);

//atribuir valor para a sua comida favorita
favoriteFood = "Pastel";
console.log(`Minha comida favorita é ${favoriteFood}`);

//declarar 5 variáveis diferentes sem valor
let phoneNumber = "(13) 98216-6495",
  emailAddress = "rafaelmartinez.contato@gmail.com",
  favoriteColor = "verde",
  zipCode = "11750-000",
  homeAddress = {
    street: "Rua Benedito Oliva de Lacerda",
    number: "17",
    city: "Peruíbe",
  };

console.log(`Meu telefone é ${phoneNumber}`);
console.log(`Meu endereço de email é ${emailAddress}`);
console.log(`Minha cor favorita é ${favoriteColor}`);

console.log(
  `Eu moro na ${homeAddress.street}, Número: ${homeAddress.number} em ${homeAddress.city} cep ${zipCode}.`
);
