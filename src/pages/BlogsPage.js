import React from "react";
import { BootstrapCarousel } from "../components/Intro";

import Footer from "../components/Footer";
import FAQs from "../components/FAQs";
import FooterDemo from "../components/FooterDemo";
import Blogs from "../components/Blogs";

const BlogsPage = () => {
  return (
    <div>
      <BootstrapCarousel />
      <Blogs numberOfBlogs={7} />

      <FAQs />
      <FooterDemo />
      <Footer />
    </div>
  );
};

export default BlogsPage;
