import React from 'react'
import { FadeInWhenVisible } from '../imports'
import {useForm} from "react-hook-form"

export const LoginPage = () => {
  const  {handleSubmit,register, formState:{errors}} = useForm()

  const onSubmit = (data)=>{
    console.log(data)
  }

  return (
    <>
      <section className="section">

        <FadeInWhenVisible>
        <div className="container relative">
          <div className="absolute w-full h-1/2 top-0 left-0 rounded-4xl bg-dark -z-10"></div>
          <div className="flex flex-col gap-xl">
            <div className="">
              <h1 className="heading-secondary text-white text-center">
                Welcome Back!
              </h1>
            </div>
            <div className="p-4 md:p-12 bg-white shadow-xl rounded-4xl">
              <div className="flex flex-col gap-lg w-full">
                <h3 className="heading-tertiary text-dark text-center">
                  Log In
                </h3>

                <div className="self-center flex flex-col items-center justify-center cursor-pointer gap-sm">
                <p className="body-text text-dark">Not a member yet?</p>
                <button className="btn-primary w-max">Create Your Account</button>
                </div>
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-md">

                  {/* Email */}
                  <div className="form-field">
                    <label className="input-label">Email</label>
                    <div className={`input-field ${errors.email ? 'border-2 border-red-600' : ''}`}>
                      <i className="bi bi-envelope-fill body-text text-dark"></i>
                      <input
                        type="email"
                        className="input text-dark"
                        placeholder="you@domain.com"
                        autoComplete="email"
                        {...register('email', {
                          required: true,
                        })}
                        aria-invalid={errors.email ? 'true' : 'false'}
                      />
                    </div>
                    {errors.email && <p role="alert" className="text-sm text-red-600">Email is required</p>}
                  </div>

                  {/* Password */}
                  <div className="form-field">
                    <label className="input-label">Password</label>
                    <div className={`input-field ${errors.password ? 'border-2 border-red-600' : ''}`}>
                      <i className="bi bi-lock-fill body-text text-dark"></i>
                      <input
                        type="password"
                        className="input text-dark"
                        placeholder="••••••••"
                        autoComplete="new-password"
                        {...register('password', { required:true , minLength: 8 })}
                        aria-invalid={errors.password ? 'true' : 'false'}
                      />
                    </div>
                    {errors.password && <p role="alert" className="text-sm text-red-600">Password is required</p>}
                  </div>

                <p className='text-sm text-dark'>Forgot Password?</p>


                  <div className="form-field">
                    <div className="input-field">
                      <input
                        type="submit"
                        value="Log In"
                        className="btn-primary w-full cursor-pointer"
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        </FadeInWhenVisible>
      </section>
    </>
  )
}

export default LoginPage
