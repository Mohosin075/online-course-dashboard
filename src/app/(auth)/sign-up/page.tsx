"use client";
import { useRouter } from "next/navigation";

const SignUp = () => {
  const user = false; 
  const router = useRouter();

  if (user) {
    router.push(`/dashboard/${"admin"}/overview`);
    return null; 
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-light-background text-light-foreground">
      <form className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold text-primary mb-4">Sign Up</h1>
        <p className="text-sm text-secondaryGray mb-6">
          Fill in your details to create an account.
        </p>

        {/* Full Name */}
        <div className="mb-4">
          <label htmlFor="fullName" className="block text-secondary mb-2">
            Full Name
          </label>
          <input
            type="text"
            id="fullName"
            className="w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="Enter your full name"
          />
        </div>

        {/* Email */}
        <div className="mb-4">
          <label htmlFor="email" className="block text-secondary mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="Enter your email"
          />
        </div>

        {/* Phone */}
        <div className="mb-4">
          <label htmlFor="phone" className="block text-secondary mb-2">
            Phone
          </label>
          <input
            type="text"
            id="phone"
            className="w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="Enter your phone number"
          />
        </div>

        {/* Password */}
        <div className="mb-6">
          <label htmlFor="password" className="block text-secondary mb-2">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="Enter your password"
          />
        </div>

        {/* Submit Button */}
        <button type="submit" className="CBtnBg w-full">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUp;
