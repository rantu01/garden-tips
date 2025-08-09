import React from "react";
import { Fade, Slide, Zoom } from "react-awesome-reveal";
import BannerSlider from "../components/Banner";
import ActiveGardeners from "../components/ActiveGardeners";
import TopTrendingTips from "../components/TopTrendingTips";
import GardeningToolsEssentials from "../components/GardeningToolsEssentials";
import GardeningQuickTips from "../components/GardeningQuickTips";
import { Helmet } from "react-helmet";
import CategoriesSection from "../components/CategoriesSection";

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Helmet>
        <title>Home | GardenTips</title>
      </Helmet>

      {/* Page Content */}
      <main className="flex-grow space-y-20">
        {/* Banner - soft fade in */}
        <Fade triggerOnce duration={1000}>
          <BannerSlider />
        </Fade>

        {/* Categories - smooth upward slide */}
        <Slide direction="up" triggerOnce duration={800}>
          <CategoriesSection />
        </Slide>

        {/* Active Gardeners - smooth upward slide */}
        <Slide direction="up" triggerOnce duration={900}>
          <ActiveGardeners />
        </Slide>

        {/* Top Trending Tips - gentle fade cascade */}
        <Fade triggerOnce cascade damping={0.15} duration={1000}>
          <TopTrendingTips />
        </Fade>

        {/* Gardening Tools Essentials - soft zoom */}
        <Zoom triggerOnce duration={900}>
          <GardeningToolsEssentials />
        </Zoom>

        {/* Quick Tips - slide from left */}
        <Slide direction="left" triggerOnce duration={800}>
          <GardeningQuickTips />
        </Slide>
      </main>
    </div>
  );
};

export default MainLayout;
