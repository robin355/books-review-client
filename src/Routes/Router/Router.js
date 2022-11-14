import { createBrowserRouter } from 'react-router-dom'
import Main from '../../Layout/Main'
import BooksHome from '../../pages/Home/Books/BooksHome/BooksHome'
import Home from '../../pages/Home/Home/Home'
import Login from '../../pages/Login/Login/Login'
import Signup from '../../pages/Login/Signup/Signup'

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
                path: '/books',
                element: <BooksHome></BooksHome>
            }

        ])
    }
])