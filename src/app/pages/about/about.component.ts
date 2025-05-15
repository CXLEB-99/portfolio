import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { trigger, style, transition, animate } from '@angular/animations';

interface TerminalLine {
  command: string;
  response?: string;
  list?: string[];
  typing?: boolean;
}

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('300ms ease-in', style({ opacity: 1 }))
      ])
    ])
  ]
})
export class AboutComponent {
  terminalOutput: TerminalLine[] = [
    { command: 'whoami', typing: true }
  ];

  currentInput = '';
  isTyping = false;

  constructor() {
    this.typeResponse(
      'Caleb Goforth — A full-stack web developer who crafts thoughtful, human-centered digital experiences.',
      0
    );
  }

  handleCommand(): void {
    const input = this.currentInput.trim().toLowerCase();
    const index = this.terminalOutput.length;
    const line: TerminalLine = { command: this.currentInput, typing: true };

    this.terminalOutput.push(line);
    this.isTyping = true;

    switch (input) {
      case 'whoami':
        this.typeResponse(
          "I'm Caleb — a lifelong tinkerer turned software engineer. From building battle bots in high school robotics to full-stack web apps, I specialize in blending logic and creativity to solve real-world problems.",
          index
        );
        break;
      case 'skills':
        this.typeResponse(
          "I'm proficient in Angular, TypeScript, Node.js, and MongoDB. I write clean, maintainable code and love working on tools that empower people.",
          index
        );
        break;
      case 'interests':
        this.terminalOutput[index] = {
          command: this.currentInput,
          list: [
            '🧠 INTP — Analytical, curious, always learning',
            '🤖 FIRST Robotics Alumni — Where I fell in love with building',
            '🎮 Sci-fi, game design, and storytelling — I believe code can tell a story too'
          ]
        };
        break;
      case 'journey':
        this.typeResponse(
          "My journey started in a robotics pit with a notepad full of strategy notes and ended up in full-stack development. I love making tools that help people work, think, and play more effectively.",
          index
        );
        break;
      case 'open profile.jpg':
        this.terminalOutput[index] = {
          command: this.currentInput,
          typing: true
        };
        setTimeout(() => {
          this.terminalOutput[index].response =
            '<img src="assets/profile.jpg" alt="Caleb Goforth" class="terminal-avatar" />';
          this.terminalOutput[index].typing = false;
          this.isTyping = false;
        }, 300);
        break;
      case 'clear':
        this.terminalOutput = [];
        this.currentInput = '';
        return;
      default:
        this.typeResponse(
          "Command not found. Try 'whoami', 'skills', 'journey', 'interests', or 'open profile.jpg'.",
          index
        );
    }

    this.currentInput = '';
  }

  typeResponse(fullText: string, index: number): void {
    let charIndex = 0;
    const interval = setInterval(() => {
      const existing = this.terminalOutput[index];
      if (!existing.response) existing.response = '';
      existing.response += fullText[charIndex];
      charIndex++;

      if (charIndex === fullText.length) {
        clearInterval(interval);
        existing.typing = false;
        this.isTyping = false;
      }
    }, 15);
  }
}
