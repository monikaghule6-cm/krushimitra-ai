:root {
  --bg: #f5fbf7;
  --bg-soft: #ebf8ef;
  --primary: #1fa764;
  --primary-dark: #0e7b4a;
  --primary-light: #dff7e8;
  --accent: #f7d26a;
  --text: #123228;
  --muted: #5e7a72;
  --card: rgba(255, 255, 255, 0.74);
  --border: rgba(20, 98, 57, 0.12);
  --shadow: 0 20px 50px rgba(17, 79, 52, 0.10);
  --danger: #e15a4d;
  --warning: #f0a11b;
  --success: #2bb875;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: "Inter", sans-serif;
  color: var(--text);
  background:
    radial-gradient(circle at top left, rgba(87, 216, 146, 0.12), transparent 28%),
    linear-gradient(180deg, #f8fffa 0%, #eefaf3 100%);
}

a {
  text-decoration: none;
  color: inherit;
}

button,
input,
select {
  font: inherit;
}

img {
  max-width: 100%;
}

.container {
  width: min(1200px, calc(100% - 30px));
  margin: 0 auto;
}

.topbar {
  position: sticky;
  top: 0;
  z-index: 50;
  background: rgba(245, 251, 247, 0.8);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(14, 123, 74, 0.08);
}

.nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 18px 0;
  gap: 24px;
}

.brand {
  display: flex;
  align-items: center;
  gap: 12px;
}

.brand-mark {
  width: 48px;
  height: 48px;
  border-radius: 14px;
  display: grid;
  place-items: center;
  background: linear-gradient(135deg, var(--primary), var(--primary-dark));
  color: white;
  font-size: 1.5rem;
  box-shadow: var(--shadow);
}

.brand h2 {
  font-size: 1.2rem;
}

.brand small {
  color: var(--muted);
  display: block;
  font-size: 0.74rem;
}

.nav-links {
  display: flex;
  gap: 22px;
  font-weight: 600;
  color: var(--muted);
}

.nav-links a:hover {
  color: var(--primary-dark);
}

.nav-actions {
  display: flex;
  align-items: center;
  gap: 12px;
}

.user-badge {
  background: var(--primary-light);
  color: var(--primary-dark);
  border-radius: 999px;
  padding: 8px 12px;
  font-size: 0.8rem;
  font-weight: 700;
}

.primary-btn,
.secondary-btn,
.lang-btn,
.auth-tab,
.mini-btn {
  border: none;
  border-radius: 12px;
  padding: 12px 18px;
  font-weight: 700;
  cursor: pointer;
  transition: 0.2s ease;
}

.primary-btn {
  background: linear-gradient(135deg, var(--primary), var(--primary-dark));
  color: white;
  box-shadow: 0 12px 24px rgba(31, 167, 100, 0.25);
}

.primary-btn:hover,
.secondary-btn:hover,
.lang-btn:hover,
.auth-tab:hover,
.mini-btn:hover {
  transform: translateY(-1px);
}

.secondary-btn {
  background: white;
  color: var(--text);
  border: 1px solid var(--border);
}

.mini-btn {
  background: var(--primary-light);
  color: var(--primary-dark);
  border: 1px solid var(--border);
  padding: 8px 12px;
  font-size: 0.8rem;
}

.auth-shell {
  padding-top: 18px;
}

.auth-card {
  padding: 22px;
  max-width: 480px;
  margin: 0 auto;
}

.hidden {
  display: none;
}

.auth-tabs {
  display: flex;
  gap: 10px;
  margin-bottom: 18px;
}

.auth-tab {
  flex: 1;
  background: rgba(255, 255, 255, 0.7);
  color: var(--text);
  border: 1px solid var(--border);
}

.auth-tab.active {
  background: var(--primary);
  color: white;
  border-color: transparent;
}

