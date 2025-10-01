import Content from "@/components/layout/content";

const Home = () => {
  return (
    <div>
      <main className="relative z-20">
        <h1 className="text-2xl mb-4">
          In the beginning was the Word, and the Word was with God, and the Word
          was God...
        </h1>
        {/* <p className="text-lg leading-relaxed">
          
        </p> */}
        {/* Your other content */}
      </main>

      <div>
        <div
          aria-hidden="true"
          className="pointer-events-none absolute transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                "polygon(24.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-1/2 aspect-square bg-gradient-to-tr from-sky-200 to-sky-300 opacity-20 sm:left-[calc(50% - 36rem)] sm:w-[72.1875rem]"
          />
        </div>
        <div
          aria-hidden="true"
          className="pointer-events-none absolute transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                "polygon(24.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative aspect-square top-1/2 rotate-[180deg] bg-gradient-to-tr from-sky-200 to-sky-300 opacity-20 sm:left-[calc(50% - 36rem)] sm:w-[72.1875rem]"
          />
        </div>
      </div>

      <Content />
    </div>
  );
};

export default Home;
