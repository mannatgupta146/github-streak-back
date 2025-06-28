const jsonfile = require('jsonfile');
const moment = require('moment');
const simpleGit = require('simple-git');

const FILE_PATH = './data.json';

// Get yesterday's date in ISO format
const DATE = moment().subtract(1, 'd').format();

const data = { date: DATE };

// Write the date to data.json
jsonfile.writeFile(FILE_PATH, data, () => {
    const git = simpleGit();
    git.add([FILE_PATH])
       .commit(DATE, { '--date': DATE })
       .push()
       .then(() => console.log('✅ Commit pushed with backdated timestamp:', DATE))
       .catch(err => console.error('❌ Error:', err));
});
