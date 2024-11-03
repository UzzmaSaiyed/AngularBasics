import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'star',
  standalone: true
})
export class StarPipe implements PipeTransform {

  transform(value: unknown, ...args: number[]): unknown {
    let stars = ""
    for (let i = 0; i < args[0]; i++) {
      stars += "*"
    }
    return value + stars
  }

}
