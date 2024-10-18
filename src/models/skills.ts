export interface Skill {
  title: string;
  levelOfUsage?: 'NonCommercial' | 'Commercial';
  versions?: string[];
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
  MassTransit: 'MassTransit',
  FluentValidation: 'FluentValidation',
  FluentAssertion: 'FluentAssertion',
  WPF: 'WPF',
  Xamarin: 'Xamarin',
  ModelViewViewModel: 'MVVM',
  Blazor: 'Blazor',
};

export const Tools = {
  Docker: 'Docker',
  AWS: 'AWS',
  OpenSearch: 'OpenSearch',
  Postman: 'Postman',
  Confluence: 'Confluence',
  Jira: 'Jira',
  VisualStudio: 'Visual Studio',
  VsCode: 'VS Code',
  Git: 'Git',
  GitHub: 'GitHub',
  GitLab: 'GitLab',
};
