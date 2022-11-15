import { React, useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const { SignIn } = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/'
    const handleLogin = (data) => {
        console.log(data)
        SignIn(data.email, data.password)
            .then(result => {
                const user = result.user
                toast.success('Login Successfully')
                navigate(from, { replace: true })
                console.log(user)
            })
            .catch(error => {
                toast.warning('Login Failed')
                console.log(error)
            })
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
                    <input type="submit" className='btn btn-accent w-full mt-2' value='Login' />
                </form>
                <h2>New to Books Lover?<Link className='text-secondary font-bold' to='/signup'>Create Account</Link></h2>
                <div className="divider">OR</div>
                <button className='btn btn-outline'>CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default Login;