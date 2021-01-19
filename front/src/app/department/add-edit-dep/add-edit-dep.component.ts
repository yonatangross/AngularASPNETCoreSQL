import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-dep',
  templateUrl: './add-edit-dep.component.html',
  styleUrls: ['./add-edit-dep.component.css']
})
export class AddEditDepComponent implements OnInit {

  constructor(private service: SharedService) { }

  @Input() dep: any;
  Id: string;
  Name: string;

  ngOnInit(): void {
    this.Id = this.dep.Id;
    this.Name = this.dep.Name;
  }

  addDepartment() {
    var val = {
      Id: this.Id,
      Name: this.Name
    };
    this.service.addDepartment(val).subscribe(res => {
      alert(res.toString());
    });
  }

  updateDepartment() {
    var val = {
      Id: this.Id,
      Name: this.Name
    };
    this.service.updateDepartment(val).subscribe(res => {
      alert(res.toString());
    });
  }

}
