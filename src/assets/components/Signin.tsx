import { useState } from 'react';

import { useNavigate, } from 'react-router-dom';

export default function Signin(){
  const navigate = useNavigate();
  
  const [isOpen, setIsOpen] = useState(false);
  const handleNavigation = (url: string) => {
         navigate(url);
        //  setIsOpen(false);
     };
  const [passwordVisible, setPasswordVisible] = useState(false);


  const togglePasswordVisibility = () => {
    setPasswordVisible((prev) => !prev);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-background">
      <div className="bg-card rounded-lg shadow-lg p-8 max-w-sm w-full">
        <h2 className="text-2xl font-bold text-foreground mb-6 text-center">Sign In</h2>
        <form>
          {/* Email Field */}
          <div className="mb-4">
            <label className="block text-muted-black mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-2 border border-border rounded-lg bg-input text-black focus:outline-none focus:ring focus:ring-ring"
              placeholder="sarah.johnson@example.com"
              required
            />
          </div>

          {/* Password Field */}
          <div className="mb-4">
            <label className="block text-muted-black mb-2" htmlFor="password">
              Password
            </label>
            <div className="relative">
              <input
                type={passwordVisible ? 'text' : 'password'}
                id="password"
                className="w-full p-2 border border-border rounded-lg bg-input text-black focus:outline-none focus:ring focus:ring-ring"
                placeholder=""
                required
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute right-2 top-2 text-muted-black"
                aria-label="Toggle password visibility"
              >
                {passwordVisible ? '👁' : '👁'}
              </button>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white p-2 rounded-lg hover:opacity-80 focus:outline-none focus:ring focus:ring-purple-500"
          >
            SIGN IN
          </button>
        </form>

        {/* Sign Up Link */}
        <div className="text-center mt-4">
          <span className="text-muted-black">Don't have an account? </span>
          <button  onClick={() => handleNavigation('/Signup')}
          className="text-primary"
          >Sign up </button>
          
        </div>
      </div>
    </div>
  );
}