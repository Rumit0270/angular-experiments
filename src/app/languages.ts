import { InjectionToken } from '@angular/core';

export const LanguageToken = new InjectionToken<string[]>('languages');

export const Languages = ['English', 'French', 'Spanish'];
