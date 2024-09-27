import { SkillGroup, Technologies } from '../../models/skills';

export const SkillGroups: SkillGroup[] = [
  {
    title: 'backend',
    skills: [
      Technologies.AspNetApi,
      Technologies.MassTransit,
      Technologies.SignalR,
      Technologies.FluentAssertion,
      Technologies.FluentValidation,
      Technologies.UnitTests,
      Technologies.IntegrationTests,
      Technologies.OpenTelemetry,
      Technologies.Cqrs,
      Technologies.DomainDrivenDesign,
      Technologies.Xamarin,
      Technologies.WPF,
      Technologies.ModelViewViewModel,
    ],
  },
  {
    title: 'frontend',
    skills: [
      Technologies.Typescript,
      Technologies.Angular,
      Technologies.React,
      Technologies.Redux,
      Technologies.Saga,
    ],
  },
  {
    title: 'general',
    skills: [
      Technologies.OpenSearch,
      Technologies.Postman,
      Technologies.AWS,
      Technologies.Docker,
    ],
  },
  {
    title: 'database',
    skills: [
      Technologies.PostgreSql,
      Technologies.EntityFrameworkCore,
      Technologies.Dapper,
      Technologies.Mongo,
    ],
  },
  { title: 'soft', skills: ['Confluence'] },
];
