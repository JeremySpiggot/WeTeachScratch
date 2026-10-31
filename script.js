* {
  box-sizing: border-box;
}

:root {
  --bg: #f4fbff;
  --bg-strong: #ebf6ff;
  --panel: #ffffff;
  --panel-alt: #eef7ff;
  --ink: #10233e;
  --muted: #4f6785;
  --line: rgba(16, 35, 62, 0.1);
  --blue: #1f8bff;
  --aqua: #38d7ff;
  --sky: #8edaf9;
  --purple: #5a59ff;
  --orange: #ff9b42;
  --yellow: #ffd166;
  --success: #2bb673;
  --shadow: 0 24px 60px rgba(26, 76, 122, 0.12);
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  font-family: "Inter", sans-serif;
  background: linear-gradient(180deg, #f4fbff 0%, #edf7ff 100%);
  color: var(--ink);
  line-height: 1.6;
}

img {
  display: block;
  max-width: 100%;
}

a {
  color: inherit;
  text-decoration: none;
}

.container {
  width: min(1120px, calc(100% - 32px));
  margin: 0 auto;
}

.section-shell {
  padding: 84px 0;
}

.eyebrow {
  display: inline-block;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--purple);
  font-size: 0.74rem;
  margin-bottom: 18px;
}

.site-header {
  position: sticky;
  top: 0;
  z-index: 30;
  backdrop-filter: blur(14px);
  background: rgba(244, 251, 255, 0.76);
  border-bottom: 1px solid rgba(16, 35, 62, 0.05);
}

.nav-wrap {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 82px;
  gap: 24px;
}

.brand {
  display: flex;
  align-items: center;
}

.brand-link {
  display: inline-flex;
  align-items: center;
}

.brand-logo {
  width: 220px;
  height: auto;
}

.nav {
  display: flex;
  align-items: center;
  gap: 28px;
  color: var(--muted);
  font-weight: 600;
}

.nav a {
  transition: color 0.2s ease;
}

.nav a:hover {
  color: var(--purple);
}

.button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 999px;
  padding: 0.9rem 1.4rem;
  font-weight: 700;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  border: 1px solid transparent;
}

.button:hover {
  transform: translateY(-1px);
}

.button-primary {
  background: linear-gradient(135deg, var(--aqua), var(--blue), var(--purple));
  color: white;
  box-shadow: 0 16px 30px rgba(90, 89, 255, 0.26);
}

.button-secondary {
  background: rgba(255, 255, 255, 0.8);
  border-color: rgba(90, 89, 255, 0.2);
  color: var(--ink);
}

.hero {
  padding: 60px 0 40px;
}

.hero-grid {
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 40px;
  align-items: center;
}

.hero-copy h1 {
  margin: 0 0 20px;
  font-size: clamp(2.5rem, 5vw, 4.5rem);
  line-height: 1.04;
  letter-spacing: -0.06em;
}

.hero-copy p {
  margin: 0;
  max-width: 620px;
  font-size: 1.08rem;
  color: var(--muted);
}

.hero-actions {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  margin-top: 28px;
}

.hero-stats {
  list-style: none;
  padding: 0;
  margin: 32px 0 0;
  display: grid;
  grid-template-columns: repeat(3, minmax(120px, 1fr));
  gap: 12px;
}

.hero-stats li {
  padding: 18px 16px;
  background: rgba(255, 255, 255, 0.7);
  border: 1px solid var(--line);
  border-radius: 18px;
  box-shadow: 0 10px 18px rgba(26, 76, 122, 0.04);
}

.hero-stats strong {
  display: block;
  font-size: 1.45rem;
  margin-bottom: 4px;
}

.hero-stats span {
  color: var(--muted);
  font-size: 0.9rem;
}

.hero-card {
  display: flex;
  justify-content: center;
}

.preview-window {
  width: min(100%, 520px);
  background: rgba(18, 31, 56, 0.96);
  border-radius: 28px;
  box-shadow: var(--shadow);
  overflow: hidden;
}

.preview-header {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 18px 20px;
  background: rgba(255, 255, 255, 0.06);
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}

.dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  display: inline-block;
}

.dot.red {
  background: #ff6b6b;
}

.dot.yellow {
  background: #ffd166;
}

.dot.green {
  background: #61d095;
}

.preview-body {
  padding: 26px 22px 18px;
  color: white;
}

