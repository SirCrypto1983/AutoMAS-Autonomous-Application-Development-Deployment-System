
const fs = require('fs');
const path = require('path');

// Basic Prometheus configuration template
const prometheusTemplate = `
global:
  scrape_interval: '15s'

scrape_configs:
  - job_name: 'autommas_api'
    static_configs:
      - targets: ['localhost:3000']
`;

// Function to generate monitoring configuration
function generateMonitoringConfig(projectName) {
    const configPath = path.join(__dirname, '..', '..', projectName, 'config');
    if (!fs.existsSync(configPath)) {
        fs.mkdirSync(configPath, { recursive: true });
    }
    fs.writeFileSync(path.join(configPath, 'prometheus.yml'), prometheusTemplate);
    console.log(`Prometheus monitoring configuration generated for project: ${projectName}`);
}

// Run the agent with a project name
const projectName = process.argv[2] || 'auto_generated_backend';
generateMonitoringConfig(projectName);
