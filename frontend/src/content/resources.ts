export interface FaqItem {
  question: string;
  answer: string;
}

export const faqGroups: { group: string; items: FaqItem[] }[] = [
  {
    group: 'Eligibility: Who Can Donate?',
    items: [
      {
        question: 'Can people who wear glasses or have had eye surgeries donate?',
        answer:
          'Yes. People with poor eyesight, refractive errors (near-sighted or far-sighted) who wear glasses or contact lenses, or those who have undergone successful cataract or LASIK surgeries can absolutely donate. This is because eye donation primarily uses the cornea, the clear front window of the eye, which usually remains perfectly healthy despite these conditions.'
      },
      {
        question: 'Is there an age limit for eye donation?',
        answer:
          'No. There is no upper age limit. Anyone from a one-year-old child to a senior citizen can donate, provided their corneas are healthy.'
      },
      {
        question: 'Can individuals with chronic medical conditions donate?',
        answer:
          'Yes. Having common systemic conditions like diabetes, high blood pressure, asthma, or even most forms of cancer does not automatically disqualify someone from donating their corneas.'
      },
      {
        question: 'Who is excluded from donating?',
        answer:
          'Eyes cannot be accepted for transplantation if the person passed away with certain transmissible infections, such as HIV/AIDS, Hepatitis B or C, rabies, tetanus, or septicemia (severe bloodstream infection).'
      }
    ]
  },
  {
    group: 'The Process: When and How Does it Happen?',
    items: [
      {
        question: 'Does eye donation happen while a person is alive?',
        answer: 'No. Eye donation is strictly a post-death procedure.'
      },
      {
        question: 'How soon after death must the eyes be collected?',
        answer:
          'Time is critical. The eyes must be retrieved preferably within 4 to 6 hours after death (up to 8 hours under certain cool conditions).'
      },
      {
        question: 'Is the entire eye transplanted?',
        answer:
          'No. Currently, entire eye transplantation is not a standard clinical reality. Instead, only the clear front layer, the cornea, is transplanted to restore a patient\u2019s sight. The white part (sclera) is sometimes used for structural eye surgeries. Tissue that cannot be transplanted is invaluable for medical research and surgical training.'
      },
      {
        question: 'How many people can benefit from a single donor?',
        answer:
          'A single eye donor can restore sight to two people (one cornea per recipient), and sometimes even more due to advanced component-splitting surgical techniques.'
      }
    ]
  },
  {
    group: 'Care, Respect, and Legalities',
    items: [
      {
        question: 'Does eye retrieval disfigure the face or delay the funeral?',
        answer:
          'Absolutely not. The procedure is performed with the utmost respect by a trained medical professional or technician and takes only 15 to 20 minutes. A small plastic shell is placed under the eyelids to maintain the natural shape of the eyes. Afterward, the eyes are gently closed, leaving no visible disfigurement, and traditional funeral rituals can proceed with zero delay.'
      },
      {
        question: 'Can eyes be bought or sold?',
        answer:
          'No. Selling or buying human organs, eyes, or tissues is strictly illegal and a punishable offense globally, including under the Transplantation of Human Organs Act in India. Eye donation is entirely voluntary and there is no cost to the donor\u2019s family.'
      },
      {
        question: 'Will the family know who received the eyes?',
        answer:
          'No. To maintain privacy and ethics, the identities of both the donor family and the medical recipients are kept strictly confidential by law.'
      }
    ]
  }
];

export const criticalStepsAfterDeath: { title: string; timing: string; description: string }[] = [
  {
    title: 'Contact the nearest Eye Bank',
    timing: 'Immediately',
    description: 'Call a local eye bank, hospital helpline, or national donation number right away to alert the retrieval team.'
  },
  {
    title: 'Keep the eyelids closed',
    timing: 'Within minutes',
    description: 'Gently close the eyelids of the deceased to prevent the corneas from drying out.'
  },
  {
    title: 'Turn off overhead fans',
    timing: 'Within minutes',
    description: 'Switch off any ceiling fans blowing directly over the face, as air movement accelerates corneal drying.'
  },
  {
    title: 'Elevate the head',
    timing: 'Within minutes',
    description: 'Place a pillow underneath the deceased\u2019s head to raise it slightly, minimising tissue swelling.'
  },
  {
    title: 'Cool the room',
    timing: 'Continuous',
    description: 'Turn on the air conditioner or keep the room as cool as possible while waiting for the medical team.'
  }
];

