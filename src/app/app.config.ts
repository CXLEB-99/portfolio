// src/app/app.config.ts
import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes'; // you're already using this

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes)]
};
