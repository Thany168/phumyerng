import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [isForgot, setIsForgot] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isLogin) {
      const success = login(email, password);
      if (success) {
        alert("Login successful!");
        navigate("/"); // redirect home
      } else {
        alert("Invalid email or password. Try demo@phumyerng.com / 123456");
      }
    } else {
      alert("Registered successfully (demo). You can log in now.");
      setIsLogin(true);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="bg-white shadow-lg rounded-xl p-8 w-11/12 max-w-md transition-all duration-500">
        <h2 className="text-2xl font-bold text-center text-green-600 mb-6">
          {isForgot
            ? "Reset Your Password"
            : isLogin
            ? "Welcome Back"
            : "Create Your Account"}
        </h2>

        {isForgot ? (
          <form className="space-y-5">
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Email or Phone Number
              </label>
              <input
                type="text"
                placeholder="Enter your email or phone"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-green-500 hover:bg-green-600 text-white font-medium py-2 rounded-md transition-all"
            >
              Send OTP
            </button>

            <p className="text-center text-gray-600 mt-4">
              Remember your password?{" "}
              <span
                onClick={() => {
                  setIsForgot(false);
                  setIsLogin(true);
                }}
                className="text-green-500 font-medium hover:underline cursor-pointer"
              >
                Back to Login
              </span>
            </p>
          </form>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            {!isLogin && (
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your full name"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
                  required
                />
              </div>
            )}

            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="relative">
              <label className="block text-gray-700 font-medium mb-2">
                Password
              </label>
              <input
                type={showPassword ? "text" : "password"}
                placeholder={
                  isLogin ? "Enter your password" : "Create a password"
                }
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <span
                className="absolute right-3 top-10 cursor-pointer text-gray-500"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>

            {isLogin && (
              <div className="text-right">
                <span
                  onClick={() => setIsForgot(true)}
                  className="text-green-500 hover:underline text-sm cursor-pointer"
                >
                  Forgot Password?
                </span>
              </div>
            )}

            <button
              type="submit"
              className="w-full bg-green-500 hover:bg-green-600 text-white font-medium py-2 rounded-md transition-all"
            >
              {isLogin ? "Log In" : "Register"}
            </button>

            <p className="text-center text-gray-600 mt-4">
              {isLogin ? (
                <>
                  Don’t have an account?{" "}
                  <span
                    onClick={() => setIsLogin(false)}
                    className="text-green-500 font-medium hover:underline cursor-pointer"
                  >
                    Register
                  </span>
                </>
              ) : (
                <>
                  Already have an account?{" "}
                  <span
                    onClick={() => setIsLogin(true)}
                    className="text-green-500 font-medium hover:underline cursor-pointer"
                  >
                    Log in
                  </span>
                </>
              )}
            </p>
          </form>
        )}
      </div>
    </div>
  );
};

export default Auth;
