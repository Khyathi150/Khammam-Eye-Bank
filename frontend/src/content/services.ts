export interface ServiceItem {
  id: string;
  title: string;
  summary: string;
}

export const services: ServiceItem[] = [
  {
    id: 'eye-donation-registration',
    title: 'Eye Donation Registration',
    summary:
      'Register your eye donation pledge online through the website or offline through a pledge form available at the Eye Bank office.'
  },
  {
    id: 'transplant-support',
    title: 'Corneal Transplantation Support',
    summary:
      'Coordination and referral support with authorised corneal transplant centres to help recipients receive suitable donor tissue.'
  },
  {
    id: 'hospital-coordination',
    title: 'Hospital Coordination',
    summary:
      'Coordination with hospitals, medical colleges, ICUs, mortuaries and healthcare teams to enable timely, respectful retrieval.'
  },
  {
    id: 'preservation',
    title: 'Tissue Preservation',
    summary:
      'Evaluation, preservation, storage, documentation and transfer of donated corneal tissue as per applicable standards.'
  },
  {
    id: 'counselling',
    title: 'Family Counselling',
    summary: 'Compassionate grief counselling and consent support for donor families at a difficult time.'
  },
  {
    id: 'awareness',
    title: 'Awareness Programs',
    summary:
      'Public meetings, rallies, posters, social media outreach and donor-family recognition to build community awareness.'
  }
];

export const registrationOnline = {
  title: 'Online Registration through Website',
  steps: [
    'Click the "Register for Eye Donation" button on this website.',
    'Fill in your personal and contact details.',
    'Provide the details of a family member or next of kin.',
    'Read the pledge declaration carefully and confirm your acceptance.',
    'Submit the form.'
  ],
  note: 'After submission, your pledge will be recorded according to the Eye Bank\u2019s registration process. A registration acknowledgement or donor pledge card may be provided, depending on the system available.',
  requiredInfo:
    'The online form may collect the donor\u2019s full name, age or date of birth, gender, mobile number, email address if available, complete address, district and state, and the name, relationship and contact number of a family member or next of kin.',
  declaration:
    'I voluntarily pledge to donate my eyes after my death for the purpose of helping restore sight to persons affected by corneal blindness. I understand that the medical suitability of donated eye tissue will be determined by qualified Eye Bank professionals. I will inform my family members and next of kin about my wish to donate my eyes and request their support in fulfilling my pledge.'
};

export const registrationOffline = {
  title: 'Offline Eye Donation Registration',
  description:
    'People who prefer to register in person can complete the Eye Donation Pledge Form available through Khammam Eyebank. The donor can collect the pledge form from the Eye Bank office or obtain it during an authorised awareness program or camp.'
};
