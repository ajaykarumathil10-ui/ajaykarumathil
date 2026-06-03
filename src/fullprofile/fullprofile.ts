import { Component, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProfileService } from '../service/profile-service';

@Component({
  selector: 'app-fullprofile',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './fullprofile.html',
  styleUrl: './fullprofile.css'
})
export class Fullprofile implements OnInit {
  ngOnInit(): void {
    if (window.innerWidth <= 650) {
      this.shortDevice = true;
      console.log('this.shortDevice:', this.shortDevice);
    }
    else {
      console.log('this.shortDevice ', this.shortDevice);
      this.shortDevice = false;
    }
  }
  profile = inject(ProfileService);
  // Track the active year selected by the user (default to the first milestone)
  selectedYear = signal<string>('2020');
  shortDevice: boolean = false;
  timelineMilestones = signal([
    {
      year: '2020',
      symbol: 'cap.png',
      title: 'Academic Foundation & Post-Graduation',
      description: 'Graduated with a Master of Computer Applications (MCA) with First Class Distinction, demonstrating academic excellence and expertise in advanced computing, database management, and software architecture.'
    },
    {
      year: '2021',
      symbol: 'lion2.png',
      title: 'Enterprise Consultancy & Backend Systems',
      description: 'Joined Lionbridge as a Technical Consultant, delivering technology solutions for enterprise clients, developing robust backend components, optimizing data workflows, and collaborating with global teams to support business-critical applications.'
    },
    {
      year: '2022',
      symbol: 'up.png', // Represents your promotion milestone
      title: 'Ascension to Software Engineering Leadership',
      description: 'Earned a strategic career promotion following successful delivery cycles, spearheading end-to-end full-stack integration and mentoring junior engineering tracks.'
    },
    {
      year: '2024',
      symbol: 'infosyslogo.png',
      title: 'The Infosys Era & Large-Scale Engineering',
      description: 'Embarked on a new chapter at Infosys Chennai as a Senior Specialist, collaborating with global clients to engineer next-generation digital solutions, integrate AI-powered innovations, modernize mission-critical platforms, and build resilient, scalable enterprise ecosystems for the future.'
    },
    {
      year: '2026',
      symbol: 'laptop.png',
      title: 'Modern Reactive Systems Mastery',
      description: 'Championing enterprise technology transformation through AI-powered solutions, cloud-scale .NET infrastructures, and next-generation Angular architectures. Focused on delivering resilient, future-ready platforms that empower global organizations with enhanced agility, performance, and digital innovation.'
    },
  ]);

  techCategories = signal([
    {
      title: 'Backend Infrastructure',
      skills: ['.NET Core / ASP.NET MVC', 'RESTful API Engineering', 'Clean Architecture & CQRS', 'Asynchronous Pipelines']
    },
    {
      title: 'Frontend Architecture',
      skills: ['Angular v17+ / TypeScript', 'Reactive Programming (Signals)', 'Standalone Components', 'RxJS State Flows']
    },
    {
      title: 'Database Management',
      skills: ['SQL Server (SSMS)', 'High-Efficiency CRUD Operations', 'Relational Schema Optimization', 'Query Performance Tuning']
    }
  ]);

  // Inside your component class:
  activeLightboxImage = signal<string | null>(null);

  openLightbox(imageUrl: string): void {
    if (window.innerWidth <= 650) {
      this.activeLightboxImage.set(imageUrl);
      // Optional: Prevent background scrolling while looking at the photo
      document.body.style.overflow = 'hidden';
    }
  }

  closeLightbox(): void {
    this.activeLightboxImage.set(null);
    // Restore background scrolling
    document.body.style.overflow = 'auto';
  }
}