import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom'
const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const handleLogin = (data) => {
        console.log(data)
    }
    return (
        <div className='h-[800px] flex justify-center items-center'>
            <div>
                <h2 className='text-xl text-center'>Login</h2>
                <form onSubmit={handleSubmit(handleLogin)}>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" {...register("email", { required: true })} className="input input-bordered w-full" />
                        {errors.email && <p className='text-red-600'>{errors.mail?.message}</p>}
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" {...register("password", { required: true })} className="input input-bordered w-full" />
                    </div>
                    <h1>Forget Password?</h1>
                    {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}
                    <input type="submit" className='btn btn-accent w-full mt-2' />
                </form>
                <h2>New to Books Lover?<Link className='text-secondary font-bold' to='/signup'>Create Account</Link></h2>
                <div className="divider">OR</div>
                <button className='btn btn-outline'>CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default Login;