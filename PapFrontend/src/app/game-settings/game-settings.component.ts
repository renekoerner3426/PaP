import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-settings',
  templateUrl: './game-settings.component.html',
  styleUrls: ['./game-settings.component.css']
})
export class GameSettingsComponent implements OnInit {

  heroIsChosen: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  selectDiv(chose: String) {

    switch (chose) {

      case 'hero':  this.setAllValuesToDefault();
                    this.heroIsChosen = true;
    }   
  }

  setAllValuesToDefault() {
    this.heroIsChosen = false;
  }
}
