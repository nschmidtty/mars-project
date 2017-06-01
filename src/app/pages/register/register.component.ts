import { Component, OnInit } from '@angular/core';
import { Job } from '../../models/job';
import { JobsService } from '../../services/jobs.service';
import { Colonist } from '../../models/colonist';
import { ColonistService } from '../../services/colonist.service';
import { FormGroup, 
  FormControl, 
  FormBuilder, 
  Validators, 
  ValidatorFn, 
  AbstractControl }
  from '@angular/forms'


@Component({
  selector: 'app-encounters',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  providers: [JobsService, ColonistService]
})
export class RegisterComponent implements OnInit {

  jobs: Job[] = [];
  colonist: Colonist;

  constructor(private jobService: JobsService, 
              private colonistService: ColonistService) {  }

  ngOnInit() {
    this.jobService.getData()
        .subscribe((data) => {
          console.log(data);
          this.jobs = data.jobs;
        })  ;
  }

  postColonist(){
    const colonist = new Colonist("Billy", "2", "1");
    this.colonistService.postData(colonist)
                        .subscribe((newColonist) => {
                          console.log(newColonist);
                        });
  }

}