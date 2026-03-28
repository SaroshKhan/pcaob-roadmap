// PCAOB Enterprise Data Roadmap - Canonical Data Model
// Design: Institutional Modernism | Focus: GenAI value creation traced to DS
// Style: No ampersands, no contractions, no pie charts, no ending sentences with prepositions
// No contractor names, logos, or third-party branding
// No FTE references anywhere

export interface YearData {
  id: string;
  label: string;
  window: string;
  theme: string;
  subtitle: string;
  color: string;
  colorLight: string;
  budget: { base: string; range?: string };
  leadershipGets: string[];
  mustBeTrue: string[];
  genAICapabilities: GenAICapability[];
  deliverables: Deliverable[];
  milestones: Milestone[];
  dsTraceability: string[];
}

export interface GenAICapability {
  name: string;
  description: string;
  valueCase: string;
  dsReference: string;
  marketContext?: string;
}

export interface Deliverable {
  name: string;
  quarter: string;
  category: 'governance' | 'platform' | 'genai' | 'analytics';
}

export interface Milestone {
  period: string;
  title: string;
  deliverables: string;
  qualityCheck: string;
}

export interface GateData {
  id: string;
  name: string;
  timing: string;
  description: string;
  metrics: GateMetric[];
  recommendedAction: string;
}

export interface GateMetric {
  name: string;
  target: string;
  status: 'on-track' | 'at-risk' | 'not-started';
}

export interface RiskItem {
  id: string;
  name: string;
  likelihood: number;
  impact: number;
  category: string;
  mitigation: string;
  owner: string;
}

export interface ScenarioData {
  name: string;
  description: string;
  years: {
    year: number;
    budget: number;
    genAIMaturity: string;
  }[];
}

export interface ValueMetric {
  label: string;
  year1: string;
  year2: string;
  year3: string;
  category: 'efficiency' | 'quality' | 'capability';
}

export type StakeholderView = 'board' | 'ot' | 'mission';

// ============================================================
// YEAR DATA
// ============================================================

