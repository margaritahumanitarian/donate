import React from 'react';
import cards from '../data/homeCardsData.json';

import Thankyou, { ThankyouAgain } from '../components/email/Thankyou';
import Card from '../components/Card';
import CardsLayout from '../components/CardsLayout';
import EmailCapture from '../components/email/EmailCapture';
import HotMealDaySection from '../components/HotMealDaySection';
import InteractiveSection from '../components/email/InteractiveSection';
import LargeInfoSection from '../components/LargeInfoSection';
import PrimaryLayout from '../components/PrimaryLayout';
import SurveySection from '../components/email/SurveySections';
import ThankyouEmail from '../components/email/ThankyouEmail';
import heroImages from 'constants/heroImages';

export const getStaticProps = async () => {
  const date = new Date();
  const selectedImage = date.getDay();
  const image = heroImages[selectedImage];
  const FORM_ID = String(process.env.FORM_ID);
  return {
    props: { image, FORM_ID },
    revalidate: 86400, // every day
  };
};

export default function Home({ image, FORM_ID }) {
  return (
    <PrimaryLayout image={image} inNeed main>
      <HotMealDaySection />
      <LargeInfoSection>
        {
          "Mail us your used or new laptop. We'll set up the donated laptops in our public computer room for the families to use for free. Some of the donated laptops will go to the families who don't have home computers, or who don't have enough computers for all their children to use."
        }
      </LargeInfoSection>
      <CardsLayout description="Our Humanitarian Programs">
        {cards.data.map((cardData) => (
          <Card key={cardData.key} {...cardData} />
        ))}
      </CardsLayout>
      <InteractiveSection>
        <EmailCapture formID={FORM_ID} />
        <ThankyouEmail />
        <ThankyouAgain />
        <SurveySection formID={FORM_ID} />
        <Thankyou />
      </InteractiveSection>
    </PrimaryLayout>
  );
}
