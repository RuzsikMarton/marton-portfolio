import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ResourcePage = () => {
  const { lang } = useParams<{ lang: string }>();
  const [pdfError, setPdfError] = useState(false);
  
  const getPdfSrc = () => {
    const language = lang || 'en';
    return `/cv/RMarton_CV${language}.pdf`;
  };

  const getFallbackPdfSrc = () => {
    return '/RMarton_CVen.pdf';
  };

  useEffect(() => {
    const resizeEmbed = () => {
      const embed = document.getElementById("pdfEmbed");
      if (embed) {
        const windowHeight = window.innerHeight;
        embed.style.height = `${windowHeight}px`;
      }
    };
    resizeEmbed();
    window.addEventListener("resize", resizeEmbed);
    return () => window.removeEventListener("resize", resizeEmbed);
  }, []);

  const handlePdfError = () => {
    setPdfError(true);
  };

  return (
    <div className="h-screen overflow-hidden">
      {!pdfError ? (
        <iframe
          id="pdfEmbed"
          src={getPdfSrc()}
          width="100%"
          height="100%"
          style={{ border: 'none' }}
          title="CV PDF"
          onError={handlePdfError}
        />
      ) : (
        <iframe
          id="pdfEmbed"
          src={getFallbackPdfSrc()}
          width="100%"
          height="100%"
          style={{ border: 'none' }}
          title="CV PDF"
        />
      )}
    </div>
  );
};

export default ResourcePage;
