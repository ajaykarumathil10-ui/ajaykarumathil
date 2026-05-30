import { Component, inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog'; // <-- Added MatDialogModule and MatDialogRef
import { GridUpdate, ProfileService } from '../service/profile-service';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-details',
  standalone: true, // Ensure standalone is explicitly declared if not globally configured
  imports: [CommonModule, MatIconModule, MatDialogModule], // <-- Added MatDialogModule here so the template understands dialog tokens
  templateUrl: './details.html',
  styleUrl: './details.css',
})
export class Details implements OnInit {
  displayValue!: GridUpdate;
  
  // Clean injection patterns
  private profile = inject(ProfileService);
  private data: GridUpdate = inject(MAT_DIALOG_DATA);
  private dialogRef = inject(MatDialogRef<Details>); // <-- Injected the Dialog Reference to control closing actions

  constructor() {
    this.displayValue = {
      image: this.profile.ClickImageLoader(this.data.image),
      category: this.data.category,
      title: this.data.title,
      description: this.data.description,
      action: this.data.action,
      statement: this.data.statement
    };
  }

  ngOnInit(): void {
    // Initialization logic if required
  }

  /**
   * Closes the active dialog window overlay programmatically
   */
  closeDialog(): void {
    this.dialogRef.close();
  }
}