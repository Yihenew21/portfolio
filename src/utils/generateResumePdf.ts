import { jsPDF } from "jspdf";

export function generateResumePdf(): void {
  const doc = new jsPDF({
    orientation: "portrait",
    unit: "mm",
    format: "a4"
  });

  const pageWidth = 210;
  const pageHeight = 297;
  const marginX = 16;
  const contentWidth = pageWidth - marginX * 2;
  let cursorY = 18;

  const primaryRed: [number, number, number] = [234, 0, 68]; // #ea0044
  const darkText: [number, number, number] = [24, 23, 27];
  const mutedText: [number, number, number] = [90, 90, 95];
  const bodyText: [number, number, number] = [45, 45, 50];
  const borderLight: [number, number, number] = [220, 220, 225];

  // Helper for section headings
  const renderSectionHeader = (title: string, iconSymbol: string = "■") => {
    // Check page break
    if (cursorY > pageHeight - 35) {
      doc.addPage();
      cursorY = 18;
    }

    doc.setFont("helvetica", "bold");
    doc.setFontSize(12);
    doc.setTextColor(...primaryRed);
    doc.text(iconSymbol, marginX, cursorY);
    
    doc.setTextColor(...darkText);
    doc.text(title.toUpperCase(), marginX + 4.5, cursorY);

    // Accent line
    doc.setDrawColor(...borderLight);
    doc.setLineWidth(0.4);
    doc.line(marginX + 4.5 + doc.getTextWidth(title.toUpperCase()) + 3, cursorY - 1, marginX + contentWidth, cursorY - 1);

    cursorY += 6.5;
  };

  // Helper for bullet points
  const renderBullet = (text: string, indent: number = 4) => {
    if (cursorY > pageHeight - 20) {
      doc.addPage();
      cursorY = 18;
    }
    doc.setFont("helvetica", "normal");
    doc.setFontSize(9.5);
    doc.setTextColor(...primaryRed);
    doc.text("•", marginX + indent, cursorY);

    doc.setTextColor(...bodyText);
    const splitLines = doc.splitTextToSize(text, contentWidth - indent - 4);
    doc.text(splitLines, marginX + indent + 3.5, cursorY);
    cursorY += splitLines.length * 4.4 + 1.2;
  };

  // ================= PAGE 1 =================

  // Header Banner with Subtle Accent Bar
  doc.setFillColor(...primaryRed);
  doc.rect(marginX, cursorY, 3, 16, "F");

  doc.setFont("helvetica", "bold");
  doc.setFontSize(22);
  doc.setTextColor(...darkText);
  doc.text("YIHENEW ANIMUT MULU", marginX + 6, cursorY + 7);

  doc.setFont("helvetica", "bold");
  doc.setFontSize(10.5);
  doc.setTextColor(...primaryRed);
  doc.text("SOFTWARE ENGINEER  |  FULL-STACK DEVELOPER  |  MACHINE LEARNING", marginX + 6, cursorY + 14);

  cursorY += 21;

  // Contact Information Bar
  doc.setFillColor(248, 248, 250);
  doc.roundedRect(marginX, cursorY, contentWidth, 12, 1.5, 1.5, "F");
  doc.setDrawColor(...borderLight);
  doc.setLineWidth(0.2);
  doc.roundedRect(marginX, cursorY, contentWidth, 12, 1.5, 1.5, "S");

  doc.setFont("helvetica", "normal");
  doc.setFontSize(8.5);
  doc.setTextColor(...mutedText);

  const contactItems = [
    "Location: Addis Ababa, Ethiopia",
    "Email: birukanimut1234@gmail.com",
    "Phone: +251 984 661 247",
    "GitHub: github.com/Yihenew21",
    "LinkedIn: linkedin.com/in/yihenew-animut",
    "Telegram: t.me/Imbiruk"
  ];
  
  const colWidth = contentWidth / 3;
  doc.text(contactItems[0], marginX + 3, cursorY + 4.5);
  doc.text(contactItems[1], marginX + colWidth + 2, cursorY + 4.5);
  doc.text(contactItems[2], marginX + colWidth * 2 + 2, cursorY + 4.5);
  doc.text(contactItems[3], marginX + 3, cursorY + 9.5);
  doc.text(contactItems[4], marginX + colWidth + 2, cursorY + 9.5);
  doc.text(contactItems[5], marginX + colWidth * 2 + 2, cursorY + 9.5);

  cursorY += 17;

  // Summary Section
  renderSectionHeader("Professional Summary");
  doc.setFont("helvetica", "normal");
  doc.setFontSize(9.5);
  doc.setTextColor(...bodyText);
  const summaryText = 
    "Software Engineer experienced in building scalable full-stack web applications, AI-powered systems, and data-driven solutions. Experienced in developing Retrieval-Augmented Generation (RAG) applications, machine learning solutions, and high-performance web platforms. Demonstrated leadership in managing engineering teams, establishing agile best practices, and delivering high-impact production software.";
  const splitSummary = doc.splitTextToSize(summaryText, contentWidth);
  doc.text(splitSummary, marginX, cursorY);
  cursorY += splitSummary.length * 4.4 + 5;

  // Technical Skills Section
  renderSectionHeader("Technical Proficiencies");

  const skillCategories = [
    { title: "Languages:", list: "Python, JavaScript, TypeScript, C++, SQL, HTML5, CSS3" },
    { title: "Frontend:", list: "React.js, Next.js (App Router, SSG/SSR), Tailwind CSS, Redux Toolkit, Responsive UI/UX" },
    { title: "Backend & DB:", list: "Node.js, Express.js, PostgreSQL (Supabase, Neon), Google Firestore, REST APIs, GraphQL" },
    { title: "AI & ML:", list: "Retrieval-Augmented Generation (RAG), Gemini API, Vector Embeddings, scikit-learn, pandas, NumPy" },
    { title: "Tools & DevOps:", list: "Git, GitHub, Docker, Postman, Vercel, Supabase, Linux/Unix, CI/CD Workflows, Agile/Scrum" }
  ];

  skillCategories.forEach(cat => {
    doc.setFont("helvetica", "bold");
    doc.setFontSize(9);
    doc.setTextColor(...darkText);
    doc.text(cat.title, marginX + 2, cursorY);

    const titleW = doc.getTextWidth(cat.title);
    doc.setFont("helvetica", "normal");
    doc.setTextColor(...bodyText);
    const split = doc.splitTextToSize(cat.list, contentWidth - titleW - 6);
    doc.text(split, marginX + 2 + titleW + 2, cursorY);
    cursorY += split.length * 4.2 + 1;
  });

  cursorY += 5;

  // Work Experience Section
  renderSectionHeader("Professional Experience");

  // Experience 1: Telsem Tech
  doc.setFont("helvetica", "bold");
  doc.setFontSize(10.5);
  doc.setTextColor(...darkText);
  doc.text("Full-Stack Developer & Team Lead", marginX, cursorY);

  doc.setFont("helvetica", "bold");
  doc.setFontSize(9.5);
  doc.setTextColor(...primaryRed);
  const comp1 = "Telsem Tech";
  const comp1W = doc.getTextWidth(comp1);
  doc.text(comp1, marginX + contentWidth - comp1W, cursorY);

  cursorY += 4.5;
  doc.setFont("helvetica", "italic");
  doc.setFontSize(8.5);
  doc.setTextColor(...mutedText);
  doc.text("Sep 2025 – Present | Addis Ababa, Ethiopia", marginX, cursorY);
  cursorY += 4.5;

  renderBullet("Lead a cross-functional team of 10 engineers in designing and developing scalable web applications, driving sprint planning and engineering velocity.");
  renderBullet("Architected and built a multi-tenant portal and pharmacy inventory management system using React, Next.js, and Node.js.");
  renderBullet("Designed responsive frontends with Tailwind CSS and architected PostgreSQL relational schemas via Supabase and Neon.");
  renderBullet("Increased sprint delivery velocity by 20% through agile workflows, rigorous code reviews, and automated CI/CD pipelines.");

  cursorY += 3;

  // Experience 2: Lawbridge Ethiopia
  doc.setFont("helvetica", "bold");
  doc.setFontSize(10.5);
  doc.setTextColor(...darkText);
  doc.text("Co-Founder & Full-Stack / AI Engineer", marginX, cursorY);

  doc.setFont("helvetica", "bold");
  doc.setFontSize(9.5);
  doc.setTextColor(...primaryRed);
  const comp2 = "Lawbridge Ethiopia";
  const comp2W = doc.getTextWidth(comp2);
  doc.text(comp2, marginX + contentWidth - comp2W, cursorY);

  cursorY += 4.5;
  doc.setFont("helvetica", "italic");
  doc.setFontSize(8.5);
  doc.setTextColor(...mutedText);
  doc.text("2026 – Present | Addis Ababa, Ethiopia  (Startup)", marginX, cursorY);
  cursorY += 4.5;

  renderBullet("Co-founded a legaltech platform connecting freelance lawyers with clients across Ethiopia.");
  renderBullet("Engineered an automated RAG pipeline using Google Gemini API and Google Firestore vector storage to answer Ethiopian legal inquiries.");
  renderBullet("Architected core system with Next.js App Router and Neon Serverless PostgreSQL, optimizing database queries for high concurrency.");

  // Footer on Page 1
  doc.setFont("helvetica", "normal");
  doc.setFontSize(8);
  doc.setTextColor(...mutedText);
  doc.text("Yihenew Animut Mulu — Resume", marginX, pageHeight - 10);
  doc.text("Page 1 of 2", marginX + contentWidth - 14, pageHeight - 10);

  // ================= PAGE 2 =================
  doc.addPage();
  cursorY = 18;

  // Experience 3: JD Trading
  doc.setFont("helvetica", "bold");
  doc.setFontSize(10.5);
  doc.setTextColor(...darkText);
  doc.text("Web Developer (Freelance, Remote)", marginX, cursorY);

  doc.setFont("helvetica", "bold");
  doc.setFontSize(9.5);
  doc.setTextColor(...primaryRed);
  const comp3 = "JD Trading";
  const comp3W = doc.getTextWidth(comp3);
  doc.text(comp3, marginX + contentWidth - comp3W, cursorY);

  cursorY += 4.5;
  doc.setFont("helvetica", "italic");
  doc.setFontSize(8.5);
  doc.setTextColor(...mutedText);
  doc.text("Feb 2025 – Jun 2025 | Remote", marginX, cursorY);
  cursorY += 4.5;

  renderBullet("Designed, built, and launched a responsive React.js website for international trade operations.");
  renderBullet("Achieved 95+ Google Lighthouse performance score and reduced initial page load times by 1.2 seconds through asset bundling and code splitting.");
  renderBullet("Integrated customer inquiry workflows that directly boosted qualified inbound business leads.");

  cursorY += 3;

  // Experience 4: EfuyeGela Technologies
  doc.setFont("helvetica", "bold");
  doc.setFontSize(10.5);
  doc.setTextColor(...darkText);
  doc.text("Web Developer Intern", marginX, cursorY);

  doc.setFont("helvetica", "bold");
  doc.setFontSize(9.5);
  doc.setTextColor(...primaryRed);
  const comp4 = "EfuyeGela Technologies";
  const comp4W = doc.getTextWidth(comp4);
  doc.text(comp4, marginX + contentWidth - comp4W, cursorY);

  cursorY += 4.5;
  doc.setFont("helvetica", "italic");
  doc.setFontSize(8.5);
  doc.setTextColor(...mutedText);
  doc.text("Mar 2025 – Sep 2025 | Addis Ababa, Ethiopia", marginX, cursorY);
  cursorY += 4.5;

  renderBullet("Developed and deployed the showcase website for Muqecha Studios using Next.js Static Site Generation.");
  renderBullet("Integrated Cloudinary for media asset optimization and Resend for transactional email delivery.");
  renderBullet("Coordinated with cross-functional designers to ensure mobile responsiveness and cross-browser consistency.");

  cursorY += 6;

  // Key Projects Section
  renderSectionHeader("Featured Engineering Projects");

  const projects = [
    {
      name: "Lawbridge Ethiopia — AI Legal Platform",
      stack: "Next.js, Neon PostgreSQL, Gemini API, Firestore, Tailwind CSS",
      desc: "Legaltech platform with automated document chunking, semantic vector search, and Gemini-grounded responses for legal assistance."
    },
    {
      name: "Amhara Media Corporation Job Portal",
      stack: "React.js, Node.js, Express, Supabase (PostgreSQL), RESTful API",
      desc: "Full-stack job portal streamlining recruitment, job postings, and applicant tracking for Ethiopia's prominent media corporation."
    },
    {
      name: "Insurance Risk Analytics & Predictive Modeling",
      stack: "Python, pandas, scikit-learn, Matplotlib, A/B Hypothesis Testing",
      desc: "Exploratory claim risk modeling, demographic A/B testing, and predictive pricing optimization based on historical risk drivers."
    },
    {
      name: "Muqecha Studios Showcase Platform",
      stack: "Next.js, Cloudinary, Resend, Tailwind CSS, Vercel",
      desc: "Modern game studio showcase with optimized media streaming, responsive portfolio galleries, and contact pipelines."
    }
  ];

  projects.forEach(p => {
    doc.setFont("helvetica", "bold");
    doc.setFontSize(9.5);
    doc.setTextColor(...darkText);
    doc.text(p.name, marginX, cursorY);

    cursorY += 4;
    doc.setFont("helvetica", "italic");
    doc.setFontSize(8.5);
    doc.setTextColor(...primaryRed);
    doc.text(`Stack: ${p.stack}`, marginX + 3, cursorY);

    cursorY += 4;
    renderBullet(p.desc, 3);
    cursorY += 1.5;
  });

  cursorY += 4;

  // Education Section
  renderSectionHeader("Education & Honors");

  doc.setFont("helvetica", "bold");
  doc.setFontSize(10.5);
  doc.setTextColor(...darkText);
  doc.text("Debre Berhan University", marginX, cursorY);

  doc.setFont("helvetica", "bold");
  doc.setFontSize(9.5);
  doc.setTextColor(...primaryRed);
  const honorText = "GPA: 3.97 / 4.0 (Highest Honors)";
  const honorW = doc.getTextWidth(honorText);
  doc.text(honorText, marginX + contentWidth - honorW, cursorY);

  cursorY += 4.5;
  doc.setFont("helvetica", "normal");
  doc.setFontSize(9.5);
  doc.setTextColor(...bodyText);
  doc.text("Bachelor of Science in Software Engineering  |  Class of 2026", marginX, cursorY);

  cursorY += 4.5;
  renderBullet("Specialized in Distributed Systems, Scalable Web Architecture, Database Systems, and Applied Machine Learning.");
  renderBullet("Ranked top of the graduating cohort with academic distinction across all 5 engineering years.");

  // Footer on Page 2
  doc.setFont("helvetica", "normal");
  doc.setFontSize(8);
  doc.setTextColor(...mutedText);
  doc.text("Yihenew Animut Mulu — Resume", marginX, pageHeight - 10);
  doc.text("Page 2 of 2", marginX + contentWidth - 14, pageHeight - 10);

  // Trigger Save / Download
  doc.save("Yihenew_Animut_Mulu_Resume.pdf");
}