.preview-badge {
  display: inline-flex;
  background: rgba(56, 215, 255, 0.16);
  color: #9aeaf3;
  border: 1px solid rgba(56, 215, 255, 0.28);
  border-radius: 999px;
  padding: 8px 12px;
  font-weight: 700;
  font-size: 0.76rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.preview-body h2 {
  margin: 18px 0 18px;
  font-size: clamp(1.8rem, 3vw, 2.4rem);
}

.mini-steps {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 22px;
}

.mini-steps span {
  background: rgba(255, 255, 255, 0.08);
  color: #dbeafc;
  border-radius: 999px;
  padding: 8px 10px;
  font-size: 0.75rem;
}

.progress-bar {
  width: 100%;
  height: 14px;
  background: rgba(255, 255, 255, 0.08);
  border-radius: 999px;
  overflow: hidden;
  margin-bottom: 18px;
}

.progress-bar span {
  display: block;
  width: 72%;
  height: 100%;
  border-radius: inherit;
  background: linear-gradient(90deg, var(--aqua), var(--purple), var(--yellow));
}

.lesson-list {
  display: grid;
  gap: 12px;
}

.lesson-list div {
  display: flex;
  align-items: center;
  gap: 12px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 12px;
  padding: 10px 12px;
}

.lesson-list span {
  width: 32px;
  height: 32px;
  display: grid;
  place-items: center;
  border-radius: 10px;
  background: linear-gradient(135deg, var(--aqua), var(--purple));
  font-weight: 700;
  font-size: 0.72rem;
}

.lesson-list p {
  margin: 0;
  color: #dfeaf7;
}

.section-heading {
  margin-bottom: 36px;
}

.section-heading h2 {
  margin: 0;
  font-size: clamp(2rem, 3vw, 3rem);
  letter-spacing: -0.05em;
}

.alt {
  background: rgba(255, 255, 255, 0.38);
}

.course-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 22px;
}

.course-card {
  background: rgba(255, 255, 255, 0.8);
  border: 1px solid var(--line);
  border-radius: 24px;
  box-shadow: 0 14px 30px rgba(17, 44, 74, 0.04);
  padding: 22px 20px;
}

.course-card .tag {
  display: inline-flex;
  padding: 7px 10px;
  background: rgba(90, 89, 255, 0.08);
  color: var(--purple);
  border-radius: 999px;
  font-size: 0.74rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

.course-card h3 {
  margin: 18px 0 12px;
  font-size: 1.3rem;
}

.course-card p {
  margin: 0;
  color: var(--muted);
}

.curriculum-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 22px;
}

.curriculum-item {
  background: linear-gradient(180deg, #ffffff 0%, #f3f9ff 100%);
  border: 1px solid var(--line);
  border-radius: 22px;
  padding: 24px 20px;
}

.step-number {
  display: inline-flex;
  width: 44px;
  height: 44px;
  border-radius: 12px;
  background: linear-gradient(135deg, var(--orange), var(--yellow));
  align-items: center;
  justify-content: center;
  color: var(--ink);
  font-weight: 800;
  margin-bottom: 20px;
}

.curriculum-item h3 {
  margin: 0 0 12px;
  font-size: 1.25rem;
}

.curriculum-item p,
.why p,
.feature-box li {
  color: var(--muted);
}

.split-layout {
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 28px;
  align-items: center;
}

.feature-box {
  background: linear-gradient(180deg, #ffffff 0%, #f4f9ff 100%);
  border: 1px solid var(--line);
  border-radius: 24px;
  padding: 28px 24px;
  box-shadow: 0 18px 36px rgba(17, 44, 74, 0.04);
}

.feature-box h3 {
  margin-top: 0;
  margin-bottom: 18px;
  font-size: 1.5rem;
}

.feature-box ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: 14px;
}

.feature-box li {
  position: relative;
  padding-left: 28px;
  line-height: 1.5;
}

.feature-box li::before {
  content: "";
  position: absolute;
  left: 0;
  top: 9px;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--aqua), var(--purple));
}

.cta-box {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  background: linear-gradient(135deg, rgba(56, 215, 255, 0.14), rgba(90, 89, 255, 0.12), rgba(255, 155, 66, 0.16));
  border: 1px solid rgba(90, 89, 255, 0.12);
  border-radius: 28px;
  padding: 36px 32px;
}

.cta-box h2 {
  margin: 0;
  font-size: clamp(1.8rem, 3vw, 2.8rem);
  letter-spacing: -0.06em;
}

.site-footer {
  padding: 28px 0 56px;
}

.footer-wrap {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  color: var(--muted);
  border-top: 1px solid var(--line);
  padding-top: 20px;
}

@media (max-width: 980px) {
  .hero-grid,
  .split-layout,
  .course-grid,
  .curriculum-grid {
    grid-template-columns: 1fr 1fr;
  }

  .hero-grid {
    grid-template-columns: 1fr;
  }

  .nav {
    display: none;
  }
}

@media (max-width: 620px) {
  .section-shell {
    padding: 68px 0;
  }

  .course-grid,
  .curriculum-grid,
  .split-layout,
  .hero-stats {
    grid-template-columns: 1fr;
  }

  .brand-logo {
    width: 170px;
  }

  .button {
    width: 100%;
  }

  .hero-actions {
    flex-direction: column;
  }

  .cta-box,
  .footer-wrap {
    flex-direction: column;
    align-items: flex-start;
  }
}
