const AdminBro = require('admin-bro');
const AdminBroMongoose = require('@admin-bro/mongoose');

AdminBro.registerAdapter(AdminBroMongoose);

const { Company } = require('./companies/companies.entity');
const { Employee } = require('./employees/employees.entity');
/** @type { AdminBro.AdminBroOptions} */
const options = {
    resources: [
        Company,
        Employee
    ],
    branding: {
        companyName: 'bruvgram',
        logo: 'https://bruvgram.netlify.app/bruvgram.png'
    }
}

module.exports = options;