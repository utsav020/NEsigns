import React from "react";
import ViewOurWork from "../../components/sections/ourwork/ViewOurWork";
import CrossScrollGallery from "../../components/sections/ourwork/CrossScrollGallery";
import Footer from "../../components/layout/Footer";

export default function OurWork() {
  return (
    <>
      <CrossScrollGallery />
      <ViewOurWork />
      <Footer/>
    </>
  );
}
