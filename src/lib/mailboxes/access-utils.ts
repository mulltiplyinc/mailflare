import type { AppDatabase } from "@/db";

// Self-hosted build: mailbox sharing is always on, no license check.
export async function isTeamMailboxSharingEnabled(_db: AppDatabase): Promise<boolean> {
	return true;
}
