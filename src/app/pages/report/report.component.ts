import { Component, OnInit } from '@angular/core';
import { Aliens } from '../../models/aliens';
import { AliensService } from '../../services/aliens.service';
import { Report } from '../../models/report';
import { ReportService } from '../../services/report.service';

@Component({
  selector: 'app-encounters',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss'],
  providers: [AliensService, ReportService]
})
export class ReportComponent implements OnInit {

  aliens: Aliens[] = [];
  report: Report;

  constructor(private alienService: AliensService, 
              private reportService: ReportService) {

  }

  ngOnInit() {
    this.alienService.getData()
        .subscribe((data) => {
          console.log(data);
          this.aliens = data.aliens;
        })  ;
  }

  postAlien(){
    const report = new Report("Octospider", "2015-10-01", "Web Developer", "4");
    this.reportService.postData(report)
                        .subscribe((newReport) => {
                          console.log(newReport);
                        });
  }

}