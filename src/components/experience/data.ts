import { Job } from '../../models/job';
import { Technologies } from '../../models/skills';

export const Jobs: Job[] = [
  {
    company: {
      title: 'Binary Studio',
      startedOn: new Date(2020, 7),
      endedOn: new Date(2024, 9, 15),
    },
    position: 'Full-stack .NET developer',
    projects: [
      {
        title: '#1',
        startedOn: new Date(2020, 7),
        endedOn: new Date(2021, 0),
        technologies: [
          Technologies.React,
          Technologies.Redux,
          Technologies.Saga,
          Technologies.Typescript,
          Technologies.AspNetApi,
          Technologies.EntityFrameworkCore,
          Technologies.Mongo,
          Technologies.PostgreSql,
          Technologies.SignalR,
        ],
        responsibilities: [
          'Implement new features on both backend and frontend, and demonstrate them',
          'Fix bugs, including those based on production data analysis',
        ],
      },
      {
        title: '#2 (internal project)',
        startedOn: new Date(2021, 0),
        endedOn: new Date(2021, 2),
        technologies: [
          Technologies.React,
          Technologies.Redux,
          Technologies.Saga,
          Technologies.Typescript,
          Technologies.Node,
          Technologies.Java,
        ],
        responsibilities: [
          'Fix bugs and add new features on both backend and frontend',
        ],
      },
      {
        title: '#3',
        startedOn: new Date(2021, 2),
        endedOn: new Date(2024, 9, 15),
        technologies: [
          Technologies.AspNetApi,
          Technologies.EntityFrameworkCore,
          Technologies.Dapper,
          Technologies.PostgreSql,
          Technologies.SignalR,
          Technologies.Cqrs,
          Technologies.DomainDrivenDesign,
          Technologies.Angular,
          Technologies.AWS,
          Technologies.OpenTelemetry,
          Technologies.UnitTests,
          Technologies.IntegrationTests,
          Technologies.Typescript,
        ],
        responsibilities: [
          'Plan, design, and develop new modules and services of varying complexity',
          'Implement services from scratch based on industry-standard protocols',
          'Discuss, plan, and estimate tasks of different levels (story, feature, epic)',
          'Create new and modify existing tasks',
          'Actively participate in PI planning, Sprint planning, Backlog refinement, and cross-team discussions',
          'Develop new features mainly on the backend, but also on the frontend when needed',
          'Create unit and integration tests for the developed features',
          'Collaborate with other backend and frontend developers, cloud and QA engineers',
          'Conduct code reviews for team members',
          'Develop custom application metrics and dashboards in Grafana, and integrate Grafana alerts with MS Teams',
          'Create and discuss Architecture Decision Records (ADR)',
          'Develop and demonstrate various Proof-of-Concepts (PoC)',
          'Migrate components of the old system from .NET Framework 4.7 to modern frameworks; support and resolve issues with IdentityServer 4',
          'Participate in the migration from GitLab to GitHub, including creating GitHub actions',
          'Create documentation; migrate business logs from Amazon FSx to OpenSearch',
        ],
      },
    ],
    additionalResponsibilities: [
      'Participate in the internal academy as a lecture owner, check homework assignments',
      'Participate in the internal mentorship programm as a mentor',
    ],
  },
];
