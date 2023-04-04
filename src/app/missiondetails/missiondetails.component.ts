import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MissionlistService } from '../missionlist.service';
@Component({
  selector: 'app-missiondetails',
  templateUrl: './missiondetails.component.html',
  styleUrls: ['./missiondetails.component.css']
})
export class MissiondetailsComponent {
  constructor(private missionlistService: MissionlistService, private route:ActivatedRoute) { }

  ngOnInit():void {
    this.route.params.subscribe(params => {
      this.getMissionDetails(params['id']);
    }
    )
  }

  missionDetails: any

  getMissionDetails(id: string) {
    this.missionlistService.getMissionDetails(id).subscribe({
      next: (data) => {
        console.log(data)
        this.missionDetails = data;
      },
      complete: () => {
        console.log('complete');
      }
    })
  }

}
