import type { ElementType } from 'react';
import ChatIcon from '@mui/icons-material/Chat';
import BuildIcon from '@mui/icons-material/Build';
import PsychologyIcon from '@mui/icons-material/Psychology';
import GroupsIcon from '@mui/icons-material/Groups';

export interface SkillData {
  icon: ElementType;
  title: string;
  description: string;
  reverse: boolean;
}

export const enSkills: SkillData[] = [
  {
    icon: ChatIcon,
    title: 'Effective Communication',
    description: 'Used effective communication skills to perfom public speeches when talking in daily meetings and giving the client project specifications and also participating in team discussions',
    reverse: false,
  },
  {
    icon: GroupsIcon,
    title: 'Teamwork',
    description: 'Used interpersonal skills to collaborate with other programmers or people involucrated in the projects.',
    reverse: true,
  },
  {
    icon: PsychologyIcon,
    title: 'Critical Thinking',
    description: 'Taught myself how to find the best approach to solve a problem or implementing a functionality taking into consideration critical factors such as performance, productivity, time and good practices',
    reverse: false,
  },
  {
    icon: BuildIcon,
    title: 'Problem Solving',
    description: "Since i started my journey through programming i've improve my problem solving skills by analytical and logic thinking and researching",
    reverse: true,
  },
];

export const esSkills: SkillData[] = [
  {
    icon: ChatIcon,
    title: 'Comunicacion Efectiva',
    description: 'Utilizar habilidades de comunicaci\u00f3n eficaces para hablar en p\u00fablico en las reuniones diarias y dar las especificaciones del proyecto al cliente, as\u00ed como participar en los debates del equipo.',
    reverse: false,
  },
  {
    icon: GroupsIcon,
    title: 'Trabajo en Equipo',
    description: 'Utiliz\u00f3 habilidades interpersonales para colaborar con otros programadores o personas implicadas en los proyectos.',
    reverse: true,
  },
  {
    icon: PsychologyIcon,
    title: 'Pensamiento Cr\u00edtico',
    description: 'He aprendido a encontrar el mejor enfoque para resolver un problema o implantar una funcionalidad teniendo en cuenta factores cr\u00edticos como el rendimiento, la productividad, el tiempo y las buenas pr\u00e1cticas.',
    reverse: false,
  },
  {
    icon: BuildIcon,
    title: 'Resoluci\u00f3n de problemas',
    description: 'Desde que comenc\u00e9 mi andadura en la programaci\u00f3n he mejorado mi capacidad de resoluci\u00f3n de problemas mediante el an\u00e1lisis, el pensamiento l\u00f3gico y la investigaci\u00f3n.',
    reverse: true,
  },
];
