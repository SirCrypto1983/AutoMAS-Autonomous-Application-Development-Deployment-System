
const fs = require('fs');
const path = require('path');

// Template for a simple Express.js backend
const backendTemplate = `
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello from the AutoMAS generated API!');
});

app.listen(port, () => {
    console.log(\`API is running on http://localhost:\${port}\`);
});
`;

// Function to generate a new backend application
function generateBackendProject(projectName) {
    const projectPath = path.join(__dirname, '..', '..', projectName);
    if (!fs.existsSync(projectPath)) {
        fs.mkdirSync(projectPath);
        fs.writeFileSync(path.join(projectPath, 'app.js'), backendTemplate);
        console.log(`Backend project ${projectName} is generated!`);
    } else {
        console.log('Project already exists');
    }
}

// Run the agent with a project name
const projectName = process.argv[2] || 'auto_generated_backend';
generateBackendProject(projectName);
