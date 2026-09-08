import test from "node:test";
import assert from "node:assert/strict";
import { submitInquiry, INQUIRY_ENDPOINT } from "../form.ts";
const inquiry = () => {
  const data = new FormData();
  for (const [key, value] of Object.entries({
    name: " Test ",
    email: "student@example.com",
    service: "UK applications",
    message: " A question about studying. ",
  }))
    data.set(key, value);
  return data;
};
test("submits to the requested mailbox with a reply address and accepts confirmed success", async () => {
  let payload;
  await submitInquiry(inquiry(), "zh", async (url, options) => {
    assert.equal(url, "https://formsubmit.co/ajax/hello@heyoworld.com");
    assert.equal(options.method, "POST");
    payload = JSON.parse(options.body);
    return new Response(JSON.stringify({ success: "true" }), { status: 200 });
  });
  assert.equal(payload.email, "student@example.com");
  assert.equal(payload.name, "Test");
  assert.equal(payload.message, "A question about studying.");
  assert.equal(payload.language, "zh");
});
test("activation-required response is never treated as success", async () => {
  await assert.rejects(
    submitInquiry(
      inquiry(),
      "en",
      async () =>
        new Response(
          JSON.stringify({
            success: "false",
            message: "This form needs Activation.",
          }),
        ),
    ),
  );
});
test("HTTP failure, network failure, and invalid payload never produce success", async () => {
  for (const fetcher of [
    async () => new Response("{}", { status: 429 }),
    async () => {
      throw new Error("offline");
    },
    async () => new Response("<html>error</html>"),
    async () => new Response("{}"),
  ])
    await assert.rejects(submitInquiry(inquiry(), "zh", fetcher));
});
test("boolean success responses are supported", async () => {
  await submitInquiry(
    inquiry(),
    "en",
    async () => new Response(JSON.stringify({ success: true })),
  );
});
