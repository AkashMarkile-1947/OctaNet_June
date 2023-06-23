import React from "react";
import Hero from "./landingpage/hero";
import InviteOnly from "./landingpage/inviteonly";
import Fandom from "./landingpage/fandom";
import Hangingout from "./landingpage/hangingout";
import Chilling from "./landingpage/reliabletech";
import DownloadSection from "./landingpage/download";
import Footer from "./landingpage/footer";

function Home() {
  return (
    <>
      <Hero />
      <InviteOnly />
      <Hangingout />
      <Fandom />
      <Chilling />
      <DownloadSection />
      <Footer />
    </>
  );
}

export default Home;
