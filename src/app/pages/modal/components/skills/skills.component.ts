import { Component } from '@angular/core';
import { DataProvider } from 'src/app/services/data.service';

@Component({
  selector: './jl-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent {
  data: any;
  constructor(private dataProvider: DataProvider) {
    this.data = this.dataProvider.data.skills;
  }
}
