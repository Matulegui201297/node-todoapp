const fs = require ('fs');

const ArchName = './database/data.json';

const saveData = (data) => {
    fs.writeFileSync(ArchName, JSON.stringify(data));
}


const getData = () => {
    
    if  (!fs.existsSync(ArchName)){
        return null;
    }
    return JSON.parse(fs.readFileSync(ArchName, {encoding: 'utf8'}));

} 

module.exports = {
    saveData,
    getData,
}