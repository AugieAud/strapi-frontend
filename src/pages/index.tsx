import { useEffect, useState } from "react";
import { LandingPage, StrapiResponse } from "../types/api";
import { Hero } from "../components/Hero";
import { Row } from "../components/Row";
import { Pricing } from "../components/Pricing";
import { CTA } from "../components/CTA";

export default function Home() {
  const [landingPage, setLandingPage] = useState<LandingPage | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchLandingPage = async () => {
      try {
        const url = `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/landing-pages?populate[blocks][populate]=*`;
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error("Failed to fetch landing page");
        }

        const data: StrapiResponse<LandingPage> = await response.json();
        if (data.data && data.data.length > 0) {
          setLandingPage(data.data[0]);
        } else {
          setError("No landing page found");
        }
        setLoading(false);
      } catch (err) {
        console.error("Error:", err);
        setError("Failed to load landing page");
        setLoading(false);
      }
    };

    fetchLandingPage();
  }, []);

  if (loading) {
    return <div className="p-8 text-center">Loading...</div>;
  }

  if (error || !landingPage) {
    return (
      <div className="p-8 text-center text-red-500">
        {error || "No landing page found"}
      </div>
    );
  }

  return (
    <main>
      {landingPage.blocks.map((block) => {
        switch (block.__component) {
          case "blocks.hero":
            return <Hero key={block.id} block={block} />;
          case "blocks.row":
            return <Row key={block.id} block={block} />;
          case "blocks.pricing":
            return <Pricing key={block.id} block={block} />;
          case "blocks.cta":
            return <CTA key={block.id} block={block} />;
          default:
            return null;
        }
      })}
    </main>
  );
}
