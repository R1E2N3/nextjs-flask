import Link from 'next/link'

const Home = () => (
  <section className='w-full flex-center flex-col'>
    <h1 className='head_text text-center'>
      Autinosis.
      <br className='max-md:hidden' />
      <span className='inline-block orange_gradient text-center'> Triagem com IA</span>
    </h1>
    <p className='desc text-center'>
      Revolucionando a triagem para autismo.
    </p>

    <Link href='/test' className="ui_btn">
      Encontre as melhores opções para você ou para a sua criança.
    </Link>
  </section>
);

export default Home;
