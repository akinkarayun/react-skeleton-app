import { Article } from './components/Article';
import { User } from './components/User';
import css from './index.module.css'
function App() {
  return (
    <div>
      <header>
        <h1>React Skeleton Example</h1>
      </header>
      <div className={css.content}>
        <Article />
        <User />
      </div>

    </div >
  );
}

export default App;
