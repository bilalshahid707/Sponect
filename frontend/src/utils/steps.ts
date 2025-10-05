import signup from "../assets/signup.png"
import pricingPlan from "../assets/select-plan.png"
import createPitch from "../assets/create-pitch.png"
import browseSponsors from "../assets/browse-sponsors.png"
import secureDeal from "../assets/secure-deal.png"

import sponsorSignUp from "../assets/sponsor-signup.png"
import browsePitches from "../assets/browse-pitches.png"
import sponsorDeal from "../assets/sponsor-deal.png"

type Step = {
  number: number;
  name: string;
  description: string;
  image: string;
};

export const applicantSteps: Step[] = [
  {
    number: 1,
    name: "Join the Platform",
    description: "Sign up or log in to unlock sponsorship opportunities tailored to you.",
    image: signup
  },
  {
    number: 2,
    name: "Choose Your Growth Plan",
    description: "Pick a plan that maximizes your exposure and increases your chances of getting sponsored.",
    image: pricingPlan
  },
  {
    number: 3,
    name: "Create a Winning Pitch",
    description: "Showcase your story, audience, and value to attract top sponsors.",
    image: createPitch
  },
  {
    number: 4,
    name: "Discover Sponsors",
    description: "Explore brands looking to collaborate and find your perfect match.",
    image: browseSponsors
  },
  {
    number: 5,
    name: "Connect and Secure Deals",
    description: "Reach out directly to sponsors and start building long-term partnerships.",
    image: secureDeal
  }
];

export const brandSteps: Step[] = [
  {
    number: 1,
    name: "Get Started as a Sponsor",
    description: "Sign up or log in to connect with creators ready to promote your brand.",
    image: sponsorSignUp
  },
  {
    number: 2,
    name: "Browse Tailored Pitches",
    description: "Review personalized pitches from applicants eager to represent your brand.",
    image: browsePitches
  },
  {
    number: 3,
    name: "Partner with the Right Talent",
    description: "Directly connect with applicants and secure impactful collaborations.",
    image: sponsorDeal
  }
];
