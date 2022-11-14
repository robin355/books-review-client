import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom'
const Signup = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const handleSignup = (data) => {
        console.log(data)
    }
    return (
        <div className='h-[800px] flex justify-center items-center'>
            <div>
                <h2 className='text-xl text-center'>Signup</h2>
                <form onSubmit={handleSubmit(handleSignup)}>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" {...register("name", { required: true })} className="input input-bordered w-full" />
                        {errors.name && <p className='text-red-600'>{errors.name?.message}</p>}
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" {...register("email", { required: true })} className="input input-bordered w-full" />
                        {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" {...register("password", { required: true, maxLength: { value: 6, message: 'Password Must be 6 character' } })} className="input input-bordered w-full" />
                    </div>
                    {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}
                    <input type="submit" className='btn btn-accent w-full mt-2' />
                </form>
                <h2>Alreary have an Accound?<Link className='text-secondary font-bold' to='/login'>Please Login</Link></h2>
            </div>
        </div>
    );
};

export default Signup;