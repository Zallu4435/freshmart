import { Hero } from "@/components/home/Hero";
import { CategoryHighlights } from "@/components/home/CategoryHighlights";
import { CategoryGallery } from "@/components/home/CategoryGallery";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { CTASection } from "@/components/home/CTASection";

export default function HomePage() {
  return (
    <div className="space-y-0">
      <Hero />
      <CategoryHighlights />
      <CategoryGallery />
      <WhyChooseUs />
      <CTASection />
    </div>
  );
}