.auth-card form {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.auth-status {
  margin-top: 14px;
  min-height: 24px;
  color: var(--primary-dark);
  font-weight: 700;
}

.hero {
  padding: 60px 0 32px;
}

.hero-inner {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  align-items: center;
  gap: 28px;
}

.tagline {
  display: inline-block;
  margin-bottom: 16px;
  padding: 8px 14px;
  background: var(--primary-light);
  border-radius: 999px;
  color: var(--primary-dark);
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  font-size: 0.72rem;
}

.hero-left h1 {
  font-size: clamp(2.8rem, 5.5vw, 5rem);
  line-height: 1.04;
  letter-spacing: -0.06em;
  margin-bottom: 18px;
}

.hero-left p {
  color: var(--muted);
  line-height: 1.7;
  max-width: 620px;
  font-size: 1.05rem;
}

.hero-actions {
  display: flex;
  gap: 16px;
  margin-top: 28px;
}

.mini-stats {
  display: flex;
  gap: 30px;
  margin-top: 28px;
}

.mini-stats strong {
  display: block;
  font-size: 1.5rem;
}

.mini-stats span {
  color: var(--muted);
  font-size: 0.9rem;
}

.glass {
  background: var(--card);
  backdrop-filter: blur(10px);
  border: 1px solid var(--border);
  border-radius: 24px;
  box-shadow: var(--shadow);
}

.hero-panel {
  padding: 24px;
}

.weather-header,
.panel-head,
.result-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 14px;
}

.weather-actions {
  display: flex;
  align-items: center;
  gap: 8px;
}

.weather-actions input {
  width: 120px;
  padding: 8px 10px;
  border-radius: 10px;
  border: 1px solid var(--border);
  background: rgba(255, 255, 255, 0.8);
}

.status-pill {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 999px;
  padding: 7px 12px;
  font-size: 0.75rem;
  font-weight: 700;
}

.success {
  color: var(--success);
  background: rgba(43, 184, 117, 0.1);
}

.warning {
  color: var(--warning);
  background: rgba(240, 161, 27, 0.12);
}

.danger {
  color: var(--danger);
  background: rgba(225, 90, 77, 0.1);
}

.temp-row {
  display: flex;
  align-items: baseline;
  gap: 16px;
  margin: 24px 0 18px;
}

.temp-row h2 {
  font-size: clamp(2.4rem, 3vw, 3.6rem);
}

.weather-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(110px, 1fr));
  gap: 18px;
}

.weather-grid label,
.market-list label,
.market-table .row span {
  display: block;
  color: var(--muted);
  margin-bottom: 8px;
}

section {
  padding: 52px 0;
}

.section-head {
  margin-bottom: 22px;
}

.eyebrow {
  color: var(--primary-dark);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  font-size: 0.72rem;
  font-weight: 700;
  display: inline-block;
  margin-bottom: 12px;
}

.section-head h2 {
  font-size: clamp(2rem, 2.7vw, 2.8rem);
  letter-spacing: -0.05em;
}

.stats-grid,
.action-grid,
.market-grid,
.doctor-grid,
.recommend-grid,
.tools-grid {
  display: grid;
  gap: 22px;
}

.stats-grid {
  grid-template-columns: repeat(4, minmax(180px, 1fr));
}

.stat-card {
  padding: 22px 18px;
  border-radius: 22px;
}

.stat-card span {
  color: var(--muted);
  display: block;
}

.stat-card strong {
  display: block;
  margin: 14px 0 8px;
  font-size: clamp(1.8rem, 2.8vw, 2.4rem);
}

.action-grid {
  grid-template-columns: repeat(6, minmax(120px, 1fr));
}

.action-card {
  background: rgba(255, 255, 255, 0.7);
  border: 1px solid var(--border);
  box-shadow: var(--shadow);
  border-radius: 22px;
  padding: 26px 14px;
  text-align: center;
}

.action-card span {
  font-size: 2.2rem;
  margin-bottom: 14px;
  display: block;
}

.action-card h4 {
  font-size: 1rem;
}

.split-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 22px;
}

.panel,
.form-panel,
.recommend-output,
.upload-box,
.result-box,
.tool-card,
.voice-panel {
  padding: 22px;
}

.health-list,
.alert-list {
  list-style: none;
  margin-top: 18px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.health-list li,
.market-list > div,
.market-table .row,
.community-posts .post {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  padding: 14px 0;
  border-bottom: 1px solid rgba(18, 50, 40, 0.08);
}

.health-list li:last-child,
.market-list > div:last-child,
.market-table .row:last-child,
.community-posts .post:last-child {
  border-bottom: none;
}

.market-list {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 12px;
}

.doctor-grid {
  grid-template-columns: 0.9fr 1.1fr;
}

.upload-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  min-height: 280px;
}

