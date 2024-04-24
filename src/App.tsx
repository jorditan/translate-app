import Header from './components/Header';
import './CSS/index.css';
import Translate from './components/Translate';
import Resultado from './components/Resultado';

function App() {
  return (
    <>
      <Header />
      <main className='sm:py-28 sm:px-20 px-9 py-20 min-h-[100vh]'>
        <section className='py-10 flex flex-col lg:flex-row md:gap-20 gap-10 lg:gap-50 sm:flex-col'>
          <Translate />
          <Resultado />
        </section>
      </main>
    </>
  )
}

export default App
