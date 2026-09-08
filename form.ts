export const INQUIRY_ENDPOINT =
  "https://formsubmit.co/ajax/hello@heyoworld.com";
export async function submitInquiry(
  data: FormData,
  language: string,
  fetcher: typeof fetch = fetch,
) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 15000);
  try {
    const response = await fetcher(INQUIRY_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      signal: controller.signal,
      body: JSON.stringify({
        name: String(data.get("name") || "").trim(),
        email: String(data.get("email") || "").trim(),
        service: String(data.get("service") || "Not specified"),
        message: String(data.get("message") || "").trim(),
        language,
        _subject: "Heyoworld 和曜 | 新的官网咨询",
        _template: "table",
        _honey: String(data.get("_honey") || ""),
      }),
    });
    if (!response.ok) throw new Error("Submission rejected");
    const result = await response.json();
    if (result.success !== true && result.success !== "true")
      throw new Error("Submission not confirmed");
  } finally {
    clearTimeout(timeout);
  }
}
