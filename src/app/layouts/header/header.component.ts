import { Component } from '@angular/core';
import { CinesService } from 'src/app/services/cines/cines.service';

interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  listCines: any[] = [];

  constructor(private cineService: CinesService) {}

  ngOnInit(): void {
    this.getCines();
  }

  getCines() {
    this.listCines = this.cineService.getDataCines();
  }
}