export const years: YearData[] = [
  {
    id: 'year-1',
    label: 'Year 1',
    window: 'Late April - December 2026',
    theme: 'Foundation and First Wins',
    subtitle: 'Establish the data governance backbone, activate the enterprise catalog as the front door to trusted data, and deliver the first GenAI champion workflows that prove the model.',
    color: '#16365C',
    colorLight: '#E8EEF4',
    budget: { base: '$0.7M' },
    leadershipGets: [
      'A unified data governance framework with enforceable cross-division decision rights and structured, repeatable access patterns for every data request.',
      'Two to three GenAI champion workflows in production, each demonstrating measurable cycle-time reduction in inspection or enforcement support.',
      'Foundations of a change management program that prepares the Board and senior leadership for an AI-augmented, data-driven organizational transformation, including stakeholder mapping, readiness assessment, and a communications cadence.',
      'Three division champions recruited and actively engaged as early adopters, providing feedback loops and building peer-level advocacy for the data program across the organization.',
      'A controlled GenAI evaluation rubric with supervision protocols and audit logging that satisfies Board-level questions about responsible AI deployment.',
      'An enterprise data catalog activated as the "front door" to trusted data, with mission-oriented collections, data stories, and quality scores visible to division leadership.',
      'A stabilized data engineering run lane with defined SLAs, triage rules, and reliability reporting.',
      'A clear, evidence-based Gate A recommendation on whether to scale, hold, or narrow the program for 2027.',
    ],
    mustBeTrue: [
      'Executive sponsorship from the CIO and at least one division director is confirmed and active.',
      'IAM and security review processes for GenAI tooling are completed within the first 90 days.',
      'Three division champions are recruited and actively engaged with defined success criteria for their workflows.',
      'A change management readiness assessment is completed and a Board communications cadence is established.',
      'The Enterprise Data Hub proof-of-concept environment is provisioned and accessible.',
      'Governance forum meets on established cadence with documented decisions.',
    ],
    genAICapabilities: [
      {
        name: 'Inspection Document Summarization',
        description: 'GenAI-powered summarization of inspection working papers, extracting key findings, deficiency patterns, and cross-engagement themes within minutes.',
        valueCase: 'Reduces inspection report preparation cycle time by an estimated 40-60%, freeing senior inspectors to dedicate their expertise to judgment-intensive analysis.',
        dsReference: 'DS Tenet 3: Analytics and Reporting Modernization',
        marketContext: 'All Big Four firms are deploying similar capabilities. Deloitte Omnia won AI Innovation Initiative of the Year at the 2024 International Accounting Forum and Awards. KPMG is integrating AI agents into its Clara smart audit platform for 95,000 auditors.',
      },
      {
        name: 'Regulatory Research Assistant',
        description: 'A purpose-built GenAI assistant that searches across PCAOB standards, SEC guidance, and enforcement precedent to surface relevant authority for specific audit quality questions.',
        valueCase: 'Enables staff to locate and synthesize regulatory precedent within hours, directly supporting the Board priority of faster, more consistent enforcement action.',
        dsReference: 'DS Tenet 4: Workforce Enablement and Data Literacy',
        marketContext: 'The SEC created a dedicated AI Task Force in August 2025 led by Chief AI Officer Valerie Szczepanik to centralize AI adoption across the agency.',
      },
      {
        name: 'Data Quality Anomaly Detection',
        description: 'Machine learning models that continuously monitor incoming data feeds for completeness, consistency, and timeliness anomalies before they propagate into downstream reporting.',
        valueCase: 'Prevents data quality issues from reaching Board-level reports, reducing manual reconciliation effort and increasing confidence in the data that supports oversight decisions.',
        dsReference: 'DS Tenet 2: Enterprise Data Hub and Integration',
        marketContext: 'Data quality is a prerequisite for every advanced AI capability. Quality monitoring provides the foundation for AI outputs to meet the standard required for regulatory decisions.',
      },
    ],
    deliverables: [
      { name: 'Data Governance Charter, Decision Rights, and RACI', quarter: 'Q2 2026', category: 'governance' },
      { name: 'Enterprise Data Catalog with Mission Collections', quarter: 'Q3 2026', category: 'platform' },
      { name: 'GenAI Evaluation Rubric and Supervision Protocol', quarter: 'Q2 2026', category: 'genai' },
      { name: 'Champion Workflow 1: Inspection Summarization Pilot', quarter: 'Q3 2026', category: 'genai' },
      { name: 'Champion Workflow 2: Regulatory Research Assistant', quarter: 'Q4 2026', category: 'genai' },
      { name: 'Run-Lane Operating Model (SLAs, Triage, Runbooks)', quarter: 'Q3 2026', category: 'platform' },
      { name: 'Enterprise Data Hub PoC Environment', quarter: 'Q3 2026', category: 'platform' },
      { name: 'Change Management Readiness Assessment and Board Communications Plan', quarter: 'Q2 2026', category: 'governance' },
      { name: 'Three Division Champion Onboarding and Engagement Plan', quarter: 'Q3 2026', category: 'governance' },
      { name: 'Gate A Evidence Package', quarter: 'Q4 2026', category: 'governance' },
    ],
    milestones: [
      { period: 'Late April 2026', title: 'Mobilize', deliverables: 'Three division champions recruited; workflow shortlist; baseline catalog usage; baseline run-lane backlog; governance draft; change management readiness assessment initiated', qualityCheck: 'Baselines captured; champions confirmed; readiness assessment underway' },
      { period: 'May 2026', title: 'Start Governance', deliverables: 'Governance charter, cadence, decision rights, decision log; Year 1 backlog and capacity caps', qualityCheck: 'First decisions made and recorded' },
      { period: 'June 2026', title: 'Activate Catalog', deliverables: 'First mission collections; first two data stories with visualizations; catalog metadata standard', qualityCheck: 'Early adoption metrics and feedback loop' },
      { period: 'July 2026', title: 'Stabilize Run Lane', deliverables: 'Intake triage, SLAs, runbooks, monitoring baseline for priority pipelines', qualityCheck: 'SLA measures tracked; incidents documented' },
      { period: 'August 2026', title: 'GenAI Win One', deliverables: 'Pilot 1 delivered with evaluation rubric, supervision steps, and UAT package', qualityCheck: 'Cycle-time baseline versus post measured' },
      { period: 'September 2026', title: 'GenAI Win Two', deliverables: 'Pilot 2 delivered with reuse patterns and updated controls documentation', qualityCheck: 'UAT satisfaction and safety validation' },
      { period: 'October 2026', title: 'Institutionalize Adoption', deliverables: 'Training micro-modules; office hours; catalog editorial cadence locked for Q4', qualityCheck: 'Repeat usage increases; contributions rise' },
      { period: 'November 2026', title: 'Scale Case', deliverables: 'Year 2 project slate; Gate A scoring against metrics; budget envelope narrative', qualityCheck: 'Gate A evidence package assembled' },
      { period: 'December 2026', title: 'Close and Decide', deliverables: 'Year 1 outcomes package; Year 2 mobilization plan (conditional); risk register refresh', qualityCheck: 'Formal go or no-go for Year 2' },
    ],
    dsTraceability: [
      'DS Root Problem 1: Siloed governance with no enterprise-wide data ownership model',
      'DS Root Problem 4: Skills deficit across data engineering, analytics, and AI',
      'DS Tenet 1: Controlled Federated Governance Model',
      'DS Tenet 3: Analytics and Reporting Modernization',
    ],
  },
  {
    id: 'year-2',
    label: 'Year 2',
    window: 'January - December 2027',
    theme: 'Scale and Integrate',
    subtitle: 'Expand the Enterprise Data Hub into production, operationalize GenAI across multiple divisions, build the ingestion factory, and establish a durable operating model with a strategically aligned managed service partner.',
    color: '#4A7C9B',
    colorLight: '#EAF1F5',
    budget: { base: '$3.5M', range: '$3.5M - $5M' },
    leadershipGets: [
      'A production Enterprise Data Hub that consolidates the most critical inspection, enforcement, and registration data into a single governed platform. Year 2 builds on the existing EDH technology foundation, BI/analytics capability, and Data Governance Council to deliver a fully consolidated production platform.',
      'GenAI capabilities expanded from champion pilots to operational tools deployed across at least three divisions, enabling measurable productivity gains in inspection, enforcement, and registration workflows.',
      'An enterprise ingestion factory with standardized onboarding, monitoring, and reconciliation for new data sources.',
      'Automated data pipelines that streamline the highest-priority recurring Board and Congressional reporting requirements, as identified through the Year 1 governance inventory, into governed, repeatable workflows.',
      'A self-service analytics layer that empowers division directors to answer their own data questions directly through governed, quality-assured interfaces.',
      'A value measurement layer with usage, throughput, and cycle-time reduction dashboards.',
      'A Gate B recommendation with quantified ROI evidence for the Year 3 investment.',
    ],
    mustBeTrue: [
      'Gate A approval is granted with authorization to scale platform investment.',
      'The Enterprise Data Hub production environment passes PCAOB security and compliance review.',
      'At least three divisions have designated data stewards participating in the governance council.',
      'GenAI champion workflows from Year 1 have demonstrated measurable, documented value.',
      'Budget allocation for Year 2 is confirmed through the standard PCAOB budget process.',
    ],
    genAICapabilities: [
      {
        name: 'Cross-Engagement Pattern Analysis',
        description: 'GenAI-driven analysis that identifies systemic audit quality patterns across hundreds of inspection engagements, surfacing emerging risks that become visible only at enterprise scale.',
        valueCase: 'Equips PCAOB with predictive capability to identify systemic audit quality risks across the profession, directly advancing the investor protection mission.',
        dsReference: 'DS Tenet 3: Analytics and Reporting Modernization',
        marketContext: 'The 2024 aggregate deficiency rate dropped to 39% from 46%. Pattern analysis across engagements would enable PCAOB to identify the drivers behind this improvement and target persistent problem areas.',
      },
      {
        name: 'Enforcement Case Intelligence',
        description: 'A GenAI-powered knowledge graph that maps relationships between firms, individuals, engagements, and prior enforcement actions, enabling investigators to identify patterns and connections across the full enforcement record within hours.',
        valueCase: 'Accelerates enforcement case development timelines and strengthens the evidentiary foundation for Board-level enforcement decisions.',
        dsReference: 'DS Tenet 2: Enterprise Data Hub and Integration',
        marketContext: 'Thomson Reuters has documented how agentic AI is transforming investigative and regulatory compliance workflows by automating complex processes and accelerating data analysis across financial institutions and government agencies.',
      },
      {
        name: 'Automated Reporting Pipeline',
        description: 'GenAI-assisted generation of recurring reports for the Board, SEC, and Congressional stakeholders, pulling from governed data sources and applying consistent formatting and quality checks. The specific report inventory will be established during Year 1 governance activation; illustrative candidates include the Annual Report, Inspection Reports, Budget Justification, Accounting Support Fees, Enforcement Referrals, and SEC-mandated submissions.',
        valueCase: 'Reduces the staff hours devoted to recurring reporting by an estimated 60-70%, while improving consistency and reducing the risk of manual errors in high-visibility deliverables.',
        dsReference: 'DS Tenet 3: Analytics and Reporting Modernization',
      },
      {
        name: 'Natural Language Data Query',
        description: 'A self-service interface that allows non-technical staff to query the Enterprise Data Hub using natural language, with the system translating questions into structured queries and returning governed, validated results.',
        valueCase: 'Democratizes data access across the organization, empowering every division to query governed, quality-assured data independently and accelerating time-to-insight for mission-critical questions.',
        dsReference: 'DS Tenet 4: Workforce Enablement and Data Literacy',
      },
    ],
    deliverables: [
      { name: 'Enterprise Data Hub Production Release', quarter: 'Q2 2027', category: 'platform' },
      { name: 'Data Governance Council (Operational)', quarter: 'Q1 2027', category: 'governance' },
      { name: 'Enterprise Ingestion Factory', quarter: 'Q1 2027', category: 'platform' },
      { name: 'GenAI Operations Playbook', quarter: 'Q1 2027', category: 'genai' },
      { name: 'Cross-Engagement Pattern Analysis Tool', quarter: 'Q2 2027', category: 'genai' },
      { name: 'Enforcement Case Intelligence Platform', quarter: 'Q3 2027', category: 'genai' },
      { name: 'Self-Service Analytics Layer', quarter: 'Q3 2027', category: 'analytics' },
      { name: 'Value Measurement Dashboard', quarter: 'Q3 2027', category: 'analytics' },
      { name: 'Automated Reporting Pipeline (Priority Reports)', quarter: 'Q4 2027', category: 'genai' },
      { name: 'Knowledge Transfer and Internal Capability Plan', quarter: 'Q4 2027', category: 'governance' },
      { name: 'Gate B Evidence Package with ROI Analysis', quarter: 'Q4 2027', category: 'governance' },
    ],
    milestones: [
      { period: 'Q1 2027', title: 'Stand Up Scale Lanes', deliverables: 'Lane-based operating model; ingestion factory standards; first wave onboarding', qualityCheck: 'Lanes operational with defined capacity' },
      { period: 'Q2 2027', title: 'Expand Adoption', deliverables: 'Stewardship integration; catalog mission collections expansion; GenAI products one and two', qualityCheck: 'Cross-division adoption metrics rising' },
      { period: 'Q3 2027', title: 'Industrialize Delivery', deliverables: 'Ingestion throughput targets; monitoring and reconciliation norms; value reporting', qualityCheck: 'Throughput targets met consistently' },
      { period: 'Q4 2027', title: 'Prove Enterprise Leverage', deliverables: 'Cross-unit reuse evidence; Gate B readiness scoring; updated 2028 plan', qualityCheck: 'Gate B metrics documented' },
    ],
    dsTraceability: [
      'DS Root Problem 2: Disconnected analytics with no enterprise reporting layer',
      'DS Root Problem 3: Immature Enterprise Data Hub with fragmented integrations',
      'DS Tenet 2: Enterprise Data Hub and Integration',
      'DS Tenet 3: Analytics and Reporting Modernization',
      'DS Tenet 4: Workforce Enablement and Data Literacy',
    ],
  },
  {
    id: 'year-3',
    label: 'Year 3',
    window: 'January - December 2028',
    theme: 'Optimize and Institutionalize',
    subtitle: 'Mature the data platform into a self-sustaining institutional capability, expand GenAI into advanced use cases including predictive modeling and agentic workflows, and position PCAOB as a model for data-driven regulatory oversight.',
    color: '#2D6A6A',
    colorLight: '#E6F0F0',
    budget: { base: '$5M', range: '$5M - $7M' },
    leadershipGets: [
      'A mature, self-sustaining enterprise data platform with product ownership model, service-level reporting, and continuous improvement loops.',
      'Advanced GenAI capabilities including predictive risk modeling that enables PCAOB to anticipate audit quality risks before they materialize in inspection findings.',
      'Agentic AI workflows that execute multi-step analytical processes autonomously, with human oversight at decision points.',
      'A mature, enterprise-grade data and AI operations capability supported by a strategically aligned managed service partner, with clear service-level expectations, institutional knowledge continuity, and a governance framework that sustains program momentum across leadership transitions.',
      'Quantified mission impact: measurable improvements in inspection coverage, enforcement case velocity, and Board reporting timeliness.',
      'Core identifier harmonization and data quality monitoring across enterprise data assets.',
      'A sustainable operating model with clear cost trajectories that the budget office can plan around with confidence.',
    ],
    mustBeTrue: [
      'Gate B approval is granted with authorization for the full Year 3 investment.',
      'Internal staff operate core platform capabilities with managed service partner providing continuity, specialized expertise, and innovation scouting.',
      'GenAI governance framework has been reviewed and endorsed by the Board or a designated oversight committee.',
      'The Enterprise Data Hub is the recognized system of record for cross-divisional data access.',
      'PCAOB security and privacy requirements for advanced AI use cases (including predictive modeling) are defined and approved.',
    ],
    genAICapabilities: [
      {
        name: 'Predictive Audit Risk Modeling',
        description: 'Advanced AI models that analyze historical inspection data, firm characteristics, market conditions, and engagement complexity to predict which audit engagements are most likely to contain significant deficiencies.',
        valueCase: 'Enables risk-based inspection selection that maximizes the probability of identifying significant audit quality issues, directly increasing the return on every inspection dollar spent.',
        dsReference: 'DS Tenet 3: Analytics and Reporting Modernization',
        marketContext: 'With the aggregate deficiency rate at 39% and wide variance across firms (Deloitte 14% vs. BDO 60%), predictive models can focus inspection resources where they will have the greatest impact on investor protection.',
      },
      {
        name: 'Agentic Workflow Orchestration',
        description: 'Multi-step AI agents that can execute complex analytical workflows autonomously, such as pulling data from multiple sources, running quality checks, performing analysis, and drafting preliminary findings for human review.',
        valueCase: 'Represents the next evolution in GenAI maturity, enabling PCAOB to scale oversight capacity in proportion to growing market complexity through intelligent automation with human oversight.',
        dsReference: 'DS Tenet 2: Enterprise Data Hub and Integration',
        marketContext: 'Booz Allen Hamilton reports that agentic AI can "act, adapt, and collaborate to execute multistep processes across enterprise data and systems." KPMG is already deploying AI agents in its Clara platform for expense vouching and liability searches.',
      },
      {
        name: 'Regulatory Intelligence Dashboard',
        description: 'A comprehensive, AI-powered dashboard that synthesizes inspection trends, enforcement patterns, firm risk profiles, and emerging audit quality issues into a single view for Board members and senior leadership.',
        valueCase: 'Provides the Board with visibility into the state of audit quality across the profession, enabling faster, more informed policy and standard-setting decisions.',
        dsReference: 'DS Tenet 3: Analytics and Reporting Modernization',
      },
      {
        name: 'GenAI-Assisted Standard Setting',
        description: 'AI tools that analyze public comments, academic research, international standards, and historical rulemaking to support the standard-setting process with comprehensive, structured evidence synthesis.',
        valueCase: 'Accelerates the standard-setting research phase and supports proposed standards being informed by a broader evidence base, strengthening the quality and defensibility of PCAOB rulemaking.',
        dsReference: 'DS Tenet 4: Workforce Enablement and Data Literacy',
        marketContext: 'The profession is evolving rapidly. Predictive models and agentic workflows represent the next frontier in regulatory technology, positioning PCAOB at the forefront of data-driven oversight.',
      },
    ],
    deliverables: [
      { name: 'Predictive Risk Model (Inspection Selection)', quarter: 'Q2 2028', category: 'genai' },
      { name: 'Agentic Workflow Platform (Phase 1)', quarter: 'Q3 2028', category: 'genai' },
      { name: 'Regulatory Intelligence Dashboard', quarter: 'Q2 2028', category: 'analytics' },
      { name: 'GenAI-Assisted Standard Setting Tools', quarter: 'Q4 2028', category: 'genai' },
      { name: 'Core Identifier Harmonization', quarter: 'Q2 2028', category: 'platform' },
      { name: 'Mature Operating Model with MSP Alignment', quarter: 'Q3 2028', category: 'governance' },
      { name: 'Enterprise Data Platform Maturity Assessment', quarter: 'Q4 2028', category: 'platform' },
      { name: 'Sustainable Operating Model Documentation', quarter: 'Q4 2028', category: 'governance' },
      { name: 'Three-Year Impact Report', quarter: 'Q4 2028', category: 'governance' },
    ],
    milestones: [
      { period: 'Q1 2028', title: 'Institutionalize Service', deliverables: 'Product ownership and service reporting; stable funded backlog', qualityCheck: 'Service model operational' },
      { period: 'Q2 2028', title: 'Expand Selectively', deliverables: 'Responsible AI expansion where readiness is proven; identifier and quality improvements', qualityCheck: 'Expansion criteria validated' },
      { period: 'Q3 2028', title: 'Optimize', deliverables: 'Manual work reduction measured; platform reliability and service maturity up', qualityCheck: 'Measurable efficiency gains documented' },
      { period: 'Q4 2028', title: 'Consolidate', deliverables: 'Demonstrated value, reuse, and auditability; refreshed roadmap for next cycle', qualityCheck: 'Three-year impact report complete' },
    ],
    dsTraceability: [
      'DS Root Problem 1-4: All root problems addressed through mature, institutionalized capabilities',
      'DS Tenet 1: Controlled Federated Governance Model (fully operational)',
      'DS Tenet 2: Enterprise Data Hub (production, self-sustaining)',
      'DS Tenet 3: Analytics and Reporting (advanced, predictive)',
      'DS Tenet 4: Workforce Enablement (internal team, continuous learning)',
    ],
  },
];

