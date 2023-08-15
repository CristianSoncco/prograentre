import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'camelCase'
})
export class CamelCasePipe implements PipeTransform {
  transform(value: string): string {
    const words = value.trim().split(/\s+/);
    const camelCaseWords = words.map((word, index) => {
      // if (index === 0) {
      //   return word.toLowerCase();
      // }
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    });
    return camelCaseWords.join('');
  }
}