export const donationGuidelines: string[] = [
  'Eye donation is possible only after death.',
  'People of any age may potentially donate their eyes. Spectacle use, cataract surgery, diabetes, hypertension, or asthma do not automatically prevent donation; the eye-bank team assesses suitability.',
  'Inform the nearest registered Eye Bank immediately after death. Retrieval should ideally be completed within 6 hours of death, so early notification is important.',
  'While waiting for the Eye Bank team, close the eyelids, switch off the ceiling fan, raise the head slightly with a pillow, and place a clean wet cloth over the closed eyelids.',
  'Do not apply anything to the eyes and do not attempt to handle or retrieve eye tissue yourself.',
  'Eye donation does not significantly disfigure the face, and the donation process is carried out by trained personnel.',
  'One donor can potentially help two people through donation of the two corneas.',
  'A person can pledge during life, but after death the family should promptly contact the Eye Bank and complete the required consent process. India\u2019s transplant framework includes official pledge and consent forms, and registration requirements for eye banks and retrieval centres.',
  'Some infections, certain cancers and other medical conditions can make tissue unsuitable; the Eye Bank medical team makes the final eligibility decision, so families should call rather than assume donation is impossible.'
];

export const eligibilityCan: { title: string; description: string }[] = [
  {
    title: 'Any Age or Gender',
    description: 'There is no upper age limit. Healthy corneas can be harvested from senior citizens as easily as from young adults or children.'
  },
  {
    title: 'Spectacle & Contact Lens Wearers',
    description: 'People with near-sightedness, far-sightedness, or astigmatism are fully eligible. These are refractive errors caused by the shape of the eye or lens, leaving the cornea perfectly healthy.'
  },
  {
    title: 'Previous Eye Surgeries',
    description: 'Individuals who have undergone successful cataract surgery, LASIK, or other corrective laser surgeries can still donate.'
  },
  {
    title: 'Common Chronic Conditions',
    description: 'Patients with Diabetes Mellitus, High Blood Pressure (Hypertension), asthma, or heart disease are completely eligible.'
  },
  {
    title: 'Most Systemic Cancers',
    description: 'Dying from most forms of solid-tumor cancers (e.g., lung, breast, colon) does not disqualify someone from donating their corneas.'
  }
];

export const eligibilityExclusions: { category: string; items: string[] }[] = [
  {
    category: 'Infectious & Transmissible Diseases',
    items: [
      'HIV / AIDS',
      'Active Hepatitis B or Hepatitis C',
      'Rabies',
      'Septicemia (severe, active bacterial or fungal bloodstream infection at time of death)',
      'Tetanus',
      'Encephalitis or Meningitis',
      'Creutzfeldt-Jakob Disease (CJD)'
    ]
  },
  {
    category: 'Blood and Lymphatic System Malignancies',
    items: ['Leukemia', 'Lymphoma', 'Multiple Myeloma']
  },
  {
    category: 'Intrinsic Eye Conditions',
    items: [
      'Active ocular infections or severe inflammation at time of death (e.g., severe keratitis, uveitis, conjunctivitis)',
      'Retinoblastoma or other ocular cancers',
      'Congenital disorders that compromise the cornea (e.g., advanced Keratoconus)'
    ]
  },
  {
    category: 'Other Factors',
    items: [
      'Death from unknown causes or cases where the exact time of death cannot be established',
      'Death due to specific toxic chemicals, such as cyanide poisoning'
    ]
  }
];

export const eligibilityNote =
  'Even if a person passes away with a condition that prevents their corneas from being transplanted into a living patient, the family can often still choose to donate. These eyes are incredibly valuable to medical colleges and ophthalmic centres for surgical training and biomedical research to help train the next generation of eye surgeons.';

export const forms = [
  { title: 'Eye Donation Pledge Form', description: 'Register your pledge to donate your eyes after death.' },
  { title: 'Donor Information Form', description: 'Details collected at the time of donation coordination.' },
  { title: 'Volunteer Form', description: 'Join awareness campaigns and community outreach as a volunteer.' },
  { title: 'Institutional Collaboration Enquiry Form', description: 'For hospitals, colleges and organisations seeking to partner with us.' }
];

export const brochures = [
  'Eye Donation Awareness Brochure',
  'Family Guidance Leaflet',
  'Awareness Posters',
  'Educational Material'
];

export const annualReportsNote =
  'Annual activity reports, audited highlights where appropriate, donation statistics, awareness activities, and impact summaries are published here as they become available.';
  
export const newsUpdatesNote =
  'Regular updates on eye donations, awareness programs, donor tributes, partnerships, camps, and organisational announcements will appear here.';
