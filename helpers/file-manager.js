const fs = require ('fs');

const ArchName = './database/data.json';

const saveData = (data) => {
    fs.writeFileSync(ArchName, JSON.stringify(data));
}


const getData = () => {
    
    if  (!fs.existsSync(ArchName)){
        return null;
    }
    
    const data = fs.readFileSync(ArchName, {encoding: 'utf8'});
    if (data) {
        return JSON.parse();
    }
    return null;

} 

module.exports = {
    saveData,
    getData,
}