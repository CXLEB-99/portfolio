import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    let score = 0;
    let gameOver = false;
    let hasScored = false;

    const robot = document.getElementById('robot')!;
    const obstacle = document.getElementById('obstacle')!;
    const scoreElement = document.getElementById('score')!;
    const gameMessage = document.getElementById('game-message')!;

    document.addEventListener('keydown', function (event) {
      if (event.code === 'Space' && !robot.classList.contains('jump') && !gameOver) {
        robot.classList.add('jump');
        setTimeout(() => {
          robot.classList.remove('jump');
        }, 300);
      }
    });

    setInterval(() => {
      if (gameOver) return;

      const robotBottom = parseInt(getComputedStyle(robot).getPropertyValue('bottom'));
      const obstacleRight = parseInt(getComputedStyle(obstacle).getPropertyValue('right'));

      const hitStart = 520;
      const hitEnd = 560;

      if (obstacleRight > hitStart && obstacleRight < hitEnd && robotBottom < 40) {
        gameMessage.innerText = 'Game Over! Refresh or Retry.';
        obstacle.style.animation = 'none';
        obstacle.style.display = 'none';
        gameOver = true;
      }

      if (obstacleRight + 40 < 50 && !hasScored) {
        score++;
        scoreElement.innerText = `Score: ${score}`;
        hasScored = true;
      }

      if (obstacleRight > 560) {
        hasScored = false;
      }
    }, 20);
  }

  restartGame(): void {
    window.location.reload();
  }
}