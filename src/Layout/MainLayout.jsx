import React from "react";
import { Fade, Slide, Zoom } from "react-awesome-reveal";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BannerSlider from "../components/Banner";
import ActiveGardeners from "../components/ActiveGardeners";
import TopTrendingTips from "../components/TopTrendingTips";
import GardeningToolsEssentials from "../components/GardeningToolsEssentials";
import GardeningQuickTips from "../components/GardeningQuickTips";
import { Helmet } from "react-helmet";
import CategoriesSection from "../components/CategoriesSection";
import CategoryTips from "../components/CategoryTips";

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Helmet>
        <title>Home | GardenTips</title>
      </Helmet>

      {/* Page Content */}
      <main className="flex-grow space-y-16">
        <Fade triggerOnce>
          <BannerSlider />
        </Fade>
        <Fade triggerOnce>
          <CategoriesSection></CategoriesSection>
        </Fade>
      
        <Slide direction="up" triggerOnce>
          <ActiveGardeners />
        </Slide>

        <Fade direction="up" cascade damping={0.1} triggerOnce>
          <TopTrendingTips />
        </Fade>

        <Zoom triggerOnce>
          <GardeningToolsEssentials />
        </Zoom>

        <Slide direction="left" triggerOnce>
          <GardeningQuickTips />
        </Slide>
      </main>
    </div>
  );
};

export default MainLayout;
