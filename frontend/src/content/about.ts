import presidentImg from '@/assets/images/about/president_a_raghava_reddy.jpeg';
import secretaryImg from '@/assets/images/about/Secretary.jpeg';
import treasurerImg from '@/assets/images/about/treasurer.jpeg';
import doctorImg from '@/assets/images/about/doctor.jpeg';
import managerImg from '@/assets/images/about/manager.jpeg';



export const mission =
  'To promote eye donation, facilitate safe and timely corneal retrieval, and support the restoration of sight through ethical service, public awareness, and strong healthcare partnerships.';

export const vision =
  'A society where preventable corneal blindness is reduced and every person has the opportunity to see through the gift of donated sight.';

export const coreValues: string[] = [
  'Compassion',
  'Dignity',
  'Transparency',
  'Ethical Service',
  'Timely Response',
  'Community Participation',
  'Collaboration'
];

export const history = `Khammam Eye Bank works to promote eye donation awareness and coordinate eye donation services in Khammam and surrounding communities. We operate four vans that transport the bodies of eye donors — from their homes to the burial ground, and from Khammam Government General Hospital Mortuary to their native places, across Andhra Pradesh and Telangana. These four vans were donated by philanthropic individuals and institutions including the State Bank of India.`;

export interface TeamMember {
  name: string;
  role: string;
  group: string;
  image?: string;
}

export const leadership: TeamMember[] = [
  { name: 'Dr. A. Raghav Reddy', role: 'President', group: 'Executive Leadership', image: presidentImg },
  { name: 'Er. R. A. Padmanabham', role: 'Secretary', group: 'Executive Leadership', image: secretaryImg },
  { name: 'T. Lakshmi Narayan', role: 'Treasurer', group: 'Executive Leadership', image: treasurerImg },
  { name: 'Dr. Charuta Puranik', role: 'Medical Director', group: 'Medical Leadership', image: doctorImg },
  { name: 'U. Kiran Kumar', role: 'Eye Bank Manager / Coordinator', group: 'Medical Leadership', image: managerImg },
  { name: 'Nageshwar Rao', role: 'Retrieval Team', group: 'Operational Team' },
  { name: 'Ambedkar', role: 'Counselling Team', group: 'Operational Team' },
  { name: 'Kajal Gople', role: 'Evaluation / Lab Team', group: 'Laboratory & Quality Assurance' },
  { name: 'Sammi Reddy', role: 'Quality & Documentation', group: 'Laboratory & Quality Assurance' }
];

export const foundingAdvisors: string[] = [
  'Ch. Hanumanth Rao',
  'V. Venkateshwara Rao',
  'CA. R. Ranganadh',
  'Lakshman Babu',
  'S. Shankar',
  'K. Kiran Kumar'
];

export const timeline = [
  {
    year: '2001',
    title: 'Khammam Eye Bank established',
    description:
      'Founded to promote eye donation awareness and coordinate eye donation services across Khammam and surrounding communities.'
  },
  {
    year: 'Ongoing',
    title: 'Four-van transport network',
    description:
      'Four vans, contributed by philanthropic donors and institutions including SBI, support the respectful transport of donors across Khammam, Telangana and Andhra Pradesh.'
  },
  {
    year: 'Ongoing',
    title: '24×7 emergency coordination',
    description:
      'Round-the-clock retrieval coordination with hospitals, families and the Khammam Government General Hospital mortuary.'
  }
];
