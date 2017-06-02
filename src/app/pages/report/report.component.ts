import {
  Component,
  OnInit
} from '@angular/core';
import {
  Aliens
} from '../../models/aliens';
import {
  AliensService
} from '../../services/aliens.service';
import {
  Report
} from '../../models/report';
import {
  ReportService
} from '../../services/report.service';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
  ValidatorFn,
  AbstractControl
}
  from '@angular/forms'

const cantBe = (value: string): ValidatorFn => {
  return (control: AbstractControl) => {
    return control.value === value ? {
      'Cant be this value': value
    } : null
  }
};

const tooOld = (age: string): ValidatorFn => {
  return (control: AbstractControl) => {
    return control.value > age ? {
      'Too old to go to Mars': age
    } : null
  }
};

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss'],
  providers: [AliensService, ReportService]
})
export class ReportComponent implements OnInit {

  aliens: Aliens[] = [];
  report: Report;
  reportForm: FormGroup;
  NO_ALIEN_SELECTED = "(none)";

  constructor(private alienService: AliensService,
    private reportService: ReportService) {
  }

  ngOnInit() {
    this.alienService.getData()
      .subscribe((data) => {
        console.log(data);
        this.aliens = data.aliens;
      });

    this.reportForm = new FormGroup({
      alien_id: new FormControl('', []),
      description: new FormControl('', []),
    });
  }

  // postAlien() {
  //   const report = new Report("Octospider", "2015-10-01", "Web Developer", "4");
  //   this.reportService.postData(report)
  //     .subscribe((newReport) => {
  //       console.log(newReport);
  //     });
  // }

  reported(e) {
    e.preventDefault();
    if (this.reportForm.invalid) {

    } else {
      const alien = this.reportForm.get('alien_id').value;
      const description = this.reportForm.get('description').value;
      const date = this.getFormatedDate()
      const colonist_id = window.localStorage.userID;
      
      const report = new Report(alien, date, description, colonist_id);
      this.reportService.postData(report)
        .subscribe((newReport) => {
          console.log(newReport);
        });
    }
  }

  getFormatedDate(){
    const date = new Date;
    return date.getFullYear() + '-' + ('0' + (date.getMonth() + 1)).slice(-2) + '-' + ('0' + date.getDate()).slice(-2);
  }

}