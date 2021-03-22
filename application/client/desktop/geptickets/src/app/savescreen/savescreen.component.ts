import { Component, OnInit } from '@angular/core';
import { SavescreenService } from './savescreen.service';

@Component({
  selector: 'app-savescreen',
  templateUrl: './savescreen.component.html',
  styleUrls: ['./savescreen.component.scss'],
})

export class SavescreenComponent implements OnInit {

    constructor (
        private savescreenService: SavescreenService,
    ) { }

    ngOnInit() {
    }
}