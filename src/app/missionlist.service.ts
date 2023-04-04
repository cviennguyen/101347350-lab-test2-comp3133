import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MissionlistService {
  private REST_API_URL = 'https://api.spacexdata.com/v3/launches'
  constructor(private httpClient: HttpClient) { }
  public getMissionList() {
    return this.httpClient.get(this.REST_API_URL);
  }
  public searchMissionList(searchText: string) {
    return this.httpClient.get(this.REST_API_URL + '?launch_year=' + searchText);
  }
  public getMissionDetails(id: string) {
    return this.httpClient.get(this.REST_API_URL + '/' + id);
  }
}
