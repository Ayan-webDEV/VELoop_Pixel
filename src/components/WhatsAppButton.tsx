import { MessageCircle } from "lucide-react";
import { waLink } from "../config/site";
export default function WhatsAppButton() {
  return (
    <a
      href={waLink()}
      aria-label="Chat on WhatsApp"
      className="pulse-soft fixed bottom-5 right-5 z-50 grid size-14 place-items-center rounded-full bg-emerald-500 text-white shadow-xl shadow-emerald-500/20 transition hover:-translate-y-1 hover:bg-emerald-600"
    >
      <MessageCircle size={24} />
    </a>
  );
}
