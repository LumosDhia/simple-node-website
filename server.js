const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from public directory
app.use(express.static(path.join(__dirname, 'public')));

// API status endpoint
app.get('/api/status', (req, res) => {
  res.json({
    status: 'online',
    service: 'Simple Node Website',
    environment: process.env.NODE_ENV || 'development',
    timestamp: new Date().toISOString(),
    uptimeSeconds: Math.floor(process.uptime()),
    features: ['GitHub CI/CD', 'Express Server', 'Live Metrics', 'Glassmorphism UI']
  });
});

// API health endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'healthy', code: 200 });
});

// Fallback to index.html for SPA routing if needed
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start server if executed directly
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

module.exports = app;
