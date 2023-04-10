import { Pipe, PipeTransform } from '@angular/core';
import { Advert } from './advert';

@Pipe({
  name: 'advertFilter'
})
export class AdvertFilterPipe implements PipeTransform {

  transform(value: Advert[], args?: string): Advert {
    return null;
  }

}
