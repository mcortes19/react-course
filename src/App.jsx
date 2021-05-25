import ReactDOM from 'react-dom';
import SearchParams from './SearchParams.jsx';

export default function App() {
  return (
    <div>
      <h1>Adopt Me!</h1>
      <SearchParams />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
