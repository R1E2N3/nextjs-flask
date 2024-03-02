import Link from 'next/link'

const Home = () => (
  <section className='w-full flex-center flex-col'>
    <h1 className='head_text text-center'>
      Autinosis.
      <br className='max-md:hidden' />
      <span className='inline-block orange_gradient text-center'> AI-powered screening</span>
    </h1>
    <p className='desc text-center'>
      Revolutionizing autism screening for all age groups
    </p>

    <Link href='/test' className="ui_btn">
      Find the best options for you or your child.
    </Link>
  </section>
);

export default Home;
