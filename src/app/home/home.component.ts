import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class HomeComponent implements OnInit {
  name = 'Jerónimo Gascón Sánchez';
  date = new Date().getFullYear() - 2019;
  backend = new Date().getFullYear() - 2020;
  capgemini = new Date().getFullYear() - 2021;
  works = [1, 2, 3, 4];
  capgeminiIcons = ['javascript', 'node', 'awsBlack', 'dynamo'];
  teralcoIcons = ['javascript', 'typescript', 'node', 'mongo', 'angular'];
  nttIcons = [
    'javascript',
    'typescript',
    'node',
    'mongo',
    'postgre',
    'dynamo',
    'mysql',
    'angular',
    'react',
    'python',
  ];
  negritoIcons = ['javascript', 'typescript', 'node', 'mysql', 'angular'];
  geekshubsIcons = [
    'html',
    'css',
    'scss',
    'javascript',
    'node',
    'handlebars',
    'mysql',
    'mongo',
    'react',
    'redux',
    'angular',
    'typescript',
    'git',
    'github',
    'scrum',
  ];
  fpIcons = ['html', 'css', 'mysql', 'javascript'];

  constructor() {}

  ngOnInit(): void {}
}
