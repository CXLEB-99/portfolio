import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  projects = [
    {
      title: 'RPG Character Builder',
      image: 'assets/rpg.png',
      description: 'Built with Angular, this app allows users to create custom RPG characters.',
      technologies: 'Angular, TypeScript, SCSS',
      link: 'https://github.com/yourusername/rpg-character-builder'
    },
    {
      title: 'In-N-Out Books API',
      image: 'assets/books.png',
      description: 'A Node.js and MongoDB REST API for managing books and users.',
      technologies: 'Node.js, Express, Jest, MongoDB',
      link: 'https://github.com/yourusername/in-n-out-books'
    }
  ];
}
