// Central site configuration — edit contact details, links, and copy here.

const WHATSAPP_NUMBER = '+2348069269727'; // international format, no + or leading 0s after country code

export const SITE = {
  name: 'IRON&STEEL',
  fullName: 'Iron & Steel Utilities Nig. Ltd.',
  tagline: 'Structural steel, fabricated for permanence.',
  phoneRaw: '+2348028829527',
  phoneDisplay: '+234 806 926 9727',
  email: 'ironsteelnigltd@yahoo.com',
  address: 'No. 5B Mini - Ewa Road, Trans-Amadi, Rumuobiakani Roundabout, Port Harcourt, Rivers State, Nigeria.',
  whatsappLink: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    "Hello, I’m looking to engage IRON & STEEL for a structural project and would like to request a formal quote and consultation. Are you currently taking on new projects? Looking forward to hearing from you."
  )}`,
  facebook: 'https://facebook.com/ironsteelutilities',
  instagram: 'https://instagram.com/ironsteelutilities',
  linkedin: 'https://linkedin.com/company/ironsteelutilities',
  mapsEmbed:
    'https://maps.app.goo.gl/zfM8xzvyWwmQVT1R7',
};

export const STATS = [
  { value: '50+', label: 'Years In Operation' },
  { value: '300+', label: 'Projects Delivered' },
  { value: '60+', label: 'Skilled Crew & Engineers' },
  { value: '15+', label: ' States Customers Base' },
];

export const SERVICES = [
  {
    id: 'structural-steel',
    title: 'Structural Steel Construction',
    summary:
      'Design-assist, fabrication, and erection of structural steel frames for industrial, commercial, and infrastructure projects.',
    points: [
      'Site surveys & structural assessments',
      'Beam, column & truss erection',
      'Bolted and welded connections to code',
    ],
  },
  {
    id: 'fabrication',
    title: 'Steel Fabrication & Welding',
    summary:
      'In-house fabrication of custom steel components, gates, tanks, and frameworks built to exact specification.',
    points: [
      'CNC cutting & precision welding',
      'Custom gates, rails & enclosures',
      'Surface treatment & anti-corrosion coating',
    ],
  },
  {
    id: 'site-utilities',
    title: 'Industrial Site Utilities',
    summary:
      'Installation and maintenance of utility infrastructure that keeps industrial sites running — power, water, and access systems.',
    points: [
      'Utility line installation & repair',
      'Site access & security infrastructure',
      'Planned maintenance contracts',
    ],
  },
  {
    id: 'project-management',
    title: 'Construction Project Management',
    summary:
      'End-to-end oversight from procurement to handover, keeping every phase on schedule, on budget, and within spec.',
    points: [
      'Procurement & materials logistics',
      'On-site supervision & QA/QC',
      'Regulatory compliance & documentation',
    ],
  },
  {
    id: 'maintenance',
    title: 'Maintenance & Refurbishment',
    summary:
      'Inspection, repair, and reinforcement of existing steel structures to extend service life and restore integrity.',
    points: [
      'Structural integrity inspections',
      'Rust remediation & reinforcement',
      'Emergency repair response',
    ],
  },
  {
    id: 'consulting',
    title: 'Technical Consulting',
    summary:
      'Engineering guidance for developers and contractors planning steel-intensive builds, from concept through to load-out.',
    points: [
      'Feasibility & materials advisory',
      'Load & specification review',
      'Vendor & contractor coordination',
    ],
  },
];

export const EQUIPMENT = [
  {
    id: 'crawler-crane',
    name: 'Crawler Cranes',
    spec: 'Lift capacity up to 80T',
    image: '/assets/images/equipment-1.jpg',
    description:
      'Heavy lift capability for structural steel erection on large-format industrial sites.',
  },
  {
    id: 'welding-rigs',
    name: 'Industrial Welding Rigs',
    spec: 'MIG / TIG / Arc certified',
    image: '/assets/images/equipment-2.jpg',
    description:
      'Certified welding stations for structural-grade joins and on-site fabrication work.',
  },
  {
    id: 'cutting-systems',
    name: 'CNC Plasma Cutting',
    spec: 'Tolerance ±0.5mm',
    image: '/assets/images/equipment-3.jpg',
    description:
      'Precision plate and beam cutting for components that need to fit right the first time.',
  },
  {
    id: 'access-platforms',
    name: 'Access Platforms & Scaffolding',
    spec: 'Working height up to 45m',
    image: '/assets/images/equipment-4.jpg',
    description:
      'Certified scaffold and aerial platform systems for safe, efficient high-level works.',
  },
  {id: 'transport-fleet',
    name: 'Transport Fleet',
    spec: 'Flatbeds, lowboys, and heavy haulers',
    image: '/assets/images/equipment-5.jpg',
    description:
      'Specialized transport for oversized steel components, ensuring safe delivery to site.',
  },
  {id: 'fabrication-workshop',
    name: 'Fabrication Workshop',
    spec: '10,000 sq ft with overhead cranes',
    image: '/assets/images/equipment-6.jpg',
    description:
      'In-house workshop for controlled-environment fabrication, assembly, and quality assurance.',
  },  
  {id: 'inspection-drones',
    name: 'Inspection Drones',
    spec: '4K video with thermal imaging',
    image: '/assets/images/equipment-7.jpg',
    description:
      'Aerial inspection capability for hard-to-reach structural elements, improving safety and efficiency.',
  },
{id: 'load-testing-rig',
    name: 'Load Testing Rig',
    spec: 'Test loads up to 100T',
    image: '/assets/images/equipment-8.jpg',
    description:
      'Dedicated testing equipment for validating structural integrity under simulated load conditions.',
  },
];

// Gallery images — drop additional files into /public/assets/images
// and add an entry below (or extend this array programmatically).
export const GALLERY_IMAGES = [
  { src: '/assets/images/gallery-1.jpg', alt: 'Structural steel framework on site', category: 'founder' },
  { src: '/assets/images/gallery-2.jpg', alt: 'Fabrication workshop steel cutting', category: 'Fabrication' },
  { src: '/assets/images/gallery-3.jpg', alt: 'Industrial site utility installation', category: 'Site Works' },
  { src: '/assets/images/gallery-4.jpg', alt: 'Steel beam erection in progress', category: 'Structural' },
  { src: '/assets/images/gallery-5.jpg', alt: 'Welding and joinery detail', category: 'Fabrication' },
  { src: '/assets/images/gallery-6.jpg', alt: 'Completed steel structure exterior', category: 'Structural' },
  { src: '/assets/images/gallery-7.jpg', alt: 'Site access and scaffolding setup', category: 'Site Works' },
  { src: '/assets/images/gallery-8.jpg', alt: 'Crew working on industrial frame', category: 'Site Works' },
];

export const HERO_SLIDES = [
  {
    image: '/assets/images/hero-1.jpg',
    eyebrow: 'Structural Steel Specialists',
    title: 'Built On Steel.\nDefined By Precision.',
    sub: 'Iron & Steel Utilities Nig. Ltd. delivers structural steel construction, fabrication, and industrial site services engineered to outlast the project itself.',
  },
  {
    image: '/assets/images/hero-2.jpg',
    eyebrow: 'In-House Fabrication',
    title: 'Every Joint, Engineered.\nEvery Beam, Verified.',
    sub: 'From CNC cutting to certified welding, our fabrication workshop turns specification into structure with zero tolerance for error.',
  },
  {
    image: '/assets/images/hero-3.jpg',
    eyebrow: '15+ States Customers Base',
    title: 'Heavy Lifting.\nHandled Right.',
    sub: 'Crawler cranes, certified crews, and a safety record that lets you build at scale without losing sleep.',
  },
  {
    image: '/assets/images/hero-4.jpg',
    eyebrow: '50+ Years Of Experience',
    title: 'Building The Future.\nOne Project At A Time.',
    sub: 'With five decades of experience, we bring a wealth of knowledge and expertise to every project we undertake.',
  },
{    image: '/assets/images/hero-5.jpg',
    eyebrow: 'Nationwide Service',
    title: 'From Port Harcourt.\nTo All Corners Of Nigeria.',
    sub: 'Our fleet and crew are equipped to handle projects of any scale, anywhere in Nigeria — from bustling industrial hubs to remote infrastructure sites.',
  },
];

export const TESTIMONIALS = [
  {
    quote:
      'IRON&STEEL erected our warehouse frame two weeks ahead of schedule without a single safety incident. Their crew runs a tight site.',
    name: 'Chidi Okonkwo',
    role: 'Project Director, Lagos Industrial Park',
  },
  {
    quote:
      'We have used three different steel contractors over the years. None matched the precision and documentation IRONSTEEL provides.',
    name: 'Ifeoma Adaeze',
    role: 'Facilities Manager, Aba Manufacturing Hub',
  },
  {
    quote:
      'Their fabrication team solved a structural problem our own engineers were stuck on. That kind of technical depth is rare.',
    name: 'Tunde Bakare',
    role: 'Site Engineer, Coastal Logistics Terminal',
  },
];
