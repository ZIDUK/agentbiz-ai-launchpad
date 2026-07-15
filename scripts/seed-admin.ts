import { auth } from "../lib/auth";

async function main() {
  const email = process.env.ADMIN_EMAIL;
  const password = process.env.ADMIN_PASSWORD;
  if (!email || !password) throw new Error("ADMIN_EMAIL and ADMIN_PASSWORD required");
  await auth.api.signUpEmail({
    body: { email, password, name: "Admin" },
  });
  console.log("Admin seeded:", email);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
