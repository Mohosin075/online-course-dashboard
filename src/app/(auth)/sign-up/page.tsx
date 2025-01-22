"use client";
import AuthTitle from "@/components/ui/shared/AuthTitle";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { LuSend } from "react-icons/lu";
import { useForm, SubmitHandler } from "react-hook-form";
import { useAddUserMutation } from "@/redux/api/baseApi";
import { toast } from "sonner";

// Define the form data type
interface SignUpFormData {
  fullName: string;
  email: string;
  role: string;
  password: string;
  confirmPassword: string;
}

const SignUp = () => {
  const [addUser] = useAddUserMutation();
  const user = false;
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpFormData>();

  const onSubmit: SubmitHandler<SignUpFormData> = async (data) => {
    const userData = {
      ...data,
      status: data.role === "student" ? "accepted" : "pending",
    };
    try {
      const res = await addUser({userData});
      console.log(res);
      if (res?.data?.insertedId) {
        toast.success("Sign up successfully!");
        router.push('/sign-in')
      }
      if (res?.data?.message) {
        toast.info("Account already exists! Use another email or Login!");
      }
    } catch (error) {
      console.log(error);
    }
  };

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
        <AuthTitle title="Sign Up" desc='Fill in your details to create an account.'/>

        {/* Full Name */}
        <div className="mb-4">
          <label
            htmlFor="fullName"
            className="block text-secondary font-semibold mb-2"
          >
            Full Name
          </label>
          <input
            type="text"
            id="fullName"
            className="CInput"
            placeholder="Enter your full name"
            {...register("fullName", { required: "Full Name is required" })}
          />
          {errors.fullName && (
            <p className="text-red-500 text-sm">{errors.fullName.message}</p>
          )}
        </div>

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

        {/* Role */}
        <div className="mb-4">
          <label
            htmlFor="role"
            className="block text-secondary font-semibold mb-2"
          >
            Role
          </label>
          <select
            id="role"
            className="CInput"
            {...register("role", {
              required: "Please select your role",
            })}
          >
            <option value="" disabled>
              -- Select your role --
            </option>
            <option value="student">Student</option>
            <option value="instructor">Instructor</option>
          </select>
          {errors.role && (
            <p className="text-red-500 text-sm">{errors.role.message}</p>
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

        {/* Confirm Password */}
        <div className="mb-6">
          <label
            htmlFor="confirmPassword"
            className="block text-secondary font-semibold mb-2"
          >
            Confirm Password
          </label>
          <input
            type="password"
            id="confirmPassword"
            className="CInput"
            placeholder="Confirm your password"
            {...register("confirmPassword", {
              required: "Please confirm your password",
              validate: (value, { password }) =>
                value === password || "Passwords do not match",
            })}
          />
          {errors.confirmPassword && (
            <p className="text-red-500 text-sm">
              {errors.confirmPassword.message}
            </p>
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
            Sign Up
          </button>
        </div>
        <p className="text-secondaryGray mt-2 text-center">
          Already have an account?{" "}
          <Link href="/sign-in" className="text-primary underline">
            sign in
          </Link>
        </p>
      </form>
    </div>
  );
};

export default SignUp;
