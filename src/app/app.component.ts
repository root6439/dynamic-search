import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { FormBuilder, FormControl, ReactiveFormsModule } from '@angular/forms';
import { Subscription } from 'rxjs';
import { AgeGroup, FormData, Nationality, PoliticalPosition, Race, Religion, Sex, SocialClass } from './shared/models/FormData.model';
import { User, userList } from './shared/models/User.model';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, MatToolbarModule, MatCheckboxModule, MatButtonModule, ReactiveFormsModule, MatTableModule, MatPaginatorModule, MatFormFieldModule, MatInputModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

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

  searchTerm = new FormControl('');

  displayedColumns = ['id', 'name', 'nationality', 'age', 'race', 'sex', 'familyIncome', 'religion', 'politicalPosition'];

  dataSource: MatTableDataSource<User>;
  filteredData: User[] = [];

  filterSub = new Subscription();

  constructor(private fb: FormBuilder) {
    this.dataSource = new MatTableDataSource(userList);
  }

  ngOnInit(): void {
    this.watchChanges();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  ngOnDestroy(): void {
    this.filterSub.unsubscribe();
  }

  watchChanges(): void {
    this.filterSub = this.dynamicSearchForm.valueChanges.subscribe((value: any) => {
      this.concatenateFilters(value);
    });
  }

  concatenateFilters(data: FormData): void {
    this.filteredData = userList;
    this.dataSource = new MatTableDataSource(this.filteredData);
    this.searchBySex(data.sex);
    this.searchByRace(data.race);
    this.searchByAgeGroup(data.ageGroup);
    this.searchBySocialClass(data.socialClass);
    this.searchByReligion(data.religion);
    this.searchByPoliticalPosition(data.politicalPosition);
  }

  searchBySex(data: Sex): void {
    let conditions: string[] = [];

    if (data.male) {
      conditions.push('aux.sex == "masculino"');
    }

    if (data.female) {
      conditions.push('aux.sex == "feminino"');
    }

    this.applySearch(conditions);
  }

  searchByRace(data: Race): void {
    let conditions: string[] = [];

    if (data.white) {
      conditions.push('aux.race == "branco"');
    }

    if (data.black) {
      conditions.push('aux.race == "negro"');
    }

    if (data.brown) {
      conditions.push('aux.race == "pardo"');
    }

    if (data.yellow) {
      conditions.push('aux.race == "amarelo"');
    }

    this.applySearch(conditions);
  }

  searchByAgeGroup(data: AgeGroup): void {
    let conditions: string[] = [];

    if (data.adult) {
      conditions.push('aux.age >= 21 && aux.age <= 60');
    }

    if (data.baby) {
      conditions.push('aux.age <= 2');
    }

    if (data.child) {
      conditions.push('aux.age >= 2 && aux.age <= 14');
    }

    if (data.elderly) {
      conditions.push('aux.age >= 60');
    }

    if (data.youth) {
      conditions.push('aux.age >= 14 && aux.age <= 21');
    }

    this.applySearch(conditions);
  }

  searchBySocialClass(data: SocialClass): void {
    let conditions: string[] = [];

    if (data.poor) {
      conditions.push('aux.familyIncome <= 1345.52');
    }

    if (data.middleClass) {
      conditions.push('aux.familyIncome => 1345.52 && aux.familyIncome <= 11687.23 ');
    }

    if (data.rich) {
      conditions.push('aux.familyIncome => 11687.23');
    }

    this.applySearch(conditions);
  }

  searchByReligion(data: Religion): void {
    let conditions: string[] = [];

    if (data.buddhist) {
      conditions.push('aux.religion == "budista"');
    }

    if (data.christian) {
      conditions.push('aux.religion == "cristao"');
    }

    if (data.hindu) {
      conditions.push('aux.religion == "hindu"');
    }

    if (data.jewish) {
      conditions.push('aux.religion == "judeu"');
    }

    this.applySearch(conditions);
  }

  searchByPoliticalPosition(data: PoliticalPosition): void {
    let conditions: string[] = [];

    if (data.left) {
      conditions.push('aux.politicalPosition == "direita"');
    }

    if (data.right) {
      conditions.push('aux.politicalPosition == "esquerda"');
    }

    this.applySearch(conditions);
  }

  searchByNationality(data: Nationality): void {
    let conditions: string[] = [];

    if (data.brazilian) {
      conditions.push('aux.nationality == "Brasileiro"');
    }

    if (data.foreigner) {
      conditions.push('aux.nationality != "Brasileiro"');
    }

    this.applySearch(conditions);
    this.setSortAndPaginator();
  }

  applySearch(conditions: string[]): void {
    if (conditions.length == 0) {
      return;
    }

    let query = conditions.toString().replace(/,/g, ' || ');
    let searchFunc = new Function('aux', `return ${query}`);
    this.filteredData = userList.filter((aux) => searchFunc(aux));
    this.dataSource = new MatTableDataSource(this.filteredData);
    this.setSortAndPaginator();
  }

  searchBy(searchTerm: string): void {
    this.filteredData = this.filteredData.filter((aux: User) => aux.name.includes(searchTerm) || aux.nationality.includes(searchTerm));
    this.dataSource = new MatTableDataSource(this.filteredData);
    this.setSortAndPaginator();
  }

  setSortAndPaginator(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
}
