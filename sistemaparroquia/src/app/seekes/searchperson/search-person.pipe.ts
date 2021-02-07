import { Pipe, PipeTransform } from '@angular/core';
import { ListPerson, Person } from 'src/app/model/person';

@Pipe({
  name: 'searchPerson'
})
export class SearchPersonPipe implements PipeTransform {

  transform(listPerson:ListPerson[], searchValue:String): ListPerson[] {
    if(!listPerson || !searchValue){
      return listPerson;
    }

   
    return listPerson.filter(person=>
      person.lastname !== null && person.lastname.toLocaleLowerCase().includes(searchValue.toString())||
      person.firstname !== null && person.firstname.toLocaleLowerCase().includes(searchValue.toString())
    );

  }

}