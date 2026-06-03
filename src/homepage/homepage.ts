import { Component, inject, signal, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileService } from '../service/profile-service';
import { MatIconModule } from '@angular/material/icon'; // <-- Import the module
import { FormsModule } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Details } from '../details/details';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [CommonModule, MatIconModule, FormsModule,RouterModule],
  templateUrl: './homepage.html',
  styleUrl: './homepage.css',
})
export class Homepage implements OnInit, OnDestroy {
  public profile = inject(ProfileService);
  public dialog = inject(MatDialog);
  // Track currently active carousel image index via signal
  activeSlideIndex = signal<number>(0);
  private cycleIntervalId: any;

  PassDetails(item: any) {
    //console.log('Item:', item);
    const dialogRef = this.dialog.open(Details, {
      width: '400px', // Sets the "prompt" size
      data: item
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log('The dialog was closed with data: from menubar', result);
        // Call your api-service to POST the new task here
      }
    });
  }
  // Details(item:any)
  // {
  //   console.log('Item:',item);
  // }
  ngOnInit(): void {
    // Auto-cycle banner image every 6 seconds to mimic movie portal slides
    this.cycleIntervalId = setInterval(() => {
      const nextIndex = (this.activeSlideIndex() + 1) % this.profile.carouselSlides().length;
      this.activeSlideIndex.set(nextIndex);
    }, 6000);
  }

  ngOnDestroy(): void {
    if (this.cycleIntervalId) {
      clearInterval(this.cycleIntervalId);
    }

  }

  /**
     * Triggers horizontal pixel offset tracking animations across the container view
     */
  slideGallery(element: HTMLDivElement, direction: 'left' | 'right'): void {
    // Dynamically calculate the horizontal offset width based on the active display dimensions
    const cardScrollOffset = element.clientWidth * 0.85;

    if (direction === 'left') {
      element.scrollLeft -= cardScrollOffset;
    } else {
      element.scrollLeft += cardScrollOffset;
    }
  }
}