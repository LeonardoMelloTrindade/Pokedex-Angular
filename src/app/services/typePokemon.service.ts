import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TypePokemonService {
  private selectedTypeSource = new BehaviorSubject<string>('Todos');
  selectedType$ = this.selectedTypeSource.asObservable();

  updateSelectedType(type: string) {
    this.selectedTypeSource.next(type);
  }
}
