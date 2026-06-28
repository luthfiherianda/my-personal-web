export const projects = [
  {
    id: "indonesia-education",
    featured: true,
    eyebrow: "Featured project",
    year: "2026",
    title: "Indonesia Education Digital Access Gap Analysis",
    shortDescription:
      "National-scale study analyzing internet access across 552,274 school units in 38 provinces — surfacing the paradox between quantity and penetration.",
    tags: [
      "Data Integration",
      "Data Storytelling",
      "Penetration Analysis",
      "Education",
    ],
    role: "Solo",
    context: "Kemdikdasmen RI data",
    pdf: "/projects/indonesia-education-digital-access.pdf",
    overview:
      "National-scale study analyzing internet access across 552,274 active school units in 38 Indonesian provinces, surfacing the paradox between quantity and penetration.",
    metrics: [
      { value: "552K+", label: "schools analyzed" },
      { value: "38", label: "provinces" },
      { value: "70%", label: "Bali penetration" },
    ],
    finding:
      "Quantity ≠ equity. All 5 lowest-penetration provinces are in eastern Indonesia. Papua Pegunungan at 21% vs Bali at 70%.",
    tools: ["Google Sheets", "Looker Studio"],
    modalTags: [
      "Data Integration",
      "Data Storytelling",
      "Penetration Analysis",
      "Education",
    ],
  },
  {
    id: "smart-salary",
    featured: false,
    gridPosition: "top-left",
    eyebrow: "2025",
    year: "2025",
    title: "Smart Salary Prediction",
    shortDescription:
      "Salary prediction model for the AI industry using 15K records — benchmarked 7 models with optimized feature selection.",
    tags: ["ML Benchmarking", "Feature Engineering", "HR Analytics"],
    role: "Darknight Team (3 members)",
    context: "ISE! Academy",
    pdf: "/projects/smart-salary-prediction.pdf",
    overview:
      "Salary prediction model for AI industry using 15K synthetic job records, benchmarked 7 models, optimized from 51 to 15 features with only 0.4% R² loss.",
    metrics: [
      { value: "87.09%", label: "R² score" },
      { value: "$15,228", label: "MAE" },
      { value: "15K", label: "records" },
    ],
    finding:
      "years_experience correlates strongly with salary (0.74). LightGBM outperformed all models.",
    tools: [
      "Python",
      "LightGBM",
      "Scikit-Learn",
      "Pandas",
      "Matplotlib",
      "Seaborn",
    ],
    modalTags: ["ML Benchmarking", "Feature Engineering", "HR Analytics"],
  },
  {
    id: "airline-ticket",
    featured: false,
    gridPosition: "top-right",
    eyebrow: "2025",
    year: "2025",
    title: "Airline Ticket Price Prediction",
    shortDescription:
      "XGBoost regression model predicting flight prices with log transformation and strategic outlier removal.",
    tags: ["XGBoost", "Log Transformation", "Outlier Analysis"],
    role: "Solo",
    context: "Solo",
    pdf: "/projects/airline-ticket-price-prediction.pdf",
    overview:
      "XGBoost regression model predicting flight prices, applied log transformation and outlier removal strategy.",
    metrics: [
      { value: "86.59%", label: "R² score" },
      { value: "641", label: "MAE (no outliers)" },
      { value: "8,933", label: "records" },
    ],
    finding:
      "days_left has strong negative correlation with price (-0.57). Removing outliers improved R² by ~1%.",
    tools: [
      "Python",
      "XGBoost",
      "Scikit-Learn",
      "NumPy",
      "Pandas",
      "Matplotlib",
      "Seaborn",
    ],
    modalTags: ["XGBoost", "Log Transformation", "Outlier Analysis"],
  },
  {
    id: "car-fuel",
    featured: false,
    gridPosition: "bottom-left",
    eyebrow: "2025",
    year: "2025",
    title: "Car Fuel Efficiency Prediction",
    shortDescription:
      "Linear regression model predicting vehicle MPG with RobustScaler, imputation, and cross-validation.",
    tags: ["Linear Regression", "RobustScaler", "Feature Engineering"],
    role: "Group 5 GDGoC (8 members)",
    context: "GDGoC project",
    pdf: "/projects/car-fuel-efficiency-prediction.pdf",
    overview:
      "Linear regression model predicting vehicle MPG, applied RobustScaler, median imputation, One-Hot Encoding, cross-validation.",
    metrics: [
      { value: "88.9%", label: "R² score" },
      { value: "1.79 MPG", label: "MAE" },
      { value: "398", label: "records" },
    ],
    finding:
      "Car weight has the strongest negative correlation with MPG. Model generalizes well to new data.",
    tools: [
      "Python",
      "Scikit-Learn",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Seaborn",
    ],
    modalTags: ["Linear Regression", "RobustScaler", "Feature Engineering"],
  },
  {
    id: "economic-growth",
    featured: false,
    gridPosition: "bottom-right",
    eyebrow: "2024",
    year: "2024",
    title: "Economic Growth & Infrastructure Analysis",
    shortDescription:
      "Analyzed infrastructure investment and innovation vs economic growth across 38 Indonesian provinces (2019–2021).",
    tags: ["OLS Regression", "Correlation Analysis", "Data Binning"],
    role: "Group 9 HITLAB (2 members, Team Lead)",
    context: "HITLAB project",
    pdf: "/projects/economic-growth-infrastructure.pdf",
    overview:
      "Analyzed relationship between infrastructure investment, innovation index, and technology adoption rate vs economic growth across 38 Indonesian provinces (2019–2021).",
    metrics: [
      { value: "0.06", label: "R² score" },
      { value: "89", label: "data points" },
      { value: "38", label: "provinces" },
    ],
    finding:
      "Most correlations were near zero — external variables likely play a larger role.",
    tools: [
      "Python",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Seaborn",
      "Statsmodels",
    ],
    modalTags: ["OLS Regression", "Correlation Analysis", "Data Binning"],
  },
];

export const featuredProject = projects.find((project) => project.featured);

export const gridProjects = [
  projects.find((p) => p.id === "smart-salary"),
  projects.find((p) => p.id === "airline-ticket"),
  projects.find((p) => p.id === "car-fuel"),
  projects.find((p) => p.id === "economic-growth"),
];

export function getProjectById(id) {
  return projects.find((project) => project.id === id) ?? null;
}