// ============================================================
// DECISION GATES
// ============================================================

export const gates: GateData[] = [
  {
    id: 'gate-a',
    name: 'Gate A',
    timing: 'End of Year 1 (December 2026)',
    description: 'Evidence-based decision point on whether to scale the program from foundation to full integration. This gate ensures that every budget increase is earned through demonstrated value from the initial investment.',
    metrics: [
      { name: 'GenAI champion workflows in production', target: '3 champion workflows with documented cycle-time reduction', status: 'not-started' },
      { name: 'Enterprise Data Catalog adoption', target: 'Monthly active users and repeat usage exceed minimums', status: 'not-started' },
      { name: 'Governance framework adoption', target: 'Charter approved, RACI in effect, decision log active, at least 2 divisions participating', status: 'not-started' },
      { name: 'Run-lane stability', target: 'Pipeline reliability and MTTR meet defined thresholds', status: 'not-started' },
      { name: 'Security and IAM review completion', target: 'All GenAI tooling reviewed and approved', status: 'not-started' },
      { name: 'Stakeholder satisfaction', target: 'Positive feedback from at least 2 division directors on value delivered', status: 'not-started' },
    ],
    recommendedAction: 'Scale: Authorize Year 2 investment and platform expansion based on demonstrated value.',
  },
  {
    id: 'gate-b',
    name: 'Gate B',
    timing: 'End of Year 2 (December 2027)',
    description: 'Decision point on whether to proceed with the full Year 3 investment in advanced capabilities and institutionalization. This gate validates that the platform, internal team, and managed service partnership are positioned to deliver sustained enterprise value.',
    metrics: [
      { name: 'Enterprise Data Hub adoption', target: 'Production platform serving 3 or more divisions', status: 'not-started' },
      { name: 'Enterprise reuse', target: 'At least two mission units reuse same governed assets, definitions, and patterns', status: 'not-started' },
      { name: 'GenAI operational reach', target: 'GenAI tools deployed and operational across 3 or more divisions with documented productivity gains', status: 'not-started' },
      { name: 'Ingestion factory repeatability', target: 'New source onboarding is predictable and measurable', status: 'not-started' },
      { name: 'Automated reporting coverage', target: 'Priority recurring reports automated based on Year 1 inventory', status: 'not-started' },
      { name: 'Operating model maturity', target: 'Internal staff and MSP operating in defined roles with clear service-level expectations', status: 'not-started' },
      { name: 'Quantified ROI', target: 'Documented cost avoidance or efficiency gains exceeding Year 2 investment', status: 'not-started' },
    ],
    recommendedAction: 'Scale: Authorize Year 3 investment for advanced AI capabilities and full institutionalization.',
  },
];

