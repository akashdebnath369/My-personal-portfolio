/**
 * Portfolio content & fallback GitHub data
 * Akash Debnath — AI/ML Engineer Portfolio
 */

const PORTFOLIO = {
  name: "Akash Debnath",
  title: "AI / ML Engineer · Computer Vision · Software Developer",
  email: "akashdebnath112234@gmail.com",
  phone: "+91 9862969544",
  phoneAlt: "+91 9863121173",
  location: "Jogendranagar, Agartala, Tripura — 799004",
  github: "https://github.com/akashdebnath369",
  linkedin: "https://www.linkedin.com/in/akash-debnath-226a82342",
  instagram: "https://www.instagram.com/akashdebnath__",
  facebook: "https://www.facebook.com/share/14nTrRAxQ5c/",
  portfolio: "https://akashdebnath369.github.io/My-personal-portfolio/",
  resume:
    "https://drive.google.com/file/d/1xcT64w-IbZcKpOJrFQRZjancLu2zomHK/view?usp=sharing",

  typingPhrases: [
    "AI / ML Engineer",
    "Computer Vision Enthusiast",
    "Software Developer",
    "Python Developer",
  ],

  summary:
    "Computer Science undergraduate with research and industry experience in Artificial Intelligence, Machine Learning, Computer Vision, and software engineering through internships at NIT Agartala. Skilled in developing AI-powered applications using Python, NLP, OCR, OpenCV, YOLO, MediaPipe, DeepFace, TensorFlow, FastAPI, and modern software development tools. Passionate about building intelligent systems that solve real-world problems.",

  education: {
    university: "ICFAI University Tripura",
    degree: "B.Tech Computer Science & Engineering",
    graduation: "2027",
    cgpa: "8.24",
    status: "3rd Year Undergraduate",
  },

  skills: [
    {
      category: "Programming",
      icon: "code",
      items: ["Python", "C", "C++", "JavaScript"],
    },
    {
      category: "Web",
      icon: "web",
      items: ["HTML", "CSS", "Responsive Design"],
    },
    {
      category: "Backend",
      icon: "server",
      items: ["FastAPI", "SQLAlchemy"],
    },
    {
      category: "Machine Learning",
      icon: "brain",
      items: [
        "Deep Learning",
        "Computer Vision",
        "NLP",
        "OCR",
        "Speech Processing",
      ],
    },
    {
      category: "Libraries",
      icon: "library",
      items: ["OpenCV", "YOLO", "MediaPipe", "DeepFace", "TensorFlow"],
    },
    {
      category: "Tools",
      icon: "tools",
      items: ["Git", "GitHub", "VS Code", "Jupyter", "MS Office"],
    },
    {
      category: "Soft Skills",
      icon: "users",
      items: [
        "Problem Solving",
        "Communication",
        "Leadership",
        "Teamwork",
      ],
    },
  ],

  experience: [
    {
      title: "AI & Computer Vision Intern",
      org: "AI & HCI Lab · NIT Agartala",
      period: "May 2026 – July 2026",
      project: "ARIA Smart Vision-Based Human Recognition System",
      highlights: [
        "Face Detection & Face Alignment",
        "Emotion Recognition",
        "Age & Gender Estimation",
        "Object Detection",
        "Hand Gesture Recognition",
        "Voice Interaction · Speech To Text · Text To Speech",
        "Real-time AI integration with OpenCV, YOLO, MediaPipe, DeepFace & TensorFlow",
      ],
      type: "internship",
    },
    {
      title: "Research Intern",
      org: "Data Analytics Laboratory · NIT Agartala",
      period: "Research Internship",
      project: "Multimodal Hate Speech and Offensive Content Detection",
      highlights: [
        "HASOC-Meme 2025",
        "FIRE 2025",
        "Machine Learning · NLP · OCR · Computer Vision",
      ],
      type: "research",
    },
    {
      title: "Front-End Developer Intern",
      org: "VirtuNexa",
      period: "Internship",
      project: "Frontend Development",
      highlights: [
        "HTML · CSS · JavaScript",
        "Responsive UI design & implementation",
        "Collaborative project delivery",
      ],
      type: "frontend",
    },
  ],

  projects: [
    {
      id: "aria",
      title: "ARIA Smart Vision-Based Human Recognition System",
      subtitle: "Flagship AI & Computer Vision Project",
      description:
        "An AI-powered smart vision system that performs real-time human recognition with face detection, emotion analysis, object detection, gesture recognition, and voice assistant capabilities — integrated into a live dashboard for human-computer interaction.",
      status: "Active Development",
      timeline: "May 2026 – Present",
      featured: true,
      gradient: "gradient-aria",
      github:
        "https://github.com/akashdebnath369/ARIA-Smart-Vision-Based-Human-Recognition-System",
      demo: null,
      features: [
        "Face Detection",
        "Emotion Recognition",
        "Object Detection",
        "Hand Gesture Recognition",
        "Voice Assistant",
        "Age & Gender Estimation",
        "Real-time Dashboard",
      ],
      tech: [
        "OpenCV",
        "YOLO",
        "MediaPipe",
        "DeepFace",
        "TensorFlow",
        "Python",
        "FastAPI",
      ],
    },
    {
      id: "suswastha",
      title: "SuSwastha",
      subtitle: "AI Healthcare Platform",
      description:
        "A cloud-first AI healthcare screening platform with OTP authentication, disease risk prediction, OCR-assisted medical report extraction, and downloadable PDF reports stored on Cloudinary.",
      status: "Completed",
      timeline: "2025 – 2026",
      featured: true,
      gradient: "gradient-health",
      github: "https://github.com/akashdebnath369/SuSwastha",
      demo: null,
      features: [
        "OTP Authentication",
        "OCR Report Extraction",
        "Disease Prediction",
        "Cloudinary Storage",
        "PDF Reports",
        "Doctor Booking",
      ],
      tech: ["FastAPI", "Python", "SQLAlchemy", "OCR", "Cloudinary", "JWT"],
    },
    {
      id: "hate-speech",
      title: "Multimodal Hate Speech Detection",
      subtitle: "Research · HASOC-Meme 2025",
      description:
        "A multimodal machine learning pipeline that detects hate speech and offensive content by combining NLP, OCR, and computer vision for richer context understanding across text and image inputs.",
      status: "Research",
      timeline: "2025 – 2026",
      featured: true,
      gradient: "gradient-ml",
      github:
        "https://github.com/akashdebnath369/Machine-Learning-project-on-Multimodal-Hate-Speech-and-Offensive-Content-Detection-",
      demo: null,
      features: ["NLP", "OCR", "Computer Vision", "HASOC-Meme 2025", "FIRE 2025"],
      tech: ["Python", "Machine Learning", "Deep Learning", "Jupyter"],
    },
    {
      id: "connection-control",
      title: "Connection Control Web Server",
      subtitle: "Real-time Client-Server Application",
      description:
        "A LAN-based client-server web application with WebSocket-powered real-time monitoring, connection controls, and live backend logging through a modern responsive interface.",
      status: "Completed",
      timeline: "June 2026",
      featured: false,
      gradient: "gradient-web",
      github:
        "https://github.com/akashdebnath369/CONNECTION-CONTROL-WEB-SERVER-PROJECT",
      demo: null,
      features: [
        "Client-Server Architecture",
        "Node.js & Express",
        "WebSockets",
        "Real-time Monitoring",
        "Responsive UI",
      ],
      tech: ["HTML", "CSS", "JavaScript", "Node.js", "Express", "WebSockets"],
    },
    {
      id: "object-detection",
      title: "Object Detection Project",
      subtitle: "Computer Vision · Real-time Detection",
      description:
        "Real-time object detection system using OpenCV with SSD MobileNet trained on the COCO dataset, delivering bounding boxes, class labels, and confidence scores from live webcam feeds.",
      status: "Completed",
      timeline: "June 2026",
      featured: false,
      gradient: "gradient-cv",
      github: "https://github.com/akashdebnath369/OBJECT-DETECTION-PROJECT",
      demo: null,
      features: [
        "OpenCV",
        "SSD MobileNet",
        "COCO Dataset",
        "Live Webcam Feed",
        "Bounding Boxes & Labels",
      ],
      tech: ["Python", "OpenCV", "YOLO", "Computer Vision"],
    },
  ],

  achievements: [
    {
      title: "NIT Agartala Internship",
      desc: "AI & Computer Vision internship at AI & HCI Lab, building the ARIA human recognition system.",
      icon: "award",
    },
    {
      title: "HASOC-Meme 2025",
      desc: "Research contribution on multimodal hate speech and offensive content detection.",
      icon: "research",
    },
    {
      title: "Microsoft SOAR",
      desc: "Completed Microsoft Student Outreach & Academic Readiness program.",
      icon: "microsoft",
    },
    {
      title: "Research Experience",
      desc: "Hands-on research at Data Analytics Laboratory, NIT Agartala.",
      icon: "lab",
    },
    {
      title: "AI Projects Portfolio",
      desc: "5+ production-grade AI, ML, and computer vision projects on GitHub.",
      icon: "rocket",
    },
    {
      title: "VirtuNexa Internship",
      desc: "Professional frontend development experience in a collaborative team.",
      icon: "briefcase",
    },
  ],

  certifications: [
    {
      id: "cert-ai-cv",
      title: "AI & Computer Vision Internship",
      issuer: "NIT Agartala · AI & HCI Lab",
      desc: "Internship completion in AI, computer vision, and real-time human recognition systems.",
      image: "assets/certificates/ai-cv-internship.jpg",
      download: null,
    },
    {
      id: "cert-research",
      title: "Research Internship",
      issuer: "NIT Agartala · Data Analytics Laboratory",
      desc: "Research internship in multimodal hate speech and offensive content detection.",
      image: "assets/certificates/research-internship.jpg",
      download: null,
    },
    {
      id: "cert-soar",
      title: "Microsoft SOAR",
      issuer: "Microsoft",
      desc: "Student Outreach & Academic Readiness — AI fundamentals and career readiness.",
      image: "assets/certificates/microsoft-soar.jpg",
      download: null,
    },
    {
      id: "cert-python",
      title: "Python for Data Science",
      issuer: "Saylor Academy",
      desc: "Python programming applied to data science workflows and analysis.",
      image: "assets/certificates/python-datascience.jpg",
      download: null,
    },
    {
      id: "cert-java",
      title: "Java OOP",
      issuer: "Saylor Academy",
      desc: "Object-oriented programming concepts and Java fundamentals.",
      image: "assets/certificates/java-oop.jpg",
      download: null,
    },
    {
      id: "cert-virtunexa",
      title: "VirtuNexa Internship",
      issuer: "VirtuNexa",
      desc: "Frontend development internship — responsive UI and modern web practices.",
      image: "assets/certificates/virtunexa.jpg",
      download: null,
    },
  ],

  /* Fallback when GitHub API is unavailable */
  githubRepos: [
    {
      name: "ARIA-Smart-Vision-Based-Human-Recognition-System",
      html_url:
        "https://github.com/akashdebnath369/ARIA-Smart-Vision-Based-Human-Recognition-System",
      description:
        "AI-powered Smart Vision-Based Human Recognition System with face detection, emotion recognition, and real-time tracking.",
      stargazers_count: 0,
      language: "Python",
      pinned: true,
    },
    {
      name: "SuSwastha",
      html_url: "https://github.com/akashdebnath369/SuSwastha",
      description:
        "Smart healthcare web-based system for health risk prediction and medical guidance.",
      stargazers_count: 0,
      language: "Python",
      pinned: true,
    },
    {
      name: "Machine-Learning-project-on-Multimodal-Hate-Speech-and-Offensive-Content-Detection-",
      html_url:
        "https://github.com/akashdebnath369/Machine-Learning-project-on-Multimodal-Hate-Speech-and-Offensive-Content-Detection-",
      description:
        "Multimodal hate speech and offensive content detection using NLP and computer vision.",
      stargazers_count: 0,
      language: "Jupyter Notebook",
      pinned: true,
    },
    {
      name: "OBJECT-DETECTION-PROJECT",
      html_url: "https://github.com/akashdebnath369/OBJECT-DETECTION-PROJECT",
      description:
        "Real-time object detection using YOLO and OpenCV from live webcam feed.",
      stargazers_count: 0,
      language: "Python",
      pinned: true,
    },
    {
      name: "CONNECTION-CONTROL-WEB-SERVER-PROJECT",
      html_url:
        "https://github.com/akashdebnath369/CONNECTION-CONTROL-WEB-SERVER-PROJECT",
      description:
        "Real-time client-server web app with WebSockets and LAN-based connection controls.",
      stargazers_count: 0,
      language: "JavaScript",
      pinned: false,
    },
    {
      name: "My-personal-portfolio",
      html_url: "https://github.com/akashdebnath369/My-personal-portfolio",
      description:
        "Personal portfolio showcasing AI/ML projects, experience, and skills.",
      stargazers_count: 0,
      language: "HTML",
      pinned: false,
    },
  ],

  githubUsername: "akashdebnath369",
};
