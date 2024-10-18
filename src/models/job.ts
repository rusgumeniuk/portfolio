export interface Job {
  company: Company;
  position: string;
  projects: JobProject[];
  additionalResponsibilities: string[];
}

export interface Company {
  title: string;
  startedOn: Date;
  endedOn: Date | null;
}

export interface JobProject {
  title: string;
  domain?: string;
  startedOn: Date;
  endedOn: Date | null;
  technologies: string[];
  responsibilities: string[];
}
