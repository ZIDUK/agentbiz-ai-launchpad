import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Career from "@/components/Career";

const Careers = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <Career />
      </main>
      <Footer />
    </div>
  );
};

export default Careers;
