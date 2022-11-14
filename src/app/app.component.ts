import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import { AuthService } from './service/auth.service'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private storage: Storage,private authService:AuthService,private router:Router) {}

  async ngOnInit() {
    
    await this.storage.create();
  }

  logout(){
    this.authService.getLogout();
    this.router.navigateByUrl('/login');
  }
}
