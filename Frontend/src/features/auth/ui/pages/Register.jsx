
import React from "react";

import {
  User,
  Mail,
  Phone,
  Lock,
  Eye,
  EyeOff,
  GitBranch,
} from "lucide-react";
import { useState } from "react";
import { useAuth } from "../../hook/useAuth";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
   let {handleSubmit ,register,errors,registerFormSubmit,navigate,isSubmitting}=useAuth()



 

  return (
    <div className="min-h-screen bg-[#020b05] flex items-center justify-center px-4 py-8 relative overflow-hidden">

      {/* Background Glow */}
      <div className="absolute w-96 h-96 bg-green-500/20 rounded-full blur-[120px] top-0 left-0" />
      <div className="absolute w-96 h-96 bg-lime-400/10 rounded-full blur-[120px] bottom-0 right-0" />

      <div className="w-full max-w-5xl grid md:grid-cols-2 bg-[#07140b]/95 border border-green-500/30 rounded-3xl overflow-hidden shadow-[0_0_60px_rgba(34,197,94,0.15)] backdrop-blur-xl relative z-10">

        {/* LEFT SIDE */}
        <div className="hidden md:flex flex-col justify-center p-12 bg-gradient-to-br from-green-950 via-[#06150a] to-black">

          {/* Omnitrix */}
          <div className="w-28 h-28 mx-auto mb-8 rounded-full bg-black border-8 border-green-500 shadow-[0_0_35px_#22c55e] flex items-center justify-center">
            <div className="w-16 h-16 rounded-full bg-green-500 flex items-center justify-center">
              <div className="w-8 h-14 bg-black rounded-full rotate-45" />
            </div>
          </div>

          <h1 className="text-6xl font-black text-center italic tracking-tighter">
            <span className="text-white">BEN</span>
            <span className="text-green-400"> 10</span>
          </h1>

          <p className="text-center text-gray-400 mt-5 text-lg">
            Create your hero profile ⚡
          </p>

          <div className="mt-10 text-center">
            <p className="text-green-400 font-bold text-xl">
              JOIN THE TEAM
            </p>

            <p className="text-gray-500 mt-3 leading-relaxed">
              Register your account and unlock
              <br />
              your ultimate potential.
            </p>
          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="p-7 sm:p-10">

          <div className="mb-7">
            <p className="text-green-400 font-semibold tracking-widest text-sm">
              OMNITRIX REGISTRATION
            </p>

            <h2 className="text-3xl sm:text-4xl font-black text-white mt-2">
              Create Account
            </h2>

            <p className="text-gray-400 mt-2">
              Register to start your journey.
            </p>
          </div>

          <form
            onSubmit={handleSubmit(registerFormSubmit)}
            className="space-y-4"
          >

            {/* NAME + EMAIL */}
            <div className="grid sm:grid-cols-2 gap-4">

              {/* NAME */}
              <div>
                <label className="text-sm text-gray-300 mb-2 block">
                  Name
                </label>

                <div className="relative">
                  <User
                    size={18}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
                  />

                  <input
                    type="text"
                    placeholder="Your name"
                    {...register("name", {
                      required: "Name is required",
                    })}
                    className={`w-full bg-black/40 border ${
                      errors.name
                        ? "border-red-500"
                        : "border-green-500/30"
                    } rounded-xl py-3 pl-10 pr-3 text-white outline-none focus:border-green-400 focus:ring-2 focus:ring-green-500/20 placeholder:text-gray-600`}
                  />
                </div>

                {errors.name && (
                  <p className="text-red-400 text-xs mt-1">
                    {errors.name.message}
                  </p>
                )}
              </div>

              {/* EMAIL */}
              <div>
                <label className="text-sm text-gray-300 mb-2 block">
                  Email
                </label>

                <div className="relative">
                  <Mail
                    size={18}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
                  />

                  <input
                    type="email"
                    placeholder="you@email.com"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: "Enter a valid email",
                      },
                    })}
                    className={`w-full bg-black/40 border ${
                      errors.email
                        ? "border-red-500"
                        : "border-green-500/30"
                    } rounded-xl py-3 pl-10 pr-3 text-white outline-none focus:border-green-400 focus:ring-2 focus:ring-green-500/20 placeholder:text-gray-600`}
                  />
                </div>

                {errors.email && (
                  <p className="text-red-400 text-xs mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>

            </div>

            {/* PHONE + BRANCH */}
            <div className="grid sm:grid-cols-2 gap-4">

              {/* PHONE */}
              <div>
                <label className="text-sm text-gray-300 mb-2 block">
                  Phone Number
                </label>

                <div className="relative">
                  <Phone
                    size={18}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
                  />

                  <input
                    type="tel"
                    placeholder="9876543210"
                    {...register("phone", {
                      required: "Phone number is required",
                      pattern: {
                        value: /^[6-9]\d{9}$/,
                        message: "Enter a valid 10 digit number",
                      },
                    })}
                    className={`w-full bg-black/40 border ${
                      errors.phone
                        ? "border-red-500"
                        : "border-green-500/30"
                    } rounded-xl py-3 pl-10 pr-3 text-white outline-none focus:border-green-400 focus:ring-2 focus:ring-green-500/20 placeholder:text-gray-600`}
                  />
                </div>

                {errors.phone && (
                  <p className="text-red-400 text-xs mt-1">
                    {errors.phone.message}
                  </p>
                )}
              </div>

              {/* BRANCH */}
              <div>
                <label className="text-sm text-gray-300 mb-2 block">
                  Branch
                </label>

                <div className="relative">
                  <GitBranch
                    size={18}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none"
                  />

                  <select
                    {...register("branch", {
                      required: "Please select your branch",
                    })}
                    className={`w-full bg-black/40 border ${
                      errors.branch
                        ? "border-red-500"
                        : "border-green-500/30"
                    } rounded-xl py-3 pl-10 pr-3 text-gray-300 outline-none focus:border-green-400 focus:ring-2 focus:ring-green-500/20 appearance-none`}
                  >
                    <option value="" className="bg-[#07140b]">
                      Select Branch
                    </option>

                    <option value="CE" className="bg-[#07140b]">
                      CE - Civil Engineering
                    </option>

                    <option value="EE" className="bg-[#07140b]">
                      EE - Electrical Engineering
                    </option>

                    <option value="IT" className="bg-[#07140b]">
                      IT - Information Technology
                    </option>
                  </select>
                </div>

                {errors.branch && (
                  <p className="text-red-400 text-xs mt-1">
                    {errors.branch.message}
                  </p>
                )}
              </div>

            </div>

            {/* PASSWORD */}
            <div>
              <label className="text-sm text-gray-300 mb-2 block">
                Create Password
              </label>

              <div className="relative">
                <Lock
                  size={18}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
                />

                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Create a strong password"
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
                  } rounded-xl py-3 pl-10 pr-11 text-white outline-none focus:border-green-400 focus:ring-2 focus:ring-green-500/20 placeholder:text-gray-600`}
                />

                <button
                  type="button"
                  onClick={() =>
                    setShowPassword(!showPassword)
                  }
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-green-400"
                >
                  {showPassword ? (
                    <EyeOff size={18} />
                  ) : (
                    <Eye size={18} />
                  )}
                </button>
              </div>

              {errors.password && (
                <p className="text-red-400 text-xs mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* TERMS */}
            <label className="flex items-start gap-2 text-sm text-gray-400 cursor-pointer">
              <input
                type="checkbox"
                required
                className="mt-1 accent-green-500"
              />

              <span>
                I agree to the{" "}
                <span className="text-green-400">
                  Terms & Conditions
                </span>
              </span>
            </label>

            {/* REGISTER BUTTON */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-green-400 to-lime-400 text-black font-black text-lg tracking-wide hover:shadow-[0_0_30px_rgba(74,222,128,0.4)] hover:scale-[1.01] active:scale-[0.99] transition disabled:opacity-50"
            >
              {isSubmitting
                ? "CREATING..."
                : "CREATE ACCOUNT →"}
            </button>

          </form>

          <p className="text-center text-gray-500 text-sm mt-6">
            Already have an account?{" "}
            <span 
            onClick={()=>navigate("/")}
            className="text-green-400 cursor-pointer hover:text-green-300">
              Login
            </span>
          </p>

        </div>
      </div>
    </div>
  );
};

export default Register;

