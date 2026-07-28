document.addEventListener('DOMContentLoaded', () => {
  const statusDot = document.getElementById('status-dot');
  const statusText = document.getElementById('status-text');
  const btnRefresh = document.getElementById('btn-refresh');
  const valEnv = document.getElementById('val-env');
  const valUptime = document.getElementById('val-uptime');
  const valTime = document.getElementById('val-time');

  async function fetchStatus() {
    statusText.textContent = 'Checking...';
    try {
      const response = await fetch('/api/status');
      if (!response.ok) throw new Error('API offline');
      const data = await response.json();
      
      statusDot.className = 'status-dot healthy';
      statusText.textContent = 'Operational (200 OK)';
      valEnv.textContent = data.environment || 'Production';
      valUptime.textContent = `${data.uptimeSeconds || 0}s`;
      valTime.textContent = new Date().toLocaleTimeString();
    } catch (err) {
      statusDot.className = 'status-dot';
      statusDot.style.background = '#f87171';
      statusText.textContent = 'Static Mode / Standalone';
      valEnv.textContent = 'GitHub Pages';
      valTime.textContent = new Date().toLocaleTimeString();
    }
  }

  btnRefresh.addEventListener('click', fetchStatus);

  // Initial fetch
  fetchStatus();
});
