import React, { useContext, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router";
import { AuthContext } from "../context/AuthContext";
import Swal from "sweetalert2";

const LoginPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { LogInUser, googleLogin, resetPassword } = useContext(AuthContext);

  const [emailForReset, setEmailForReset] = useState("");
  const [showResetModal, setShowResetModal] = useState(false);
  const [resetMessage, setResetMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const from = location.state?.from || "/";

  const handleLogin = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
      await LogInUser(email, password);
      Swal.fire({
        icon: "success",
        title: "Login Successful!",
        text: "Welcome back!",
        timer: 2000,
        showConfirmButton: false,
      });
      navigate(from, { replace: true }); // Redirect after login
    } catch (error) {
      console.error("Login failed: ", error);
      Swal.fire({
        icon: "error",
        title: "Login Failed",
        text: error.message || "Invalid email or password.",
      });
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await googleLogin();
      Swal.fire({
        icon: "success",
        title: "Google Login Successful!",
        text: "Welcome back!",
        timer: 2000,
        showConfirmButton: false,
      });
      navigate(from, { replace: true }); // Redirect after Google login
    } catch (error) {
      console.error("Google login failed: ", error);
      Swal.fire({
        icon: "error",
        title: "Google Login Failed",
        text: error.message || "Something went wrong.",
      });
    }
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();
    try {
      await resetPassword(emailForReset);
      setResetMessage("Password reset email sent. Please check your inbox.");
      setTimeout(() => {
        setShowResetModal(false);
        setResetMessage("");
      }, 3000);
    } catch (error) {
      setResetMessage("Failed to send reset email. Please try again.");
      console.error("Password reset failed: ", error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center ">
      <div className=" p-8 rounded-lg shadow-md w-full max-w-md border border-white">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold mb-2">Welcome back!</h1>
          <p className="">
            You can sign in to access your gardening account.
          </p>
        </div>

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              className="input input-bordered w-full"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="relative">
            <label className="block text-sm font-medium  mb-1">
              Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              className="input input-bordered w-full pr-10"
              placeholder="Enter your password"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              className="absolute inset-y-0 right-2 top-8 text-gray-600"
              tabIndex={-1}
            >
              {showPassword ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M17.94 17.94A10 10 0 0112 20c-5.52 0-10-4.48-10-10a9.93 9.93 0 013.06-7.07"></path>
                  <line x1="1" y1="1" x2="23" y2="23"></line>
                  <path d="M9.53 9.53a3.5 3.5 0 004.94 4.94"></path>
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>
              )}
            </button>
          </div>

          <div className="pt-2">
            <button type="submit" className="btn btn-primary w-full">
              Sign In
            </button>
          </div>
        </form>

        <div className="divider">OR</div>

        <div className="flex justify-center mt-4">
          <button
            onClick={handleGoogleLogin}
            className="btn btn-outline w-full "
          >
            <svg
              className="w-5 h-5 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 488 512"
            >
              <path
                fill="currentColor"
                d="M488 261.8C488 403.3 391.1 504 248 504
                110.8 504 0 393.2 0 256S110.8 8 248 8c66.8
                0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6
                94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7
                156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3
                12.7 3.9 24.9 3.9 41.4z"
              />
            </svg>
            Continue with Google
          </button>
        </div>

        <div className="text-center mt-4 text-sm">
          <p className="">
            Don&apos;t have an account?{" "}
            <Link to="/register" className="text-primary hover:underline">
              Register here
            </Link>
          </p>
          <button
            onClick={() => setShowResetModal(true)}
            className="link link-hover text-sm mt-2 inline-block"
          >
            Forgot password?
          </button>
        </div>

        {/* Reset Password Modal */}
        {showResetModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
              <h3 className="text-lg font-semibold mb-4">Reset Password</h3>
              <form onSubmit={handleResetPassword}>
                <div className="mb-4">
                  <label className="block text-sm font-medium mb-1">Email</label>
                  <input
                    type="email"
                    value={emailForReset}
                    onChange={(e) => setEmailForReset(e.target.value)}
                    className="input input-bordered w-full"
                    placeholder="Enter your email"
                    required
                  />
                </div>
                {resetMessage && (
                  <p
                    className={`mb-4 text-sm ${
                      resetMessage.includes("Failed")
                        ? "text-error"
                        : "text-success"
                    }`}
                  >
                    {resetMessage}
                  </p>
                )}
                <div className="flex justify-end space-x-2">
                  <button
                    type="button"
                    onClick={() => setShowResetModal(false)}
                    className="btn btn-ghost"
                  >
                    Cancel
                  </button>
                  <button type="submit" className="btn btn-primary">
                    Send Reset Link
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LoginPage;
