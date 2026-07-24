export const trainingPrograms = [
  'Training for volunteers, counsellors, hospital coordinators, and awareness ambassadors',
  'Workshops on eye donation counselling, grief communication, hospital coordination, and public awareness',
  'CME programs, included only when officially conducted or partnered with accredited medical institutions',
  'Student internships, included only when formal internships or observerships are available',
  'Awareness videos, expert talks, donor-family stories shared with consent, and educational explainers'
];

export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  body: string[];
}

export const articles: Article[] = [
  {
    slug: 'myths-and-facts',
    title: 'Eye Donation: Myths and Facts',
    excerpt:
      'Public awareness and community participation are important for increasing the availability of safe donor corneal tissue for transplantation.',
    body: [
      'Eye donation is one of the most meaningful gifts a person can leave behind. Yet many families hesitate because of misconceptions, fear, or lack of information.',
      'Myth: The whole eye is transplanted into another person. Fact: Corneal transplantation uses donated corneal tissue, the transparent front part of the eye. Eye banks recover, evaluate, preserve and distribute suitable tissue for transplantation.',
      'Myth: People who wear spectacles cannot donate their eyes. Fact: Wearing spectacles or contact lenses does not automatically prevent eye donation. Suitability is determined by trained eye-bank professionals after reviewing medical history.',
      'Myth: Older people cannot donate. Fact: Age alone should not be used by families to decide whether donation is possible; the eye bank should be contacted, and trained professionals will determine tissue suitability.',
      'Myth: A person must have pledged during life for donation to happen. Fact: A pledge communicates the person\u2019s wish, but family involvement and consent are important in the donation process.',
      'Myth: Eye donation disfigures the face. Fact: Tissue recovery is carried out respectfully by trained professionals using careful procedures, and the donor is treated with dignity throughout.',
      'Myth: Donated tissue is given to recipients based on wealth or influence. Fact: Registered eye banks follow medical evaluation, tissue suitability, waiting-list and applicable allocation procedures within India\u2019s regulatory framework for tissue retrieval, banking and transplantation.',
      'The greatest obstacle to eye donation is often not unwillingness, but misinformation. One informed conversation within a family can help transform grief into the gift of sight.'
    ]
  },
  {
    slug: 'understanding-corneal-blindness',
    title: 'Understanding Corneal Blindness',
    excerpt:
      'The cornea is the clear, dome-shaped front surface of the eye. When it becomes scarred, cloudy, damaged or irregular, vision can be severely affected.',
    body: [
      'The cornea helps focus light as it enters the eye. When the cornea becomes scarred, cloudy, damaged, or irregular, light cannot pass through and focus normally, which may cause severe visual impairment or blindness.',
      'Corneal blindness is an important cause of avoidable blindness in India. Causes can include infection, trauma, childhood keratitis, corneal degeneration or dystrophy, and complications following eye surgery.',
      'In suitable patients, damaged or diseased corneal tissue can be replaced with healthy donor corneal tissue. However, transplantation depends on the availability of safe and medically suitable donated tissue. The shortage of donor corneas remains a major challenge, which is why awareness, timely donation, professional eye banking, and community participation are so important.',
      'A corneal donation is more than a medical gift, it is an opportunity for another person to regain useful vision and independence.'
    ]
  },
  {
    slug: 'donation-process',
    title: 'The Eye Donation Process: From Donation to the Gift of Sight',
    excerpt:
      'Eye donation is a carefully coordinated process involving the donor\u2019s family, trained retrieval personnel, eye-bank professionals, laboratory evaluation, and the corneal transplant team.',
    body: [
      '1. The family contacts the eye bank promptly after death. The eye-bank team provides guidance and begins the required coordination.',
      '2. Consent and medical information are obtained. The team speaks with the family, completes required documentation, and collects relevant medical and social history.',
      '3. Tissue recovery is performed by trained personnel, carried out respectfully and with appropriate precautions.',
      '4. The donated tissue is evaluated. The eye bank reviews the donor\u2019s history and performs detailed examination and testing to determine whether the tissue is suitable and safe for transplantation. Not every donated tissue will necessarily be suitable for transplant.',
      '5. Suitable tissue is preserved and allocated. The eye bank maintains quality systems for processing, preservation, documentation, and distribution.',
      '6. Corneal transplantation is performed by an ophthalmic surgeon who replaces diseased corneal tissue in an appropriate recipient with suitable donor tissue.',
      'Families should contact their local registered eye bank immediately after a death and follow its instructions rather than making assumptions about eligibility. For national organ and tissue donation information in India, the National Organ and Tissue Transplant Organisation (NOTTO) provides official information and resources.'
    ]
  },
  {
    slug: 'protect-your-eyes',
    title: 'Protect Your Eyes: Simple Habits for Lifelong Eye Health',
    excerpt:
      'Healthy vision contributes to education, work, mobility, independence and quality of life. Many eye problems can be prevented or managed more effectively with good habits.',
    body: [
      'Have regular eye examinations. Some eye diseases can progress without obvious early symptoms.',
      'Never ignore an eye injury. Use appropriate protective eyewear for hazardous work and sports.',
      'Treat eye infections promptly, and avoid using unprescribed eye drops, especially steroid-containing drops.',
      'Follow safe contact-lens practices: wash and dry hands before handling lenses and never use unsafe water or saliva to clean them.',
      'Control diabetes and other chronic conditions, which can damage the retina and threaten vision.',
      'Use screens sensibly: take regular visual breaks, blink frequently, and adjust glare and lighting.',
      'Protect children\u2019s vision by watching for squinting, sitting very close to screens, frequent eye rubbing, or headaches.',
      'Seek urgent eye care for sudden vision loss, severe eye pain, chemical exposure, major eye injury, or sudden new flashes and floaters.',
      'Protect your sight while you live. Share the gift of sight after life. Eye health awareness and eye donation awareness are connected by one common purpose: preventing avoidable blindness and bringing light into the lives of people affected by vision loss.'
    ]
  }
];
