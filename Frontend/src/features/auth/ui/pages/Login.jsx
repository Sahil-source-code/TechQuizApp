import {useAuth} from "../../hook/useAuth"
import React, { useState } from "react";

import {
  Lock,
  User,
  Eye,
  EyeOff,
  Zap,
} from "lucide-react";


const Login = () => {
  
  let {handleSubmit ,register,errors,loginFormSubmit,navigate,isSubmitting}=useAuth()
  const [showPassword, setShowPassword] = useState(false);





  return (
    <div className="min-h-screen bg-[#020b05] flex items-center justify-center px-4 py-8 relative overflow-hidden">

      {/* Background Glow */}
      <div className="absolute w-96 h-96 bg-green-500/20 rounded-full blur-[120px] top-10 left-10" />

      <div className="absolute w-96 h-96 bg-lime-400/10 rounded-full blur-[120px] bottom-10 right-10" />

      <div className="w-full max-w-5xl grid md:grid-cols-2 bg-[#07140b]/90 border border-green-500/30 rounded-3xl overflow-hidden shadow-[0_0_60px_rgba(34,197,94,0.15)] backdrop-blur-xl relative z-10">

        {/* ================= LEFT SIDE ================= */}
        <div className="hidden md:flex flex-col justify-center p-12 bg-gradient-to-br from-green-950 via-[#06150a] to-black relative">

          {/* Omnitrix */}
          <div className="w-28 h-28 mx-auto mb-8 rounded-full bg-black border-8 border-green-500 shadow-[0_0_35px_#22c55e] flex items-center justify-center">

            <div className="w-16 h-16 rounded-full bg-green-500 flex items-center justify-center">

              <div className="w-8 h-14 bg-black rounded-full rotate-45" />

            </div>

          </div>

          {/* BEN 10 */}
          <h1 className="text-6xl font-black text-center italic tracking-tighter">

            <span className="text-white">
              BEN
            </span>

            <span className="text-green-400">
              {" "}10
            </span>

          </h1>

          <p className="text-center text-gray-400 mt-5 text-lg">
            It's hero time! ⚡
          </p>

          {/* Features */}
          <div className="mt-10 space-y-4 text-gray-300">

            <div className="flex items-center gap-3">
              <Zap
                className="text-green-400"
                size={20}
              />

              <span>
                Unlock your ultimate potential
              </span>
            </div>

            <div className="flex items-center gap-3">
              <Zap
                className="text-green-400"
                size={20}
              />

              <span>
                Choose your transformation
              </span>
            </div>

            <div className="flex items-center gap-3">
              <Zap
                className="text-green-400"
                size={20}
              />

              <span>
                Become the hero
              </span>
            </div>

          </div>

        </div>

        {/* ================= RIGHT SIDE ================= */}
        <div className="p-8 sm:p-12">

          {/* Header */}
          <div className="mb-8">

            <p className="text-green-400 font-semibold tracking-widest text-sm">
              OMNITRIX ACCESS
            </p>

            <h2 className="text-4xl font-black text-white mt-2">
              Welcome Back
            </h2>

            <p className="text-gray-400 mt-2">
              Login to continue your journey.
            </p>

          </div>

          {/* ================= FORM ================= */}
          <form
            onSubmit={handleSubmit(loginFormSubmit)}
            className="space-y-6"
          >

            {/* NAME */}
            <div>

              <label className="text-sm text-gray-300 mb-2 block">
                Name
              </label>

              <div className="relative">

                <User
                  size={20}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
                />

                <input
                  type="text"
                  placeholder="Enter your name"
                  {...register("name", {
                    required: "Name is required",
                  })}
                  className={`w-full bg-black/40 border ${
                    errors.name
                      ? "border-red-500"
                      : "border-green-500/30"
                  } rounded-xl py-4 pl-12 pr-4 text-white outline-none transition focus:border-green-400 focus:ring-2 focus:ring-green-500/20 placeholder:text-gray-600`}
                />

              </div>

              {errors.name && (
                <p className="text-red-400 text-sm mt-2">
                  {errors.name.message}
                </p>
              )}

            </div>

            {/* PASSWORD */}
            <div>

              <label className="text-sm text-gray-300 mb-2 block">
                Password
              </label>

              <div className="relative">

                <Lock
                  size={20}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
                />

                <input
                  type={
                    showPassword
                      ? "text"
                      : "password"
                  }
                  placeholder="Enter your password"
                  {...register("password", {
                    required: "Password is required",

                    minLength: {
                      value: 6,
                      message:
                        "Password must be at least 6 characters",
                    },
                  })}
                  className={`w-full bg-black/40 border ${
                    errors.password
                      ? "border-red-500"
                      : "border-green-500/30"
                  } rounded-xl py-4 pl-12 pr-12 text-white outline-none transition focus:border-green-400 focus:ring-2 focus:ring-green-500/20 placeholder:text-gray-600`}
                />

                {/* Show Password */}
                <button
                  type="button"
                  onClick={() =>
                    setShowPassword(!showPassword)
                  }
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-green-400 transition"
                >

                  {showPassword ? (
                    <EyeOff size={20} />
                  ) : (
                    <Eye size={20} />
                  )}

                </button>

              </div>

              {errors.password && (
                <p className="text-red-400 text-sm mt-2">
                  {errors.password.message}
                </p>
              )}

            </div>

            {/* OPTIONS */}
            <div className="flex items-center justify-between text-sm">

              {/* Remember Me */}
              <label className="flex items-center gap-2 text-gray-400 cursor-pointer">

                <input
                  type="checkbox"
                  className="accent-green-500 w-4 h-4"
                />

                Remember me

              </label>

              {/* Forgot Password */}
              <button
                type="button"
                className="text-green-400 hover:text-green-300 transition"
              >
                Forgot Password?
              </button>

            </div>

            {/* LOGIN BUTTON */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 rounded-xl bg-gradient-to-r from-green-400 to-lime-400 text-black font-black text-lg tracking-wide hover:shadow-[0_0_30px_rgba(74,222,128,0.4)] hover:scale-[1.01] active:scale-[0.99] transition disabled:opacity-50"
            >

              {isSubmitting
                ? "ACCESSING..."
                : "LOGIN →"}

            </button>

          </form>

          {/* ================= CREATE ACCOUNT ================= */}
          <p className="text-center text-gray-500 text-sm mt-7">

            Don't have an account?{" "}
            <span
            onClick={()=>navigate('/register')}
            
            className="text-green-400">Register</span>

          

          </p>

          {/* Quote */}
          <p className="text-center text-gray-500 text-sm mt-5">
            "Heroes aren't born. They're made."
          </p>

        </div>

      </div>

    </div>
  );
};

export default Login;

