import Contacts from '../contacts/Contacts';
import Education from '../education/Education';
import Experience from '../experience/Experience';
import Footer from '../footer/Footer';
import Languages from '../languages/Languages';
import PersonalInfo from '../personal-info/PersonalInfo';
import Portrait from '../portrait/Portrait';
import Skills from '../skills/Skills';
import Summary from '../summary/Summary';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <aside className="sidebar">
          <div className="portrait">
            <Portrait />
          </div>
          <Skills />
          <Education />
          <Languages />
        </aside>
        <div className="body">
          <header>
            <PersonalInfo />
            <Contacts />
          </header>
          <main>
            <Summary />
            <Experience />
          </main>
        </div>
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
