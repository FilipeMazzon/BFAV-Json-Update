const insertAnimals = (config, name, type) => {
    if(typeof config.FarmAnimals[type] === "undefined"){
        return console.log(`You are trying to add ${name} in a type is'nt exist :${type}`);
    }
    if(config.FarmAnimals[type].Types.includes(name)){
        console.warn(`You are trying to add ${name} as animal but this animal was already include, I will Skip This`);
        return;
    }
    console.log(`Insert ${name} as ${type}`);
    return config.FarmAnimals[type].Types.push(name);
};

const run = async (config, animals,callback) => {
    for (let animal of animals) {
        await insertAnimals(config, animal.name, animal.type);
    }
    callback(config);
};

module.exports = run;