/**
 * Long-form ICSDI 2026 content (About, Call for Papers, Tracks, Committees).
 * Source: "Webpage redev Conference 2026" document.
 */

export const THEME = 'Advancing Sustainability Through Innovation, Research & Global Collaboration';

export const ABOUT_PARAGRAPHS: string[] = [
  'The 2nd International Conference on Sustainable Development & Innovation (ICSDI 2026) will be held on 16–17 November 2026 at Bahrain Polytechnic, Kingdom of Bahrain, in a hybrid format. Organized by Gulf University, Kingdom of Bahrain, ICSDI 2026 brings together researchers, academics, policymakers, industry leaders, entrepreneurs, practitioners, and postgraduate researchers to explore how innovation, technology, policy, and interdisciplinary collaboration can accelerate sustainable development.',
  'Under the theme “Advancing Sustainability Through Innovation, Research & Global Collaboration,” the conference provides an international platform for presenting original research, exchanging evidence-based knowledge, showcasing innovative practices, and developing collaborative responses to complex sustainability challenges.',
  'ICSDI 2026 is aligned with the United Nations Sustainable Development Goals (SDGs) and adopts an interdisciplinary approach that recognizes the interconnected nature of environmental, economic, technological, and social dimensions of sustainable development. Rather than treating sustainability as a collection of isolated challenges, the conference encourages research that examines the relationships between technology, people, organizations, institutions, economies, and the environment.',
  'The conference particularly welcomes research that moves beyond identifying sustainability challenges toward developing innovative, scalable, measurable, and actionable solutions. Contributions are encouraged from established scholars, emerging researchers, industry professionals, policymakers, government institutions, civil society organizations, and postgraduate students.',
  'ICSDI 2026 will feature keynote addresses, research paper presentations, thematic sessions, expert panels, interactive discussions, innovation-oriented sessions, and networking opportunities, creating a platform for meaningful dialogue between academia, industry, government, and society.'
];

export const AUDIENCE: string[] = [
  'Academics and researchers',
  'University and postgraduate students',
  'Policymakers and government representatives',
  'Industry professionals and business leaders',
  'Entrepreneurs and innovators',
  'Sustainability and ESG professionals',
  'Technology and engineering professionals',
  'NGOs and civil society organizations',
  'Research institutions and international organizations'
];

export const AUDIENCE_CLOSING =
  'ICSDI 2026 invites participants to share knowledge, challenge conventional thinking, develop new collaborations, and contribute to solutions for a sustainable future.';

export const CFP_PARAGRAPHS: string[] = [
  'The 2nd International Conference on Sustainable Development & Innovation (ICSDI 2026) invites researchers, academics, policymakers, industry professionals, entrepreneurs, practitioners, and postgraduate researchers to submit original research addressing contemporary challenges and opportunities in sustainable development and innovation.',
  'ICSDI 2026 welcomes empirical, conceptual, theoretical, methodological, applied, and interdisciplinary research, as well as evidence-based case studies and innovative practices.',
  'Submissions may address one or more of the United Nations Sustainable Development Goals and are particularly encouraged where they demonstrate clear implications for innovation, policy, practice, technology, society, or sustainable development outcomes.'
];

export const SDG_TITLES: Record<number, string> = {
  1: 'No Poverty', 2: 'Zero Hunger', 3: 'Good Health and Well-being',
  4: 'Quality Education', 5: 'Gender Equality', 6: 'Clean Water and Sanitation',
  7: 'Affordable and Clean Energy', 8: 'Decent Work and Economic Growth',
  9: 'Industry, Innovation and Infrastructure', 10: 'Reduced Inequalities',
  11: 'Sustainable Cities and Communities', 12: 'Responsible Consumption and Production',
  13: 'Climate Action', 14: 'Life Below Water', 15: 'Life on Land',
  16: 'Peace, Justice and Strong Institutions', 17: 'Partnerships for the Goals'
};

export function sdgImage(n: number): string {
  return `img/sdg/sdg-${n.toString().padStart(2, '0')}.png`;
}

export function sdgLabel(n: number): string {
  return `SDG ${n}: ${SDG_TITLES[n] ?? ''}`;
}

export interface Track {
  number: number;
  title: string;
  icon: string;
  accent: string;
  description: string;
  topics: string[];
  sdgs: number[];
}

