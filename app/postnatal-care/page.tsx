import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import HeroSection from "@/components/postnatal-care/HeroSection";
import AboutPostnatalCare from "@/components/postnatal-care/AboutPostnatalCare";
import BenefitsTable from "@/components/postnatal-care/BenefitsTable";
import RecoveryPhasePrograms from "@/components/postnatal-care/RecoveryPhasePrograms";
import PackagesOverview from "@/components/postnatal-care/PackagesOverview";
import WhyChooseUs from "@/components/postnatal-care/WhyChooseUs";
import ConsultationCTA from "@/components/postnatal-care/ConsultationCTA";
import OverallBenefits from "@/components/postnatal-care/OverallBenefits";
import Certifications from "@/components/postnatal-care/Certifications";
import FAQ from "@/components/postnatal-care/FAQ";
import VideoTestimonials from "@/components/postnatal-care/VideoTestimonials";
import TeamSection from "@/components/postnatal-care/TeamSection";
import GMBTestimonials from "@/components/postnatal-care/GMBTestimonials";
import BlogPreview from "@/components/postnatal-care/BlogPreview";
import OurFacilities from "@/components/postnatal-care/OurFacilities";
import ServicesWithImage from "@/components/postnatal-care/ServicesWeOffer";
import PackageDetails from "@/components/postnatal-care/PackageDetails";

export const metadata = {
  title: "Postnatal Care (Prasavaraksha) | MMGurukkals Ayurvedic Clinic",
  description:
    "Complete Ayurvedic postnatal care system designed to restore a mother's strength after childbirth, promote hormonal balance, and support both mother and newborn.",
};

export default function PostnatalCarePage() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutPostnatalCare />
      <OurFacilities/>
      {/* <BenefitsTable /> */}
      {/* <RecoveryPhasePrograms /> */}
      <PackagesOverview />
      <ServicesWithImage/>
      <PackageDetails/>
      <WhyChooseUs />
      {/* <ConsultationCTA /> */}
      {/* <OverallBenefits /> */}
      {/* <Certifications /> */}
      <FAQ />
      {/* <VideoTestimonials /> */}
      {/* <TeamSection /> */}
      <GMBTestimonials />
      <BlogPreview />
      <Footer />
    </>
  );
}

