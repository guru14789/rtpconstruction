import Navigation from './components/Navigation';
import PortalHero from './components/PortalHero';
import StatementFold from './components/StatementFold';
import Releases from './components/Releases';
import Roster from './components/Roster';
import Dates from './components/Dates';
import Close from './components/Close';

function App() {
  return (
    <>
      <Navigation />
      <main>
        <PortalHero />
        <StatementFold />
        <Releases />
        <Roster />
        <Dates />
        <Close />
      </main>
    </>
  );
}

export default App;