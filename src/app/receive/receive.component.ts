import { Component, OnInit } from "@angular/core";
import { ApiService } from "../api.service";

@Component({
  selector: "app-receive",
  templateUrl: "./receive.component.html",
  styleUrls: ["./receive.component.scss"]
})
export class ReceiveComponent implements OnInit {
  products = [];

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.get().subscribe((data: any[]) => {
      console.log(data);
      this.products = data;
    });
  }
}
