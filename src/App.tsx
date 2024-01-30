import Header from './components/Header';
import './CSS/index.css';
import Translate from './components/Translate';

function App() {

  return (
    <>
        <Header/>
        <main className='sm:py-28 sm:px-20 px-9 py-10 min-h-[100vh]'>
            <section className='py-10 flex flex-col md:flex-row md:gap-20 gap-10'>
                <Translate/>
                <Translate/>
            </section>
        </main>
    </>
  )
}

export default App
