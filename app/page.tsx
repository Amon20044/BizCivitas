import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import { theme } from "@/lib/theme";
import ContentSection, { ContentSection2 } from "@/components/ContentSection";
import EnhancedCTA from "@/components/EnhancedCTA";
import EventRegistrationButton from "@/components/EventRegistrationButton";
import Image from "next/image";
import FeaturesSection from "@/components/Home/WhyChooseUs";
import InsightsSection from "@/components/Home/InsightsSection";
import LetsConnect from "@/components/Home/LetsConnect";
import Footer from "@/components/Footer";
import { generateHomepageStructuredData } from "@/lib/structured-data";

// Enhanced ISR configuration for homepage
export const revalidate = 1800; // 30 minutes for homepage content

export const metadata: Metadata = {
  title:
    "BizCivitas - Where Ventures and Voyages Intersect | Business Networking Platform",
  description:
    "The world is your network. Expand your business by exploring new destinations and forming meaningful collaborations. Join BizCivitas for networking, events, and business growth opportunities.",
  keywords: [
    "BizCivitas",
    "business networking",
    "ventures",
    "voyages",
    "business travel",
    "entrepreneur networking",
    "corporate networking",
    "business community",
    "professional development",
    "business collaborations",
    "networking events",
  ],
  openGraph: {
    title: "BizCivitas - Where Ventures and Voyages Intersect",
    description:
      "The world is your network. Expand your business by exploring new destinations and forming meaningful collaborations.",
    type: "website",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://bizcivitas.com",
    images: [
      {
        url: "/Core.jpg",
        width: 1200,
        height: 630,
        alt: "BizCivitas - Where Ventures and Voyages Intersect",
      },
    ],
    videos: [
      {
        url: `${process.env.NEXT_PUBLIC_SITE_URL || "https://bizcivitas.com"}/home.mp4`,
        width: 1920,
        height: 1080,
        type: "video/mp4",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BizCivitas - Where Ventures and Voyages Intersect",
    description:
      "The world is your network. Expand your business by exploring new destinations and forming meaningful collaborations.",
  },
};

export default function HomePage() {
  // Content section configuration - change these variables to update content
  const networkingSectionData = {
    title: "The New Era Of Networking",
    description:
      "When We Step Out Of Our Daily Routines, We Open Up To New Ideas, Fresh Perspectives, And Meaningful Relationships. Bizcivitas Blends Professional Networking With The Thrill Of Exploring New Destinations. Through Curated Trips, Small Group Experiences, And Guided Discussions, Our Journeys Encourage You To Connect On A Deeper Level, We Create A Space Where Business Bonds Are Formed Naturally, As We Travel Together, Learn Together, And Grow Together.",
    buttonText: "Explore US",
    buttonHref: "/discover",
    videoUrl: "https://youtu.be/xF3iaSXG8LY", // Replace with actual image path
    videoTitle: "Professional networking event with diverse business people",
    imagePosition: "right" as const,
    backgroundColor: "bg-flat-surface",
  };
  // -----------------------------------------------------------------
  const networkingSectionData2 = {
    title: "Inspiration Of BizCivitas",
    description:
      "Three entrepreneurs, bound by a passion for travel, discovered that the best ideas and relationships are born on the road. From campﬁre conversations to boardroom strategies, they saw the power of shared experiences to inspire growth. This passion became BizCivitas a platform that blends the thrill of adventure with the strategic potential of networking. Here, professionals from all walks of life connect, collaborate, and succeed through immersive journeys. BizCivitas turns every adventure into an opportunity for lasting growth.",
    buttonText: "Explore US",
    buttonHref: "/discover",
    videoUrl: "/imgHome.svg", // Replace with actual image path
    videoTitle: "Professional networking event with diverse business people",
    imagePosition: "left" as const,
    backgroundColor: "bg-flat-surface",
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    metadata : metadata,
    name: "BizCivitas",
    description:
      "Where ventures and voyages intersect. Business networking platform for events, business travel, and professional growth through meaningful collaborations.",
    url: "https://bizcivitas.com",
    logo: "https://bizcivitas.com/bizcivitas.svg",
    slogan: "Where Ventures and Voyages Intersect",
    sameAs: [
      "https://linkedin.com/company/bizcivitas",
      "https://twitter.com/bizcivitas",
    ],
  };

  return (
    <>
      {/* Enhanced Structured Data */}
      {generateHomepageStructuredData().map((schema, index) => (
        <Script
          key={index}
          id={`structured-data-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      <div className="bg-flat-bg min-h-screen">
        {/* Hero Section with Video Background */}
        <section className="relative w-full h-screen overflow-hidden">
          <div className="absolute inset-0 w-full h-full">
            <video
              className="w-full h-full object-cover"
              src="/home.mp4"
              autoPlay
              muted
              loop
              playsInline
              controlsList="nodownload nofullscreen noremoteplaybook"
              disablePictureInPicture
              preload="metadata"
              aria-label="Business innovation video showcasing successful companies"
              suppressHydrationWarning
            />
          </div>

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-[rgba(0,0,0,0.5)] flex items-center justify-center z-1">
            {" "}
            <div className="text-center text-white px-4 sm:px-6 lg:px-8 max-w-5xl">
              <div className="mb-8">
                <p className="text-5xl font-light mb-4 tracking-wider italic">
                  Welcome to BizCivitas !
                </p>
                <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                  Where <span className="text-flat-btn-primary">Ventures</span>{" "}
                  and <span className="text-flat-btn-primary">Voyages</span>{" "}
                  Intersect
                </h1>
              </div>
              <p className="text-xl lg:text-2xl mb-12 text-white max-w-4xl mx-auto leading-relaxed">
                The world is your network. Expand your business by exploring new
                destinations and forming meaningful collaborations.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <EnhancedCTA
                href="/membership"
                variant="primary"
                size="lg"
                className="bg-flat-btn-primary min-w-[180px] text-white hover:bg-flat-btn-secondary transition-colors duration-300"
                >
                  Join Now
                  </EnhancedCTA>
                <EnhancedCTA
                  href="/blogs"
                  variant="outline"
                  size="lg"
                  className="border-white min-w-[180px] text-white hover:bg-white hover:text-gray-900"
                >
                  Learn More
                </EnhancedCTA>
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-flat-text-inverse animate-bounce">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </section>

        {/* Content Section - The New Era Of Networking */}
        <ContentSection
          title={networkingSectionData.title}
          description={networkingSectionData.description}
          buttonText={networkingSectionData.buttonText}
          buttonHref={networkingSectionData.buttonHref}
          videoUrl={networkingSectionData.videoUrl}
          videoTitle={networkingSectionData.videoTitle}
          imagePosition={networkingSectionData.imagePosition}
          backgroundColor={networkingSectionData.backgroundColor}
        />

        {/* Features Section */}
        <section className=" bg-flat-surface">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
            <div className="relative text-center mb-16 py-12  w-[100vw] rounded-2xl bg-[#FEF5E8] shadow-sm">
              {/* Decorative Images */}
              <div className="absolute -translate-y-12 z-10 w-full h-full">
                <Image
                  className="absolute top-0 left-0"
                  src="/BottomRightDecor.svg" // Airplane image for top-left
                  width={100} // Adjust based on your image size
                  height={100} // Adjust based on your image size
                  alt="Top left decorative airplane"
                />
                <Image
                  className="absolute bottom-0 right-0"
                  src="/topLeftDecor.svg" // Speech bubble image for bottom-right
                  width={100} // Adjust based on your image size
                  height={100} // Adjust based on your image size
                  alt="Bottom right decorative speech bubble"
                />
              </div>

              {/* Header Content */}
              <header className="mt-12 mb-6">
                <h2 className="text-3xl lg:text-4xl font-bold text-flat-text-primary mb-6 flat-text-heading">
                  Unleash Your Potential Through Shared Adventures
                </h2>
                <p className="text-lg text-flat-text-secondary max-w-2xl mx-auto flat-text-body leading-relaxed">
                  Step out of your routine and into extraordinary journeys where
                  connections inspire growth.
                </p>
              </header>

              {/* Feature Highlights */}
              <div className="flex flex-col items-center max-w-4xl mx-auto space-y-3">
                {/* Feature 1 - Curated for Success */}
                <article className="flex flex-col items-center text-center group">
                  <div className="relative mb-4 p-4 transition-all duration-300">
                    <Image
                      src="/Vector1.svg"
                      alt="Curated business networking experiences icon"
                      width={64}
                      height={64}
                      className="w-16 h-16 object-contain group-hover:scale-110 transition-transform duration-300"
                      priority
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-flat-text-primary mb-2 flat-text-heading">
                    Curated for Success
                  </h3>
                  <p className="text-sm text-flat-text-secondary leading-relaxed max-w-xs">
                    Every trip is thoughtfully designed to foster authentic
                    connections and professional growth.
                  </p>
                </article>

                {/* Vertical Dotted Line */}
                <div className="flex justify-center">
                  <div className="w-px h-24 border-l-3 border-dotted border-gray-500"></div>
                </div>

                {/* Feature 2 - Business Happens on the Road */}
                <article className="flex flex-col items-center text-center group">
                  <div className="relative mb-4 p-4 transition-all duration-300">
                    <Image
                      src="/Vector2.svg"
                      alt="Business networking on the road icon"
                      width={64}
                      height={64}
                      className="w-16 h-16 object-contain group-hover:scale-110 transition-transform duration-300"
                      priority
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-flat-text-primary mb-2 flat-text-heading">
                    Business Happens on the Road
                  </h3>
                  <p className="text-sm text-flat-text-secondary leading-relaxed max-w-xs">
                    Forge meaningful business relationships through
                    conversations sparked by shared experiences.
                  </p>
                </article>

                {/* Vertical Dotted Line */}
                <div className="flex justify-center">
                  <div className="w-px h-24 border-l-3 border-dotted border-gray-500"></div>
                </div>

                {/* Feature 3 - Global Reach */}
                <article className="flex flex-col items-center text-center group">
                  <div className="relative mb-4 p-4 transition-all duration-300">
                    <Image
                      src="/Vector3.svg"
                      alt="Global business reach icon"
                      width={64}
                      height={64}
                      className="w-16 h-16 object-contain group-hover:scale-110 transition-transform duration-300"
                      priority
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-flat-text-primary mb-2 flat-text-heading">
                    Global Reach
                  </h3>
                  <p className="text-sm text-flat-text-secondary leading-relaxed max-w-xs mb-8">
                    Connect with professionals worldwide and unlock
                    opportunities across borders.
                  </p>
                </article>
              </div>
            </div>

            <ContentSection2
              title={networkingSectionData2.title}
              description={networkingSectionData2.description}
              buttonText={networkingSectionData2.buttonText}
              buttonHref={networkingSectionData2.buttonHref}
              imageSrc={networkingSectionData2.videoUrl}
              imageAlt={networkingSectionData2.videoTitle}
              imagePosition={networkingSectionData2.imagePosition}
              backgroundColor={networkingSectionData2.backgroundColor}
            />
            <FeaturesSection />

            <InsightsSection />
          </div>
          <LetsConnect />
        </section>
      </div>
    </>
  );
}
