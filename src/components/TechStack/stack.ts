import type { ElementType } from 'react';
import {
  SiTypescript, SiJavascript, SiSharp, SiPython, SiRuby, SiPhp,
  SiReact, SiRubyonrails, SiDotnet, SiLaravel, SiJquery, SiBootstrap, SiMui, SiTailwindcss,
  SiPostgresql, SiMysql, SiMongodb, SiMariadb,
} from 'react-icons/si';
import { DiNodejs, DiMsqlServer, DiDatabase } from 'react-icons/di';
import { TbBrandVisualStudio } from 'react-icons/tb';

export interface TechBoxData {
  icon: ElementType;
  text: string;
  backgroundColor: string;
  color: string;
  skills: string[];
}

export const enLangStack: TechBoxData[] = [
  { backgroundColor: '#512BD4', color: 'white', icon: SiSharp, text: 'CSharp', skills: ['Dependency Injection', 'Generics', 'Interoperability', 'Attributes', 'Asynchrony', 'Interfaces and Structs', 'Classes and Abstraction', 'Polymorphism', '.NET Framework 3 ... 4.8', '.NET Core 3 ... 6'] },
  { backgroundColor: '#F7DF1E', color: '#000000', icon: SiJavascript, text: 'Javascript', skills: ['ES6', 'Modules', 'Async/Await', 'DOM Manipulation'] },
  { backgroundColor: '#777BB4', color: 'white', icon: SiPhp, text: 'PHP', skills: ['Laravel', 'Composer', 'PSR Standards', 'Eloquent ORM', 'Blade', 'REST APIs'] },
  { backgroundColor: '#3776AB', color: 'white', icon: SiPython, text: 'Python', skills: ['Fundamentals of the language', 'OOP in python', 'PiP', 'Python as scripting language'] },
  { backgroundColor: '#CC342D', color: 'white', icon: SiRuby, text: 'Ruby', skills: ['Fundamentals of the language', 'OOP in Ruby', 'Formatting', 'RVM', 'RubyGems', 'Sequel', 'PrawnPDF', 'Sinatra', 'Jekyll'] },
  { backgroundColor: '#3178C6', color: 'white', icon: SiTypescript, text: 'TypeScript', skills: ['Interfaces', 'Classes and Abstraction', 'Generics', 'Modules', 'TSX'] },
  { backgroundColor: '#5C2D91', color: 'white', icon: TbBrandVisualStudio, text: 'Visual Basic', skills: ['VB.NET', 'VB6', 'VBA'] },
];

export const esLangStack: TechBoxData[] = [
  { backgroundColor: '#512BD4', color: 'white', icon: SiSharp, text: 'CSharp', skills: ['Inyección de dependencias', 'Genericos', 'Interoperabilidad', 'Atributos', 'Asincronía', 'Interfaces y Structs', 'Clases y Abstracción', 'Polimorfismo', '.NET Framework 3 ... 4.8', '.NET Core 3 ... 6'] },
  { backgroundColor: '#F7DF1E', color: '#000000', icon: SiJavascript, text: 'Javascript', skills: ['ES6', 'Modulos', 'Async/Await', 'Manipulacion del DOM'] },
  { backgroundColor: '#777BB4', color: 'white', icon: SiPhp, text: 'PHP', skills: ['Laravel', 'Composer', 'Estándares PSR', 'Eloquent ORM', 'Blade', 'APIs REST'] },
  { backgroundColor: '#3776AB', color: 'white', icon: SiPython, text: 'Python', skills: ['Fundamentos del lenguaje', 'POO en python', 'PiP', 'Python as scripting language'] },
  { backgroundColor: '#CC342D', color: 'white', icon: SiRuby, text: 'Ruby', skills: ['Fundamentos del lenguaje', 'POO en Ruby', 'Formateo', 'RVM', 'RubyGems', 'Sequel', 'PrawnPDF', 'Sinatra', 'Jekyll'] },
  { backgroundColor: '#3178C6', color: 'white', icon: SiTypescript, text: 'TypeScript', skills: ['Interfaces', 'Clases y Abstracción', 'Genericos', 'Modulos', 'TSX'] },
  { backgroundColor: '#5C2D91', color: 'white', icon: TbBrandVisualStudio, text: 'Visual Basic', skills: ['VB.NET', 'VB6', 'VBA'] },
];

