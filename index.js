//1

const [fruit, vegetable, food] = [
    "banana",
    "cucumber",
    ["bread", "cakes", "pizza"],
  ];
  
  console.log(fruit);
  console.log(vegetable);
  console.log(food);

//2

const halloween = {
    fran: "witch",
    thomas: "pumpkin",
    luise: "plumber",
  };

const {fran, thomas, luise} = halloween;
console.log(fran, thomas, luise);

//3

const bandMusician = {
    name: "Metallica",
    hit: "Enter Sandman",
    nationality: "American",
    bandOrMusician: "band",
}

function bandData() {
    const {name, hit,nationality,bandOrMusician,genre} = bandMusician
    return `${name} is a ${nationality} ${bandOrMusician}. The ${bandOrMusician} sings ${genre} and their greatest hit is "${hit}".`
}
console.log(bandData(bandMusician))
