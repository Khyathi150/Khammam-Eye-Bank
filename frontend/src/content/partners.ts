export interface PartnerGroup {
  category: string;
  partners: string[];
}

export const partnerGroups: PartnerGroup[] = [
  { category: 'Medical Colleges', partners: ['GGH Khammam (Government General Hospital)'] },
  {
    category: 'NGOs',
    partners: ['Hindu Smasana Vatikala Nirvahana Committee, Khammam', 'Midday Daily Meals Welfare Society']
  },
  {
    category: 'Government Organisations',
    partners: [
      'District Blindness Control Society, Khammam, under NPCBVI'
    ]
  },
  { category: 'International Partners', partners: ['To be updated'] }
];
