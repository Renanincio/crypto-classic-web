import './styles/global.css';
import { Header } from './Components/Header'
import { Start } from './Sections/Start'
import { Service } from './Sections/Service';
import { Roadmap } from './Sections/Roadmap';
import { Download } from './Sections/Download';
import { Contact } from './Sections/Contact';
import { Footer } from './Components/Footer';

function App() {

  return (
    <>
      <Header />
      <Start  />
      <Service />
      <Roadmap />
      <Download />
      <Contact />
      <Footer />
    </>
  )
}

export default App
