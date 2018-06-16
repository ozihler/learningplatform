import {Component, OnInit} from '@angular/core';
import {Greeting, TestServiceService} from "../test-service.service";

@Component({
  selector: 'app-test-component',
  templateUrl: './test-component.component.html',
  styleUrls: ['./test-component.component.css']
})
export class TestComponentComponent implements OnInit {
  helloworld: string;
  constructor(private testService: TestServiceService) {
  }

  ngOnInit() {
    this.testService.get()
      .subscribe((value: Greeting) => {
        this.helloworld = value.id + " "+ value.content;
      });
  }

}
