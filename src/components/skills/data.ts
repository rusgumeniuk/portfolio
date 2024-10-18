import { Skill, Technologies, Tools } from '../../models/skills';

interface SkillGroup {
  title: string;
  skills: Skill[];
}

export const SkillGroups: SkillGroup[] = [
  {
    title: 'backend',
    skills: [
      { title: Technologies.AspNetApi, levelOfUsage: 'Commercial' },
      { title: Technologies.MassTransit, levelOfUsage: 'Commercial' },
      { title: Technologies.SignalR, levelOfUsage: 'Commercial' },
      { title: Technologies.FluentAssertion, levelOfUsage: 'Commercial' },
      { title: Technologies.FluentValidation, levelOfUsage: 'Commercial' },
      { title: Technologies.UnitTests, levelOfUsage: 'Commercial' },
      { title: Technologies.IntegrationTests, levelOfUsage: 'Commercial' },
      { title: Technologies.OpenTelemetry, levelOfUsage: 'Commercial' },
      { title: Technologies.Cqrs, levelOfUsage: 'Commercial' },
      { title: Technologies.DomainDrivenDesign, levelOfUsage: 'Commercial' },
      { title: Technologies.Xamarin, levelOfUsage: 'NonCommercial' },
      { title: Technologies.WPF, levelOfUsage: 'NonCommercial' },
      { title: Technologies.ModelViewViewModel, levelOfUsage: 'NonCommercial' },
      { title: Technologies.Blazor, levelOfUsage: 'NonCommercial' },
    ],
  },
  {
    title: 'frontend',
    skills: [
      { title: Technologies.Typescript, levelOfUsage: 'Commercial' },
      { title: Technologies.Angular, levelOfUsage: 'Commercial' },
      { title: Technologies.React, levelOfUsage: 'Commercial' },
      { title: Technologies.Redux, levelOfUsage: 'Commercial' },
      { title: Technologies.Saga, levelOfUsage: 'Commercial' },
      { title: Technologies.Html, levelOfUsage: 'Commercial' },
      { title: Technologies.Css, levelOfUsage: 'Commercial' },
    ],
  },
  {
    title: 'database',
    skills: [
      { title: Technologies.PostgreSql, levelOfUsage: 'Commercial' },
      { title: Technologies.EntityFrameworkCore, levelOfUsage: 'Commercial' },
      { title: Technologies.Dapper, levelOfUsage: 'Commercial' },
      { title: Technologies.Mongo, levelOfUsage: 'Commercial' },
    ],
  },
  {
    title: 'tools',
    skills: [
      { title: Tools.OpenSearch, levelOfUsage: 'Commercial' },
      { title: Tools.Postman, levelOfUsage: 'Commercial' },
      { title: Tools.AWS, levelOfUsage: 'Commercial' },
      { title: Tools.Docker, levelOfUsage: 'Commercial' },
      { title: Tools.VisualStudio, versions: ['2022'] },
      { title: Tools.Git, levelOfUsage: 'Commercial' },
      { title: Tools.GitHub, levelOfUsage: 'Commercial' },
      { title: Tools.Confluence, levelOfUsage: 'Commercial' },
      { title: Tools.Jira, levelOfUsage: 'Commercial' },
      { title: Tools.VsCode, levelOfUsage: 'Commercial' },
      { title: Tools.GitLab, levelOfUsage: 'Commercial' },
      { title: Tools.Postman },
    ],
  },
];
