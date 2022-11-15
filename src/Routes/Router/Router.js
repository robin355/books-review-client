import { createBrowserRouter } from 'react-router-dom'
import Main from '../../Layout/Main'
import BooksAll from '../../pages/BooksAll/BooksAll'
import DynamicBook from '../../pages/DynamicBook/DynamicBook'
import Home from '../../pages/Home/Home/Home'
import Login from '../../pages/Login/Login/Login'
import Signup from '../../pages/Login/Signup/Signup'
import ReviewUser from '../../pages/ReviewUser/ReviewUser'
import PrivateRouter from '../PrivateRouter/PrivateRouter'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: ([
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/home',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <Signup></Signup>
            },
            {
                path: '/booksAll',
                element: <BooksAll></BooksAll>,
                loader: () => fetch('http://localhost:5000/booksAll')
            },
            {
                path: '/books/:id',
                element: <DynamicBook></DynamicBook>,
                loader: ({ params }) => fetch(`http://localhost:5000/books/${params.id}`)
            },
            {
                path: '/reviews',
                element: <PrivateRouter><ReviewUser></ReviewUser></PrivateRouter>
            }


        ])
    }
])