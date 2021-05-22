import ReactDOM from 'react-dom';
import Pet from './Pet.jsx';
import SearchParams from './SearchParams.jsx';

export default function App() {
  return (
    <div>
      <h1>Adopt Me!</h1>
      {/* <Pet name="Luna" animal="Dog" breed="Havanese" />
      <Pet name="Paper" animal="Bird" breed="Cockatiel" />
      <Pet name="Sudo" animal="Dog" breed="Wheaten Terrier" /> */}
      <SearchParams />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
