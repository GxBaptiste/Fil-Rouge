import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {

  role: string;
  title = 'Fil-Rouge-Front';



  constructor(private _router: Router) {
  }

  ngOnInit() {

    this.role = sessionStorage.getItem('ROLE');
    if (this.role == "ADMIN") {
      this._router.navigate(["/Admin"])
    } else {
      this._router.navigate(["/Accueil"])
    }
  }
}


