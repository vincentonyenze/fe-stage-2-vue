# Multi-Framework Ticket Web App - Vue.js Implementation

A comprehensive ticket management web application built with Vue.js 3, TypeScript, and Tailwind CSS. This is the Vue.js implementation of a multi-framework project that demonstrates modern frontend development practices.

## 🚀 Features

### Core Features

- **Landing Page**: Welcoming homepage with wavy background, decorative elements, and call-to-action buttons
- **Authentication**: Secure login and signup with form validation and localStorage session management
- **Dashboard**: High-level overview with statistics and quick actions
- **Ticket Management**: Full CRUD operations (Create, Read, Update, Delete) with real-time validation
- **Responsive Design**: Mobile-first design that works across all devices
- **Error Handling**: Comprehensive error handling with toast notifications
- **Accessibility**: Semantic HTML and accessibility features

### Technical Features

- Vue.js 3 with Composition API
- TypeScript for type safety
- Pinia for state management
- Vue Router for navigation
- Tailwind CSS for styling
- Form validation with inline error messages
- Protected routes with authentication guards
- Local storage for data persistence

## 🛠️ Tech Stack

- **Framework**: Vue.js 3.5.22
- **Language**: TypeScript 5.9.0
- **State Management**: Pinia
- **Routing**: Vue Router 4
- **Styling**: Tailwind CSS 4.1.16
- **Build Tool**: Vite 7.1.11
- **Linting**: ESLint with Vue and TypeScript support

## 📦 Installation & Setup

### Prerequisites

- Node.js 20.19.0 or higher
- npm or yarn package manager

### Installation Steps

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd fe-stage-2-vue
   ```

2. **Install dependencies**

   ```bash
npm install
```

3. **Start development server**

   ```bash
npm run dev
```

4. **Open in browser**
   Navigate to `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier
- `npm run type-check` - Run TypeScript type checking

## 🎯 Usage

### Authentication

The app includes a mock authentication system for demonstration purposes:

**Demo Credentials:**

- Email: `admin@example.com`
- Password: `password`

**Signup:** Create a new account with any valid email and password (minimum 6 characters).

### Ticket Management

- **Create Tickets**: Click "Create Ticket" button and fill in the required fields
- **View Tickets**: All tickets are displayed in a responsive card layout
- **Edit Tickets**: Click "Edit" on any ticket to modify its details
- **Delete Tickets**: Click "Delete" and confirm to remove a ticket
- **Filter & Search**: Use the search bar and status filter to find specific tickets

### Data Validation

- **Title**: Required field
- **Status**: Required, must be one of: "open", "in_progress", "closed"
- **Description**: Optional
- **Priority**: Optional, can be "low", "medium", or "high"

## 🏗️ Project Structure

```
src/
├── components/
│   ├── Layout/
│   │   └── MainLayout.vue          # Main layout component
│   └── UI/
│       └── Toast.vue               # Toast notification component
├── stores/
│   ├── auth.ts                     # Authentication store (Pinia)
│   └── tickets.ts                  # Tickets management store (Pinia)
├── views/
│   ├── LandingPage.vue             # Landing page
│   ├── LoginPage.vue               # Login page
│   ├── SignupPage.vue              # Signup page
│   ├── DashboardPage.vue           # Dashboard with statistics
│   └── TicketsPage.vue             # Ticket management page
├── router/
│   └── index.ts                    # Vue Router configuration
├── assets/
│   └── main.css                    # Global styles
├── App.vue                         # Root component
└── main.ts                         # Application entry point
```

## 🎨 Design System

### Layout Requirements

- **Max Width**: 1440px, centered on large screens
- **Hero Section**: Wavy SVG background with decorative circles
- **Cards**: Rounded corners with shadows for content sections
- **Responsive**: Mobile-first design with tablet and desktop adaptations

### Color Scheme

- **Primary**: Indigo (#6366f1)
- **Success**: Green (#10b981)
- **Warning**: Yellow (#f59e0b)
- **Error**: Red (#ef4444)
- **Neutral**: Gray scale

### Status Colors

- **Open**: Green tone
- **In Progress**: Amber tone
- **Closed**: Gray tone

## 🔒 Security & Authentication

- **Session Management**: Uses localStorage with key `ticketapp_session`
- **Protected Routes**: Dashboard and Tickets pages require authentication
- **Route Guards**: Automatic redirect to login for unauthorized access
- **Form Validation**: Client-side validation with server-side simulation

## ♿ Accessibility Features

- **Semantic HTML**: Proper use of headings, labels, and landmarks
- **Keyboard Navigation**: Full keyboard accessibility
- **Screen Reader Support**: ARIA labels and descriptions
- **Focus Management**: Visible focus states and logical tab order
- **Color Contrast**: Sufficient contrast ratios for text readability

## 🧪 Testing

### Manual Testing Checklist

- [ ] Landing page loads with wavy background and decorative elements
- [ ] Authentication flow works (login/signup/logout)
- [ ] Dashboard displays correct statistics
- [ ] Ticket CRUD operations function properly
- [ ] Form validation shows appropriate error messages
- [ ] Responsive design works on mobile, tablet, and desktop
- [ ] Toast notifications appear and disappear correctly
- [ ] Protected routes redirect unauthorized users

### Test User Credentials

- **Email**: admin@example.com
- **Password**: password

## 🐛 Known Issues

- Authentication is simulated using localStorage (not a real backend)
- Data persistence is limited to browser storage
- No real-time updates or collaboration features
- File uploads are not supported

## 🚀 Deployment

### Production Build

```bash
npm run build
```

The built files will be in the `dist/` directory, ready for deployment to any static hosting service.

### Recommended Hosting

- Vercel
- Netlify
- GitHub Pages
- AWS S3 + CloudFront

## 📝 License

This project is part of a frontend development internship task.

## 🤝 Contributing

This is a demonstration project. For production use, consider:

- Adding real backend integration
- Implementing proper error boundaries
- Adding unit and integration tests
- Setting up CI/CD pipeline
- Adding internationalization support

## 📞 Support

For questions or issues related to this Vue.js implementation, please refer to the project documentation or contact the development team.

---

**Note**: This is the Vue.js implementation of a multi-framework project. The same functionality is also available in React and Twig implementations.
