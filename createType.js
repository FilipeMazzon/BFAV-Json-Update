const createType = (config, name, type) => {
    if (typeof config.FarmAnimals[name] !== "undefined") {
        console.warn(`You are trying to add ${name} as new type but this type already exists`);
        return;
    }
    let newType = type[name];
    if (typeof newType.Types === "undefined") {
        return console.warn(`Your new type of new animal don't have the variable Types, please fix the type.js`);
    }
    if (!newType.Types.length) {
        return console.warn(`you new type of animal don't have animal register`);
    }
    if (typeof newType.Building === "undefined") {
        return console.warn(`Your new type of new animal don't have the variable Building, please fix the type.js`);
    }
    if (!newType.Building.length) {
        return console.warn(`you are trying add a new type of animal without put them an any type of building like Barn or Coop`);
    }
    let AnimalShop = newType.AnimalShop;
    if (typeof AnimalShop === "undefined") {
        return console.warn(`you don't createe the field AnimalShop, please create this like the new format of bfav`);
    }
    if (typeof AnimalShop.Name !== "string" && AnimalShop.Name !== null) {
        return console.warn(`Miss the Name field on AnimalShop or isn't a string, fix in type.js`)
    }
    if (typeof AnimalShop.Description !== "string" && AnimalShop.Description !== null) {
        return console.warn(`Miss the Description field on AnimalShop or isn't a string, fix in type.js`)
    }
    if (typeof AnimalShop.Price !== "string" && AnimalShop.price !== null) {
        return console.warn(`Miss the Price field on AnimalShop or isn't a string, fix in type.js`)
    }
    if (typeof AnimalShop.Icon !== "string" && AnimalShop.icon !== null) {
        return console.warn(`Miss the Price field on AnimalShop or isn't a string, fix in type.js`)
    }
    if (AnimalShop.Name !== name) {
        return console.warn(`the name of shop isn't equal to the name of the new type`)
    }
    if (parseInt(AnimalShop.price) < 0) {
        return console.error(`the price is less than 0`);
    }
    config.FarmAnimals[name] = type[name];
    console.log(`Insert ${name} as new type`);
    return "success";
};

const run = async (config, types, callback) => {
    for (let type of types) {
        for (let nameType in type) {
            let result = await createType(config, nameType, type);
            if (result !== "success") {
                console.error(`the ${nameType} wasn't inserted fix those issue and try again`);
            }
        }
    }
    callback(config);
};

module.exports = run;