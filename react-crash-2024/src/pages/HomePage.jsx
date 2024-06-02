import Hero from '../components/Hero';
import HomeCrads from '../components/HomeCards';
import JobListings from '../components/JobListings';
import ViewAllJobs from '../components/ViewAllJobs';
const HomePage = () => {
  return (
   <>
   <Hero />;
   <HomeCrads />;
   <JobListings isHome={true}/>
   <ViewAllJobs />
   </>
  );
};

export default HomePage;