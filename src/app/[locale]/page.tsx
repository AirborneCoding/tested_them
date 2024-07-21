import React from "react";
import Page from ".";

// metadata.js
const metadata = {
  en: {
    icons: "favicon.ico",
    title: {
      default: "Your Ultimate Fitness Platform",
      template: "%s - Your Ultimate Fitness Platform"
    },
    description: "Discover the best fitness content, shop for top-quality gear, and access premium services to elevate your bodybuilding journey.",
    keywords: "fitness, bodybuilding, health, gym, workout, supplements, gear",
    author: "Fitness Platform Team",
    locale: "en_US"
  },
  ar: {
    icons: "favicon.ico",
    title: {
      default: "منصتك النهائية للياقة البدنية",
      template: "%s - منصتك النهائية للياقة البدنية"
    },
    description: "اكتشف أفضل محتوى للياقة البدنية، وتسوق لأفضل المعدات، واحصل على خدمات متميزة لتحسين رحلتك في كمال الأجسام.",
    keywords: "اللياقة البدنية، كمال الأجسام، الصحة، الجيم، التمرين، المكملات، المعدات",
    author: "فريق منصة اللياقة البدنية",
    locale: "ar_AR"
  },
  fr: {
    icons: "favicon.ico",
    title: {
      default: "Votre plateforme de fitness ultime",
      template: "%s - Votre plateforme de fitness ultime"
    },
    description: "Découvrez le meilleur contenu de fitness, achetez des équipements de qualité supérieure et accédez à des services premium pour améliorer votre parcours de musculation.",
    keywords: "fitness, musculation, santé, gym, entraînement, suppléments, équipement",
    author: "Équipe de la plateforme de fitness",
    locale: "fr_FR"
  },
  es: {
    icons: "favicon.ico",
    title: {
      default: "Tu plataforma de fitness definitiva",
      template: "%s - Tu plataforma de fitness definitiva"
    },
    description: "Descubre el mejor contenido de fitness, compra equipos de alta calidad y accede a servicios premium para mejorar tu viaje de culturismo.",
    keywords: "fitness, culturismo, salud, gimnasio, entrenamiento, suplementos, equipo",
    author: "Equipo de la plataforma de fitness",
    locale: "es_ES"
  }
};


export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {

  if (locale === 'en') {
    return metadata["en"]
  } else if (locale === 'ar') {
    return metadata["ar"]
  }
  else if (locale === 'fr') {
    return metadata["fr"]
  }
  else if (locale === 'es') {
    return metadata["es"]
  }
  else {
    return metadata["en"]
  }
}


export default function HomePage() {
  // const meta = metadata["en"];

  return (
    <>
      <Page />
    </>
  );
}
