import React from "react";

import Header from "../../partials/Header";
import PageIllustration from "../../partials/PageIllustration";
import Carousel from "../../partials/Carousel";
import Footer from "../../partials/Footer";
import HeroHome from "../../partials/HeroHome";
import RelatedLinks from "../../partials/RelatedLinks";
import CtaContact from "../../partials/CtaContact";
import Team from "../../partials/Team";
import Timeline from "../../partials/Timeline";
import Partners from "../../partials/Partners";
import Grants from "../../partials/Grants";

function Home() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="flex-grow">
        {/*  Page illustration */}
        <div
          className="relative max-w-6xl mx-auto h-0 pointer-events-none -z-1"
          aria-hidden="true"
        >
          <PageIllustration />
        </div>

        {/*  Page sections */}
        <HeroHome />
        <RelatedLinks />
        <CtaContact />
        <Carousel />
        <Team />
        <Timeline />
        <Partners />
        <Grants />
        {/*<Tabs />*/}
        {/*<Process />*/}
        {/*<PricingTables />*/}
        {/*<TestimonialsBlocks />*/}
        {/*<FeaturesBlocks />*/}
        {/*<Cta />*/}
      </main>

      {/*  Site footer */}
      <Footer />
    </div>
  );
}

export default Home;
