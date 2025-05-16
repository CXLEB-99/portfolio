import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent {
  skills = [
    'HTML', 'CSS', 'JavaScript', 'Angular', 'Node.js', 'MongoDB', 'Python', 'Git'
  ];
}
