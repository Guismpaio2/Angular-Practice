import { Component, inject, signal } from '@angular/core';

// Interface
import { IProjects } from '../../interface/IProjects.interface';

// Material
import { MatDialog, MatDialogModule } from '@angular/material/dialog';

// Enum
import { EDialogPanelClass } from '../../enum/EDialogPanelClass.enum';

// Dialog
import { DialogProjectsComponent } from '../dialog/dialog-projects/dialog-projects.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  #dialog = inject(MatDialog);

  public arrayProjects = signal<IProjects[]>([
    {
      src: 'assets/img/projects/icons8-html.svg',
      alt: 'Projeto Portfólio - HTML e CSS',
      title: 'Portfólio - HTML e CSS',
      with: '100px',
      height: '51px',
      description:
        '<p>Aqui você verá mais sobre meu projeto de Portfólio Online! Utilizando HTML e CSS!</p>',
      links: [
        {
          name: 'Conheça mais!',
          href: 'https://github.com/Guismpaio2/Estudo-Portfolio',
        },
      ],
    },
    {
      src: 'assets/img/projects/icons8-typescript.svg',
      alt: 'Projetos TypeScript',
      title: 'Projetos TypeScript',
      with: '100px',
      height: '51px',
      description:
        '<p>Aqui você verá mais sobre meu estudo de TypeScript! Criei um portfólio funcional e também uma lista de tarefas!</p>',
      links: [
        {
          name: 'Conheça mais!',
          href: 'https://github.com/Guismpaio2/TypeScript-Estudo',
        },
      ],
    },
  ]);

  public openDialog(data: IProjects) {
    this.#dialog.open(DialogProjectsComponent, {
      data,
      panelClass: EDialogPanelClass.PROJECTS,
    });
  }
}
