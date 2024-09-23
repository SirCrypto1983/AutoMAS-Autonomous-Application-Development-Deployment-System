
const fs = require('fs');
const path = require('path');

// Basic Mocha/Chai test template
const testTemplate = `
const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../app');
const should = chai.should();

chai.use(chaiHttp);

describe('API Tests', () => {
    it('it should GET the default message', (done) => {
        chai.request(server)
            .get('/')
            .end((err, res) => {
                res.should.have.status(200);
                res.text.should.be.eql('Hello from the AutoMAS generated API!');
                done();
            });
    });
});
`;

// Function to generate test file
function generateTestFile(projectName) {
    const testPath = path.join(__dirname, '..', '..', projectName, 'tests');
    if (!fs.existsSync(testPath)) {
        fs.mkdirSync(testPath, { recursive: true });
    }
    fs.writeFileSync(path.join(testPath, 'test.js'), testTemplate);
    console.log(`Test file generated for project: ${projectName}`);
}

// Run the agent with a project name
const projectName = process.argv[2] || 'auto_generated_backend';
generateTestFile(projectName);
