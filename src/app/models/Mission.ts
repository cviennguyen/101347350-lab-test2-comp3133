export class Mission {
  flight_number: number
  mission_name: string
  launch_year: string
  rocket: {
    rocket_id: string,
    rocket_name: string;
  }
  launch_site: {
    site_name: string,
    site_name_long: string;
  }
  links: {
    mission_patch: string,
    mission_patch_small: string,
  }

  constructor(flight_number: number, mission_name: string, launch_year: string, rocket: { rocket_id: string, rocket_name: string; }, launch_site: { site_name: string, site_name_long: string; }, links: { mission_patch: string; mission_patch_small: string; }) {
    this.flight_number = flight_number;
    this.mission_name = mission_name;
    this.launch_year = launch_year;
    this.rocket = rocket;
    this.launch_site = launch_site;
    this.links = links;

  }
}