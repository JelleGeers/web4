import { Pipe, PipeTransform } from '@angular/core';
import { Examennaam } from './examennaam.model';

@Pipe({
  name: 'examennaamFilter'
})
export class ExamennaamFilterPipe implements PipeTransform {
  transform(examennamen: Examennaam[], name: string): Examennaam[] {
    if (!name || name.length === 0) {
      return examennamen;
    }
    return examennamen.filter(
      rec => rec.name && rec.name.toLowerCase().startsWith(name.toLowerCase())
    );
  }
}
