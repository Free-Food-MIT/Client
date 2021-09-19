import * as Sentry from "@sentry/react";
import { Integrations } from "@sentry/tracing";
import config from '../../../config';

export const initSentry = () => {
  if (config.env === 'production') {
    Sentry.init({
      dsn: "https://ae679fa1b4e64642842c75f4f165ebb5@o517395.ingest.sentry.io/5765177",
      integrations: [new Integrations.BrowserTracing()],
    
      // Set tracesSampleRate to 1.0 to capture 100%
      // of transactions for performance monitoring.
      // We recommend adjusting this value in production
      tracesSampleRate: 1.0,
    });
  }
}


export const logError = (err) => {
  console.log("sentry log error", err)
  Sentry.captureException(err);
}

export default initSentry;
