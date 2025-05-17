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
      title: 'In-N-Out Books',
      image: 'assets/icons/mongodb.svg',
      description: 'A RESTful API and full-stack project simulating book management using Express and MongoDB.',
      technologies: 'Node.js, Express, MongoDB, Jest',
      link: 'https://github.com/CXLEB-99/in-n-out-books'
    },
    {
      title: 'BioSite Project',
      image: 'assets/icons/html5.svg',
      description: 'A responsive, multi-page biography site built using HTML/CSS and GitHub Pages.',
      technologies: 'HTML, CSS, GitHub Pages',
      link: 'https://github.com/CXLEB-99/bioSite'
    },
    {
      title: 'Intro to NoSQL Coursework',
      image: 'assets/icons/python.svg',
      description: 'Hands-on assignments and code examples exploring NoSQL databases using both Python and JavaScript. Coursework covers querying, data modeling, aggregation, and practical database operations to build foundational skills in modern data management.',
      technologies: 'MongoDB, Python, JavaScript',
      link: 'https://github.com/CXLEB-99/web-335'
    },
    {
      title: 'Node.js Coursework',
      image: 'assets/icons/nodejs.svg',
      description: 'Coursework and practical examples in Node.js application development and server-side JavaScript.',
      technologies: 'Node.js, JavaScript',
      link: 'https://github.com/CXLEB-99/web-340'
    },
    {
      title: 'RESTful API Design',
      image: 'assets/icons/swagger.svg',
      description: 'RESTful API architecture and best practices using Express.js. Includes hands-on assignments with routing, middleware, and API security.',
      technologies: 'Node.js, Express.js, REST, Swagger',
      link: 'https://github.com/CXLEB-99/web-420'
    }
  ];

  placeholderCount = Array(2); // Keep two "Coming Soon" placeholders
}