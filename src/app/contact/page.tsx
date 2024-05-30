import { ContactHero } from "./components/contact-hero/contact-hero";
import { EmailForm } from "./components/email-form/email-form";
import { Mapbox } from "./components/mapbox/mapbox";
import { WorkingHours } from "./components/working-hours/working-hours";

export default function Page() {
  return (
    <>
      <ContactHero />
      <WorkingHours />
      <EmailForm />
      <Mapbox />
    </>
  );
}
