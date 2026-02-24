const basicInfo = require('./basicInfo');
const tasks = require('./task')
const components = require('./components');
module.exports = {
    ...basicInfo,
    ...tasks,
    ...components
};
