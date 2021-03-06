import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LayoutSidebarService {

  public sidebarMenuObservable: BehaviorSubject<any> = new BehaviorSubject<any>({});

  constructor() { }
}
