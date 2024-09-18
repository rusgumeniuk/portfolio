export interface Certificate {
  title: string;
  issuedOn: Date;
  issuer: string;
  link?: string
}

export interface Diploma {
  qualification: string;
  completionYear: number;
  subject: string;
  institution: {
    shortName: string,
    fullName: string
  }
}
