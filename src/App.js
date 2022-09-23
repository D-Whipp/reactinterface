import { BiArchive } from 'react-icons/bi';
import Search from './Components/Search';
import AddAppointment from './Components/AddAppointment';

function App() {
  return (
    <div className="App container mx-auto mt-3 font-thin">
      <h1 className="text-5xl">
        <BiArchive className="inline-block text-red-400 align-top" />
        I'm listening.
      </h1>
      <AddAppointment />
      <Search />
    </div>
  );
}

export default App;
