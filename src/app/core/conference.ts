/**
 * Central source of truth for ICSDI 2026 conference data.
 * Content mirrors https://icsdi.gulfuniversity.edu.bh/2026/
 */

export const CONFERENCE = {
  shortName: 'ICSDI 2026',
  fullName: '2nd International Conference on Sustainable Development and Innovation',
  host: 'Gulf University, Kingdom of Bahrain',
  dates: '16 – 17 November 2026',
  datesShort: '16–17 Nov 2026',
  startDate: '2026-11-16T09:00:00+03:00',
  mode: 'Hybrid — Physical & Virtual',
  venue: 'The Art Hotel, Kingdom of Bahrain',
  email: 'conf@gulfuniversity.edu.bh',
  phone: '+973 3743 5993',
  links: {
    register: 'https://confmanage.com/account/RegisterUser/?id=92',
    springerPortal: 'https://confmanage.com/account/RegisterUser/?id=92',
    springerNature: 'https://www.springernature.com/gp',
    paperTemplate: 'springer-template-a4.docx',
    visaForm: 'https://forms.gle/ieBRksLKn2uryL1cA',
    ramada: 'https://www.ramadabahrain.com/'
  }
} as const;
