import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2'
import { Project } from '../project';
import { ProjectService } from '../project.service';
 
@Component({
  selector: 'app-edit',
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditComponent implements OnInit{
  project:Project
  isSaving:boolean = false
 
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
 
  handleSave(){
    this.isSaving = true
    this.projectService.update(this.project)
    .then(({data}) => {
      this.isSaving = false
      Swal.fire({
        icon: 'success',
        title: 'Project saved successfully!',
        showConfirmButton: false,
        timer: 1500
      })
      return data
 
    }).catch(error => {
      this.isSaving = false
      Swal.fire({
        icon: 'error',
        title: 'An Error Occured!',
        showConfirmButton: false,
        timer: 1500
      })
      return error
    })
  }
}
