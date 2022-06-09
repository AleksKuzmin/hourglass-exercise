import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  env = environment.countdownTimeInSeconds;
  timer: any;
  flipFromParent = true;
  interval: any;

  getTimer() {
    this.timer--;
  }

  ngOnInit(): void {
    this.timer = this.env;
    this.interval = setInterval(() => {
      this.getTimer();
      if (this.timer === 0) clearInterval(this.interval);
    }, 1000);
  }
}
