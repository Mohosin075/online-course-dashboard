"use client";
import { useRouter } from "next/navigation";

const SignIn = () => {
  const user = true;
  const router = useRouter();
  if (user) {
    return router.push(`/dashboard/${"admin"}/overview`);
  }
  return <div className="min-h-screen">SignIn</div>;
};

export default SignIn;
