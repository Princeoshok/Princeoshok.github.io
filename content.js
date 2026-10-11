// CONTENT EDITOR: change values inside strings, keep commas and brackets intact.
// Save a backup before editing. See docs/EDITING_GUIDE.md for worked examples.
window.PORTFOLIO_PROFILE = {
  name: 'Prince Abu', designation: 'FRM',
  headline: 'Quantitative economics. Risk analytics. Clear decisions.',
  role: 'Economics Ph.D. candidate',
  institution: 'Middle Tennessee State University',
  graduation: 'May 2027',
  introduction: 'I’m Prince Abu, an FRM-certified Economics Ph.D. candidate at Middle Tennessee State University. I work at the intersection of economic research, forecasting, and quantitative risk analysis.',
  biography: [
    'My research examines the relationship between public R&D, private investment, and technological progress. I use structural models, estimation, and simulation to understand economic mechanisms and assess uncertainty.',
    'My experience spans university research and teaching, business analytics, and banking operations. Across those settings, I’m interested in making complex analysis understandable and useful to the people making decisions.'
  ],
  skills: ['Python', 'SQL', 'MATLAB', 'Dynare', 'R', 'SAS', 'Excel', 'Power BI', 'Tableau'],
  methods: 'Econometrics, time series, Bayesian estimation, maximum likelihood, Kalman filtering, Monte Carlo simulation, and scenario analysis.',
  experience: [
    { title: 'Research & Teaching Assistant', organization: 'Middle Tennessee State University', period: 'August 2022–present', description: 'Macroeconomic data analysis, structural model estimation, simulation, and sensitivity analysis. Teaching experience includes serving as instructor of record for Principles of Microeconomics.' },
    { title: 'Economist / Data Analyst', organization: 'Tonmax Engines', period: 'December 2020–May 2022', description: 'Demand forecasting, revenue and risk analysis, resource allocation, and reporting automation to support business decisions.' },
    { title: 'Transaction Officer', organization: 'Access Bank Nigeria', period: '2019–2020', description: 'Banking operations, transaction processing, and reconciliation, with an interest in improving analytical support for operations.' }
  ],
  education: [
    { degree: 'Ph.D. in Economics', institution: 'Middle Tennessee State University', year: 'Expected May 2027' },
    { degree: 'M.A. in Economics', institution: 'Middle Tennessee State University', year: '2023' },
    { degree: 'Master of Business Administration', institution: 'Regenesys Business School', year: '2022' },
    { degree: 'M.Sc. in Economics', institution: 'University of Benin', year: '2018' },
    { degree: 'B.Sc. in Economics & Statistics', institution: 'University of Benin', year: '2014' }
  ],
  credentials: [
    { title: 'Financial Risk Manager (FRM)', issuer: 'GARP', year: 'Certified 2026' },
    { title: 'Google Cloud Professional Data Engineer', issuer: 'Google Cloud', year: '2025' },
    { title: 'Google Cloud Professional Machine Learning Engineer', issuer: 'Google Cloud', year: '2026' }
  ],
  // Put a PDF in dist/assets/ and set this to 'assets/prince-abu-resume.pdf'.
  // Leave empty to use the printable résumé, generated from this same profile.
  resumePdf: 'assets/prince-abu-resume.pdf'
};

