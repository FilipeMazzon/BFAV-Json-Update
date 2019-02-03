

const insertAnimals = (config, name, type) => {
    if(config.FarmAnimals[type].Types.includes(name)){
        console.log(`You are trying to add ${name} as animal but this animal was already include, I will Skip This`);
        return;
    }
    return config.FarmAnimals[type].Types.push(name);
};

const run = async (config, animals,callback) => {
    for (let animal of animals) {
        await insertAnimals(config, animal.name, animal.type);
    }
    callback(config);
};

module.exports = run;