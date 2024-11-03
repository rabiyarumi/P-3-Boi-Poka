import bannerImg from '../../assets/books.jpg'


const Banner = () => {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row gap-10 md:gap-16">
        <img
          src={bannerImg}
          className=" rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-5xl font-bold pb-6"> Books to freshen up your bookshelf</h1>
          
          <button className="btn btn-primary bg-[#23BE0A] border-none">View The List</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
