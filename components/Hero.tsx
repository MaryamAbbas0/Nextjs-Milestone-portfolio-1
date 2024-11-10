import Navbar from './Navbar';

const Hero = () => {
  return (
    <div
      id="hero"
      className="min-h-screen bg-no-repeat bg-[url(/shsh.png)] bg-right lg:bg-[15%] bg-cover"
      style={{ backgroundSize: "35%", backgroundPosition: "right 100px top 100px" }}
    >
      <Navbar />
      <div className="container mx-auto grid lg:grid-cols-2 h-[calc(100vh-60px)]">
        <div className="flex items-center justify-start pl-10 text-left">
          <div data-aos="zoom-out-right" className="text-[40px] sm:text-[80px] font-bold leading-tight text-white">
            <h2 className="text-white text-[15px] sm:text-[20px] font-semibold mb-2" data-aos="zoom-out-left">
              Software Developer
            </h2>

            <p data-aos="zoom-out-left">Hello! I&apos;m</p>
            <p className="text-[#00cfff]" data-aos="zoom-out-right">
              Maryam Abbas
            </p>

            <p className="text-white text-[16px] sm:text-[18px] mt-4 max-w-md" data-aos="zoom-out-right">
              A passionate developer with a focus on creating innovative and efficient software solutions. I enjoy blending creativity and technical skills to solve real-world problems through code.
            </p>

            <a
              href="https://milestone-1-2-kappa.vercel.app"
              target="_blank"
              download="Maryam_Abbas_CV.pdf"
              className="inline-block mt-6 px-6 py-3 bg-[#00cfff] text-white text-[16px] font-medium rounded-lg hover:bg-[#00cfff] transition duration-300"
            >
              Download CV
            </a>
          </div>
        </div>
        <div className="hidden lg:block"></div>
      </div>
    </div>
  );
};

export default Hero;
