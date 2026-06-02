# Kuldip Lohare - Personal Portfolio Website

A professional, authenticated portfolio website built with React.js, Node.js, and MySQL. Features secure login authentication, dynamic content management, and responsive design.

## 🚀 Features

### Authentication
- **Login-only system** (no signup required)
- Hardcoded credentials for security
- JWT-based authentication
- Protected routes
- Session persistence

### Frontend Features
- **Responsive Design** - Mobile, tablet, and desktop optimized
- **Interactive Carousel** - Showcasing roles and expertise
- **Dynamic Forms** - Add new skills and projects (authenticated users only)
- **Smooth Animations** - Hover effects and transitions
- **Modern UI** - Built with Tailwind CSS

### Backend Features
- **RESTful APIs** - Clean and organized endpoints
- **MySQL Database** - Persistent data storage
- **State Management** - React Context API
- **CRUD Operations** - Full create, read, update, delete functionality

## 🛠️ Tech Stack

### Frontend
- **React.js** - UI framework
- **Tailwind CSS** - Styling and responsive design
- **React Router** - Client-side routing
- **React Icons** - Icon library
- **Axios** - HTTP client

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MySQL** - Database
- **JWT** - Authentication
- **bcryptjs** - Password hashing
- **CORS** - Cross-origin resource sharing

## 📋 Prerequisites

Before running this project, make sure you have:

- **Node.js** (v14 or higher)
- **MySQL** (v8.0 or higher)
- **npm** or **yarn**

## 🔧 Installation & Setup

### 1. Clone the Repository
```bash
git clone <repository-url>
cd portfolio
```

### 2. Install Dependencies
```bash
# Install root dependencies
npm install

# Install all dependencies (backend + frontend)
npm run install-all
```

### 3. Database Setup
1. **Create MySQL Database:**
```sql
CREATE DATABASE portfolio_db;
```

2. **Update Database Configuration:**
Edit `backend/.env` file:
```env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=Kuldip@9764
DB_NAME=portfolio_db
```

### 4. Environment Variables
The backend `.env` file should contain:
```env
PORT=5000
JWT_SECRET=kuldip_portfolio_secret_key_2024
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=Kuldip@9764
DB_NAME=portfolio_db
```

### 5. Start the Application

#### Development Mode (Both servers)
```bash
npm run dev
```

#### Individual Servers
```bash
# Backend only
npm run server

# Frontend only
npm run client
```

The application will be available at:
- **Frontend:** http://localhost:3000
- **Backend API:** http://localhost:5000

## 🔐 Login Credentials

```
Username: kuldipl09
Password: Kuldip@7887
```

## 📁 Project Structure

```
portfolio/
├── backend/
│   ├── config/
│   │   └── database.js          # Database configuration
│   ├── middleware/
│   │   └── authMiddleware.js     # JWT authentication middleware
│   ├── routes/
│   │   ├── auth.js              # Authentication routes
│   │   ├── projects.js          # Project CRUD routes
│   │   └── skills.js            # Skills CRUD routes
│   ├── .env                     # Environment variables
│   ├── server.js                # Express server setup
│   └── package.json
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Header.jsx       # Navigation header
│   │   │   ├── Footer.jsx       # Footer with social links
│   │   │   ├── Carousel.jsx     # Interactive carousel
│   │   │   ├── SkillForm.jsx    # Add skill form
│   │   │   ├── ProjectForm.jsx  # Add project form
│   │   │   └── ProtectedRoute.jsx # Route protection
│   │   ├── context/
│   │   │   └── AuthContext.js   # Authentication context
│   │   ├── pages/
│   │   │   ├── Login.jsx        # Login page
│   │   │   ├── Home.jsx         # Homepage with intro
│   │   │   ├── Skills.jsx       # Skills showcase
│   │   │   ├── Projects.jsx     # Projects portfolio
│   │   │   └── Experience.jsx   # Professional experience
│   │   ├── App.jsx              # Main app component
│   │   ├── index.js             # React entry point
│   │   └── index.css            # Global styles
│   ├── tailwind.config.js       # Tailwind configuration
│   └── package.json
├── package.json                 # Root package.json
└── README.md
```

## 🎯 Key Features Explained

### Authentication System
- **Secure Login:** Only predefined user can access the portfolio
- **JWT Tokens:** Secure token-based authentication
- **Route Protection:** All routes except `/login` are protected
- **Session Persistence:** Users stay logged in across browser sessions

### Dynamic Content Management
- **Add Skills:** Authenticated users can add new skills by category
- **Add Projects:** Create new project entries with live/GitHub links
- **Delete Content:** Remove skills and projects (authenticated only)
- **Real-time Updates:** Changes reflect immediately without page refresh

### Responsive Design
- **Mobile First:** Optimized for mobile devices
- **Tablet Support:** Perfect tablet viewing experience
- **Desktop Enhanced:** Full desktop feature set
- **Touch Friendly:** Mobile-optimized interactions

### Performance Features
- **Lazy Loading:** Components load as needed
- **Optimized Images:** Efficient image handling
- **Smooth Animations:** 60fps animations and transitions
- **Fast API:** Optimized database queries

## 🚀 Deployment

### Frontend (Vercel)
1. Build the frontend:
```bash
cd frontend
npm run build
```

2. Deploy to Vercel:
```bash
vercel --prod
```

### Backend (Render/Railway)
1. Set environment variables on your hosting platform
2. Deploy the backend folder
3. Update frontend API URLs to point to production backend

## 🔧 API Endpoints

### Authentication
- `POST /api/auth/login` - User login
- `POST /api/auth/verify` - Verify JWT token

### Projects
- `GET /api/projects` - Get all projects
- `POST /api/projects` - Add new project (protected)
- `DELETE /api/projects/:id` - Delete project (protected)

### Skills
- `GET /api/skills` - Get all skills grouped by category
- `POST /api/skills` - Add new skill (protected)
- `DELETE /api/skills/:id` - Delete skill (protected)

## 🎨 Customization

### Adding New Sections
1. Create new page component in `frontend/src/pages/`
2. Add route in `App.jsx`
3. Update navigation in `Header.jsx`
4. Create corresponding API endpoints if needed

### Styling Changes
- Modify `tailwind.config.js` for theme customization
- Update `index.css` for global styles
- Component-specific styles in individual files

### Database Schema Changes
- Update `backend/config/database.js`
- Modify API routes accordingly
- Update frontend components

## 🐛 Troubleshooting

### Common Issues

1. **Database Connection Failed**
   - Check MySQL is running
   - Verify credentials in `.env`
   - Ensure database exists

2. **JWT Token Issues**
   - Check JWT_SECRET in `.env`
   - Clear browser localStorage
   - Verify token expiration

3. **CORS Errors**
   - Ensure backend CORS is configured
   - Check frontend proxy settings
   - Verify API URLs

4. **Build Errors**
   - Clear node_modules and reinstall
   - Check Node.js version compatibility
   - Verify all dependencies are installed

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👨‍💻 Developer

**Kuldip Lohare**
- Email: kuldiplohare101@gmail.com
- LinkedIn: [linkedin.com/in/kuldip-lohare](https://linkedin.com/in/kuldip-lohare)
- GitHub: [github.com/kuldipl78](https://github.com/kuldipl78)

---

Built with ❤️ using React.js, Node.js, and MySQL