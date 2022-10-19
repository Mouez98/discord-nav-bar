import ChannelBar from './components/ChannelBar';

import MainContent from './components/MainContent';
import SideBar from './components/SideBar';


function App() {

  return (
    <div className="flex items-start min-h-auto w-full bg-gray-200 dark:bg-gray-700 pl-16">
    <SideBar />
    <ChannelBar />
    <MainContent />
    </div>
  );
}

export default App;
