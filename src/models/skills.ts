export interface Skill {
  title: string;
  levelOfUsage?: 'NonCommercial' | 'Commercial';
}

export interface SkillGroup {
  title: string;
  skills: Skill[];
}

export const Technologies = {
  React: 'React',
  Angular: 'Angular 16',
  Html: 'HTML5',
  Css: 'CSS3',
  Bootstrap: 'Bootstrap',
  AspNetApi: 'ASP.NET API',
  Redux: 'Redux',
  Typescript: 'TypeScript',
  Saga: 'Saga',
  EntityFrameworkCore: 'EF Core',
  Dapper: 'Dapper',
  Mongo: 'MongoDB',
  PostgreSql: 'PostgreSQL',
  SignalR: 'SignalR',
  Node: 'Node',
  Java: 'Java',
  DomainDrivenDesign: 'DDD',
  Cqrs: 'CQRS',
  UnitTests: 'Unit testing',
  IntegrationTests: 'Integration testing',
  OpenTelemetry: 'OpenTelemetry',
  Docker: 'Docker',
  MassTransit: 'MassTransit',
  AWS: 'AWS',
  FluentValidation: 'FluentValidation',
  FluentAssertion: 'FluentAssertion',
  OpenSearch: 'OpenSearch',
  WPF: 'WPF',
  Xamarin: 'Xamarin',
  ModelViewViewModel: 'MVVM',
  Postman: 'Postman',
};

// TODO: split into tools/apps
