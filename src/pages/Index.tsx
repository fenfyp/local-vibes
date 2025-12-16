import Header from "@/components/landing/Header";
import HeroSection from "@/components/landing/HeroSection";
import ProblemSection from "@/components/landing/ProblemSection";
import SolutionSection from "@/components/landing/SolutionSection";
import HowItWorksSection from "@/components/landing/HowItWorksSection";
import FeedFeaturesSection from "@/components/landing/FeedFeaturesSection";
import AnonymousModeSection from "@/components/landing/AnonymousModeSection";
import PrivateMessagesSection from "@/components/landing/PrivateMessagesSection";
import AudienceSection from "@/components/landing/AudienceSection";
import CTASection from "@/components/landing/CTASection";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <HowItWorksSection />
        <FeedFeaturesSection />
        <AnonymousModeSection />
        <PrivateMessagesSection />
        <AudienceSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
