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
    const robot = document.getElementById('robot')!;
    const obstacle = document.getElementById('obstacle')!;
    const gameMessage = document.getElementById('game-message')!;
    const scoreElement = document.getElementById('score')!;

    let score = 0;
    let gameOver = false;
    let hasScored = false;

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

      // Collision detection window
      const robotHitZoneStart = 540;
      const robotHitZoneEnd = 560;

      // Collision detection (easy mode)
      if (
        obstacleRight > robotHitZoneStart &&
        obstacleRight < robotHitZoneEnd &&
        robotBottom < 40
      ) {
        gameMessage.innerText = 'Game Over! Refresh to try again.';
        obstacle.style.animation = 'none';
        obstacle.style.display = 'none';
        gameOver = true;
      }

      // Scoring logic (once per pass)
      if (obstacleRight < 40 && !hasScored) {
        score++;
        hasScored = true;
        scoreElement.innerText = `Score: ${score}`;
      }

      // Reset flag for scoring after obstacle reappears
      if (obstacleRight > 580) {
        hasScored = false;
      }
    }, 20);
  }
}
