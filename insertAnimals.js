const config = require('./config.json');
const updateConfig = require('./updating');
const writeConfig = require('./writeConfigJson');
const animals = require('./animals');

updateConfig(config, animals, (newConfig) => {
    writeConfig(newConfig, () => {
        console.log("config.json was updated, Copy the config.json file in your BFAV file");
    })
});

