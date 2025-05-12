import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Project } from '../project';
import { ProjectService } from '../project.service';
 
@Component({
  selector: 'app-show',
  imports: [CommonModule, RouterModule],
  templateUrl: './show.component.html',
  styleUrl: './show.component.css'
})
export class ShowComponent implements OnInit{
  project:Project
 
  constructor(public projectService: ProjectService, private route: ActivatedRoute) {
    this.project = {
      id:this.route.snapshot.params['id'],
      name: '',
      description: ''
    }
  }
 
  ngOnInit(): void {
    this.projectService.show(this.route.snapshot.params['id']).then(({data}) => {
      this.project = data
    }).catch(error => {return error})
     
  }
}
