const buyShoes = new Promise((resolve, reject) => {
    let money = true; 

    if (money) {
        resolve("Shoes bought successfully!");
    } else {
        reject("Not enough money to buy shoes.");
    }
});
buyShoes
    .then((message) => {
        console.log(message); 
    })
    .catch((error) => {
        console.log(error); 
    })
    .finally(() => {
        console.log("Promise completed.");
    });