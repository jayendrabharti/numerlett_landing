import { getContactForms } from "@/actions/contactForm";
import ContactClient from "@/components/admin/ContactClient";

export default async function ContactPage() {
  const result = await getContactForms();
  const forms = result.success ? result.data || [] : [];

  return <ContactClient initialForms={forms} />;
}
