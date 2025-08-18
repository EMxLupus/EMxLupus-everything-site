import {getRequestConfig} from "next-intl/server";

export default getRequestConfig(async ({locale}) => {
  const messages = (await import(`@/messages/${locale}/team.json`)).default;
  return {messages: {team: messages}};
});
