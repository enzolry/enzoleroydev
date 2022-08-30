const dotenv = require('dotenv');

module.exports = {
  apps: [
    {
      name: 'portfolio',
      //exec_mode: 'cluster',
      //instances: 'max',
      exec_mode: 'fork',
      script: './node_modules/nuxt/bin/nuxt.js',
      args: 'start',
      env: dotenv.config({ path: './.env' }).parsed,
      env_production: {
        NODE_ENV: 'production'
      },
      env_development: {
          NODE_ENV: 'development'
      }
    }
  ]
}
