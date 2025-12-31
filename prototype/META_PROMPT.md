# Meta Prompt for Library of Things Claude Artifact

Copy and paste this prompt to Claude to generate the complete app as an interactive artifact:

---

Create a complete, interactive "Library of Things" web application as a single HTML file with embedded CSS and JavaScript. This is a lending library system where members can borrow items like 3D printers, LEGO kits, drones, IoT devices, tools, and robotics equipment.

## Core Features:

### 1. Membership Tier System (3 Levels)
- **Bronze (Free)**: Borrow 2 items, 7-day loans, 1 extension, 0 points required
- **Silver (100 points)**: Borrow 5 items, 14-day loans, 2 extensions, priority waitlist, 1 late fee waiver/month
- **Gold (500 points)**: Borrow 10 items, 30-day loans, 3 extensions, first priority waitlist, 3 late fee waivers/month, workshop early access

### 2. Gamified Point System
**Earn Points:**
- +10 pts: On-time return
- +25 pts: Approved community post with project photos
- +50 pts: Featured project
- Auto-upgrade membership when point thresholds are reached

**Lose Points:**
- -5 pts/day: Late return (1-3 days)
- -10 pts/day: Late return (4-7 days)
- -20 pts/day: Late return (8+ days) + account suspension
- -50 to -200 pts: Damaged items
- -500 pts: Lost item

**Account Restrictions:**
- Points < -50: Cannot borrow until returning to positive
- Points < -100: Account suspended, must contact admin

### 3. Pages to Include
Create a multi-page SPA with navigation between:

**A. Landing Page**
- Hero section with call-to-action
- System statistics (total items, active members, projects shared)
- Membership tier comparison cards (Bronze/Silver/Gold)
- Featured popular items grid
- "How It Works" section (4 steps)
- Point system explanation with earn/lose tables

**B. Items Catalog**
- Grid of borrowable items with images
- Filter by: category, availability, search term
- Sort by: popularity, name, availability
- Item cards showing: name, category, description, availability status, training requirements
- Click item to open detail modal with:
  - Full specs, serial number, condition, value
  - Borrow button (validates membership tier eligibility)
  - Waitlist button if unavailable
  - Training/insurance requirement badges

**C. User Dashboard**
- Profile header with avatar, name, tier badge, total points
- Progress bar showing points toward next tier upgrade
- Quick stats: active loans, total borrowed, max items, max days
- Active loans section with:
  - Item name, borrow date, due date
  - Countdown timer (color-coded: green >3 days, yellow ≤3 days, red overdue)
  - Return and Extend buttons
- Recent loan history
- Points ledger showing recent transactions
- Leaderboard preview (top 5 users)
- Membership benefits list

**D. Community Projects**
- Gallery of user-submitted project posts
- Filter by tags: 3D Printing, Robotics, LEGO, IoT, DIY, Woodworking
- Each post shows: image, title, description, author, date, item used, likes, tags
- Click to expand full project details
- "Share Your Project" button opens submission form:
  - Select item from loan history
  - Title, description, image upload placeholder
  - Tags input
  - Shows "+25 points upon approval" message

**E. Admin Dashboard**
- System overview stats: total items, active loans, overdue items, pending posts
- Tabbed interface with 4 sections:
  1. **Active Loans**: Table showing user, item, dates, status, actions (mark returned, send reminder)
  2. **Users**: Table with user details, tier, points, active loans, status, actions (view, suspend/activate)
  3. **Inventory**: Grid of items with edit/delete actions
  4. **Community Posts**: Pending posts with approve/reject/feature buttons

### 4. Synthetic Data to Include

