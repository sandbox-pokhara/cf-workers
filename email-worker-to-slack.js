export default {
  async email(message, env, ctx) {
    try {
      const webhookUrl = "https://hooks.slack.com/services/xxx/xxx/xxx";
      const body = JSON.stringify({
        text: `Got an email from ${message.from}, subject: ${message.headers.get("subject")}`,
      });
      const res = await fetch(webhookUrl, {
        "Content-type": "application/json",
        method: "POST",
        body: body,
      });
      console.log(res.status);
    } catch (error) {
      console.log("exception when sending data to slack");
    }
    await message.forward("pradishbijukchhe@gmail.com");
  },
};
