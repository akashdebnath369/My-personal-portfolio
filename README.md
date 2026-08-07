# Akash Debnath — Premium AI/ML Portfolio

A premium single-page portfolio built with **HTML5, CSS3, and JavaScript** — optimized for GitHub Pages deployment.

## Features

- Dark theme with indigo/purple/cyan gradients & glassmorphism
- Animated neural network particle background
- Typing animation, scroll reveals, parallax & cursor glow
- All sections: Home, About, Education, Skills, Experience, Projects, Achievements, Certifications, GitHub, Resume, Contact
- Live GitHub API integration with fallback data
- Certificate modal viewer
- Fully responsive & accessible

## Structure

```
My-personal-portfolio/
├── index.html          # Main single-page portfolio
├── css/style.css       # All styles
├── js/
│   ├── data.js         # Portfolio content & GitHub fallback data
│   └── script.js       # Animations, rendering, GitHub API
├── assets/
│   ├── images/         # Profile photo
│   ├── certificates/   # Certificate images (optional)
│   └── resume/         # Resume PDF (optional)
└── .github/workflows/  # GitHub Pages deployment
```

## Local Development

Open `index.html` in a browser, or use a local server:

```bash
npx serve .
```

## GitHub Pages Deployment

1. Push to GitHub
2. Go to **Settings → Pages**
3. Source: **GitHub Actions** (workflow included in `.github/workflows/static.yml`)

## Customization

- Edit content in `js/data.js`
- Edit colors in CSS variables at the top of `css/style.css`
- Add certificate images to `assets/certificates/`
- Replace `assets/images/profile.jpg` with your photo

## Contact

- GitHub: [akashdebnath369](https://github.com/akashdebnath369)
- LinkedIn: [akash-debnath](https://www.linkedin.com/in/akash-debnath-226a82342)
- Email: akashdebnath112234@gmail.com
