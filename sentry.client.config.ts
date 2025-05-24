// sentry.client.config.ts
import * as Sentry from "@sentry/nextjs";
import { Feedback } from "@sentry/integrations";

Sentry.init({
  dsn: "https://2aa29761d1fb150f690dd1ac3514bec9@o4509377575124992.ingest.us.sentry.io/4509377576239104",
  integrations: [
    Sentry.replayIntegration(),
    new Feedback({
      colorScheme: "system",
      autoInject: true,
    }),
  ],
  debug: false,
  tracesSampleRate: 1.0,
});