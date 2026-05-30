import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-bottom-menubar',
  imports: [MatIconModule, RouterLink],
  templateUrl: './bottom-menubar.html',
  styleUrl: './bottom-menubar.css',
})
export class BottomMenubar {
  dialog = inject(MatDialog);
  //api = inject(ApiService);

  // openAddTaskDialog() {
  //   const dialogRef = this.dialog.open(AddTask, {
  //     width: '400px', // Sets the "prompt" size
  //   });
  //   dialogRef.afterClosed().subscribe(result => {
  //     if (result) {
  //       console.log('The dialog was closed with data: from menubar', result);
  //       // Call your api-service to POST the new task here
  //       this.api.Gettasks();
  //     }
  //   });
  // }


}
