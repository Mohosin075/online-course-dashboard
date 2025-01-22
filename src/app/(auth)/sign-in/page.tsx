"use client";
import AuthTitle from "@/components/ui/shared/AuthTitle";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { LuSend } from "react-icons/lu";
import { useForm, SubmitHandler } from "react-hook-form";

// Define the form data type for SignIn
interface SignInFormData {
  email: string;
  password: string;
}

const SignIn = () => {
  const router = useRouter();
  const user = false; // Mock user authentication, change it as per your logic

  // Setup React Hook Form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInFormData>();

  // Handle form submission
  const onSubmit: SubmitHandler<SignInFormData> = (data) => {
    console.log("Sign In Data: ", data);

    
  };

  // Redirect if the user is logged in
  if (user) {
    router.push(`/dashboard/${"admin"}/overview`);
    return null;
  }

  return (
    <div className="min-h-[90vh] flex items-center justify-center bg-light-background text-light-foreground drop-shadow-lg py-10">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-8 rounded-lg shadow-md w-full max-w-md drop-shadow-xl"
      >
        <AuthTitle title="Sign In" desc='Please enter your credentials to sign in.'
        />

        {/* Email */}
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-secondary font-semibold mb-2"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            className="CInput"
            placeholder="Enter your email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
                message: "Enter a valid email address",
              },
            })}
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}
        </div>

        {/* Password */}
        <div className="mb-6">
          <label
            htmlFor="password"
            className="block text-secondary font-semibold mb-2"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            className="CInput"
            placeholder="Enter your password"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters long",
              },
            })}
          />
          {errors.password && (
            <p className="text-red-500 text-sm">{errors.password.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <div className="text-center flex flex-col">
          <button
            type="submit"
            className="CBtnBg flex items-center justify-center"
          >
            <span className="mr-2 text-lg">
              <LuSend />
            </span>
            Sign In
          </button>
        </div>

        <p className="text-secondaryGray mt-2 text-center">
          Dont have an account?{" "}
          <Link href="/sign-up" className="text-primary underline">
            Sign up
          </Link>
        </p>
      </form>
    </div>
  );
};

export default SignIn;
