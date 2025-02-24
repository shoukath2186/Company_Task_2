import React, { useState } from 'react';
import { Mail, Lock, AlertCircle } from 'lucide-react';
import {LoginHandil} from '../../API_handling/apis'

interface LoginProps {
  
  setValid: (value: boolean) => void;
}

interface FormErrors {
  email?: string;
  password?: string;
}

const Login: React.FC<LoginProps> = ({ setValid }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});

  const validateField = (name: string, value: string) => {
    let error = '';

    if (name === 'email') {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!value) {
        error = 'Email is required';
      } else if (!emailRegex.test(value)) {
        error = 'Invalid email format';
      }
    }

    if (name === 'password') {
      if (!value) {
        error = 'Password is required';
      } else if (value.length < 6) {
        error = 'Password must be at least 6 characters';
      }
    }

    setErrors(prev => ({ ...prev, [name]: error }));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Validate the field on change
    validateField(name, value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const isValid = Object.values(errors).every(err => !err) &&
                    formData.email !== '' && formData.password !== '';

    if (isValid) {
      console.log('Form submitted:', formData);
       
      handileLogin()
       
    } else {
      validateField('email', formData.email);
      validateField('password', formData.password);
    }
  };

  async function handileLogin(){
    try {
        let res = await LoginHandil(formData.email, formData.password);
        console.log(res);
        
        setValid(true)
    } catch (error) {
        console.log(error);
        
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-black p-4">
      <div className="w-full max-w-md bg-gray-900 shadow-lg p-8">
        <h2 className="text-3xl font-bold text-white mb-6 text-center">LOGIN</h2>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-gray-800 text-white pl-12 pr-4 py-3 border border-gray-700 focus:border-blue-500 focus:outline-none"
                placeholder="Email address"
              />
            </div>
            {errors.email && (
              <div className="flex items-center mt-2 text-red-400 text-sm">
                <AlertCircle size={16} className="mr-1" />
                {errors.email}
              </div>
            )}
          </div>

          <div>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full bg-gray-800 text-white pl-12 pr-4 py-3 border border-gray-700 focus:border-blue-500 focus:outline-none"
                placeholder="Password"
              />
            </div>
            {errors.password && (
              <div className="flex items-center mt-2 text-red-400 text-sm">
                <AlertCircle size={16} className="mr-1" />
                {errors.password}
              </div>
            )}
          </div>

          <div className="flex items-center justify-between">
            <label className="flex items-center">
              <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-500 bg-gray-800 border-gray-700 rounded" />
              <span className="ml-2 text-sm text-gray-300">Remember me</span>
            </label>
            {/* <a href="#" className="text-sm text-blue-500 hover:text-blue-400">Forgot password?</a> */}
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 font-medium hover:bg-blue-700 transition-colors duration-300"
          >
            Sign in
          </button>
        </form>

        {/* <p className="mt-6 text-center text-gray-400 text-sm">
          Don't have an account?{' '}
          <a href="#" className="text-blue-500 hover:text-blue-400">
            Sign up
          </a>
        </p> */}
      </div>
    </div>
  );
};

export default Login;
