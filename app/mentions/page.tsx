import React from "react";
import Container from "@/components/Container";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";
export default async function Mentions() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/api/auth/signin?callbackUrl=/mentions");
  }
  return (
    <div>
      <Container>
        <h2 className="text-2xl lg:text-4xl">Mentions</h2>
      </Container>
    </div>
  );
}
