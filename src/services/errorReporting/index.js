import {initSentry, logError} from './sentry';

export const initErrorReporting = () => {
  initSentry();
}

export const reportError = (err) => {
  console.log("reportError")
  logError(err)
}