**Items (at least 8):**
- Prusa i3 MK3S+ 3D Printer (FDM, $999, requires training, 2 in stock, 1 available)
- LEGO Mindstorms EV3 Kit (Robotics, $350, 3 in stock, all available)
- DJI Mini 3 Pro Drone (RC Equipment, $759, requires training, 1 in stock, unavailable with 3 on waitlist)
- Raspberry Pi 4 Starter Kit (IoT, $150, 5 in stock, 4 available)
- DeWalt 20V Cordless Drill Kit (Tools, $199, requires training, 4 in stock, 2 available)
- Arduino Robot Car Kit (Robotics, $89, 6 in stock, 5 available)
- Elegoo Saturn 2 Resin Printer (3D Printer, $499, requires training, 1 in stock, 1 available)
- ESP32-CAM IoT Camera Module Pack (IoT, $45, 4 in stock, all available)

**Current User:**
- Name: Alex Johnson
- Tier: Silver (245 points)
- Active loans: 2 (Prusa 3D Printer due in 3 days, Raspberry Pi due in 8 days)
- Can borrow: 3 more items
- Progress: 245/500 points to Gold

**Community Posts (4):**
- Custom Robotic Gripper (3D printed, 24 likes)
- Line-Following Competition Robot (LEGO, 41 likes)
- Smart Home Dashboard (Raspberry Pi, 38 likes)
- Raised Garden Bed (DeWalt drill, 19 likes)

**Leaderboard:**
- TechWizard (1250 pts, Gold)
- MakerPro (890 pts, Gold)
- RobotBuilder (670 pts, Gold)
- Alex Johnson (245 pts, Silver) ← Current user
- DIY_Dave (180 pts, Silver)

**Admin Data:**
- 3 active loans (1 overdue by 2 days)
- 3 users (1 suspended with -75 points)
- 12 pending community posts

### 5. Design Requirements

**Color Scheme:**
- Primary: Indigo (#4F46E5)
- Success: Green (#10B981)
- Warning: Amber (#F59E0B)
- Danger: Red (#EF4444)
- Bronze tier: #CD7F32
- Silver tier: #C0C0C0
- Gold tier: #FFD700

**UI Components:**
- Clean, modern card-based layouts
- Responsive grid system (auto-fit, minmax)
- Navigation bar with logo and user badge
- Status badges with semantic colors
- Progress bars for tier upgrades
- Modal dialogs for item details and forms
- Interactive hover effects
- Countdown timers with color coding
- Tag filters with active state styling

**Interactions:**
- All page navigation via JavaScript (no page reload)
- Modals for item details and forms
- Live filtering and searching
- Form validation with feedback
- Alert notifications for actions
- Smooth transitions and animations

### 6. Technical Structure

Build as a single HTML file with:
- Embedded `<style>` section with complete CSS
- Embedded `<script>` section with:
  - Synthetic data objects
  - Page routing/navigation logic
  - Filtering and sorting functions
  - Modal management
  - Form handling
  - Dynamic content rendering
- No external dependencies (vanilla JavaScript only)
- Responsive design (mobile-friendly)
- Use modern ES6+ JavaScript

### 7. Key Functionality

- **Borrow Item**: Check user points ≥ 0, active loans < tier limit, show eligibility message
- **Waitlist**: Add to queue if item unavailable
- **Return Item**: Prompt for community post, calculate points based on due date
- **Extend Loan**: Check extensions remaining for tier
- **Submit Community Post**: Select from loan history, show points reward
- **Admin Actions**: Approve posts (award +25 or +50 points), mark returns, suspend users
- **Search/Filter**: Real-time filtering of items and posts
- **Tier Progress**: Visual progress bar with points remaining

### 8. Special Touches

- Use emoji icons throughout (📚 🎓 📦 ✅ ⏰ 📸 🥉 🥈 🥇)
- Show "X days remaining" or "X days overdue" on loans
- Display waitlist count on unavailable items
- Highlight current user on leaderboard
- Show "Ready to upgrade!" message when points threshold reached
- Admin dashboard shows urgent items (overdue, suspended users)
- Toast-style notifications for user actions

Make it fully interactive, visually appealing, and feel like a real production application. All data should be hardcoded but the interactions should demonstrate how the real app would work.

---

**Expected Output:** A single, complete HTML file that I can save and open in any browser to see and interact with the entire Library of Things system.
