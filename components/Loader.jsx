import Image from 'next/image';

const Loader = () => (
  <main
    className="grid place-content-center w-screen h-screen relative bg-darkBackground z-10 overflow-none"
    id="loader"
  >
    <Image
      src="/images/GradientLoader.gif"
      width={200}
      height={200}
      alt="Loading icon as site loads"
      priority="true"
      className="animate-fadeInOut"
    />
  </main>
);

export default Loader;
