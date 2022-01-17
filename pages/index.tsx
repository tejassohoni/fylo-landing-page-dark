import Head from "next/head";
import FeaturesGrid from "../components/FeaturesGrid";
import Footer from "../components/Footer";
import FooterCard from "../components/FooterCard";
import Header from "../components/Header";
import StayProductive from "../components/StayProductive";
import Testimonials from "../components/Testimonials";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Fylo Landing Page</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Header />
      <main>
        <FeaturesGrid />
        <StayProductive />
        <Testimonials />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
