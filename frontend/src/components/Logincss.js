import React from 'react';
import { FaGoogle, FaApple, FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Logincss = () => {
  return (
    <div className="bg-gray-100 flex h-screen">
      {/* Left Image Section */}
      <div
        className="w-1/2 bg-cover"
        style={{
          backgroundImage: "url('https://storage.googleapis.com/a1aa/image/uvh0ZUJlSNKqDND2t8xvL8wIfjq86TXDztU3NrIuhvanKb1JA.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      ></div>

      {/* Right Content Section */}
      <div className="w-1/2 flex flex-col justify-center items-center bg-white">
        <div className="w-3/4">
          <h1 className="text-3xl font-bold text-blue-600 mb-6">UNIQUEST</h1>
          <h2 className="text-2xl font-semibold mb-6">Create an account</h2>

          {/* OAuth Buttons */}
          <button className="w-full flex items-center justify-center border border-gray-300 rounded-lg py-2 mb-4">
            <FaGoogle className="text-xl mr-2" />
            Continue with Google
          </button>
          <button className="w-full flex items-center justify-center border border-gray-300 rounded-lg py-2 mb-4">
            <FaApple className="text-xl mr-2" />
            Continue with Apple
          </button>
          <button className="w-full flex items-center justify-center border border-gray-300 rounded-lg py-2 mb-4">
            <FaEnvelope className="text-xl mr-2" />
            Continue with email
          </button>

          {/* Terms Checkbox */}
          <div className="flex items-center mb-4">
            <input className="mr-2" id="news" type="checkbox" />
            <label className="text-sm" htmlFor="news">
              I do not wish to receive news and promotions from Uniquest Company by email.
            </label>
          </div>

          {/* Terms and Privacy Notice */}
          <p className="text-xs text-gray-500 mb-6">
            By continuing, you agree to Uniquest Company's Terms of Use and Privacy Policy.
          </p>

          {/* Log In Link */}
          <p className="text-sm">
            Already have an account?{' '}
            <Link className="text-blue-600" to="/login">
              Log in
            </Link>
          </p>
        </div>
      </div>

      {/* Cookie Notice Bar */}
      <div className="fixed bottom-0 w-full bg-gray-800 text-white py-2 px-4 flex justify-between items-center">
        <p className="text-xs">
          By clicking “Accept All Cookies,” you agree to the storing of cookies on your device to enhance site navigation, analyze site usage, and assist in our marketing efforts.
        </p>
        <div>
          <Link className="text-xs text-blue-400 mr-4" to="/cookies-settings">
            Cookies Settings
          </Link>
          <button className="bg-blue-600 text-white px-4 py-2 rounded">
            Accept All Cookies
          </button>
        </div>
      </div>
    </div>
  );
};

export default Logincss;
