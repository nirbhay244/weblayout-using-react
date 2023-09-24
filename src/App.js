
import './App.css';
import Header from './component/Header';
import Footer from './component/Footer';
import Main from './component/Main';
import Aside from './component/Aside';
import Section from './component/Section';

function App() {
  return (
    <>
      <Header />
      <main>
        <Aside />
        <Section />
      </main>
      <Footer />
  </>
  );
}

export default App;
