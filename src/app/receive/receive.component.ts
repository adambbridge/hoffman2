import { Component, OnInit, ViewChild } from "@angular/core";
import { ApiService } from "../api.service";
import { MatTableDataSource } from "@angular/material/table";
import { MatSortModule } from "@angular/material/sort";

@Component({
  selector: "app-receive",
  templateUrl: "./receive.component.html",
  styleUrls: ["./receive.component.scss"]
})
export class ReceiveComponent implements OnInit {
  products = [
    {
      id: "1",
      name: "PVC Pipe",
      description:
        "Consequatur voluptate quo vitae totam consequatur. Ut veniam quisquam velit voluptas. Aspernatur est dolore deserunt et ducimus rerum corrupti. Ducimus neque sed quae earum atque qui qui est ut. Reprehenderit sed beatae vel veniam.",
      price: "771.00",
      imageUrl: "https://source.unsplash.com/1600x900/?product",
      quantity: 3,
      received: 0,
      remaining: 3
    },
    {
      id: "2",
      name: "HVAC filter",
      description:
        "Consequatur voluptate quo vitae totam consequatur. Ut veniam quisquam velit voluptas. Aspernatur est dolore deserunt et ducimus rerum corrupti. Ducimus neque sed quae earum atque qui qui est ut. Reprehenderit sed beatae vel veniam.",
      price: "1.00",
      imageUrl: "https://source.unsplash.com/1600x900/?product",
      quantity: 1,
      received: 0,
      remaining: 1
    },
    {
      id: "3",
      name: "Duct Large",
      description:
        "Consequatur voluptate quo vitae totam consequatur. Ut veniam quisquam velit voluptas. Aspernatur est dolore deserunt et ducimus rerum corrupti. Ducimus neque sed quae earum atque qui qui est ut. Reprehenderit sed beatae vel veniam.",
      price: "10.00",
      imageUrl: "https://source.unsplash.com/1600x900/?product",
      quantity: 2,
      received: 0,
      remaining: 2
    }
  ];

  // MATERIAL TABLE SETUP
  dataSource;
  //   @ViewChild(MatSortModule, { static: false }) sort: MatSortModule;
  @ViewChild("itemId", { static: true }) idInputField;
  displayedColumns: string[] = [
    "item",
    "id",
    "expected",
    "received",
    "remaining"
  ];

  constructor(private apiService: ApiService) {}

  ngOnInit() {
	this.dataSource = new MatTableDataSource(this.products);
	this.idInputField.nativeElement.focus();

  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  handleScan(id) {
	var indexOfItem = null;
	this.idInputField.nativeElement.focus();
	this.products.forEach((prod, index) => {
		if(prod.id === id) {
			indexOfItem = index;
		}
	})
	console.log('index of matching prod is: ', indexOfItem)
	if(indexOfItem === null) {
		alert('no item with that id')
	} else {
		let prod = this.products[indexOfItem];
		this.products[indexOfItem].received += 1;
		this.products[indexOfItem].remaining -= 1;
		if(this.products[indexOfItem].remaining < 0) {
			alert("Already received ordered quanity of " + prod.name);
		}
	}
  }

  submitOrder() {
	  alert('Order Submitted')
  }

  addNotes() {
	  var notes = prompt("Thanks for reporting issues with this order.")
  }
}
