import type { InquiryState } from "../components/InquiryForm";

export async function submitInquiry(payload: InquiryState) {
  const endpoint = import.meta.env.VITE_INQUIRY_ENDPOINT as string | undefined;

  if (!endpoint) {
    console.info("[VELoop Pixel] Inquiry captured locally:", payload);
    return { ok: true, mode: "local" as const };
  }

  const response = await fetch(endpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ...payload, submittedAt: new Date().toISOString() }),
  });

  if (!response.ok) throw new Error("Inquiry submission failed");
  return { ok: true, mode: "remote" as const };
}
