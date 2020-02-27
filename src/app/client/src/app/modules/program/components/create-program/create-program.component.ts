import { ResourceService, ConfigService, NavigationHelperService } from '@sunbird/shared';
import { ProgramsService, PublicDataService } from '@sunbird/core';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as _ from 'lodash-es';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-create-program',
  templateUrl: './create-program.component.html',
  styleUrls: ['./create-program.component.scss']
})
export class CreateProgramComponent implements OnInit, AfterViewInit {
	data;
  nameOfOrgani;
  public categoryList: {};
  pickerMinDate = new Date(new Date().setHours(0, 0, 0, 0));
  pickerMinDateForEndDate = new Date(new Date().setHours(0, 0, 0, 0));

  constructor(private programsService: ProgramsService, public resourceService: ResourceService,
    private config: ConfigService, private publicDataService: PublicDataService,
    private activatedRoute: ActivatedRoute, private router: Router, private navigationHelperService: NavigationHelperService) { }

  ngOnInit() {
  this.nameOfOrgani= "Name of organi";
    this.data =
    {
      'filteredOptions' :
      [{'name': 'NCERT', 'value': 'NCERT'}, {'name': 'CBSE', 'value': 'CBSE'},, {'name': 'ICSE', 'value': 'ICSE'},, {'name': 'UP', 'value': 'UP'}]
    }
  }

  ngAfterViewInit() {
  }
}
