import heroMobile from "/images/image-intro-mobile.jpg";
import heroDesktop from "/images/image-intro-desktop.jpg";
import patternLeftMobile from "/images/bg-pattern-intro-left-mobile.svg";
import patternLeftDesktop from "/images/bg-pattern-intro-left-desktop.svg";
import patternRightDesktop from "/images/bg-pattern-intro-right-desktop.svg";
import patternRightMobile from "/images/bg-pattern-intro-right-mobile.svg";
import snappyProcess from "/images/icon-snappy-process.svg";
import peopleFirst from "/images/icon-people-first.svg";
import affordablePrices from "/images/icon-affordable-prices.svg";

const Main = () => {
  return (
    <main>
      <img
        className="invisible lg:visible lg:block absolute z-50 top-[60%]"
        src={patternLeftDesktop}
      />
      <section className="grid lg:grid-cols-2 lg:gap-6 bg-primary-700 lg:px-28 xl:px-44 lg:py-28 relative">
        <img
          className="absolute invisible lg:visible right-0 z-10"
          src={patternRightDesktop}
        />
        <picture className="lg:order-2 relative">
          <img
            className="lg:flex-1 w-full lg:w-fit lg:absolute"
            src={heroDesktop}
            alt="Hero Image"
          />
        </picture>
        <div className="lg:order-1 lg:flex-1 text-center lg:text-left py-24 lg:py-0 px-5 lg:px-0 text-neutral-100 relative">
          <img
            className="lg:invisible absolute z-10 left-0 top-0"
            src={patternLeftMobile}
          />
          <div className="w-36 h-[1px] bg-neutral-100 hidden lg:block mb-16"></div>
          <h2 className="text-5xl lg:text-7xl font-body mb-4">
            Humanizing your insurance.
          </h2>
          <p>
            Get your life insurance coverage easier and faster. We blend our
            expertise and technology to help you find the plan that&apos;s right
            for you. Ensure you and your loved ones are protected.
          </p>
          <button className="uppercase mt-12 border-solid border-2 border-neutral-100 py-2 px-8">
            View Plans
          </button>
        </div>
      </section>
      <section className="py-28 px-5 lg:px-28 xl:px-44 lg:mt-40 text-center lg:text-left relative">
        <img
          className="lg:invisible absolute z-50 -top-32 right-0"
          src={patternRightMobile}
        />
        <div className="w-36 h-[1px] bg-primary-700 mx-auto lg:mx-0"></div>
        <h2 className="text-5xl lg:text-7xl font-body my-12">
          We&apos;re different
        </h2>
        <div className="flex flex-col lg:flex-row lg:gap-4">
          <div className="my-10 lg:my-16">
            <img
              className="mx-auto lg:mx-0"
              src={snappyProcess}
              alt="Snappy Process Icon"
            />
            <h3 className="font-body text-3xl mt-8 mb-4">Snappy Process</h3>
            <p className="text-neutral-400">
              Our application process can be completed in minutes, not hours.
              Don&apos;t get stuck filling in tedious forms.
            </p>
          </div>
          <div className="my-10 lg:my-16">
            <img
              className="mx-auto lg:mx-0"
              src={affordablePrices}
              alt="Affordable Prices Icon"
            />
            <h3 className="font-body text-3xl mt-8 mb-4">Affordable Prices</h3>
            <p className="text-neutral-400">
              We don&apos;t want you worrying about high monthly cost. Our
              prices may be low, but we still offer the best coverage possible.
            </p>
          </div>
          <div className="my-10 lg:my-16">
            <img
              className="mx-auto lg:mx-0"
              src={peopleFirst}
              alt="People First Icon"
            />
            <h3 className="font-body text-3xl mt-8 mb-4">People First</h3>
            <p className="text-neutral-400">
              Our plans aren&apos;t full of conditions and clauses to prevent
              payouts. We make sure you&apos;re covered when you need it.
            </p>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row items-center lg:justify-between bg-primary-700 mt-32 lg:mb-14 text-neutral-100 text-center lg:text-left px-10 lg:px-20 py-16 lg:py-24 bg-no-repeat bg-contain bg-right bg-pattern-work-mobile lg:bg-pattern-work-desktop">
          <h3 className="font-body text-4xl lg:text-[3.5rem] mb-8 lg:mb-0 lg:basis-1/2">
            Find out more about how we work
          </h3>
          <button className="uppercase h-fit border-solid border-2 border-neutral-100 py-2 px-6 w-fit whitespace-nowrap">
            How we work
          </button>
        </div>
      </section>
    </main>
  );
};

export default Main;

// bg-no-repeat bg-[url('/images/bg-pattern-intro-left-mobile.svg'),_url('/images/bg-pattern-intro-right-mobile.svg')] bg-[position:left_top,_right_bottom_-30px] z-10
