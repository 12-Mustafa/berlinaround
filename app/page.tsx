// Redirect the root route to the default locale.
// German is the default public language for this website.
import { redirect } from "next/navigation";

export default function RootPage() {
  redirect("/de");
}
