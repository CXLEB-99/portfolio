import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  projects = [
    {
      title: 'RPG Character Builder',
      image: 'assets/rpg.png',
      description: 'An Angular app to build and manage tabletop RPG characters.',
      technologies: 'Angular, TypeScript, SCSS',
      link: 'https://github.com/yourusername/rpg-character-builder'
    },
    {
      title: 'In-N-Out Books API',
      image: 'assets/books.png',
      description: 'A RESTful API for managing book records and user data.',
      technologies: 'Node.js, Express, MongoDB',
      link: 'https://github.com/yourusername/in-n-out-books'
    }
  ];

  placeholderCount = Array(2); // Adjust as needed
}
