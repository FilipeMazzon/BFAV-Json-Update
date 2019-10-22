const config = require('./config.json');
const updateConfig = require('./createType');
const writeConfig = require('./writeConfigJson');
const types = require('./type');

updateConfig(config, types, (newConfig) => {
    writeConfig(newConfig, () => {
        console.log("config.json was updated, Copy the config.json file in your BFAV file");
    })
});