export const TRACKS: Track[] = [
  {
    number: 1,
    title: 'Sustainable Business, Economics & Finance',
    icon: 'bi-graph-up-arrow',
    accent: '#047857',
    description:
      'This track explores how organizations, markets, financial systems, and economic policies can contribute to sustainable and inclusive development.',
    topics: [
      'Sustainable business models and strategies',
      'ESG, corporate sustainability and responsible business',
      'Sustainable finance and impact investing',
      'Green finance and climate finance',
      'Sustainable entrepreneurship and innovation',
      'Social entrepreneurship and inclusive business',
      'Circular economy and business model innovation',
      'Sustainable supply chains and procurement',
      'Responsible investment and sustainable financial markets',
      'Sustainable consumption and consumer behaviour',
      'Corporate governance and sustainability',
      'CSR and corporate accountability',
      'Sustainable tourism and hospitality',
      'Green marketing and sustainable marketing',
      'Sustainable economic development',
      'Inclusive growth and poverty reduction',
      'Sustainable workforce and decent work'
    ],
    sdgs: [1, 5, 8, 10, 12, 13, 16, 17]
  },
  {
    number: 2,
    title: 'Digital Transformation, Artificial Intelligence & Emerging Technologies',
    icon: 'bi-cpu',
    accent: '#0891b2',
    description:
      'This track focuses on the role of digital technologies and emerging innovations in creating sustainable, resilient, and inclusive societies.',
    topics: [
      'Artificial intelligence and sustainable development',
      'Generative AI and sustainability',
      'Responsible and ethical AI',
      'Machine learning and data-driven sustainability',
      'Big data and sustainability analytics',
      'Internet of Things and smart systems',
      'Blockchain and sustainable ecosystems',
      'Digital twins and sustainable infrastructure',
      'Smart cities and intelligent communities',
      'Digital transformation and sustainable organizations',
      'Industry 4.0 and Industry 5.0',
      'Green computing and sustainable ICT',
      'Digital platforms and sustainable innovation',
      'Cybersecurity, digital trust and resilience',
      'Technology adoption for sustainable development',
      'Digital inclusion and the digital divide',
      'Emerging technologies for climate and environmental solutions'
    ],
    sdgs: [4, 8, 9, 10, 11, 12, 13, 17]
  },
  {
    number: 3,
    title: 'Climate Change, Environmental Sustainability & Natural Resources',
    icon: 'bi-tree',
    accent: '#16a34a',
    description:
      'This track addresses environmental challenges and innovative approaches to protecting ecosystems, managing natural resources, and building climate resilience.',
    topics: [
      'Climate change mitigation and adaptation',
      'Climate resilience and disaster risk reduction',
      'Environmental sustainability',
      'Biodiversity and ecosystem conservation',
      'Sustainable land management',
      'Marine and coastal sustainability',
      'Blue economy',
      'Sustainable water management',
      'Water security and sanitation',
      'Waste management and resource recovery',
      'Pollution prevention and environmental remediation',
      'Environmental monitoring and assessment',
      'Nature-based solutions',
      'Ecosystem restoration',
      'Sustainable agriculture and food systems',
      'Environmental policy and governance',
      'Climate-smart technologies',
      'Carbon management and decarbonization'
    ],
    sdgs: [2, 6, 7, 11, 12, 13, 14, 15]
  },
  {
    number: 4,
    title: 'Energy, Green Technologies & Sustainable Infrastructure',
    icon: 'bi-lightning-charge',
    accent: '#ea580c',
    description:
      'This track explores technological and engineering solutions for the transition toward low-carbon, resource-efficient, and resilient infrastructure.',
    topics: [
      'Renewable and clean energy',
      'Solar, wind and emerging energy technologies',
      'Energy efficiency and conservation',
      'Energy storage and smart grids',
      'Hydrogen and alternative fuels',
      'Low-carbon technologies',
      'Green engineering',
      'Sustainable construction',
      'Green buildings and energy-efficient buildings',
      'Sustainable infrastructure',
      'Resilient infrastructure systems',
      'Sustainable transportation and mobility',
      'Electric and autonomous mobility',
      'Industrial decarbonization',
      'Smart infrastructure',
      'Sustainable manufacturing',
      'Resource-efficient production',
      'Life-cycle assessment and sustainable design'
    ],
    sdgs: [6, 7, 9, 11, 12, 13]
  },
  {
    number: 5,
    title: 'Sustainable Cities, Communities & Urban Futures',
    icon: 'bi-buildings',
    accent: '#0d9488',
    description:
      'This track examines how cities and communities can become more resilient, inclusive, intelligent, and sustainable.',
    topics: [
      'Sustainable urban development',
      'Smart cities and communities',
      'Urban resilience',
      'Sustainable urban planning',
      'Sustainable housing',
      'Smart mobility and transportation',
      'Urban energy systems',
      'Urban environmental management',
      'Digital cities and urban technologies',
      'Inclusive cities and communities',
      'Sustainable tourism destinations',
      'Urban climate resilience',
      'Community participation and social innovation',
      'Sustainable public services',
      'Urban governance',
      'Disaster-resilient cities',
      'Heritage, culture and sustainable development'
    ],
    sdgs: [9, 10, 11, 12, 13, 16]
  },
  {
    number: 6,
    title: 'Health, Education, Society & Inclusive Development',
    icon: 'bi-people',
    accent: '#c2410c',
    description:
      'This track focuses on the human and social dimensions of sustainable development, with particular emphasis on health, education, inclusion, equality, and quality of life.',
    topics: [
      'Sustainable healthcare systems',
      'Digital health and health technologies',
      'Public health and well-being',
      'Mental health and social well-being',
      'Health equity and accessibility',
      'Sustainable education',
      'Digital learning and educational technology',
      'AI in education',
      'Education for sustainable development',
      'Future skills and employability',
      "Gender equality and women's empowerment",
      'Social inclusion and equity',
      'Poverty and vulnerability',
      'Youth development',
      'Social innovation',
      'Community resilience',
      'Migration and sustainable development',
      'Human rights and sustainable development'
    ],
    sdgs: [1, 3, 4, 5, 10]
  },
  {
    number: 7,
    title: 'Governance, Policy, Ethics & Institutional Sustainability',
    icon: 'bi-bank',
    accent: '#076250',
    description:
      'This track examines the institutional, regulatory, ethical, and policy dimensions required to achieve sustainable development.',
    topics: [
      'Sustainability governance',
      'Public policy and sustainable development',
      'ESG governance and accountability',
      'Institutional sustainability',
      'Sustainable public administration',
      'Policy innovation',
      'Environmental and climate policy',
      'AI governance and regulation',
      'Technology ethics',
      'Data governance and privacy',
      'Corporate accountability',
      'Transparency and responsible innovation',
      'Sustainable development indicators',
      'SDG measurement and evaluation',
      'Sustainability reporting and assurance',
      'Social justice and sustainable development',
      'Peace, justice and strong institutions',
      'Regulatory innovation',
      'Multi-stakeholder governance'
    ],
    sdgs: [5, 10, 12, 13, 16, 17]
  },
  {
    number: 8,
    title: 'Innovation, Entrepreneurship & Cross-Sector Collaboration',
    icon: 'bi-lightbulb',
    accent: '#0e7490',
    description:
      'This track focuses on transformative ideas, entrepreneurial approaches, collaborative innovation, and practical solutions capable of creating measurable sustainable impact.',
    topics: [
      'Sustainable innovation',
      'Social and technological innovation',
      'Sustainable entrepreneurship',
      'Green startups and entrepreneurial ecosystems',
      'Innovation ecosystems',
      'University–industry collaboration',
      'Public–private partnerships',
      'Open and collaborative innovation',
      'Living labs and experimental approaches',
      'Innovation for social impact',
      'Technology commercialization',
      'Research-to-practice translation',
      'Impact measurement',
      'Innovation policy',
      'Future economies and emerging industries',
      'Cross-sector partnerships',
      'SDG partnerships',
      'Scaling sustainable solutions'
    ],
    sdgs: [8, 9, 10, 11, 12, 13, 17]
  }
];

