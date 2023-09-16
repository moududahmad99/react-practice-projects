import React from 'react';
import { RouterProvider, Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import RootLayout from './components/RootLayout/RootLayout';
import Brocolli from './components/Brocolli/Home';
import Counter from './components/Counter';
import MovieList from './components/MovieList';
import MainItemList from './components/ItemList/App';
import Calculator from './components/Calculator';
import FormExtension from './components/Form Component/Index';
import BasicChatApp from './components/Chat/Chat';
import ProductsOne from './components/E-commerce/ProductsOne';
import LoginForm from './components/LoginForm';
import QuizGame from './components/Quiz';
import TodoList from './components/TodoList';
import UserList from './components/UserList/Index';
import GitHubSearch from './components/Github User Search/Github Search';
import './App.css'

function App() {
    const reactRouter = createBrowserRouter(createRoutesFromElements(
        <Route path='/' element={<RootLayout />}>
            <Route path='/brocolli' element={<Brocolli />} />
            <Route path='/counter-up' element={<Counter />} />
            <Route path='/movie-list' element={<MovieList />} />
            <Route path='/item-list' element={<MainItemList />} />
            <Route path='/calculator' element={<Calculator />} />
            <Route path='/form-extension' element={<FormExtension />} />
            <Route path='/basic-chatapp' element={<BasicChatApp />} />
            <Route path='/simple-products-card' element={<ProductsOne />} />
            <Route path='/login-form' element={<LoginForm />} />
            <Route path='/quiz-game' element={<QuizGame />} />
            <Route path='/todo-list' element={<TodoList />} />
            <Route path='/user-list' element={<UserList />} />
            <Route path='/github-search' element={<GitHubSearch />} />
        </Route>
    ))

    return (

        <>
            <RouterProvider router={reactRouter} /> 
        </>
    );
}

export default App;