import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent {
  selectedItem = -1;

  bucketList = [
    {
      title: 'Build a virtual robotics game',
      description: 'Designing AI mechanics and user programming.',
      status: 'Planned'
    },
    {
      title: 'Launch a blog series for new devs',
      description: 'Writing and designing beginner-friendly guides.',
      status: 'In Progress'
    },
    {
      title: 'Work at a forward-thinking tech company',
      description: 'Finding the right opportunity to make an impact.',
      status: 'Started'
    }
  ];

  selectItem(index: number): void {
    this.selectedItem = index;
  }
}
