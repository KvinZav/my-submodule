import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ms-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.scss']
})
export class MusicComponent implements OnInit {
  public imageUrl = 'https://pbs.twimg.com/media/Cw6NAQlWEAA_H7y.jpg';

  constructor() { }

  ngOnInit(): void {
  }

}
