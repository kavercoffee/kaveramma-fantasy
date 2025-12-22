# Kaveramma Fantasy Cricket - Project TODO

## Database Schema & Authentication
- [x] Design and implement custom user authentication schema (email/password)
- [x] Add state and age verification fields to user table
- [x] Create matches table for cricket match data
- [x] Create players table for cricket player information
- [x] Create user_teams table for storing user's selected teams
- [x] Create team_players junction table for player selections
- [x] Create leaderboard_entries table for rankings
- [x] Create blog_posts table for blog functionality
- [x] Create contact_submissions table for contact form
- [x] Implement password hashing with bcrypt
- [x] Create password reset token system
- [x] Build custom login endpoint
- [x] Build custom registration endpoint with compliance checks
- [x] Implement JWT session management

## Compliance & Legal Features
- [x] Add age verification (18+) during registration
- [x] Implement state-based access restriction (block 6 states)
- [x] Create legal disclaimer footer component
- [x] Add 18+ badge to header and footer
- [x] Add Fair Play badge to footer
- [x] Display compliance warnings prominently

## Informational Pages
- [x] Build Homepage with hero section and features
- [x] Create About Us page with company information
- [x] Create How To Play tutorial page
- [x] Create FAQ page with common questions
- [x] Create Terms and Conditions page
- [x] Create Privacy Policy page
- [x] Create Fair Play Policy page
- [x] Create Responsible Gaming page
- [x] Create Blog listing page
- [ ] Create individual Blog post page
- [x] Create Contact Us page with form

## User Authentication Pages
- [x] Build Login page with email/password form
- [x] Build Registration page with compliance checkboxes
- [x] Build Password Reset request page (backend complete)
- [x] Build Password Reset confirmation page (backend complete)
- [x] Add form validation for all auth forms

## User Dashboard & Features
- [x] Create user dashboard layout
- [x] Display available upcoming matches (placeholder)
- [x] Show user's created teams (placeholder)
- [x] Display leaderboard rankings (placeholder)
- [x] Show user statistics and history (placeholder)

## Match Selection
- [ ] Create match listing interface
- [ ] Display match details (teams, date, venue)
- [ ] Show live match status
- [ ] Allow users to select match for team building
- [ ] Display match countdown timers

## Team Building Interface
- [ ] Create player selection interface
- [ ] Implement role-based constraints (batsmen, bowlers, all-rounders, wicket-keeper)
- [ ] Show player statistics and recent form
- [ ] Implement 11-player team limit
- [ ] Add captain and vice-captain selection
- [ ] Show team budget/points system
- [ ] Allow team editing before match starts
- [ ] Display final team confirmation page

## Leaderboard System
- [ ] Create leaderboard page
- [ ] Display top performers by match
- [ ] Display overall season rankings
- [ ] Show user's current rank
- [ ] Add filtering by match/season
- [ ] Emphasize no monetary rewards

## User Profile & Settings
- [ ] Create user profile page
- [ ] Display user information and stats
- [ ] Show match history
- [ ] Show team history
- [ ] Allow profile editing (name, email)
- [ ] Allow password change
- [ ] Add account deletion option

## Cricket Data API Integration
- [ ] Research and select cricket data API provider
- [ ] Integrate API for upcoming matches
- [ ] Integrate API for live scores
- [ ] Integrate API for player statistics
- [ ] Set up data refresh/caching strategy
- [ ] Handle API rate limits and errors

## Analytics & Engagement Tracking
- [ ] Track user registration metrics
- [ ] Track match participation rates
- [ ] Track popular player selections
- [ ] Track team building patterns
- [ ] Create admin analytics dashboard
- [ ] Generate engagement insights reports

## Design & Branding
- [x] Integrate Kaveramma logo into header
- [x] Apply brand color scheme (blue, green, orange)
- [x] Add hero images to homepage
- [x] Add cricket-themed illustrations
- [x] Ensure mobile responsiveness
- [x] Optimize images for web

## Testing & Quality Assurance
- [x] Write vitest tests for authentication
- [ ] Write vitest tests for team building logic
- [x] Write vitest tests for compliance checks
- [ ] Test all user flows end-to-end
- [ ] Test on mobile devices
- [x] Verify compliance features work correctly

## Deployment & Documentation
- [ ] Create initial checkpoint
- [ ] Document API endpoints
- [ ] Document database schema
- [ ] Create user guide documentation
- [ ] Prepare for production deployment


## UI Redesign - Modern Light Theme
- [x] Redesign homepage with modern light aesthetic
- [x] Add smooth animations using Framer Motion
- [x] Implement glassmorphism card effects
- [x] Add floating/animated elements
- [x] Improve container layouts with better spacing
- [x] Update color scheme for modern light theme
- [x] Add micro-interactions and hover effects
- [x] Redesign login page with modern styling
- [x] Redesign register page with modern styling
- [x] Update dashboard with modern card layouts
- [x] Add scroll-triggered animations
- [x] Improve typography and visual hierarchy

## Hero Section Redesign
- [ ] Create split layout (text left, image right)
- [ ] Add cricket player illustration
- [ ] Add animated cricket ball/bat graphics
- [ ] Add background pattern/texture
- [ ] Apply new gradient colors

