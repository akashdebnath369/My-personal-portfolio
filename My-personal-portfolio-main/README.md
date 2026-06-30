# Akash Debnath - Personal Portfolio Website

A modern, responsive, multi-page personal portfolio built with **pure HTML, CSS, and JavaScript** (no frameworks).

## Folder Structure

```
portfolio/
├── index.html              # Home page
├── about.html              # About, skills, hobbies
├── projects.html           # Project showcase
├── certifications.html     # Experience & certifications
├── contact.html            # Contact form & info
├── css/
│   └── style.css           # All styles
├── js/
│   └── script.js           # All JavaScript
├── assets/
│   ├── images/             # Profile & project images
│   ├── icons/              # Icons (optional)
│   └── resume/             # Resume PDF (optional)
└── README.md
```

## How to Run

1. Open the project folder on your computer.
2. Double-click **`index.html`** to open it in your browser.
3. Navigate between pages using the navbar.

**Optional:** Use a local server for development:

```bash
# Python 3
python -m http.server 8000

# Then visit: http://localhost:8000
```

## Features

- Dark theme with glassmorphism UI
- Purple/blue accents with cyan hover glow
- Responsive design (mobile, tablet, desktop)
- Sticky navbar with hamburger menu
- Typing animation on home page
- Particle background animation
- Scroll fade-in animations
- Skill progress bars
- Contact form validation
- Back-to-top button

## How to Customize

### Profile Photo

1. Add your image to `assets/images/profile.jpg`
2. In `index.html`, replace the placeholder div with:

```html
<img src="assets/images/profile.jpg" alt="Akash Debnath" class="profile-placeholder" style="object-fit: cover;">
```

### Project Images

Replace `<div class="project-image">SS</div>` with:

```html
<img src="assets/images/suswastha.jpg" alt="SuSwastha" class="project-image" style="object-fit: cover; width: 100%;">
```

### Colors

Edit CSS variables at the top of `css/style.css`:

```css
:root {
  --accent-purple: #8b5cf6;
  --accent-blue: #3b82f6;
  --accent-cyan: #22d3ee;
}
```

### Add a New Project

Copy a project card block in `projects.html` and update title, description, badges, and GitHub link.

### Google Map

In `contact.html`, replace the map placeholder with an iframe from [Google Maps Embed](https://www.google.com/maps).

### Contact Form (Real Emails)

The form currently validates input only. To send emails, connect it to:
- [Formspree](https://formspree.io)
- [EmailJS](https://www.emailjs.com)
- Your own backend API

## Pages

| Page | File | Description |
|------|------|-------------|
| Home | `index.html` | Hero, typing effect, quick highlights |
| About | `about.html` | Bio, education, skills, hobbies |
| Projects | `projects.html` | Project cards with GitHub links |
| Experience | `certifications.html` | Timeline & certifications |
| Contact | `contact.html` | Form, social links, map placeholder |

## Author

**Akash Debnath**  
AI/ML Developer | B.Tech CSE, ICFAI University Tripura

- GitHub: [akashdebnath369](https://github.com/akashdebnath369)
- LinkedIn: [akash-debnath](https://www.linkedin.com/in/akash-debnath-226a82342)
- Email: akashdebnath112234@gmail.com

## License

Free to use and modify for personal portfolio purposes.