// ============================================================
// RISKS
// ============================================================

export const risks: RiskItem[] = [
  {
    id: 'risk-1',
    name: 'Budget Compression',
    likelihood: 4,
    impact: 5,
    category: 'Financial',
    mitigation: 'The roadmap is structured around decision gates that allow scaling, holding, or narrowing at each stage. The three-year envelope is published to provide full budget visibility from day one. A base-case scenario delivers value within the existing budget envelope. All investments are framed in terms of cost avoidance and mission efficiency.',
    owner: 'CIO and Budget Office',
  },
  {
    id: 'risk-2',
    name: 'Scope Creep and BAU Overload',
    likelihood: 4,
    impact: 4,
    category: 'Operational',
    mitigation: 'Run and build capacity are separated explicitly. A formal intake process with triage rules is in place. Dedicated capacity for strategic initiatives is protected through monthly steering and a documented priority framework. Clear boundaries between roadmap deliverables and business-as-usual support are defined.',
    owner: 'Program Lead and Division Directors',
  },
  {
    id: 'risk-3',
    name: 'Tooling and Platform Constraints',
    likelihood: 3,
    impact: 4,
    category: 'Technical',
    mitigation: 'The default approach is to use the existing stack wherever possible. Early technical feasibility assessments for all GenAI tooling within the PCAOB security perimeter are planned. Approved cloud and on-premises options will be identified in the first 90 days. Fallback approaches for each capability ensure flexibility across vendors and platforms.',
    owner: 'CTO and Security Team',
  },
  {
    id: 'risk-4',
    name: 'Access and IAM Complexity',
    likelihood: 3,
    impact: 4,
    category: 'Security',
    mitigation: 'Security and IAM teams are engaged as partners from day one. Persona models are simplified. Purpose-based access patterns are built into the data architecture from the foundation layer. An explicit access exception process is established. GenAI access controls align with existing PCAOB data classification policies.',
    owner: 'CISO and Data Governance Council',
  },
  {
    id: 'risk-5',
    name: 'Data Quality and Identifier Gaps',
    likelihood: 4,
    impact: 3,
    category: 'Data',
    mitigation: 'Data contracts for priority products are established. Data quality assessment and remediation for the top 30 critical assets is prioritized in Year 1. Automated quality monitoring is established before expanding the data catalog. Identifier harmonization is planned as a Year 3 deliverable.',
    owner: 'Data Stewards and Platform Team',
  },
  {
    id: 'risk-6',
    name: 'GenAI Acceptance and Trust',
    likelihood: 3,
    impact: 5,
    category: 'Organizational',
    mitigation: 'The approach begins with low-risk, high-visibility champion workflows that build confidence through demonstrated value. Human-in-the-loop controls are maintained for all GenAI outputs. Clear evaluation rubrics with UAT thresholds are developed. Supervision steps, privacy and security reviews, and audit logs are required for every GenAI deployment.',
    owner: 'Program Lead and Division Champions',
  },
];

