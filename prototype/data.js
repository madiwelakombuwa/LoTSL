// Synthetic data for Library of Things prototype

const MEMBERSHIP_TIERS = {
  bronze: {
    name: 'Bronze',
    maxItems: 2,
    maxDays: 7,
    extensions: 1,
    pointsRequired: 0,
    color: '#CD7F32',
    benefits: ['Borrow up to 2 items', '7-day loan period', '1 extension allowed']
  },
  silver: {
    name: 'Silver',
    maxItems: 5,
    maxDays: 14,
    extensions: 2,
    pointsRequired: 100,
    color: '#C0C0C0',
    benefits: ['Borrow up to 5 items', '14-day loan period', '2 extensions allowed', 'Priority waitlist', '1 late fee waiver/month']
  },
  gold: {
    name: 'Gold',
    maxItems: 10,
    maxDays: 30,
    extensions: 3,
    pointsRequired: 500,
    color: '#FFD700',
    benefits: ['Borrow up to 10 items', '30-day loan period', '3 extensions allowed', 'First priority waitlist', '3 late fee waivers/month', 'Workshop early access']
  }
};

const CURRENT_USER = {
  id: 1,
  username: 'makerspro',
  firstName: 'Alex',
  lastName: 'Johnson',
  email: 'alex@example.com',
  membershipTier: 'silver',
  points: 245,
  activeLoans: 2,
  totalLoans: 18,
  joinedDate: '2024-03-15',
  profileImage: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Alex'
};

const ITEMS = [
  {
    id: 1,
    name: 'Prusa i3 MK3S+ 3D Printer',
    category: '3d_printer',
    subcategory: 'FDM',
    description: 'High-quality FDM 3D printer with auto bed leveling and multi-material upgrade capability.',
    serialNumber: 'PR-001',
    condition: 'excellent',
    estimatedValue: 999,
    stockQuantity: 2,
    availableQuantity: 1,
    imageUrl: 'https://images.unsplash.com/photo-1636690619602-3a75a32c5acc?w=400',
    requiresTraining: true,
    insuranceRequired: true,
    popularity: 95
  },
  {
    id: 2,
    name: 'LEGO Mindstorms EV3 Kit',
    category: 'lego',
    subcategory: 'Robotics',
    description: 'Complete robotics kit with sensors, motors, and 500+ LEGO Technic pieces.',
    serialNumber: 'LG-005',
    condition: 'good',
    estimatedValue: 350,
    stockQuantity: 3,
    availableQuantity: 3,
    imageUrl: 'https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=400',
    requiresTraining: false,
    insuranceRequired: false,
    popularity: 88
  },
  {
    id: 3,
    name: 'DJI Mini 3 Pro Drone',
    category: 'rc_equipment',
    subcategory: 'Drone',
    description: 'Lightweight drone with 4K camera, obstacle avoidance, and 34-min flight time.',
    serialNumber: 'DJ-003',
    condition: 'excellent',
    estimatedValue: 759,
    stockQuantity: 1,
    availableQuantity: 0,
    imageUrl: 'https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=400',
    requiresTraining: true,
    insuranceRequired: true,
    popularity: 92,
    waitlistCount: 3
  },
  {
    id: 4,
    name: 'Raspberry Pi 4 Starter Kit',
    category: 'iot',
    subcategory: 'Single Board Computer',
    description: 'Complete kit with Pi 4 (8GB), sensors, breadboard, and components for IoT projects.',
    serialNumber: 'RP-012',
    condition: 'excellent',
    estimatedValue: 150,
    stockQuantity: 5,
    availableQuantity: 4,
    imageUrl: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=400',
    requiresTraining: false,
    insuranceRequired: false,
    popularity: 78
  },
  {
    id: 5,
    name: 'DeWalt 20V Cordless Drill Kit',
    category: 'tools',
    subcategory: 'Power Tools',
    description: 'Professional-grade cordless drill with 2 batteries, charger, and carrying case.',
    serialNumber: 'DW-018',
    condition: 'good',
    estimatedValue: 199,
    stockQuantity: 4,
    availableQuantity: 2,
    imageUrl: 'https://images.unsplash.com/photo-1572981779307-38b8cabb2407?w=400',
    requiresTraining: true,
    insuranceRequired: false,
    popularity: 85
  },
  {
    id: 6,
    name: 'Arduino Robot Car Kit',
    category: 'robotics',
    subcategory: 'Mobile Robot',
    description: 'DIY robot car kit with Arduino Uno, ultrasonic sensor, and line-following capabilities.',
    serialNumber: 'AR-025',
    condition: 'excellent',
    estimatedValue: 89,
    stockQuantity: 6,
    availableQuantity: 5,
    imageUrl: 'https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=400',
    requiresTraining: false,
    insuranceRequired: false,
    popularity: 72
  },
  {
    id: 7,
    name: 'Elegoo Saturn 2 Resin Printer',
    category: '3d_printer',
    subcategory: 'Resin',
    description: '8K mono LCD resin printer for high-detail miniatures and prototypes.',
    serialNumber: 'EL-004',
    condition: 'excellent',
    estimatedValue: 499,
    stockQuantity: 1,
    availableQuantity: 1,
    imageUrl: 'https://images.unsplash.com/photo-1633173764548-790af9598a04?w=400',
    requiresTraining: true,
    insuranceRequired: true,
    popularity: 68
  },
  {
    id: 8,
    name: 'ESP32-CAM IoT Camera Module Pack',
    category: 'iot',
    subcategory: 'Camera Module',
    description: 'Pack of 3 ESP32-CAM modules with WiFi/Bluetooth for IoT camera projects.',
    serialNumber: 'ES-031',
    condition: 'excellent',
    estimatedValue: 45,
    stockQuantity: 4,
    availableQuantity: 4,
    imageUrl: 'https://images.unsplash.com/photo-1614935151651-0bea6508db6b?w=400',
    requiresTraining: false,
    insuranceRequired: false,
    popularity: 64
  }
];

