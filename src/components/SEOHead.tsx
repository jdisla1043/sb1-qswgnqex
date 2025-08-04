import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: string;
  structuredData?: object;
}

const SEOHead: React.FC<SEOHeadProps> = ({
  title = "Florida Commercial Cleaning - Professional Cleaning Services",
  description = "Professional commercial cleaning services across Florida. Specializing in office cleaning, restaurant sanitization, medical facility cleaning, and emergency response. Licensed & insured. Call (813) 738-4220.",
  keywords = "commercial cleaning Florida, office cleaning Tampa, restaurant cleaning, medical facility cleaning, janitorial services, emergency cleaning response, mold remediation, post construction cleaning",
  canonicalUrl,
  ogImage = "https://commercialcleaning.today/og-image.jpg",
  ogType = "website",
  structuredData
}) => {
  const baseUrl = "https://commercialcleaning.today";
  const fullCanonicalUrl = canonicalUrl ? `${baseUrl}${canonicalUrl}` : baseUrl;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Florida Commercial Cleaning" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={fullCanonicalUrl} />
      
      {/* Open Graph Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={fullCanonicalUrl} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="Florida Commercial Cleaning" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Business Information */}
      <meta name="geo.region" content="US-FL" />
      <meta name="geo.placename" content="Florida" />
      <meta name="geo.position" content="27.7663;-82.6404" />
      <meta name="ICBM" content="27.7663, -82.6404" />
      
      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
      
      {/* Default Structured Data for Business */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Florida Commercial Cleaning",
          "description": "Professional commercial cleaning services across Florida",
          "url": "https://commercialcleaning.today",
          "telephone": "+1-813-738-4220",
          "email": "floridajanitorialservices@gmail.com",
          "address": {
            "@type": "PostalAddress",
            "addressRegion": "FL",
            "addressCountry": "US"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": "27.7663",
            "longitude": "-82.6404"
          },
          "areaServed": [
            {
              "@type": "State",
              "name": "Florida"
            }
          ],
          "serviceType": [
            "Commercial Cleaning",
            "Office Cleaning",
            "Restaurant Cleaning",
            "Medical Facility Cleaning",
            "Mold Remediation",
            "Post Construction Cleaning"
          ],
          "priceRange": "$$",
          "openingHours": "Mo-Su 00:00-23:59",
          "sameAs": [
            "https://commercialcleaning.today"
          ]
        })}
      </script>
    </Helmet>
  );
};

export default SEOHead;