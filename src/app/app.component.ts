import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Subscription, takeUntil } from 'rxjs';
import { FormData, Sex } from './shared/models/FormData.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    MatToolbarModule,
    MatCheckboxModule,
    MatButtonModule,
    ReactiveFormsModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit, OnDestroy {
  dynamicSearchForm = this.fb.group({
    race: this.fb.group({
      white: false,
      black: false,
      brown: false,
      yellow: false,
    }),
    ageGroup: this.fb.group({
      baby: false,
      child: false,
      youth: false,
      adult: false,
      elderly: false,
    }),
    sex: this.fb.group({
      male: false,
      female: false,
    }),
    socialClass: this.fb.group({
      poor: false,
      middleClass: false,
      rich: false,
    }),
    religion: this.fb.group({
      christian: false,
      hindu: false,
      buddhist: false,
      jewish: false,
    }),
    politicalPosition: this.fb.group({
      right: false,
      left: false,
    }),
  });

  data: any[];

  filterSub = new Subscription();

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.watchChanges();
    console.log(this.dynamicSearchForm.value);
  }

  ngOnDestroy(): void {
    this.filterSub.unsubscribe();
  }

  watchChanges(): void {
    this.filterSub = this.dynamicSearchForm.valueChanges.subscribe(
      (value: any) => {
        this.concatenateFilters(value);
      }
    );
  }

  concatenateFilters(data: FormData): void {
    this.searchBySex(data.sex);
  }

  searchBySex(data: Sex): void {
    let conditions: string[] = [];

    if (data.male) {
      conditions.push('aux == "masculino"');
    }

    if (data.female) {
      conditions.push('aux == "feminino"');
    }

    this.applySearch(conditions);
  }

  applySearch(conditions: string[]): void {
    if (conditions.length == 0) {
      return;
    }

    let query = conditions.toString().replace(/,/g, ' || ');
    let searchFunc = new Function('aux', `return ${query}`);
    this.data = this.data.filter((aux) => searchFunc(aux));
  }
}