.upload-icon {
  font-size: 3.5rem;
  margin-bottom: 20px;
}

.upload-box input[type="file"] {
  width: 100%;
  margin: 18px 0;
  padding: 12px 14px;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.9);
  border: 1px dashed rgba(31, 167, 100, 0.35);
}

.result-box h4 {
  margin-top: 14px;
  margin-bottom: 10px;
  font-size: 1.9rem;
}

.result-box p {
  color: var(--muted);
  line-height: 1.8;
  margin-bottom: 8px;
}

.recommend-grid {
  grid-template-columns: 0.9fr 1.1fr;
}

form {
  display: flex;
  flex-direction: column;
  gap: 18px;
}

label {
  display: flex;
  flex-direction: column;
  gap: 9px;
  font-weight: 600;
}

input,
select {
  width: 100%;
  padding: 14px 16px;
  border-radius: 14px;
  border: 1px solid rgba(20, 98, 57, 0.15);
  background: rgba(255, 255, 255, 0.9);
  color: var(--text);
}

.recommend-output h3 {
  margin-bottom: 18px;
}

#recommendationResult {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  align-items: center;
}

.crop-badge {
  background: var(--primary-light);
  color: var(--primary-dark);
  border-radius: 999px;
  padding: 10px 14px;
  font-weight: 700;
}

#recommendationResult p {
  width: 100%;
  color: var(--muted);
  margin-top: 12px;
  font-size: 1.04rem;
}

.market-grid {
  grid-template-columns: 0.9fr 1.1fr;
}

.small-panel {
  min-height: 300px;
}

.market-table {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 12px;
}

.market-table .row {
  padding: 14px 0;
}

#marketChart {
  margin-top: 18px;
  max-height: 240px;
}

.tools-grid {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.tool-card h3 {
  margin-bottom: 18px;
}

.tool-form {
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.tool-form p {
  margin-top: 6px;
  color: var(--muted);
  font-weight: 600;
}

.voice-panel {
  display: flex;
  flex-direction: column;
  gap: 18px;
}

.voice-controls {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.lang-btn {
  background: rgba(255, 255, 255, 0.7);
  color: var(--text);
  border: 1px solid var(--border);
}

.lang-btn.active {
  background: var(--primary);
  color: white;
  border-color: transparent;
}

.voice-box {
  background: rgba(255, 255, 255, 0.55);
  border: 1px solid var(--border);
  border-radius: 18px;
  padding: 18px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
}

#voiceQuestion {
  color: var(--muted);
  font-size: 1.08rem;
  line-height: 1.6;
}

.community-posts {
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-top: 18px;
}

.post {
  flex-direction: column;
  align-items: flex-start;
}

.post p {
  color: var(--muted);
  margin-top: 8px;
  line-height: 1.7;
}

.alert-list li {
  padding: 12px 0;
  border-bottom: 1px solid rgba(18, 50, 40, 0.08);
  color: var(--muted);
}

.alert-list li:last-child {
  border-bottom: none;
}

.save-section {
  padding-top: 20px;
}

.save-status {
  margin-top: 16px;
  color: var(--primary-dark);
  font-weight: 700;
  min-height: 24px;
}

.footer {
  background: #113229;
  color: rgba(255, 255, 255, 0.8);
  padding: 22px 0;
  margin-top: 20px;
}

.footer-inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 18px;
}

@media (max-width: 980px) {
  .hero-inner,
  .split-grid,
  .doctor-grid,
  .recommend-grid,
  .market-grid,
  .tools-grid,
  .stats-grid {
    grid-template-columns: 1fr;
  }

  .nav-links {
    display: none;
  }

  .action-grid {
    grid-template-columns: repeat(2, minmax(130px, 1fr));
  }
}

@media (max-width: 640px) {
  .hero {
    padding-top: 30px;
  }

  .hero-actions,
  .mini-stats,
  .voice-box,
  .footer-inner {
    flex-direction: column;
    align-items: flex-start;
  }

  .weather-actions {
    flex-direction: column;
    align-items: stretch;
  }

  .action-grid {
    grid-template-columns: 1fr;
  }

  .lang-btn,
  .auth-tab {
    flex: 1;
  }
}
