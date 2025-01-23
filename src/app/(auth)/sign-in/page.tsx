"use client";
import AuthTitle from "@/components/ui/shared/AuthTitle";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { LuSend } from "react-icons/lu";
import { useForm, SubmitHandler } from "react-hook-form";
import { useLoginUserMutation } from "@/redux/api/baseApi";
import { toast } from "sonner";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { setUser } from "@/redux/features/auth/authSlice";
import { jwtDecode } from "jwt-decode";
import { RootState } from "@/redux/store";

// Define the form data type for SignIn
interface SignInFormData {
  email: string;
  password: string;
}

const SignIn = () => {
  const [loginUser] = useLoginUserMutation();
  const dispatch = useAppDispatch();
  const router = useRouter();
  const user = useAppSelector((state: RootState) => state.auth.user);

  // const user = true;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInFormData>();

  // Handle form submission
  const onSubmit: SubmitHandler<SignInFormData> = async (data) => {
    console.log("Sign In Data: ", data);

    try {
      const res = await loginUser({ userData: data });
      console.log(res);
      if (res?.data?.success) {
        toast.success(res?.data?.message);

        const decoded = jwtDecode(res.data.accessToken);

        console.log(decoded);
        dispatch(setUser({ token: res.data.accessToken, user: decoded }));
      } else {
        toast.error(res?.error?.data?.message);
      }
    } catch (error) {
      console.log(error);
    }
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
        <AuthTitle
          title="Sign In"
          desc="Please enter your credentials to sign in."
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
