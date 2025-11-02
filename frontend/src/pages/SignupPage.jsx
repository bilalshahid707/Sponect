import { FadeInWhenVisible,BasicAlert , useAuth} from "../imports";
import {useForm} from "react-hook-form"

export const SignupPage = () => {
  const  {handleSubmit,register,formState:{errors}} = useForm()

  const mutation = useAuth("signup")

  const onSubmit = (data)=>{
    mutation.mutate(data)
  }

  return (
    <>
    {/* {alertMsg2 && <BasicAlert setAlertMsg={setAlertMsg2} message={alertMsg2} severity="error"/>} */}
      <section className="section">

        <FadeInWhenVisible>
        <div className="container relative">
          <div className="absolute w-full h-1/2 top-0 left-0 rounded-4xl bg-dark -z-10"></div>
          <div className="flex flex-col gap-xl">
            <div className="">
              <h1 className="heading-secondary text-white text-center">
                Join the First Smart Sponsorship Platform in Pakistan
              </h1>
            </div>
            <div className="p-4 md:p-12 bg-white shadow-xl rounded-4xl">
              <div className="flex flex-col gap-lg w-full">
                <h3 className="heading-tertiary text-dark text-center">
                  Create Your Account
                </h3>

                <div className="self-center flex flex-col items-center justify-center cursor-pointer gap-sm">
                <p className="body-text text-dark">Already joined Sponect?</p>
                <button className="btn-primary w-max">Go to Login Page</button>
                </div>
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-md">
                  <div className="form-field">
                    <label className="input-label">Full Name</label>
                    <div className={`input-field ${errors.fullName ? 'border-2 border-red-600' : ''}`}>
                      <i className="bi bi-person-fill body-text text-dark"></i>
                      <input
                        type="text"
                        className="input text-dark"
                        placeholder="John Doe"
                        autoComplete="name"
                        {...register('fullName',{required:true})}
                        aria-invalid={errors.fullName ? 'true' : 'false'}
                      />
                    </div>
                    {errors.fullName?.type === 'required' && <p role="alert" className='text-sm text-red-600'>Full name is required</p>}
                  </div>

                  {/* Email */}
                  <div className="form-field">
                    <label className="input-label">Email Address</label>
                    <div className={`input-field ${errors.email ? 'border-2 border-red-600' : ''}`}>
                      <i className="bi bi-envelope-fill body-text text-dark"></i>
                      <input
                        type="email"
                        className="input text-dark"
                        placeholder="you@example.com"
                        autoComplete="email"
                        {...register("email",{required:true})}
                        aria-invalid={errors.email ? 'true' : 'false'}
                      />
                    </div>
                    {errors.email?.type === 'required' && <p role="alert" className='text-sm text-red-600'>Email is required</p>}
                  </div>

                  {/* Phone */}
                  <div className="form-field">
                    <label className="input-label">Phone Number</label>
                    <div className={`input-field ${errors.phone ? 'border-2 border-red-600' : ''}`}>
                      <i className="bi bi-telephone-fill body-text text-dark"></i>
                      <input
                        type="tel"
                        className="input text-dark"
                        placeholder="+1 234 567 890"
                        autoComplete="tel"
                        pattern="[0-9+\s()-]{7,}"
                        {...register("phone",{required:true})}
                        aria-invalid={errors.phone ? 'true' : 'false'}
                      />
                    </div>
                    {errors.phone?.type === 'required' && <p role="alert" className='text-sm text-red-600'>Phone number is required</p>}
                    {errors.phone?.type === 'pattern' && <p role="alert" className='text-sm text-red-600'>Enter a valid phone number</p>}
                  </div>

                  {/* Account Type */}
                  <div className="form-field">
                    <label className="input-label">Registering As</label>
                    <div className={`input-field ${errors.accountType ? 'border-2 border-red-600' : ''}`}>
                      <i className="bi bi-person-badge-fill body-text text-dark"></i>
                      <select
                        className="input text-dark bg-transparent outline-none w-full"
                        {...register("accountType",{required:true})}
                        aria-invalid={errors.accountType ? 'true' : 'false'}
                      >
                        <option value="" disabled selected>
                          Select account type
                        </option>
                        <option value="applicant">Applicant</option>
                        <option value="sponsor">Sponsor</option>
                      </select>
                    </div>
                    {errors.accountType?.type === 'required' && <p role="alert" className='text-sm text-red-600'>Please select an account type</p>}
                  </div>

                  <div className="form-field">
                    <label className="input-label">Organization Name</label>
                    <div className={`input-field ${errors.organizationName ? 'border-2 border-red-600' : ''}`}>
                      <i className="bi bi-envelope-fill body-text text-dark"></i>
                      <input
                        type="text"
                        className="input text-dark"
                        placeholder="Brew Holdings"
                        {...register("organizationName",{required:true})}
                        aria-invalid={errors.organizationName ? 'true' : 'false'}
                      />
                    </div>
                    {errors.email?.type === 'required' && <p role="alert" className='text-sm text-red-600'>Organization Name is required</p>}
                  </div>

                  <div className="form-field">
                    <label className="input-label">Your role</label>
                    <div className={`input-field ${errors.role ? 'border-2 border-red-600' : ''}`}>
                      <i className="bi bi-envelope-fill body-text text-dark"></i>
                      <input
                        type="text"
                        className="input text-dark"
                        placeholder="Sponsorships Manager"
                        {...register("role",{required:true})}
                        aria-invalid={errors.role ? 'true' : 'false'}
                      />
                    </div>
                    {errors.email?.type === 'required' && <p role="alert" className='text-sm text-red-600'>Role is required</p>}
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
                        {...register("password",{required:true,minLength:8})}
                        aria-invalid={errors.password ? 'true' : 'false'}
                      />
                    </div>
                    {errors.password?.type === 'required' && <p role="alert" className='text-sm text-red-600'>Password is required</p>}
                    {errors.password?.type === 'minLength' && <p role="alert" className='text-sm text-red-600'>Password must be at least 8 characters</p>}
                  </div>
                  <div className="form-field">
                    <div className="input-field">
                      <input
                        type="submit"
                        value="Create Account"
                        disabled={mutation.isPending}
                        className="btn-primary w-full cursor-pointer disabled:bg-primary-light disabled:cursor-not-allowed"
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
  );
};

export default SignupPage;
