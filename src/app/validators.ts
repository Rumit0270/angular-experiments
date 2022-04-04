import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

const restrictedPasswords = ['password', 'test', '123'];

export function forbiddenPasswords(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const forbidden = restrictedPasswords.includes(control.value);

    return forbidden ? { forbiddenPassword: { value: control.value } } : null;
  };
}