// ============================================================
// SCENARIOS
// ============================================================

export const scenarios: ScenarioData[] = [
  {
    name: 'Base Case',
    description: 'Delivers the core roadmap within the planned budget envelope. Prioritizes governance foundation, GenAI champion workflows, and the Enterprise Data Hub. Achieves meaningful value while maintaining fiscal discipline consistent with SEC expectations for transparent, material investment management.',
    years: [
      { year: 2026, budget: 0.7, genAIMaturity: 'Pilot' },
      { year: 2027, budget: 3.5, genAIMaturity: 'Operational' },
      { year: 2028, budget: 5.0, genAIMaturity: 'Scaled' },
    ],
  },
  {
    name: 'Accelerated Adoption',
    description: 'Expands the scope to include additional GenAI use cases and faster platform buildout. Requires explicit gate approval and additional budget authorization. Delivers greater mission impact sooner at higher investment levels.',
    years: [
      { year: 2026, budget: 0.7, genAIMaturity: 'Pilot' },
      { year: 2027, budget: 5.0, genAIMaturity: 'Advanced' },
      { year: 2028, budget: 7.0, genAIMaturity: 'Institutional' },
    ],
  },
];

// ============================================================
// VALUE METRICS
// ============================================================

export const valueMetrics: ValueMetric[] = [
  {
    label: 'Inspection Report Preparation Time',
    year1: '40-60% reduction (pilot)',
    year2: '60-70% reduction (scaled)',
    year3: '70-80% reduction (optimized)',
    category: 'efficiency',
  },
  {
    label: 'Regulatory Research Response Time',
    year1: 'Days to hours',
    year2: 'Hours to minutes',
    year3: 'Real-time with context',
    category: 'efficiency',
  },
  {
    label: 'Recurring Report Automation',
    year1: 'Manual baseline established',
    year2: 'Priority reports automated',
    year3: 'Full reporting suite automated',
    category: 'efficiency',
  },
  {
    label: 'Data-Driven Inspection Selection',
    year1: 'Historical analysis only',
    year2: 'Pattern-based insights',
    year3: 'Predictive risk modeling',
    category: 'quality',
  },
  {
    label: 'Cross-Division Data Access',
    year1: 'Catalog with mission collections',
    year2: 'Self-service analytics layer',
    year3: 'Natural language query access',
    category: 'capability',
  },
  {
    label: 'GenAI Operational Reach',
    year1: '2-3 champion workflows',
    year2: 'Operational across 3+ divisions',
    year3: 'Organization-wide with agentic capabilities',
    category: 'capability',
  },
];

// ============================================================
// NAVIGATION (updated: removed context, removed footer-related)
// ============================================================

export const sections = [
  { id: 'hero', label: 'Overview' },
  { id: 'value', label: 'Value Case' },
  { id: 'timeline', label: 'Roadmap' },
  { id: 'year-1', label: 'Year 1' },
  { id: 'gate-a', label: 'Gate A' },
  { id: 'year-2', label: 'Year 2' },
  { id: 'gate-b', label: 'Gate B' },
  { id: 'year-3', label: 'Year 3' },
  { id: 'risks', label: 'Risks' },
  { id: 'scenarios', label: 'Scenarios' },
  { id: 'raci', label: 'RACI' },
] as const;
