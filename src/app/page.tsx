import { redirect } from "next/navigation";

// Accounts are created by the admin only; the landing page goes straight to login.
export default function HomePage() {
	redirect("/login");
}