const ACTIVE_LOANS = [
  {
    id: 101,
    itemId: 1,
    itemName: 'Prusa i3 MK3S+ 3D Printer',
    loanDate: '2024-12-20',
    dueDate: '2025-01-03',
    status: 'active',
    extensionCount: 0,
    daysRemaining: 3
  },
  {
    id: 102,
    itemId: 4,
    itemName: 'Raspberry Pi 4 Starter Kit',
    loanDate: '2024-12-25',
    dueDate: '2025-01-08',
    status: 'active',
    extensionCount: 0,
    daysRemaining: 8
  }
];

const LOAN_HISTORY = [
  {
    id: 98,
    itemName: 'LEGO Mindstorms EV3 Kit',
    loanDate: '2024-11-15',
    returnDate: '2024-11-28',
    status: 'returned',
    pointsEarned: 10,
    communityPost: true
  },
  {
    id: 97,
    itemName: 'Arduino Robot Car Kit',
    loanDate: '2024-11-01',
    returnDate: '2024-11-07',
    status: 'returned',
    pointsEarned: 10,
    communityPost: false
  },
  {
    id: 96,
    itemName: 'DeWalt 20V Cordless Drill Kit',
    loanDate: '2024-10-20',
    returnDate: '2024-10-29',
    status: 'returned_late',
    pointsEarned: -10,
    daysLate: 2
  }
];

const POINTS_LEDGER = [
  {
    id: 1,
    date: '2024-12-28',
    action: 'Community post approved',
    points: 25,
    balance: 245,
    icon: '📸'
  },
  {
    id: 2,
    date: '2024-11-28',
    action: 'On-time return',
    points: 10,
    balance: 220,
    icon: '✅'
  },
  {
    id: 3,
    date: '2024-11-15',
    action: 'Community post approved',
    points: 25,
    balance: 210,
    icon: '📸'
  },
  {
    id: 4,
    date: '2024-11-07',
    action: 'On-time return',
    points: 10,
    balance: 185,
    icon: '✅'
  },
  {
    id: 5,
    date: '2024-10-29',
    action: 'Late return (2 days)',
    points: -10,
    balance: 175,
    icon: '⏰'
  }
];