export const CONTRIBUTION_TYPES: string[] = [
  'Original empirical research',
  'Conceptual and theoretical papers',
  'Systematic literature reviews',
  'Bibliometric and science-mapping studies',
  'Case studies',
  'Applied research',
  'Policy-oriented research',
  'Industry and practitioner case studies',
  'Interdisciplinary research',
  'Research-in-progress with substantial preliminary findings'
];

export const SUBMISSION_SCOPE: string[] = [
  'Present original and unpublished research.',
  'Demonstrate a clear contribution to sustainable development and/or innovation.',
  'Clearly identify the research problem, methodology or conceptual approach, and key findings or expected contribution.',
  'Indicate the relevant ICSDI track and SDG alignment.',
  'Not be simultaneously submitted to another conference or publication outlet.'
];

export const SUBMISSION_CLOSING =
  'Authors are encouraged to demonstrate how their research can contribute to theory, policy, industry practice, technology development, societal well-being, environmental sustainability, or measurable SDG outcomes.';

export interface Member {
  name: string;
  role?: string;
  org?: string;
  /** Path under public/, e.g. img/committee/name.jpg */
  photo?: string;
}

export function memberInitials(name: string): string {
  return name
    .replace(/^(Prof|Dr)\.?\s+/i, '')
    .split(/\s+/)
    .filter((w) => /^[A-Za-z]/.test(w))
    .slice(0, 2)
    .map((w) => w[0].toUpperCase())
    .join('');
}

