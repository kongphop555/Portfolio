/* ======================================================================
 * Every word, link and image on the page lives here. index.html only
 * holds the layout; edit this file and reload.
 *
 * - "TODO" marks something still missing. A TODO in text shows on the
 *   page as-is; a link or video set to "TODO" or null is hidden instead,
 *   so the site never ships a dead link.
 * - Hero slots are fixed-size boxes. Keep each one within about 20% of
 *   the length noted beside it, or it will run out of its card.
 * - Images: drop files into images/ and point src at "images/name.jpg".
 *   The two hero card images are sampled for their reveal effect, so with
 *   local files open the page through a server (python -m http.server),
 *   not file://.
 * ====================================================================== */
window.CONTENT = {
  meta: {
    title: "Kongphop Ruentongdi — Software Engineer Portfolio",
    description: "Portfolio of Kongphop (Petch) Ruentongdi, a full-stack developer and Software Engineering student at Mae Fah Luang University, focused on UX/UI and frontend."
  },

  /* the dock's logo tile links home; the five pills follow the sections */
  dock: {
    homeLabel: "Kongphop Ruentongdi — home",
    about: "About",
    skills: "Skills",
    projects: "Projects",
    experience: "Experience",
    contact: "Contact"
  },

  hero: {
    /* Line 2 has ~443px at 1600 wide before it runs into the lede beside
       it (the original "the living world" was 443px). Measured: "I build
       useful apps" 542px and "I build calm, useful software" 827px both
       overflow; "I build calm UI" is 438px. */
    headline: ["Hi, I'm Petch", "I build calm UI"],
    lede: "Full-stack developer and final-year Software Engineering student, strongest in UX/UI and frontend.",   // ≤ ~118
    cta: "View my projects",                                 // ≤ ~19, links to #projects
    play: { url: null, label: "Watch the demo" },           // null hides the play button
    stats: [
      { label: "Projects shipped", value: "TODO" },          // ≤ ~18 / ~10
      { label: "Graduating", value: "May 2027" }
    ],
    aboutCard: {
      label: "About",
      title: "UX-minded engineer.",                          // ≤ ~21, wraps to two lines
      knobLabel: "Read about me",
      image: {
        src: "https://ublctyddhtbgaersvxxb.supabase.co/storage/v1/object/public/threeui-media/scene-images/c74a626e396794aa239bca6f/card-ethos.jpg",
        alt: "Cushions of green moss growing over lichen-covered stones"
      }
    },
    featuredCard: {
      label: "Capstone project",                             // ≤ ~16
      title: "TalentTrail",                                  // ≤ ~17
      knobLabel: "Read about TalentTrail",
      image: {
        src: "https://ublctyddhtbgaersvxxb.supabase.co/storage/v1/object/public/threeui-media/scene-images/c74a626e396794aa239bca6f/card-ecostove.jpg",   // TODO: TalentTrail screenshot
        alt: "Moss-covered boulders and ferns in a misty forest"
      }
    },
    ghost: "PETCH",                                          // ≤ 6 letters
    scrollCue: "Discover"
  },

  about: {
    label: "About",
    title: "I'm Petch — a software engineering student who cares how software feels to use.",
    facts: [
      { label: "Based in", value: "Chiang Rai, Thailand" },
      { label: "Studying", value: "B.Eng. Software Engineering, MFU" },
      { label: "Status", value: "TODO" }
    ],
    paragraphs: [
      "I'm a fourth-year B.Eng. Software Engineering student at Mae Fah Luang University in Chiang Rai, graduating in May 2027. I work across the stack, but I'm happiest where design meets code — UX/UI and frontend.",
      "On the backend I build APIs with Python (FastAPI) and Go (Gin), on top of MongoDB or PostgreSQL, and ship them with Docker. TODO: what you're exploring or learning now."
    ],
    portrait: {
      name: "Kongphop Ruentongdi",
      role: "Full Stack Developer",
      image: {
        src: "https://ublctyddhtbgaersvxxb.supabase.co/storage/v1/object/public/threeui-media/scene-images/c74a626e396794aa239bca6f/card-ethos.jpg",   // TODO: portrait photo
        alt: "Moss growing over lichen-covered stones (placeholder image)"
      }
    }
  },

  skills: {
    label: "Skills",
    title: "The tools I've built real projects with.",
    groups: [
      { name: "Frontend & UX", items: ["React", "TypeScript", "UX/UI design"] },
      { name: "Backend", items: ["Python", "FastAPI", "Go (Gin)"] },
      { name: "Data & AI", items: ["MongoDB", "PostgreSQL", "Ollama + Mistral", "SBERT"] },
      { name: "Tools", items: ["Docker", "Git", "TODO"] }
    ]
  },

  projects: {
    label: "Projects",
    title: "Selected projects.",
    items: [
      {
        label: "Capstone project",
        title: "TalentTrail",
        description: "A recruiter and HR dashboard that uses AI to score résumés against a job position, running a local LLM (Ollama + Mistral) with SBERT matching.",
        tags: ["React", "TypeScript", "Python", "FastAPI", "MongoDB", "Ollama + Mistral", "SBERT"],
        url: "TODO",
        image: {
          src: "https://ublctyddhtbgaersvxxb.supabase.co/storage/v1/object/public/threeui-media/scene-images/c74a626e396794aa239bca6f/card-ecostove.jpg",   // TODO: screenshot
          alt: "Moss-covered boulders and ferns in a misty forest (placeholder image)"
        }
      },
      {
        label: "TODO: year · team or personal",
        title: "Dormitory Parcel Management System",
        description: "A system for tracking students' parcels in university dormitories.",
        tags: ["React", "Go (Gin)", "PostgreSQL", "Docker"],
        url: "TODO",
        image: {
          src: "https://ublctyddhtbgaersvxxb.supabase.co/storage/v1/object/public/threeui-media/scene-images/c74a626e396794aa239bca6f/card-ethos.jpg",   // TODO: screenshot
          alt: "Moss growing over lichen-covered stones (placeholder image)"
        }
      },
      {
        label: "In progress",
        title: "Road-Quality Mapping",
        description: "Maps road quality from a phone's IMU and GPS sensors.",
        tags: ["IMU", "GPS", "TODO"],
        url: "TODO",
        image: {
          src: "https://ublctyddhtbgaersvxxb.supabase.co/storage/v1/object/public/threeui-media/scene-images/c74a626e396794aa239bca6f/card-ecostove.jpg",   // TODO: screenshot
          alt: "Moss-covered boulders and ferns in a misty forest (placeholder image)"
        }
      }
    ]
  },

  experience: {
    label: "Experience",
    title: "Where I've been learning.",
    items: [
      {
        when: "2023 — 2027",   // TODO: confirm the start year
        role: "B.Eng. Software Engineering",
        org: "Mae Fah Luang University, Chiang Rai",
        text: "Fourth year. Capstone: TalentTrail, an AI-assisted recruiting dashboard."
      },
      {
        when: "TODO",
        role: "TODO: internship, job or activity",
        org: "TODO",
        text: "TODO"
      }
    ]
  },

  contact: {
    label: "Contact",
    title: ["Let's build something", "useful together."],
    text: "I'm graduating in May 2027. TODO: what roles you're open to and how fast you reply.",
    email: "kongphopruentongdee@gmail.com",
    links: [
      { label: "GitHub", url: "https://github.com/kongphop555" },
      { label: "LinkedIn", url: "https://www.linkedin.com/in/kongphop-ruentongdi-183a95445" },
      { label: "Résumé", url: "TODO" }
    ]
  },

  footer: {
    copyright: "© 2026 Kongphop Ruentongdi",
    credit: "Hero scene: Sylva by ThreeUI",
    backToTop: "Back to top ↑",
    ghost: "PETCH"
  }
};
