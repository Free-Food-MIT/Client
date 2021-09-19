import merge from 'lodash/merge'

const config = {
  all: {
    env: process.env.NODE_ENV || 'development',
    apiUrl: 'https://freefoodserver-ek5lznmwxa-uc.a.run.app',
    supportUrl: 'mailto:freefoodapp@mit.edu',
    GAUniversalID : "UA-207896143-1"
  },
  test: { },
  development: { },
  production: { }
}

export default merge(config.all, config[config.all.env])