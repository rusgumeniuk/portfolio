import { Certificate, Diploma } from '../../models/education';

export const Certificates: Certificate[] = [
  {
    title: 'ADVANCED I / C1.1 ENGLISH COURSE',
    issuedOn: new Date(2022, 0, 27),
    issuer: 'Green Forest',
    link: 'https://my.greenforest.com.ua/certificate/7ccde45d3e2d468dc4e3f160214b2c577a66cb68',
  },
  {
    title: 'Binary Studio Academy .NET course',
    issuedOn: new Date(2020, 8),
    issuer: 'Binary Studio',
    link: 'https://drive.google.com/file/d/1F4RcwC1e7p59_tPNEpRn93WEYAlUDKrf/view?usp=sharing',
  },
  {
    title: 'Azure 204',
    issuedOn: new Date(2021, 2, 25),
    issuer: 'Microsoft',
  },
];

export const Diplomas: Diploma[] = [
  {
    qualification: `Bachelor's degree`,
    completionYear: 2020,
    subject: 'Software engineering',
    institution: {
      shortName: 'Kyiv Polytechnic Institute',
      fullName:
        'National Technical University of Ukraine "Igor Sikorsky Kyiv Polytechnic Institute"',
    },
  },
];