export interface Committee {
  title: string;
  icon: string;
  /** Hide the initials placeholder for members without a photo. */
  noAvatars?: boolean;
  members: Member[];
}

export const COMMITTEES: Committee[] = [
  {
    title: 'Conference Chairperson',
    icon: 'bi-award',
    members: [
      {
        name: 'Prof. Mohanad Ismael Ibrahim Al Firas',
        role: 'President of Gulf University',
        photo: 'img/committee/mohanad-alfiras.jpeg'
      }
    ]
  },
  {
    title: 'Steering Committee',
    icon: 'bi-compass',
    members: [
      { name: 'Dr. Meryem Fati', role: 'Vice President for Academic Affairs', org: 'University of Bahrain', photo: 'img/committee/meryem-fati.jpeg' },
      { name: 'Dr. Mohammed Isam', photo: 'img/committee/mohammed-isam.jpg' },
      { name: 'Dr. Siddiq Bala', role: 'Dean', org: 'College of Administrative and Financial Sciences', photo: 'img/committee/siddiq-bala.png' },
      { name: 'Dr. Naglaa El Gammal', role: 'Dean', org: 'College of Communication and Media Technologies', photo: 'img/committee/naglaa-elgammal.jpg' },
      { name: 'Dr. Aseel Abdulsalam Al Ayash', role: 'Dean', org: 'College of Engineering', photo: 'img/committee/aseel-abdulsalam.jpg' },
      { name: 'Prof. Firas Mohammed', role: 'Dean', org: 'College of Law', photo: 'img/committee/firas-mohammed.jpg' }
    ]
  },
  {
    title: 'Organizing Committee',
    icon: 'bi-people',
    members: [
      { name: 'Dr. Abu Bashar', role: 'Chair University Research Council', org: 'College of Communication and Media Technologies', photo: 'img/committee/abu-bashar.jpg' },
      { name: 'Dr. Mohammed Saied', role: 'Chair of the College Research Council', org: 'College of Administrative and Financial Sciences', photo: 'img/committee/mohammed-saied.jpg' },
      { name: 'Dr. Jain Tony', role: 'Chair of the College Research Council', org: 'College of Engineering', photo: 'img/committee/jain-tony.png' },
      { name: 'Dr. Heba Alsaleh', role: 'Chair of the College Research Council', org: 'College of Law' }
    ]
  },
  {
    title: 'International Scientific & Technical Committee',
    icon: 'bi-globe2',
    noAvatars: true,
    members: [
      { name: 'Dr. Brighton Nyagadza', org: 'York St. John University, London, England, United Kingdom' },
      { name: 'Dr. Umair Ahmed', org: 'Delaware State University, USA' },
      { name: 'Dr. Mohammad Ahmad Mohammad AlOmari', org: 'Alain University, UAE' },
      { name: 'Dr Ramzan Sama', org: 'Jaipuria Institute of Management, Jaipur, India' },
      { name: 'Dr. Omar Durrah', org: 'Dhofar University, Oman' },
      { name: 'Dr. Muhammed Anaz Khan', org: 'University of Bisha, Saudi Arabia' },
      { name: 'Dr. Karthikeyan S.', org: 'Jaipur National University – Ras Al Khaimah Campus, United Arab Emirates' },
      { name: 'Dr. Rajkumar Palaniappan', org: 'University of Technology Bahrain, Kingdom of Bahrain' },
      { name: 'Dr. Mustafa Raza Rabbani', org: 'University of Khorfakkan, Sharjah, UAE' },
      { name: 'Dr. Mustafa Kamal', org: 'Saudi Electronic University, Saudi Arabia' },
      { name: 'Mohd Danish Kirmani', org: 'IILM University, India' },
      { name: 'Dr. AL-Baraa Abdulrahman Al-Mekhlafi', org: 'Islamic Science University of Malaysia' }
    ]
  }
];
