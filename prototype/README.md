# Library of Things - UI Prototype

This is an interactive wireframe/prototype for the **Library of Things (LoTSL)** system. It demonstrates the complete user interface with synthetic hardcoded data.

## 🚀 How to View

Simply open any HTML file in your web browser:

```bash
# From the prototype directory
cd prototype

# Open in your default browser (Linux)
xdg-open index.html

# Or use Python's built-in server
python3 -m http.server 8000
# Then visit: http://localhost:8000
```

## 📄 Pages Included

### 1. **Landing Page** (`index.html`)
- Hero section with call-to-action
- System statistics
- Membership tier comparison (Bronze/Silver/Gold)
- Featured popular items
- "How It Works" section
- Point system explanation

### 2. **Items Catalog** (`catalog.html`)
- Browse all available items
- Filter by category, availability, and search
- Sort options (popularity, name, availability)
- Item detail modal with:
  - Full item information
  - Borrow/waitlist functionality
  - Training & insurance requirements
  - Membership eligibility checks

### 3. **User Dashboard** (`dashboard.html`)
- User profile with membership tier badge
- Points total and progress to next tier
- Quick stats (active loans, total borrowed, max items/days)
- Active loans with countdown timers
- Loan extension and return actions
- Recent loan history
- Points ledger (recent activity)
- Leaderboard preview
- Membership benefits overview

### 4. **Community Projects** (`community.html`)
- Gallery of user-submitted projects
- Filter by tags (3D Printing, Robotics, LEGO, IoT, DIY, etc.)
- Project detail view with likes
- "Share Your Project" form with:
  - Item selection from loan history
  - Title, description, images
  - Tags
  - Points reward notification

### 5. **Admin Dashboard** (`admin.html`)
- System overview statistics
- Four management tabs:
  - **Active Loans**: View all loans, mark returns, send reminders
  - **Users**: User management, view points, suspend/activate accounts
  - **Inventory**: Item grid with edit/delete actions
  - **Community Posts**: Approve/reject/feature pending posts

## 🎨 Features Demonstrated

### Membership System
- **Bronze** (Free): 2 items, 7 days, 1 extension
- **Silver** (100 points): 5 items, 14 days, 2 extensions, priority waitlist
- **Gold** (500 points): 10 items, 30 days, 3 extensions, first priority, workshop access

### Point System
- ✅ **+10 points**: On-time return
- 📸 **+25 points**: Approved community post
- ⭐ **+50 points**: Featured project
- ⏰ **-5 to -20 points**: Late returns (escalating)
- 💔 **-50 to -200 points**: Damaged items
- 🚫 **Account restriction**: Points < -50 blocks borrowing

### Smart Features
- Real-time availability status
- Waitlist for unavailable items
- Membership tier validation before borrowing
- Loan countdown timers with color coding
- Progress bars for tier upgrades
- Interactive modals and filters
- Responsive design

## 🗂️ File Structure

```
prototype/
├── index.html          # Landing page
├── catalog.html        # Items catalog
├── dashboard.html      # User dashboard
├── community.html      # Community projects
├── admin.html          # Admin dashboard
├── styles.css          # Shared styles
├── data.js             # Synthetic data
└── README.md           # This file
```

## 📊 Synthetic Data Overview

The prototype includes realistic test data:

- **8 Items**: 3D printers, LEGO kits, drones, Raspberry Pi, tools, robotics
- **Current User**: Alex Johnson (Silver tier, 245 points, 2 active loans)
- **2 Active Loans**: Prusa 3D printer, Raspberry Pi kit
- **3 Loan History**: Previous borrows with point awards
- **4 Community Posts**: User-submitted projects with photos
- **Top 5 Leaderboard**: Point rankings
- **3 Admin Users**: Including one suspended account
- **Multiple Pending Posts**: For admin approval

## 🎯 Key Interactions to Test

1. **Browse & Borrow**:
   - Go to Catalog → Click any item → Try to borrow
   - See membership eligibility checks
   - Join waitlist for unavailable items

2. **Dashboard Management**:
   - View active loans with countdown timers
   - Check points ledger and leaderboard position
   - See progress toward next membership tier

3. **Community Engagement**:
   - Browse projects and filter by tags
   - Click "Share Your Project" to see submission form
   - View detailed project posts with likes

4. **Admin Functions**:
   - Switch between tabs (Loans/Users/Items/Posts)
   - Process returns and send reminders
   - Approve/reject/feature community posts
   - Manage inventory and users

## 🎨 Design Highlights

- **Clean, modern UI** with card-based layouts
- **Consistent color scheme**:
  - Primary: Indigo (#4F46E5)
  - Success: Green (#10B981)
  - Warning: Amber (#F59E0B)
  - Danger: Red (#EF4444)
  - Tier colors: Bronze/Silver/Gold
- **Responsive grid layouts**
- **Interactive hover effects**
- **Modal dialogs** for details and forms
- **Status badges** with semantic colors
- **Progress bars** for visual feedback

## 🔄 Next Steps (Implementation)

This prototype serves as a visual specification for:

1. **Backend API endpoints** (see main plan document)
2. **D1 database schema** design
3. **Cloudflare Workers** implementation
4. **React/Vue component** structure
5. **User flow** validation

## 💡 Notes

- All data is **hardcoded** in `data.js` - no backend
- All actions show **alerts** instead of actual processing
- Forms don't persist data (refresh resets)
- Perfect for **stakeholder demos** and **design feedback**
- Can be used for **user testing** before development

## 📝 Feedback

Use this prototype to:
- Validate user flows
- Test membership tier benefits
- Verify point system logic
- Review admin capabilities
- Check responsive layouts
- Gather user feedback

---

**Built with:** Vanilla JavaScript, HTML5, CSS3 (No frameworks required!)
