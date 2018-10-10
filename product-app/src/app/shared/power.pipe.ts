import { Pipe, PipeTransform} from "@angular/core";

@Pipe({
name: 'power'
//{{2 | power}}
//{{2 | power:3}}

})

export class PowerPipe implements PipeTransform {
        



transform(value: number, exponent:number=1) {
            return Math.pow(value,exponent);
        }
}