"use client";
import { useAddUserMutation } from "@/redux/api/baseApi";
import { useRouter } from "next/navigation";

const SignIn = () => {
  const [addUser] = useAddUserMutation();
  const user = true;
  const router = useRouter();
  // if (user) {
  //   return router.push(`/dashboard/${"admin"}/overview`);
  // }

  return (
    <div className="min-h-screen">
      SignIn
    </div>
  );
};

export default SignIn;
