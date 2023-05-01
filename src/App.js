import './App.css';
// eslint-disable-next-line
import Counter from './components/Counter/index';
// eslint-disable-next-line
import LoginForm from './components/LoginForm';
import TodoList from './components/TodoList';

function App() {
    return (
        <div className="App">
            <TodoList />
        </div>
    );
}

export default App;
