import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Job } from '../models/job';

@Injectable()
export class JobsService {

  private REGISTER_URL = 'https://red-wdp-api.herokuapp.com/api/mars/jobs';

  constructor(private http: Http) { }

  getData() {
     return this.http.get(this.REGISTER_URL)
            .map(this.extractJobs);
  }

  extractJobs(res: Response) {
      const jobs = res.json();
      return jobs;
  }

}