const COMMUNITY_POSTS = [
  {
    id: 1,
    userId: 1,
    userName: 'Alex Johnson',
    userAvatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Alex',
    itemName: 'Prusa i3 MK3S+ 3D Printer',
    title: 'Custom Robotic Gripper for My Arduino Project',
    description: 'Built a parametric gripper with soft jaws. Printed in TPU for flexibility. Works perfectly with my robot arm!',
    imageUrl: 'https://images.unsplash.com/photo-1631984991983-0e8e6f5b5b1c?w=600',
    likes: 24,
    createdAt: '2024-12-28',
    tags: ['3D Printing', 'Robotics', 'Arduino']
  },
  {
    id: 2,
    userId: 5,
    userName: 'Sarah Chen',
    userAvatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah',
    itemName: 'LEGO Mindstorms EV3 Kit',
    title: 'Line-Following Competition Robot',
    description: 'Designed a competition-ready line follower with dual color sensors. Won 2nd place at our local robotics meet!',
    imageUrl: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600',
    likes: 41,
    createdAt: '2024-12-26',
    tags: ['LEGO', 'Robotics', 'Competition']
  },
  {
    id: 3,
    userId: 12,
    userName: 'Mike Rodriguez',
    userAvatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Mike',
    itemName: 'Raspberry Pi 4 Starter Kit',
    title: 'Smart Home Dashboard with Pi',
    description: 'Created a touchscreen dashboard controlling lights, temp, and security cameras. Running on Home Assistant!',
    imageUrl: 'https://images.unsplash.com/photo-1558002038-1055907df827?w=600',
    likes: 38,
    createdAt: '2024-12-24',
    tags: ['IoT', 'Smart Home', 'Raspberry Pi']
  },
  {
    id: 4,
    userId: 8,
    userName: 'Emily Watson',
    userAvatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Emily',
    itemName: 'DeWalt 20V Cordless Drill Kit',
    title: 'Built a Raised Garden Bed',
    description: 'Used the drill to build a 4x8 cedar raised bed for my backyard. First woodworking project - turned out great!',
    imageUrl: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=600',
    likes: 19,
    createdAt: '2024-12-20',
    tags: ['DIY', 'Woodworking', 'Gardening']
  }
];

const LEADERBOARD = [
  { rank: 1, username: 'TechWizard', points: 1250, tier: 'gold', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Tech' },
  { rank: 2, username: 'MakerPro', points: 890, tier: 'gold', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Maker' },
  { rank: 3, username: 'RobotBuilder', points: 670, tier: 'gold', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Robot' },
  { rank: 4, username: 'Alex Johnson', points: 245, tier: 'silver', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Alex', isCurrentUser: true },
  { rank: 5, username: 'DIY_Dave', points: 180, tier: 'silver', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Dave' }
];

// Admin data
const ALL_USERS = [
  {
    id: 1,
    username: 'makerspro',
    name: 'Alex Johnson',
    email: 'alex@example.com',
    tier: 'silver',
    points: 245,
    activeLoans: 2,
    status: 'active',
    joined: '2024-03-15'
  },
  {
    id: 2,
    username: 'techw1z',
    name: 'Sarah Chen',
    email: 'sarah@example.com',
    tier: 'gold',
    points: 1250,
    activeLoans: 5,
    status: 'active',
    joined: '2024-01-10'
  },
  {
    id: 3,
    username: 'lateuser',
    name: 'Bob Smith',
    email: 'bob@example.com',
    tier: 'bronze',
    points: -75,
    activeLoans: 1,
    status: 'suspended',
    joined: '2024-08-22'
  }
];

const ALL_ACTIVE_LOANS = [
  {
    id: 101,
    userName: 'Alex Johnson',
    itemName: 'Prusa i3 MK3S+ 3D Printer',
    loanDate: '2024-12-20',
    dueDate: '2025-01-03',
    status: 'active',
    daysRemaining: 3
  },
  {
    id: 103,
    userName: 'Bob Smith',
    itemName: 'DJI Mini 3 Pro Drone',
    loanDate: '2024-12-15',
    dueDate: '2024-12-29',
    status: 'overdue',
    daysOverdue: 2
  },
  {
    id: 104,
    userName: 'Sarah Chen',
    itemName: 'Elegoo Saturn 2 Resin Printer',
    loanDate: '2024-12-28',
    dueDate: '2025-01-11',
    status: 'active',
    daysRemaining: 11
  }
];

const PENDING_POSTS = [
  {
    id: 10,
    userName: 'John Doe',
    itemName: 'Arduino Robot Car Kit',
    title: 'My First Robot Build',
    description: 'Just finished building my first robot using the Arduino kit...',
    imageUrl: 'https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=400',
    submittedAt: '2024-12-30',
    status: 'pending'
  }
];
