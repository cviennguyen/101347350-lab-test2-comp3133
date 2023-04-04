import { Component } from '@angular/core';
import { MissionlistService } from '../missionlist.service';
@Component({
  selector: 'app-missionlist',
  templateUrl: './missionlist.component.html',
  styleUrls: ['./missionlist.component.css']
})
export class MissionlistComponent {
  constructor(private missionlistService: MissionlistService) { }
  missionList: any = [];
  searchText: string = '';
  ngOnInit() {
    this.missionlistService.getMissionList().subscribe({
      next: (data) => {
        console.log(data)
        this.missionList = data;
      },
      complete: () => {
        console.log('complete');
      }
    })
  }
  searchMissionList(searchText: string) {
    this.missionlistService.searchMissionList(searchText).subscribe({
      next: (data) => {
        console.log(data)
        this.missionList = data;
      },
      complete: () => {
        console.log('complete');
      }
    })
  }
}
