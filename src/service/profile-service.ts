import { Injectable, signal } from '@angular/core';

export interface CarouselSlide {
  image: string;
  title: string;
  subtitle: string;
}

export interface TimelineNode {
  year: string;
  symbol: string;      // The Material Icon name text identifier mapped to mat-icon
  title: string;
  description: string;
}

export interface GridUpdate {
  image: string;
  category: string;
  title: string;
  description: string;
  action: string;
  statement: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  name = signal<string>('AJAY KARUMATHIL');
  title = signal<string>('The Analytical Developer');

  // Hero Carousel Images & Details (The top massive banner sliders with clean query parameters removed)
  carouselSlides = signal<CarouselSlide[]>([
    {
      image: 'beachresortpic.png',
      title: 'ENGINEERING WITHOUT BOUNDARIES',
      subtitle: 'Designing Scalable Systems From a Foundation of Absolute Logic'
    },
    {
      image: 'InfosysMcity.png',
      title: 'ENTERPRISE SCALE DELIVERY',
      subtitle: 'Spearheading Robust Software Modernization at Corporate Scale'
    },
    {
      image: 'working.png',
      title: 'PRODUCTION-GRADE SOLUTIONS',
      subtitle: 'Driving Mission-Critical Performance Across Large Ecosystems'
    }
  ]);

  // Personal career timeline milestones mapped perfectly to clean Angular Material Icons
  timelineData = signal<TimelineNode[]>([
    {
      year: '2020',
      symbol: 'school', // Represents the graduation cap for your MCA
      title: 'Academic Foundation & Post-Graduation',
      description: 'Completed Post-Graduate Master of Computer Applications (MCA), mastering advanced computing algorithms, relational database theory, and structural system design.'
    },
    {
      year: '2021',
      symbol: 'terminal', // Represents entering the core backend engineering space
      title: 'Enterprise Consultancy & Backend Systems',
      description: 'Entered the multinational IT consultancy landscape as a Technical Consultant, architecting high-concurrency enterprise backend layers and managing complex data workflows.'
    },
    {
      year: '2023',
      symbol: 'trending_up', // Represents your promotion milestone
      title: 'Ascension to Software Engineering Leadership',
      description: 'Earned a strategic career promotion following successful delivery cycles, spearheading end-to-end full-stack integration and mentoring junior engineering tracks.'
    },
    {
      year: '2024',
      symbol: 'business', // Represents your move to the Infosys corporate campus
      title: 'The Infosys Era & Large-Scale Engineering',
      description: 'Joined Infosys Chennai as a Senior Specialist, taking charge of mission-critical application modernizations and scalable ecosystem patterns.'
    },
    {
      year: '2026',
      symbol: 'bolt', // Represents your modern reactive zoneless signals era
      title: 'Modern Reactive Systems Mastery',
      description: 'Currently driving production-grade optimization initiatives, unifying high-throughput .NET Core infrastructures with next-gen, zoneless Angular client architectures.'
    }
  ]);

  // Default active year matching your starting timeline entry point
  selectedYear = signal<string>('2020');

  // Project/News Updates Grid (The poster tiles below the slider pointing to local or unspash resources)
  gridUpdates = signal<GridUpdate[]>([
    {
      image: 'webapp.gif',
      category: 'DEVELOPMENT',
      title: 'Web Application Development',
      description: 'Looking for a custom solution? I build websites and web applications designed around your exact needs—delivered on time and within your budget.',
      action: "Get a Free Quote",
      statement: "Turn your complex business ideas into elegant, " +
        "conversion-focused reality. I design and develop secure, full-stack web applications built for speed," +
        " exceptional user experience, and flawless data flow. Whether you need a secure client portal, an automated " +
        " workflow tool, or a dynamic SaaS platform, I build it using modern, hardware-accelerated tech stacks that keep " +
        "your operations seamless. Click below to see my development blueprint, review my case studies, and get a free quote on your project now!"
    },
    {
      image: 'deskapp.gif',
      category: 'DEVELOPMENT',
      title: 'Desktop Application Development',
      description: 'Need a powerful desktop tool? I build custom desktop applications and automated tools designed around your exact operational workflows—delivered within an affordable budget.',
      action: "Get a Free Quote",
      statement: "Turn repetitive manual tasks and complex local workflows into seamless, automated desktop reality. I design " +
        "and develop ultra-secure, standalone desktop software engineered for maximum execution speed, flawless system " +
        "integration, and intuitive user experiences. Whether you need a specialized hardware interface, a custom " +
        "financial data tool, or a proprietary internal platform, I build robust local systems that keep your " +
        "day-to-day operations flawless. Click below to explore my desktop architecture, inspect my design modules, and " +
        "get a free quote on your custom build right now!"
    },
    {
      image: 'aicoding.gif',
      category: 'LEARNING',
      title: 'AI Integrated Coding Classes on Specific Topic',
      description: 'Spearheading application modernizations using state-managed systems.',
      action: "Learn",
      statement: "Stop learning how to write boilerplate code and start learning how to architect scalable systems with AI. " +
        "My specialized coding classes are designed around deep, targeted topics—giving you a definitive edge in " +
        "modern software engineering. From mastering zone-less real-time data flows to deploying optimized services, " +
        "you will write production-ready code with the assistance of advanced AI tools. Whether you are looking to " +
        "upskill your engineering team or break into next-level system design, get mentored with a practical, " +
        "no-nonsense blueprint. Click below to explore active topics, review student milestones, and claim your " +
        "free introductory class pass right now!"
    },
    {
      image: 'blog.gif',
      category: 'Blogs',
      title: 'Blogs on latest IT MNC News and Updates',
      description: 'Spearheading application modernizations using state-managed systems.',
      action: "More details",
      statement: "Corporate tech updates move fast—don't get left behind. Dive into my specialized blog series analyzing " +
        "the latest breakthroughs, system migrations, and architectural shifts across the world's leading IT MNCs. " +
        "From enterprise full-stack scalability reports to real-time framework overhauls at scale, get sharp, " +
        "no-nonsense technical commentary engineered to keep you on the cutting edge of global engineering trends. " +
        "Move past basic news and understand the logic behind the shifts. Click to view details and explore my " +
        "latest tech publications today!"
    }
  ]);

  // Sidebar Biography Context Section
  blogIntro = signal<string>(
    'Welcome to my digital gallery. Here you will find a curated collection of my architectural ' +
    'milestones, system designs, and code frameworks that define my journey over a 5+ years tech masterclass.'
  );

  ClickImageLoader(fullname: string) {
    //console.log('Fullname:', fullname)
    const name = fullname.split('.')[0];
    const ext = fullname.split('.')[1];
    //console.log('New name:', name + '_click' + ext)
    return name + '_click.' + ext;
  }
}