export interface Role {
  title: string;
  org: string;
  type: string;
  period: string;
  duration: string;
  place: string;
  highlight?: boolean;
  bullets: string[];
  tools?: string;
}

export const experience: Role[] = [
  {
    title: 'UI/UX & System Design Intern',
    org: 'Dinas Komunikasi dan Informatika Provinsi Jawa Barat',
    type: 'Internship',
    period: 'Aug 2025 – Sep 2025',
    duration: '2 mos',
    place: 'Bandung, West Java, Indonesia · Hybrid',
    bullets: [
      'Analyzed system requirements and designed user flows, wireframes, and high-fidelity interactive prototypes for an online gambling advertisement and website reporting system.',
      'Designed two interface experiences for different user groups: public/community users and administrators.',
      'Reviewed navigation and prototype interactions, presented design concepts, and incorporated feedback and revisions.',
    ],
    tools: 'Figma, Requirements Analysis, User Flow Design, Wireframing, UI/UX Design, Prototyping',
  },
  {
    title: 'Machine Learning Intern',
    org: 'CODECRAFT INFOTECH',
    type: 'Internship',
    period: 'May 2025 – Jun 2025',
    duration: '2 mos',
    place: 'Remote',
    bullets: [
      'Developed a house price prediction workflow using the Ames Housing dataset, cleaning 1,460 records into 1,296 usable samples and selecting six features for model development.',
      'Compared KNN Regressor, Random Forest, and AdaBoost using test Mean Squared Error (MSE), with Random Forest achieving the lowest test error among the evaluated models.',
      'Performed customer segmentation on 200 Mall Customers records using K-Means clustering, selecting five clusters through the Elbow Method.',
      'Visualized customer segments based on annual income and spending score to support customer behavior analysis.',
    ],
    tools: 'Python, Pandas, NumPy, Matplotlib, Seaborn, Scikit-learn, Google Colab, Joblib',
  },
  {
    title: 'Bangkit Academy 2024 Batch 2: Machine Learning Cohort',
    org: 'Bangkit Academy led by Google, Tokopedia, Gojek, & Traveloka',
    type: 'Program',
    period: 'Sep 2024 – Dec 2024',
    duration: '4 mos',
    place: 'Indonesia',
    highlight: true,
    bullets: [
      'Selected as one of 4,000+ accepted students from 45,000+ applicants across Indonesia.',
      'Completed 905 hours of industry-standard machine learning training (average score 87.50, 100% attendance) covering data processing, model development and evaluation, and deep learning.',
      'Built MAHA, a gym and diet recommendation model, in a team capstone project (multi-output TensorFlow/Keras network converted to TensorFlow Lite).',
      'Delivered an e-commerce data analysis project with a Streamlit dashboard that received a 5-star review.',
    ],
  },
];

export const education = {
  school: 'Universitas Komputer Indonesia',
  degree: 'Bachelor of Information Systems',
  period: 'Sep 2022 – Aug 2026',
  grade: '3.89',
  honors: 'Sangat Terpuji (Magna Cum Laude)',
  activities: 'Himpunan Mahasiswa Sistem Informasi (Information, Communication, and Media Division)',
  thesis: 'A WhatsApp chatbot for information services at Puskesmas Cijagra Baru (NLP, SVM, TF-IDF, Flask).',
  coursework: 'Data Mining, Machine Learning, Advanced NLP, Database Systems, and Algorithms and Programming.',
};

export interface Org { title: string; org: string; period: string; text: string; }

export const organizations: Org[] = [
  {
    title: 'Member, Information, Communication, and Media Division',
    org: 'Himpunan Mahasiswa Sistem Informasi, Universitas Komputer Indonesia',
    period: 'Dec 2024 – Nov 2025',
    text: 'Returned as a senior member contributing to publications, content design, and event documentation.',
  },
  {
    title: 'Vice Chair, Information, Communication, and Media Division',
    org: 'Himpunan Mahasiswa Sistem Informasi, Universitas Komputer Indonesia',
    period: 'Nov 2023 – Dec 2024',
    text: 'Oversaw the planning and execution of communication and digital presence strategies, led a team producing promotional materials, event highlights, and social media campaigns, managed internal and external communications, and fostered collaboration between divisions. Named Best Board Member (Pengurus Terbaik) at the start of the term.',
  },
  {
    title: 'Member, Information, Communication, and Media Division',
    org: 'Himpunan Mahasiswa Sistem Informasi, Universitas Komputer Indonesia',
    period: 'Feb 2023 – Nov 2023',
    text: 'Contributed to nine work programs by designing visual materials (logos, flyers, and banners) and documenting events through photos and videos, and maintained activity records and archives. Named Best Junior Member (Angkatan Muda Terbaik) at the end of the term.',
  },
];