## Hero Section Improvements
- [x] Improve player illustration style (more polished)
- [x] Add more cricket elements (stumps, field)
- [x] Remove all fake/placeholder stats
- [x] Keep only authentic content


## Detailed Informational Pages
- [x] About Us page (company story, mission, values, team)
- [x] How to Play page (step-by-step guide with visuals)
- [x] FAQ page (comprehensive Q&A)
- [x] Terms & Conditions page (legal terms)
- [x] Privacy Policy page (data handling)
- [x] Fair Play Policy page (gaming rules)
- [x] Responsible Gaming page (safe gaming practices)
- [x] Blog page (blog listing)
- [x] Contact Us page (form and company details)
- [x] Update App.tsx with all routes


## Header/Footer Consistency & Policy Page Redesign
- [x] Create shared Header component matching homepage
- [x] Create shared Footer component matching homepage
- [x] Redesign Terms & Conditions page with better layout
- [x] Redesign Privacy Policy page with better layout
- [x] Redesign Fair Play Policy page with better layout
- [x] Redesign Responsible Gaming page with better layout
- [x] Update all informational pages to use shared components
- [x] Ensure consistent styling across all pages


## Logo Creation
- [x] Generate professional Kaveramma Fantasy Cricket logo
- [x] Include cricket elements (bat, ball, stumps)
- [x] Use brand colors (blue, green, orange)
- [x] Create bold, dynamic style
- [x] Integrate logo into website header
- [x] Replace placeholder "K" icon with actual logo


## Bug Fixes - Header/Footer Consistency
- [x] Fix footer logo not visible (dark background issue)
- [x] Make homepage use shared Layout component
- [x] Ensure all pages have identical header and footer


## Bug Fix - Nested Anchor Tags
- [x] Fix nested anchor tag error in Header component
- [x] Fix nested anchor tag error in Home page
- [x] Fix nested anchor tag error in Footer component


## Bug Fix - Update Year from 2024 to 2025
- [x] Find all instances of 2024 in the codebase
- [x] Update all copyright and date references to 2025
- [x] Keep CIN numbers unchanged (official registration numbers)


## Deep Detailed Homepage Redesign
- [x] Enhanced hero section with more visual elements
- [x] Platform highlights section (real info only)
- [x] Expanded features section with detailed descriptions
- [x] Detailed How It Works guide with visuals
- [x] Why Choose Us / Unique selling points section
- [x] Supported cricket matches section
- [x] Trust & compliance indicators section
- [x] FAQ preview section (top questions)
- [x] Enhanced CTA section
- [x] Smooth scroll animations throughout


## Bug Fix - Favicon Visibility
- [x] Fix favicon not visible in dark browser tabs
- [x] Add white background to favicon for visibility


## Bug Fix - Footer Logo Not Visible
- [x] Fix footer logo not displaying on dark background
- [x] Use original logo (transparent) for footer


## Fix Footer Logo Across All Pages
- [x] Update shared Footer component to use correct logo file
- [x] Verify logo displays correctly on all pages

## Enhance Fair Play Policy Page
- [x] Add comprehensive sections about fair play rules
- [x] Detail violation types and consequences
- [x] Add anti-cheating measures and detection systems
- [x] Include reporting mechanisms and appeal process
- [x] Add examples of fair and unfair practices
- [x] Enhance visual design with modern card layouts


## Fix Copyright Text in Footer
- [x] Update Footer component to use official company name
- [x] Update Home page footer to use official company name
- [x] Change from "Kaveramma Fantasy Cricket" to "KAVERAMMA COFFEE CURING WORKS PRIVATE LIMITED"


## Create Comprehensive About Page
- [x] Add detailed company introduction and background
- [x] Include mission, vision, and values sections
- [x] Add platform features and benefits
- [x] Include company information and contact details
- [x] Add team/founder information if applicable
- [x] Ensure brand name is "Kaveramma" (not "Kaveramma Fantasy Cricket")
- [x] Create engaging visual layout with modern design


## Fix Logo Display Across All Pages
- [x] Check Layout component for header logo
- [x] Check Footer component for footer logo
- [x] Verify logo file path is correct (/logo-dark.png)
- [x] Test logo display on all pages (Home, About, FAQ, Contact, etc.)
- [x] Ensure logo is visible on both light and dark backgrounds


## Implement Google Ads Banner for Mobile Users from Google
- [x] Create utility functions to detect mobile devices
- [x] Create utility functions to detect Google referrer (referrer URL or UTM parameters)
- [x] Create GoogleAdsBanner component with dismissible functionality
- [x] Add banner to Layout component with conditional rendering
- [x] Style banner for mobile responsiveness
- [x] Convert FairPlay banner image to WebP format
- [x] Update banner to display inline before hero section (not fixed)
- [x] Make banner clickable to redirect to WhatsApp link
- [x] Hide header on mobile when banner is active
- [x] Test banner display on mobile devices from Google
- [x] Ensure banner doesn't show on desktop or non-Google traffic


## Remove Close Button from Google Ads Banner
- [x] Remove close button UI element from GoogleAdsBanner component
- [x] Remove dismissal logic and localStorage functionality
- [x] Update banner to be non-dismissible
