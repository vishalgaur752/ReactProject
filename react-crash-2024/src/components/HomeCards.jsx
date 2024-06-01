import Card from './Card';
const HomeCrads = () => {
  return (
    <section className='py-4'>
        <div className='container-xl lg:cotainer m-auto'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg'>
                <Card>
                <div className='bg-gray-100 p-5 rounded-lg shadow-md'>
                    <h2 className='text-2xl font-bold'>
                        For Developers
                    </h2>
                    <p className='mt-2 mb-4'>
                        Browse our React jobs and start your career today
                    </p>
                    <a href='./jobs.html' className='inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700'>
                        Browse Jobs
                    </a>
                </div>
                </Card>
                <Card bg = 'bg-indigo-100'>
                <div className='bg-indigo-100 p-6 rounded-lg shadow-md'>
                    <h2 className='text-2xl font-bold'>
                        For Employers
                    </h2>
                    <p className='mt-2 mb-4'>
                        List your job to find the perfect developrs for the role
                    </p>
                    <a href='./jobs.html' className='inline-block bg-indigo-600 text-white rounded-lg px-4 py-2 hover:bg-indigo-800'>
                        Add Jobs
                    </a>
                </div>
                </Card>
            </div>
        </div>
    </section>
  )
}

export default HomeCrads