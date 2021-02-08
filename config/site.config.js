const path = require('path');
const fs = require('fs');

let ROOT = process.env.PWD;

if (!ROOT) {
  ROOT = process.cwd();
}

const config = {
  site_name: 'devhappy.io',
  site_description: 'Ryans portfolio / dev site',
  site_url: 'https://devhappy.io',
  googleAnalyticsUA: '',
  // Source file for favicon generation.
  favicon: path.join(ROOT, '/src/images/favicon.png'),
  // Local development URL
  dev_host: 'localhost',
  port: process.env.PORT || 8000,
  env: process.env.NODE_ENV,
  root: ROOT,
  paths: {
    config: 'config',
    src: 'src',
    dist: 'dist',
  }
};

module.exports = config;
