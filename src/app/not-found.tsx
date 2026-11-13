import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import styles from "./not-found.module.css";

// Self-hosted at build time: the CSP blocks fonts.googleapis.com.
const dmSans = DM_Sans({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

export const metadata: Metadata = { title: "Page not found | Mulltiply" };

// Mirrors mulltiply.ai's marketing/404.html.
export default function NotFound() {
	return (
		<div className={`${styles.page} ${dmSans.className}`}>
			<main className={styles.card}>
				<a className={styles.brand} href="https://mulltiply.ai" aria-label="Mulltiply home">
					<img src="/assets/mulltiply-logo-136.webp" alt="" width={34} height={34} />
					<img src="/assets/mulltiply-wordmark-ink.svg" alt="Mulltiply" width={139} height={36} />
				</a>
				<div className={styles.code}>404</div>
				<h1>Page not found</h1>
				<p>The address may be incorrect, or the page may have moved.</p>
				<nav aria-label="Where to go next">
					<a href="/login">Go to login</a>
					<a href="https://mulltiply.ai">mulltiply.ai</a>
				</nav>
			</main>
		</div>
	);
}
