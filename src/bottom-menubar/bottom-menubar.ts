import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog } from '@angular/material/dialog';
import { ProfileService } from '../service/profile-service';

@Component({
  selector: 'app-bottom-menubar',
  imports: [MatIconModule],
  templateUrl: './bottom-menubar.html',
  styleUrl: './bottom-menubar.css',
})
export class BottomMenubar {
  dialog = inject(MatDialog);
  profile = inject(ProfileService);
  route = inject(Router);

  gotohome() {
    this.route.navigateByUrl('/');
  }
}
