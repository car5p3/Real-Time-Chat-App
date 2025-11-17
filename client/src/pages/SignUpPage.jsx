import React from 'react'
import useAuthStore from '../store/useAuthStore';

const SignUpPage = () => {
  const [showPassword, setShowPassword] = React.useState(false);
  
  const [formData, setFormData] = React.useState({
    fullname: '',
    email: '',
    password: ''
  });

  const [signup, isSigningUp] = useAuthStore();
  
  const validateForm = () => {
    // Add form validation logic here
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
  };

  return (
    <div className='min-h-screen grid lg:grid-cols-2'>
      {/* Left Side of the forum */}
      <div className='flex flex-col justify-center items-center p-6 sm:p-12'>
        <div className='w-full max-w-md space-y-8'>
          {/* Logo */}
          <div className="text-center mb-8">
            <div className="flex flex-col items-center gap-2 group:">
              <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUpPage