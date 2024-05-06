import heroMobile from "/images/image-intro-mobile.jpg";
// import heroDesktop from "/images/image-intro-desktop.jpg";
import patternLeftMobile from "/images/bg-pattern-intro-left-mobile.svg";
import snappyProcess from "/images/icon-snappy-process.svg";
import peopleFirst from "/images/icon-people-first.svg";
import affordablePrices from "/images/icon-affordable-prices.svg";

const Main = () => {
  return (
    <main>
      <img className="w-full" src={heroMobile} alt="Hero Image" />
      <img className="absolute" src={patternLeftMobile} />
      <section>
        <div className="text-center py-24 px-5 text-neutral-100 bg-primary-700">
          <h2 className="text-5xl font-body mb-4">
            Humanizing your insurance.
          </h2>
          <p>
            Get your life insurance coverage easier and faster. We blend our
            expertise and technology to help you find the plan that&apos;s right
            for you. Ensure you and your loved ones are protected.
          </p>
          <button className="uppercase mt-12 border-solid border-2 border-neutral-100 py-2 px-6">
            View Plans
          </button>
        </div>
      </section>
      <section className="py-28 px-5 text-center">
        <div className="w-36 h-[1px] bg-primary-700 mx-auto"></div>
        <h2 className="text-5xl font-body my-12">We&apos;re different</h2>
        <div className="my-16">
          <img
            className="mx-auto"
            src={snappyProcess}
            alt="Snappy Process Icon"
          />
          <h3 className="font-body text-3xl mt-8 mb-4">Snappy Process</h3>
          <p className="text-neutral-400">
            Our application process can be completed in minutes, not hours.
            Don&apos;t get stuck filling in tedious forms.
          </p>
        </div>
        <div className="my-16">
          <img
            className="mx-auto"
            src={affordablePrices}
            alt="Affordable Prices Icon"
          />
          <h3 className="font-body text-3xl mt-8 mb-4">Affordable Prices</h3>
          <p className="text-neutral-400">
            We don&apos;t want you worrying about high monthly cost. Our prices
            may be low, but we still offer the best coverage possible.
          </p>
        </div>
        <div className="my-16">
          <img className="mx-auto" src={peopleFirst} alt="People First Icon" />
          <h3 className="font-body text-3xl mt-8 mb-4">People First</h3>
          <p className="text-neutral-400">
            Our plans aren&apos;t full of conditions and clauses to prevent
            payouts. We make sure you&apos;re covered when you need it.
          </p>
        </div>
        <div className="bg-primary-700 mt-32 text-neutral-100 text-center px-10 py-16 bg-no-repeat bg-right bg-pattern-work-mobile">
          <h3 className="font-body text-4xl mb-8">
            Find out more about how we work
          </h3>
          <button className="uppercase border-solid border-2 border-neutral-100 py-2 px-6">
            How we work
          </button>
        </div>
      </section>
    </main>
  );
};

export default Main;

// bg-no-repeat bg-[url('/images/bg-pattern-intro-left-mobile.svg'),_url('/images/bg-pattern-intro-right-mobile.svg')] bg-[position:left_top,_right_bottom_-30px] z-10