// PROJECT EDITOR: duplicate one object to add a project.
// type is blueprint, research, demo, or completed; category is one of the two paths.
// Optional links: [{ label: 'View code', url: 'https://github.com/your-account/repository' }]
window.PORTFOLIO_PROJECTS = [
{id:'credit-validation',title:'Credit Default Model Validation',category:'Risk Analytics',status:'Project blueprint',type:'blueprint',tags:['Python','PD modeling','Model risk','Backtesting'],summary:'An independent validation framework for credit default probability: discrimination, calibration, stability, and model governance.',question:'Can a default probability model support reliable credit decisions across changing borrower populations?',method:['Define the default event, prediction horizon, intended use, and validation population before fitting a model.','Audit missingness, leakage, outcome availability, and borrower overlap across samples.','Use a time-based holdout and compare a logistic regression baseline with a challenger model.','Assess ROC-AUC, precision-recall, Brier score, calibration, and performance by meaningful borrower segments.','Investigate population stability and document findings, limitations, monitoring thresholds, and remediation.'],data:'Public borrower-level data with documented default outcomes and a usable observation timeline must be selected and checked before execution.',outputs:['Reproducible Python notebooks and data dictionary','Independent validation report with evidence and findings','Monitoring dashboard and model governance checklist'],metric:'PD',art:0},
{id:'inflation-forecasting',title:'U.S. Inflation Forecasting',category:'Economic Research',status:'Project blueprint',type:'blueprint',tags:['Time series','Python','Forecasting','Macroeconomics'],summary:'A framework for forecasting U.S. inflation with transparent benchmarks, out-of-sample evaluation, and economic interpretation.',question:'Which information improves U.S. inflation forecasts beyond a simple, transparent baseline?',method:['Define the inflation measure, transformation, forecast horizon, and information available at each forecast date.','Build a release-aware dataset; use historical vintages where available to limit revision bias.','Compare naive and autoregressive benchmarks with selected multivariate or machine learning alternatives.','Use expanding or rolling forecast windows and report performance separately by horizon.','Translate forecast uncertainty and scenario assumptions into a concise economic briefing.'],data:'Candidate public sources include BLS, BEA, FRED, and ALFRED. Live data ingestion and vintage checks are part of the planned implementation.',outputs:['Forecast notebook with reproducible data acquisition','Out-of-sample benchmark comparison and forecast intervals','Short economist briefing with risks and interpretation'],metric:'CPI / PCE',art:1},
{id:'monte-carlo',title:'Monte Carlo Portfolio Risk',category:'Risk Analytics',status:'Interactive demo',type:'demo',tags:['Simulation','Python','VaR','Expected shortfall'],summary:'Explore how return assumptions, volatility, and the investment horizon change simulated portfolio outcomes.',question:'How do uncertain returns translate into a distribution of possible portfolio outcomes?',method:['Choose a transparent return process and state its assumptions.','Generate 10,000 reproducible lognormal terminal portfolio values using geometric Brownian motion.','Summarize the central outcome, percentile range, probability of loss, VaR, and expected shortfall.','Vary drift, volatility, and horizon to examine sensitivity to modeling choices.','Treat simulated values as illustrative; empirical calibration and richer dependence models are separate extensions.'],data:'This working browser demo uses user-selected assumptions and synthetic draws. It does not use market data or claim a backtested strategy.',outputs:['Interactive simulation with 10,000 terminal outcomes','Downloadable scenario outcomes as CSV','Transparent formulas and assumptions'],metric:'10,000',art:2},
{id:'public-rd',title:'Public R&D & Private Investment',category:'Economic Research',status:'Research focus',type:'research',tags:['DSGE','MATLAB','Dynare','Structural modeling'],summary:'Investigating how public R&D can affect technological progress in private investment and the price of capital goods.',question:'How can public R&D investment affect the cost and quality of private capital through technological progress?',method:['Represent public capital and private investment in a structural macroeconomic model.','Connect public R&D mechanisms to investment-specific technological progress.','Examine model timing, steady-state conditions, calibration, and the interpretation of observables.','Use structural estimation and simulation to investigate dynamic responses and uncertainty.','Communicate the economic mechanism, identification assumptions, and sensitivity of conclusions.'],data:'The research draws on macroeconomic data and structural modeling. A verified paper, replication package, and empirical findings can be attached when ready.',outputs:['Research overview and economic mechanism','Paper and replication materials when available','Economic interpretation of model dynamics'],metric:'R&D → ISTP',art:3}
];
window.PORTFOLIO_SEARCH_PAGES = [
{id:'about',title:'About Prince Abu',category:'Background',summary:'FRM-certified Economics Ph.D. candidate at Middle Tennessee State University. Experience in forecasting, structural modeling, scenario analysis, and data analytics.',tags:['FRM','Economics','MTSU','Python','SQL','MATLAB','R','SAS','Bayesian','Kalman filter']},
{id:'resume',title:'Résumé & Experience',category:'Background',summary:'Education, experience, credentials, and technical skills. Economics Ph.D. expected May 2027; Financial Risk Manager certification completed in 2026.',tags:['Education','Experience','FRM','Resume','CV','Google Cloud']},
{id:'research',title:'Economic Research',category:'Economic Research',summary:'Public R&D, investment-specific technological progress, DSGE modeling, macroeconomic forecasting, and economic interpretation.',tags:['Research','Dissertation','Dynare','Fiscal','Investment']},
{id:'simulator',title:'Portfolio Risk Simulator',category:'Risk Analytics',summary:'A working Monte Carlo tool with 10,000 synthetic portfolio outcomes, sensitivity controls, and CSV export.',tags:['VaR','ES','Monte Carlo','Simulation','Risk','Portfolio']},
{id:'contact',title:'Contact & Professional Profiles',category:'Background',summary:'Connect about quantitative risk, economic research, forecasting, and analytical roles.',tags:['Contact','Email','LinkedIn','GitHub']}
];
