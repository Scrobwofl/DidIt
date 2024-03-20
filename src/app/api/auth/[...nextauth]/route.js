import { handlers } from "@/auth";

export const { GET, POST } = handlers;

const authOptions = {
  url: process.env.NEXTAUTH_URL,
};