export const enFrameworkStack: TechBoxData[] = [
  { backgroundColor: '#512BD4', color: 'white', icon: SiDotnet, text: '.NET', skills: ['ASP.NET MVC', 'Blazor', 'WebForms', 'Web Apis', 'WinForms', 'Xamarin'] },
  { backgroundColor: '#7952B3', color: 'white', icon: SiBootstrap, text: 'Bootstrap', skills: ['Extend with SASS', 'Extend default components'] },
  { backgroundColor: '#0769AD', color: 'white', icon: SiJquery, text: 'JQuery', skills: ['AJAX', 'Event Handling', 'Extend functions'] },
  { backgroundColor: '#FF2D20', color: 'white', icon: SiLaravel, text: 'Laravel', skills: ['Eloquent', 'Blade', 'Artisan', 'Migrations', 'Middleware', 'Queues'] },
  { backgroundColor: '#007FFF', color: 'white', icon: SiMui, text: 'MUI', skills: ['Theming', 'Components', 'Responsive Design', 'SX Prop', 'Grid System'] },
  { backgroundColor: '#339933', color: 'white', icon: DiNodejs, text: 'NodeJS', skills: ['NPM', 'Handling files', 'OS manipulation', 'Threads'] },
  { backgroundColor: '#61DAFB', color: '#000000', icon: SiReact, text: 'ReactJS', skills: ['How React DOM works', 'Function components', 'Composition', 'Conditional Rendering', 'Handling Events'] },
  { backgroundColor: '#CC0000', color: 'white', icon: SiRubyonrails, text: 'Ruby On Rails', skills: ['Routing', 'ActiveRecord', 'Template Usage', 'I18N', 'Deployment'] },
  { backgroundColor: '#06B6D4', color: 'white', icon: SiTailwindcss, text: 'TailwindCSS', skills: ['Responsive Design'] },
];

export const esFrameworkStack: TechBoxData[] = [
  { backgroundColor: '#512BD4', color: 'white', icon: SiDotnet, text: '.NET', skills: ['ASP.NET MVC', 'Blazor', 'WebForms', 'Web Apis', 'WinForms', 'Xamarin'] },
  { backgroundColor: '#7952B3', color: 'white', icon: SiBootstrap, text: 'Bootstrap', skills: ['Extender con SASS', 'Extender componentes'] },
  { backgroundColor: '#0769AD', color: 'white', icon: SiJquery, text: 'JQuery', skills: ['AJAX', 'Manejo de Eventos', 'Extender Funciones'] },
  { backgroundColor: '#FF2D20', color: 'white', icon: SiLaravel, text: 'Laravel', skills: ['Eloquent', 'Blade', 'Artisan', 'Migrations', 'Middleware', 'Colas'] },
  { backgroundColor: '#007FFF', color: 'white', icon: SiMui, text: 'MUI', skills: ['Temas', 'Componentes', 'Diseño Responsivo', 'SX Prop', 'Sistema de Grillas'] },
  { backgroundColor: '#339933', color: 'white', icon: DiNodejs, text: 'NodeJS', skills: ['NPM', 'Manejo de Archivos', 'Manipulacion del SO', 'Hilos'] },
  { backgroundColor: '#61DAFB', color: '#000000', icon: SiReact, text: 'ReactJS', skills: ['Como el DOM de react funciona', 'Componentes de función', 'Composición', 'Renderizado Condicional', 'Manejo de Eventos'] },
  { backgroundColor: '#CC0000', color: 'white', icon: SiRubyonrails, text: 'Ruby On Rails', skills: ['Enrutamiento', 'ActiveRecord', 'Uso de Templates', 'I18N', 'Deployment'] },
  { backgroundColor: '#06B6D4', color: 'white', icon: SiTailwindcss, text: 'TailwindCSS', skills: ['Diseño Responsivo'] },
];

export const enDBStack: TechBoxData[] = [
  { backgroundColor: '#052FAD', color: 'white', icon: DiDatabase, text: 'IBM DB2', skills: ['Queries'] },
  { backgroundColor: '#003545', color: '#C0765A', icon: SiMariadb, text: 'MariaDB', skills: ['Queries', 'Triggers', 'Normalization'] },
  { backgroundColor: '#47A248', color: 'white', icon: SiMongodb, text: 'MongoDB', skills: ['Queries'] },
  { backgroundColor: '#CC2927', color: 'white', icon: DiMsqlServer, text: 'MSSQL', skills: ['Queries', 'Store procedures', 'Scalar Functions', 'Triggers', 'Rollbacks', 'Jobs', 'Normalization'] },
  { backgroundColor: '#4479A1', color: '#F29111', icon: SiMysql, text: 'MySQL', skills: ['Queries', 'Store procedures', 'Triggers', 'Normalization'] },
  { backgroundColor: '#336791', color: 'white', icon: SiPostgresql, text: 'PostgreSQL', skills: ['Queries', 'Triggers', 'Normalization'] },
];

export const esDBStack: TechBoxData[] = [
  { backgroundColor: '#052FAD', color: 'white', icon: DiDatabase, text: 'IBM DB2', skills: ['Queries'] },
  { backgroundColor: '#003545', color: '#C0765A', icon: SiMariadb, text: 'MariaDB', skills: ['Queries', 'Triggers', 'Normalización'] },
  { backgroundColor: '#47A248', color: 'white', icon: SiMongodb, text: 'MongoDB', skills: ['Queries'] },
  { backgroundColor: '#CC2927', color: 'white', icon: DiMsqlServer, text: 'MSSQL', skills: ['Queries', 'Stored procedures', 'Funciones escalares', 'Triggers', 'Rollbacks', 'Jobs', 'Normalización'] },
  { backgroundColor: '#4479A1', color: '#F29111', icon: SiMysql, text: 'MySQL', skills: ['Queries', 'Store procedures', 'Triggers', 'Normalización'] },
  { backgroundColor: '#336791', color: 'white', icon: SiPostgresql, text: 'PostgreSQL', skills: ['Queries', 'Triggers', 'Normalización'] },
];
