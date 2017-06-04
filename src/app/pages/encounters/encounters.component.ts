import {
  Component,
  OnInit
} from '@angular/core';
import {
  Encounter
} from '../../models/encounter';
import {
  EncountersService
} from '../../services/encounters.service';

@Component({
  selector: 'app-encounters',
  templateUrl: './encounters.component.html',
  styleUrls: ['./encounters.component.scss'],
  providers: [EncountersService]
})
export class EncountersComponent implements OnInit {

  encounters: Encounter[] = [];


  constructor(private encounterService: EncountersService) {

  }

  ngOnInit() {
    this.encounterService.getData()
      .subscribe((data) => {
        const re = /\d\d\d\d-\d\d-\d\d\b/g;
        let encountersFiltered: Encounter[] = [];
        let d = new Date;
        this.encounters = data.encounters;
        const sortedAndFiltered = this.encounters.filter((item) => {
          const re = /\d\d\d\d-\d\d-\d\d\b/g;
          const x = new Date(item.date);
          const y = new Date;
          if (item.date.match(re) && x < y) return true;
          return false;
        }).sort((a, b) => {

          const x = new Date(a.date);
          const y = new Date(b.date);

          if (x > y) return -1;
          if (x < y) return 1;
          else 0;

        });

        this.encounters = sortedAndFiltered

      });
  }
}






