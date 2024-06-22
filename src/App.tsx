import Header from './components/Header';
import './CSS/index.css';
import Translate from './components/Translate';
import Resultado from './components/Resultado';

function App() {
  return (
    <>
      <Header />
      <main className='min-h-[100vh]'>
        <section className='py-20 justify-center flex h-[100vh] lg:flex-column md:gap-20 gap-10 lg:gap-50 sm:flex-col'>
          <div className='py-10 px-10 flex-row flex md:gap-20 gap-10 lg:gap-50 '>
            <Translate />
            <Resultado />
          </div>
        </section>
      </main>
    </>
  )
}

export default App
