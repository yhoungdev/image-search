import './App.css';
import Top from './components/top'
import './bootstrap.min.css'
import Photos from './components/home';
import Find from './components/search';
export default function App() {
  return (
    <div className="App">
        <Top/>
        <Photos/>
        <Find/>
    </div>
  );
}


