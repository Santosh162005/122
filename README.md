# Engineer Day Survey Website

A complete survey website for collecting Engineer Day ideas from students with an admin dashboard for viewing and downloading responses.

## Features

### Survey Form (`/`)
- 📝 Comprehensive form for student ideas
- 📱 Mobile-responsive design
- 🎨 Modern, attractive UI
- ✅ Form validation
- 🎯 Department and event type categorization

### Admin Dashboard (`/admin`)
- 📊 Real-time statistics
- 🔍 Search and filter responses
- 📥 Download data as JSON/CSV
- 📈 Response analytics
- 🔄 Auto-refresh every 30 seconds

## Quick Start

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the server:**
   ```bash
   npm start
   ```
   
   Or for development:
   ```bash
   npm run dev
   ```

3. **Access the website:**
   - Survey Form: http://localhost:3000
   - Admin Panel: http://localhost:3000/admin

## File Structure

```
├── server.js           # Express server
├── package.json        # Dependencies
├── public/
│   ├── index.html     # Survey form
│   └── admin.html     # Admin dashboard
└── data/
    └── surveys.json   # Survey responses (auto-created)
```

## API Endpoints

- `GET /` - Survey form
- `GET /admin` - Admin dashboard
- `POST /submit-survey` - Submit survey response
- `GET /admin/data` - Get all responses (JSON)
- `GET /admin/download` - Download responses file

## Data Storage

All survey responses are stored in `data/surveys.json` with timestamps. The admin can download this file or export as CSV.

## Sharing the Survey

Share this link with students: **http://localhost:3000**

(Replace with your actual domain when deployed)

## Deployment Notes

For production deployment:
1. Change PORT to environment variable
2. Add proper authentication for admin panel
3. Consider database instead of JSON file
4. Add HTTPS support
5. Set up proper domain name
