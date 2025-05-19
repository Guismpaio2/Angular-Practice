import { Component, signal } from '@angular/core';

// Interface
import { IExperiences } from '../../interface/IExperiences.interface';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss',
})
export class ExperiencesComponent {
  public arrayExperiences = signal<IExperiences[]>([
    {
      summary: {
        strong: 'HTML-CSS Portfólio',
        p: 'Asimov | Abril 2025',
      },
      text: '<p>Atuei no desenvolvimento de um projeto de portfólio pessoal, sendo responsável pela estruturação do conteúdo com HTML e pela criação de um layout visualmente atraente utilizando CSS.</p> <p> Implementei seções como sobre mim, projetos, habilidades e contato, garantindo responsividade e uma boa experiência de navegação em diferentes dispositivos. Trabalhei no alinhamento visual, escolha de paleta de cores, tipografia e organização dos elementos na página para refletir uma identidade profissional.</p>',
    },
    {
      summary: {
        strong: 'Lista de Tarefas',
        p: 'Asimov | Abril 2025',
      },
      text: '<p>Desenvolvi uma aplicação de lista de tarefas (To-Do List) utilizando TypeScript, com foco na tipagem estática e na organização do código.</p> <p>Implementei funcionalidades como adicionar, marcar como concluída e remover tarefas, garantindo uma lógica robusta e segura. Trabalhei com manipulação do DOM e armazenamento local (localStorage) para persistência dos dados, além de aplicar boas práticas de programação orientada a objetos e modularização do código para facilitar manutenção e escalabilidade.</p>',
    },
    {
      summary: {
        strong: 'Angular - Estudo',
        p: 'Asimov | Abril 2025',
      },
      text: '<p>Desenvolvi um portfólio pessoal utilizando Angular, com foco em componentização, roteamento e reutilização de código. </p> <p> Estruturei o projeto em módulos e componentes, implementando seções como apresentação, projetos, habilidades e contato. Utilizei data binding, diretivas e serviços para dinamizar o conteúdo e garantir uma navegação fluida.</p> <p> Apliquei estilização com CSS customizado e Angular Material para um design moderno e responsivo, além de boas práticas de organização de pastas, tipagem com TypeScript e integração com formulários reativos para a seção de contato.</p>',
    },
  ]);
}
