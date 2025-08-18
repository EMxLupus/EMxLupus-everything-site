import {getRequestConfig} from "next-intl/server";
import {Locale} from "./config";

export default getRequestConfig(async ({locale}) => {
  const l = locale as Locale;

  // Messages sind in namespaces organisiert; hier laden wir "team"
  const team = (await import(`@/messages/${l}/team.json`)).default;

  return {
    messages: {
      team
    }
  };
});
