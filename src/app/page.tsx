"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import FeatureCardTwentyNine from '@/components/sections/feature/featureCardTwentyNine/FeatureCardTwentyNine';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import HeroLogoBillboard from '@/components/sections/hero/HeroLogoBillboard';
import MetricSplitMediaAbout from '@/components/sections/about/MetricSplitMediaAbout';
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import TestimonialCardTwelve from '@/components/sections/testimonial/TestimonialCardTwelve';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="icon-arrow"
        defaultTextAnimation="reveal-blur"
        borderRadius="pill"
        contentWidth="small"
        sizing="medium"
        background="blurBottom"
        cardStyle="gradient-radial"
        primaryButtonStyle="gradient"
        secondaryButtonStyle="glass"
        headingFontWeight="semibold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleFullscreen
      navItems={[
        {
          name: "Home",
          id: "hero",
        },
        {
          name: "About",
          id: "about",
        },
        {
          name: "Products",
          id: "products",
        },
        {
          name: "Contact",
          id: "contact",
        },
      ]}
      brandName="Mland Hardware"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroLogoBillboard
      background={{
        variant: "animated-grid",
      }}
      logoText="Mland Hardware"
      description="Your trusted source for professional-grade hardware, construction tools, and expert building supplies since 1995. Built for projects that matter."
      buttons={[
        {
          text: "View Products",
          href: "#products",
        },
        {
          text: "Contact Us",
          href: "#contact",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/elevated-view-electric-drill-plastic-case-with-hardware-items_23-2147865422.jpg"
      imageAlt="hardware store tools workshop"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="about" data-section="about">
      <MetricSplitMediaAbout
      useInvertedBackground={true}
      title="Built on Reliability"
      description="At Mland Hardware, we combine decades of industry experience with a commitment to quality. Our inventory spans from residential essentials to professional construction requirements."
      metrics={[
        {
          value: "25+",
          title: "Years Experience",
        },
        {
          value: "10k+",
          title: "Products Stocked",
        },
        {
          value: "5k+",
          title: "Happy Builders",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/top-view-different-types-tools_23-2148428274.jpg"
      imageAlt="hardware experts consultation"
      mediaAnimation="slide-up"
      metricsAnimation="slide-up"
    />
  </div>

  <div id="products" data-section="products">
      <ProductCardTwo
      animationType="slide-up"
      textboxLayout="split"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={false}
      products={[
        {
          id: "1",
          brand: "ProBuild",
          name: "Hammer Pro",
          price: "$29.99",
          rating: 5,
          reviewCount: "120",
          imageSrc: "http://img.b2bpic.net/free-photo/top-view-arrangement-with-tools_23-2148932611.jpg",
          imageAlt: "hammer tool icon isolated",
        },
        {
          id: "2",
          brand: "TechTool",
          name: "Driver Plus",
          price: "$19.99",
          rating: 4,
          reviewCount: "85",
          imageSrc: "http://img.b2bpic.net/free-photo/wrench-hammer_1048-2479.jpg",
          imageAlt: "screwdriver tool isolated",
        },
        {
          id: "3",
          brand: "SteelFix",
          name: "Grip Pliers",
          price: "$24.50",
          rating: 5,
          reviewCount: "92",
          imageSrc: "http://img.b2bpic.net/free-photo/composition-artisan-job-crafting-elements_23-2148742309.jpg",
          imageAlt: "pliers tool professional",
        },
        {
          id: "4",
          brand: "PowerDrill",
          name: "Apex Drill",
          price: "$89.99",
          rating: 5,
          reviewCount: "210",
          imageSrc: "http://img.b2bpic.net/free-photo/electric-drill-closeup-repair-shop_169016-24440.jpg",
          imageAlt: "drill bit set",
        },
        {
          id: "5",
          brand: "MeasureFit",
          name: "Laser Level",
          price: "$45.00",
          rating: 4,
          reviewCount: "54",
          imageSrc: "http://img.b2bpic.net/free-photo/anxious-young-male-construction-worker-wearing-safety-helmet-uniform-looking-camera-showing-spirit-level-camera-isolated-white-background_141793-132386.jpg",
          imageAlt: "level tool professional",
        },
        {
          id: "6",
          brand: "StrongArm",
          name: "Steel Wrench",
          price: "$32.00",
          rating: 5,
          reviewCount: "78",
          imageSrc: "http://img.b2bpic.net/free-photo/closeup-shot-metal-wrenches-wooden-surface_181624-19856.jpg",
          imageAlt: "wrench tool professional",
        },
      ]}
      title="Quality Tools Catalog"
      description="Explore our extensive range of high-performance hardware and equipment."
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardTwentyNine
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={true}
      features={[
        {
          title: "Industrial Strength",
          description: "High-durability materials designed for long-term construction use.",
          imageSrc: "http://img.b2bpic.net/free-photo/repairing-tools_1417-1786.jpg",
          imageAlt: "durable industrial tools",
          titleImageSrc: "http://img.b2bpic.net/free-photo/detail-precision-tools_1359-246.jpg",
          buttonText: "Explore",
        },
        {
          title: "Expert Inventory",
          description: "Carefully selected parts and hardware for precision work.",
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-work-tools-wood_329181-3491.jpg",
          imageAlt: "hardware fasteners screws tools",
          titleImageSrc: "http://img.b2bpic.net/free-photo/repair-tools-kit-succulent-plant-wooden-background_23-2148393171.jpg",
          buttonText: "Explore",
        },
        {
          title: "Versatile Solutions",
          description: "Supplies for home repair, commercial build, and garden projects.",
          imageSrc: "http://img.b2bpic.net/free-photo/still-life-with-gardening-objects_23-2148060724.jpg",
          imageAlt: "professional garden equipment",
          titleImageSrc: "http://img.b2bpic.net/free-photo/close-up-picture-garden-equipment-put-soil_1150-28377.jpg",
          buttonText: "Explore",
        },
      ]}
      title="Why Choose Mland"
      description="We stand behind the durability and performance of every product we sell."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardTwelve
      useInvertedBackground={false}
      testimonials={[
        {
          id: "1",
          name: "Robert Miller",
          imageSrc: "http://img.b2bpic.net/free-photo/mutual-creative-work-young-beautiful-couple-casual-clothes-aprons-people-holds-ceramic-dishes_1157-39551.jpg",
          imageAlt: "professional contractor portrait",
        },
        {
          id: "2",
          name: "Sarah Jenkins",
          imageSrc: "http://img.b2bpic.net/free-photo/doubtful-young-caucasian-delivery-man-blue-uniform-cap-standing-with-closed-posture-looking-camera-isolated-white-wall-with-copy-space_141793-113753.jpg",
          imageAlt: "DIY enthusiast builder portrait",
        },
        {
          id: "3",
          name: "Elena Torres",
          imageSrc: "http://img.b2bpic.net/free-photo/senior-woman-with-plans-helmet_1149-1127.jpg",
          imageAlt: "female building consultant professional",
        },
        {
          id: "4",
          name: "Marcus Reid",
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-male-car-mechanic-car-repair-shop_23-2150367540.jpg",
          imageAlt: "professional plumber headshot",
        },
        {
          id: "5",
          name: "David Chan",
          imageSrc: "http://img.b2bpic.net/free-photo/computer-scientist-server-farm-ensuring-compliance-with-industry-standards_482257-123806.jpg",
          imageAlt: "home renovator professional",
        },
      ]}
      cardTitle="Client Voices"
      cardTag="Trusted by Pros"
      cardAnimation="slide-up"
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSplitMedia
      textboxLayout="split"
      useInvertedBackground={true}
      faqs={[
        {
          id: "1",
          title: "Do you provide bulk shipping?",
          content: "Yes, we handle large orders for commercial projects with dedicated support.",
        },
        {
          id: "2",
          title: "Is there a warranty included?",
          content: "Most of our professional power tools come with full manufacturer warranties.",
        },
        {
          id: "3",
          title: "Can I pick up in-store?",
          content: "We offer convenient click-and-collect services at our main warehouse location.",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/team-architects-looking-construction-site_23-2147702470.jpg"
      title="Frequently Asked"
      description="Common questions about our products, shipping, and store policies."
      faqsAnimation="slide-up"
      imageAlt="friendly customer support assistance"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCenter
      useInvertedBackground={false}
      background={{
        variant: "plain",
      }}
      tag="Contact Us"
      title="Stay Informed"
      description="Sign up to receive updates on new arrivals, hardware tips, and exclusive trade discounts."
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBaseReveal
      logoText="Mland Hardware"
      columns={[
        {
          title: "Shop",
          items: [
            {
              label: "All Products",
              href: "#products",
            },
            {
              label: "New Arrivals",
              href: "#",
            },
            {
              label: "Clearance",
              href: "#",
            },
          ],
        },
        {
          title: "Company",
          items: [
            {
              label: "About Us",
              href: "#about",
            },
            {
              label: "Contact",
              href: "#contact",
            },
            {
              label: "Careers",
              href: "#",
            },
          ],
        },
        {
          title: "Legal",
          items: [
            {
              label: "Privacy Policy",
              href: "#",
            },
            {
              label: "Terms of Use",
              href: "#",
            },
          ],
        },
      ]}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
