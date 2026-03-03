export interface DogProfile {
  id: string;
  name: string;
  gender: 'Reu' | 'Teef';
  temperament: string;
  dnaStatus: string;
  image: string;
  description: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface Step {
  title: string;
  description: string;
}
