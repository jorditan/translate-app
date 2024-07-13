import Header from './components/Header';
import './CSS/index.css';
import Translate from './components/Translate';
import Resultado from './components/Resultado';

function App() {
  return (
    <>
      <Header />
      <main className='md:h-[80vh] h-[90vh] px-5 lg:px-10 items-top py-5 justify-center lg:flex-row md:gap-20 lg:gap-50 sm:flex-col gap-10 lg:gap-50 flex flex-col'>
            <Translate />
            <Resultado />
      </main>
    </>
  )
}

export default App
