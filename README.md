# Project Management Basics

> *Click &#9733; if you like the project. Your contributions are heartily ♡ welcome.*

<br/>

## Table of Contents

* *[DOS Commands](dos-commands.md)*
* *[Puzzles](puzzles.md)*

<br/>

## Questions

| No. | Questions |
|-----|-----------|
| 1 | [What are the scientific ways to do project estimation?](#q-what-are-the-scientific-ways-to-do-project-estimation) |
| 2 | [What is planning poker estimation technique?](#q-what-is-planning-poker-estimation-technique) |
| 3 | [What is Ballpark Figures estimate?](#q-what-is-ballpark-figures-estimate) |
| 4 | [What are the tools used for requirements gathering?](#q-what-are-the-tools-used-for-requirements-gathering) |
| 5 | [Explain the concept of RAID in project management?](#q-explain-the-concept-of-raid-in-project-management) |
| 6 | [What are the techniques used to define the scope of a project?](#q-what-are-the-techniques-used-to-define-the-scope-of-a-project) |
| 7 | [Explain Ishikawa/Fishbone diagrams?](#q-explain-ishikawafishbone-diagrams) |
| 8 | [What is the process of calculating the three-point estimating method?](#q-what-is-the-process-of-calculating-the-three-point-estimating-method) |
| 9 | [What is Work Breakdown Structure (WBS)?](#q-what-is-work-breakdown-structure-wbs) |
| 10 | [What is the Pareto principle analysis?](#q-what-is-the-pareto-principle-analysis) |
| 11 | [What is Gherkin approach for writing user stories?](#q-what-is-gherkin-approach-for-writing-user-stories) |
| 12 | [What are the roles and responsibilities of a Technical Lead?](#q-what-are-the-roles-and-responsibilities-of-a-technical-lead) |
| 13 | [What is the difference between Agile and Waterfall methodologies?](#q-what-is-the-difference-between-agile-and-waterfall-methodologies) |
| 14 | [What is a Sprint Retrospective and how is it conducted?](#q-what-is-a-sprint-retrospective-and-how-is-it-conducted) |
| 15 | [What is the Critical Path Method (CPM) in project management?](#q-what-is-the-critical-path-method-cpm-in-project-management) |
| 16 | [What is Earned Value Management (EVM)?](#q-what-is-earned-value-management-evm) |
| 17 | [What is a Project Charter and what does it contain?](#q-what-is-a-project-charter-and-what-does-it-contain) |
| 18 | [What is the difference between a Product Owner and a Project Manager?](#q-what-is-the-difference-between-a-product-owner-and-a-project-manager) |
| 19 | [What is Change Management in project management?](#q-what-is-change-management-in-project-management) |
| 20 | [What are DORA metrics and why do they matter?](#q-what-are-dora-metrics-and-why-do-they-matter) |

<br/>

## Q. What are the scientific ways to do project estimation?

There are many different types of estimation techniques used in project management with various streams like Engineering, IT, Construction, Agriculture, Accounting, etc. A Project manager is often challenged to align mainly six project constraints - **Scope**, **Time**, **Cost**, **Quality**, **Resources** and **Risk** in order to accurately estimate the project. The common questions that come into the mind of a project manager at the start of the project are –

* How much work is to be estimated (scope)
* How to estimate the project (techniques)
* How much time it will require to complete the project (Schedule)
* Who will be doing the project (resources)
* What is the budget required to deliver the project (cost)
* Any intermediary dependencies that may delay or impact the project (Risks)

There are 3 major parts to project estimation mainly:-

* Effort estimation
* Cost estimation
* Resource estimate

While accurate estimates are the basis of sound project planning, there are many techniques used as project management best practices in estimation as - **Analogous estimation**, **Parametric estimation**, **Delphi method**, **3 Point Estimate**, **Expert Judgment**, **Published Data Estimates**, **Vendor Bid Analysis**, **Reserve Analysis**, **Bottom-Up Analysis**, and **Simulation**. Usually, during the early stages of a project life cycle, the project requirements are feebly known and less information is available to estimate the project. The initial estimate is drawn merely by assumptions knowing the scope at a high level, this is known as ‘Ball-park estimates’, a term very often used by project managers.

**Top-down estimate**:  
Once more detail is learned on the scope of the project, this technique is usually followed where high-level chunks at the feature or design level are estimated and are decomposed progressively into smaller chunks or work-packets as information is detailed.

**Bottom-up estimate**:  
This technique is used when the requirements are known at a discrete level where the smaller workpieces are then aggregated to estimate the entire project. This is usually used when the information is only known in smaller pieces.

**Analogous estimating**:  
This technique is used when there is a reference to a similar project executed and it is easy to correlate with other projects. Expert judgment and historical information of similar activities in a referenced project are gathered to arrive at an estimate of the project.

**Parametric estimate**:  
This technique uses independent measurable variables from the project work.  For example, the cost for construction of a building is calculated based on the smallest variable as the cost to build a square feet area, the effort required to build a work packet is calculated from the variable as lines of codes in a software development project. This technique gives more accuracy in project estimation.

**Three-point estimating**:  
This technique uses a mathematical approach as the weighted average of an optimistic, most likely and pessimistic estimate of the work package. This is often known as the PERT (Program Evaluation and Review Technique).

**What-if analysis**:  
This technique uses assumptions based on varying factors like scope, time, cost, resources, etc., to evaluate the possible outcomes of the project by doing impact analysis. In a usual scenario, the project estimate is done by conducting estimation workshops with the stakeholders of the project, senior team members who could give valuable inputs to the estimation exercise. The high-level scope is broken down into smaller work packages, components and activities, each work package is estimated by effort and resource needed to complete the work package. The project may be detailed into the smallest chunk that can be measured. The following activities are done during the workshop:

* Break down the scope into smallest work package, components or activities (WBS)
* Sequence the activities in the order in which they will be performed
* Identify the effort required to complete each activity
* Identify the resource estimate to complete each task or activity
* Identify the dependencies to complete each activity
* Identify the possible risks and assumptions
* Define the resource and cost estimate to the completion of each activity, component and work package

**T-shirt Sizing** *(Modern Agile)*:  
A relative estimation technique where work items are sized as XS, S, M, L, XL, or XXL instead of hours or story points. It is fast, collaborative, and avoids false precision. Widely used in SAFe (Scaled Agile Framework) PI Planning and early backlog grooming when detailed estimates are not yet feasible.

**Monte Carlo Simulation** *(Advanced)*:  
A probabilistic estimation technique that runs thousands of simulated project scenarios using historical velocity data and task variability to generate a probability distribution of completion dates and costs. Used in risk-heavy and large-scale projects for confidence-interval forecasting (e.g., "there is an 85% probability of delivery by Q3").

**AI-Assisted Estimation** *(Emerging Practice)*:  
Modern teams leverage AI tools (GitHub Copilot, Jira AI, Azure DevOps Copilot) to assist in effort estimation by analyzing historical project data, comparing similar past user stories, and suggesting story point ranges. AI does not replace expert judgment but reduces anchoring bias and speeds up estimation workshops.

> **PMBOK 7th Edition Note:** The latest PMI standard (2021) shifts from prescriptive processes to **12 principles** and **8 performance domains**, emphasizing adaptability and outcomes over rigid methodologies. Estimation is now treated as a continuous activity rather than a one-time planning event, aligned with hybrid and agile delivery models.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. What is planning poker estimation technique?

Planning poker, also called Scrum poker, is a consensus-based, gamified technique for estimating, mostly used to estimate effort or relative size of development goals in software development. Planning Poker is an agile estimating and planning technique that is consensus based. To start a poker planning session, the product owner or customer reads an agile user story or describes a feature to the estimators. 

Each estimator is holding a deck of Planning Poker cards with values like 0, 1, 2, 3, 5, 8, 13, 20, 40 and 100, which is the sequence we recommend. The values represent the number of story points, ideal days, or other units in which the team estimates.

The estimators discuss the feature, asking questions of the product owner as needed. When the feature has been fully discussed, each estimator privately selects one card to represent his or her estimate. All cards are then revealed at the same time.

If all estimators selected the same value, that becomes the estimate. If not, the estimators discuss their estimates. The high and low estimators should especially share their reasons. After further discussion, each estimator re-selects an estimate card, and all cards are again revealed at the same time.

The poker planning process is repeated until consensus is achieved or until the estimators decide that agile estimating and planning of a particular item needs to be deferred until additional information can be acquired.

* **Benefits of Planning Poker Estimation**  

Planning poker combines three methods of estimation −

* **Expert Opinion** − In expert opinion-based estimation approach, an expert is asked how long something will take or how big it will be. The expert provides an estimate relying on his or her experience or intuition or gut feel. Expert Opinion Estimation usually doesn’t take much time and is more accurate compared to some of the analytical methods.

* **Analogy** − Analogy estimation uses comparison of user stories. The user story under estimation is compared with similar user stories implemented earlier, giving accurate results as the estimation is based on proven data.

* **Disaggregation** − Disaggregation estimation is done by splitting a user story into smaller, easier-to-estimate user stories. The user stories to be included in a sprint are normally in the range of two to five days to develop. Hence, the user stories that possibly take longer duration need to be split into smaller use-Cases. This approach also ensures that there would be many stories that are comparable.

**Modern Enhancements to Planning Poker:**

* **Digital Planning Poker Tools** − Remote and distributed teams use online tools such as **PlanningPoker.com**, **Jira\'s built-in Story Point voting**, **Miro**, **Parabol**, and **Microsoft Teams apps** to run asynchronous or real-time estimation sessions without physical cards.

* **T-shirt Sizing as Alternative** − Teams that find numeric story points divisive often switch to T-shirt sizing (XS/S/M/L/XL) during early refinement, then convert to points before sprint commitment. This reduces anchoring on specific numbers.

* **Async Estimation** − In hybrid or distributed teams, product owners share user stories asynchronously before the meeting. Estimators review in advance, reducing meeting time and allowing deeper individual analysis before group discussion.

* **AI-Augmented Poker** − Tools like **Jira AI** and **Linear** now suggest story point estimates based on similarity to previously completed issues, which teams can confirm or override during the poker session.

* **#NoEstimates Movement** − A growing practice in mature Agile teams that challenges the value of detailed estimation. Instead of estimating story points, teams count the number of stories completed per sprint (throughput) and use statistical forecasting (Monte Carlo) to predict delivery dates — reducing estimation overhead.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. What is Ballpark Figures estimate?

A ballpark figure is a rough numerical estimate or approximation of the value of something that is otherwise unknown. Ballpark figures are commonly used by accountants, salespersons, and other professionals to estimate current or future results. A stockbroker could use a ballpark figure to estimate how much money a client might have at some point in the future, given a certain rate of growth. A salesperson could use a ballpark figure to estimate how long a product a customer was thinking about buying might be viable.

A ballpark figure is essentially a placeholder established for purposes of speculating what the amount or total of something might amount to so that the parties involved can move forward in whatever negotiation or planning is underway. As a concept, it has applications in business estimates, as well as in everyday life, depending on the circumstances.

Ballpark figures are estimates used to move a discussion or deal forward when the exact measurement of the size or amount of something cannot yet be determined.

Ballpark figures can be used for day-to-day purposes, such as estimating how much food and beverages might be needed for a barbecue or how many months it will likely take to pay off a new purchase.

Ballpark figures are also used everywhere in the business world, such as estimating how much it might cost to expand into a certain market, or how many years it might take for a company to be profitable or for sales to justify a large purchase. It can also be used to estimate public adoption of a concept, technology, or product, as in how many people are likely to buy a certain phone and how long it might take them to upgrade that phone, once purchased.

**KEY TAKEAWAYS**  

* A ballpark figure is an estimate of what something might amount to numerically when a more accurate number is assessed, such as the cost of a product.
* Ballpark figures can be helpful in establishing a placeholder, for purposes of conversation or estimation, when a more precise number is not available.
* Ballpark figures are used in daily life and in many aspects of business; however, it is important to remember it is just an estimate, not an accurate read of something.

## Q. What are the tools used for requirements gathering?

Requirements gathering is the process of identifying and documenting the needs of stakeholders for a new or modified product or system. The following tools and techniques are commonly used:

* **Interviews** − One-on-one or group discussions with stakeholders to elicit requirements directly. Structured or unstructured interviews help uncover needs, expectations, and constraints.

* **Questionnaires and Surveys** − Used to gather requirements from a large group of stakeholders efficiently. Closed-ended questions provide quantitative data; open-ended questions capture qualitative insights.

* **Workshops / JAD Sessions** − Joint Application Development (JAD) workshops bring together business users, developers, and analysts in a structured setting to collaboratively define requirements.

* **Observation (Job Shadowing)** − Analysts observe end-users performing their daily tasks to understand workflows and identify implicit requirements not surfaced through interviews.

* **Document Analysis** − Reviewing existing documentation such as business process manuals, system specifications, contracts, and reports to extract requirements.

* **Prototyping** − Creating a working model or mockup of the system to gather feedback from stakeholders and refine requirements iteratively.

* **Brainstorming** − A group creativity technique where stakeholders and team members generate a large number of ideas about requirements in a free-form setting.

* **Focus Groups** − A moderated discussion with a representative group of end-users or stakeholders to gather opinions and feedback on proposed solutions.

* **Use Cases and User Stories** − Structured narratives that describe how a user interacts with a system to achieve a goal. Widely used in Agile and UML-based methodologies.

* **Mind Mapping** − A visual tool to organize and structure requirements around a central concept, helping teams see relationships between requirements.

* **Event Storming** *(Modern)* − A collaborative workshop technique (by Alberto Brandolini) where domain experts and developers use sticky notes on a large surface to map out domain events, commands, and actors. Highly effective for discovering requirements in complex domains and microservices design.

* **Story Mapping** *(Modern)* − A technique (by Jeff Patton) that organizes user stories into a two-dimensional map: the horizontal axis represents the user\'s journey (activities), and the vertical axis shows priority slices (MVP vs. future releases). It provides a holistic view of the product scope and delivery increments.

* **Impact Mapping** *(Modern)* − A strategic planning technique (by Gojko Adzic) that creates a mind map answering four questions: **Why** (goal), **Who** (actors), **How** (impacts), and **What** (deliverables). It ensures requirements are tied directly to business outcomes and prevents scope creep driven by low-value features.

* **Continuous Discovery** *(Modern)* − A practice (by Teresa Torres) where product teams run ongoing, lightweight user research (weekly interviews, usability tests, opportunity trees) rather than a one-time discovery phase. Requirements are continuously refined based on real user evidence throughout the delivery lifecycle.

* **AI-Assisted Requirements** *(Emerging)* − AI tools such as **GitHub Copilot**, **Jira AI**, and **Confluence AI** can analyze existing documentation, user feedback, and support tickets to suggest requirements, identify gaps, and auto-generate user stories and acceptance criteria.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. Explain the concept of RAID in project management?

**RAID** is an acronym that stands for **Risks**, **Assumptions**, **Issues**, and **Dependencies**. It is a project management tool used to track and manage the key factors that can affect the successful delivery of a project.

* **Risks** − A risk is an uncertain event or condition that, if it occurs, has a positive or negative effect on the project objectives. Risks are identified, assessed for probability and impact, and mitigation or contingency plans are created. Examples include budget overruns, resource unavailability, or technology failures.

* **Assumptions** − Assumptions are factors considered to be true, real, or certain without proof or demonstration. They are made during planning when information is incomplete. Examples include assuming a third-party vendor will deliver on schedule, or that a certain technology will be available. Assumptions must be validated as the project progresses.

* **Issues** − Issues are problems or concerns that have already occurred and need to be resolved. Unlike risks (which are potential), issues are actual events impacting the project. Each issue is logged with an owner and a target resolution date.

* **Dependencies** − Dependencies are relationships between project tasks or between the project and external factors. They define the order in which tasks must be performed. Types include:
  * **Internal dependencies** − between tasks within the same project
  * **External dependencies** − between the project and outside entities (other projects, vendors, regulatory approvals)
  * **Finish-to-Start (FS)** − Task B cannot start until Task A finishes
  * **Start-to-Start (SS)** − Task B cannot start until Task A starts

A RAID log is a living document, maintained and reviewed regularly throughout the project lifecycle to ensure proactive management of these factors.

**RAIDC — Extended Modern Variant:**

Some organizations extend the RAID acronym to **RAIDC** by adding:
* **Constraints** − Fixed limitations (budget caps, regulatory deadlines, technology mandates) that cannot be changed and must be worked within.

**Modern RAID Tooling:**

| Tool | Usage |
|------|-------|
| **Jira** | Risks and issues tracked as tickets with labels, priorities, and owners |
| **Azure DevOps** | Work items and risk registers integrated with sprint boards |
| **Confluence / SharePoint** | RAID log maintained as a shared, searchable document |
| **Monday.com / Smartsheet** | Visual RAID dashboards with status tracking and notifications |

**RAID in Hybrid and Agile Projects:**  
In Agile teams, RAID items are surfaced during **daily standups** (issues), **sprint retrospectives** (risks and assumptions), and **backlog refinement** (dependencies). In SAFe, RAID is managed at the Program Increment (PI) level and tracked in the ART (Agile Release Train) risk board using a **ROAM** technique:

* **R**esolved − Risk is no longer a concern
* **O**wned − An owner is assigned to manage the risk
* **A**ccepted − Team acknowledges the risk with no mitigation planned
* **M**itigated − Action taken to reduce probability or impact

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. What are the techniques used to define the scope of a project?

Project scope definition involves clearly documenting the boundaries of a project — what is included and what is excluded. Common techniques include:

* **Decomposition** − Breaking down the overall project deliverables into smaller, manageable components using a Work Breakdown Structure (WBS) to define the full scope.

* **Product Analysis** − Analyzing the product or service to be delivered by translating high-level objectives into tangible deliverables. Includes product breakdown, systems analysis, and value engineering.

* **Alternatives Analysis** − Evaluating different approaches to achieve the project objectives to determine the most suitable scope of work.

* **Facilitated Workshops** − Cross-functional workshops (e.g., JAD sessions) that bring key stakeholders together to rapidly define and align on project scope.

* **Expert Judgment** − Leveraging subject matter experts (SMEs) to validate and refine the scope definition based on experience with similar projects.

* **Scope Statement** − A formal document that describes the project\'s deliverables, objectives, constraints, assumptions, and exclusions. It serves as the baseline for scope management.

* **MoSCoW Prioritization** − Categorizing requirements as **Must have**, **Should have**, **Could have**, and **Won\'t have** to focus scope on the highest-priority deliverables.

* **Prototyping** − Building iterative models or mockups to help stakeholders visualize the end product and confirm the scope before full development begins.

* **Context Diagrams** − Visual representations showing the system in scope and its interfaces with external entities, helping define system boundaries clearly.

* **OKRs (Objectives and Key Results)** *(Modern)* − A goal-setting framework used to align project scope with strategic business outcomes. Each **Objective** is a qualitative goal, supported by 2–5 measurable **Key Results**. Popularized by Google and now widely adopted in product organizations to ensure scope decisions are outcome-driven rather than output-driven.

* **Story Mapping** *(Modern)* − Organizes the project scope visually by mapping user activities (horizontal) against priority slices (vertical), showing the MVP and future increments clearly. Prevents scope creep by anchoring each feature to a user journey step.

* **Value Stream Mapping (VSM)** *(Modern)* − A Lean technique that maps the entire flow of value delivery from customer request to delivery. It helps identify waste, bottlenecks, and non-value-adding activities, ensuring scope is focused on steps that deliver real customer value.

* **Impact Mapping** *(Modern)* − A strategic technique that maps scope to business outcomes by answering: Why (goal) → Who (stakeholders) → How (behavior changes) → What (deliverables). It prevents gold-plating by rejecting features that cannot be traced back to a business impact.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. Explain Ishikawa/Fishbone diagrams?

An **Ishikawa diagram**, also called a **Fishbone diagram** or **Cause-and-Effect diagram**, is a visual tool used to systematically identify and analyze the root causes of a problem or defect. It was developed by Japanese quality control expert Kaoru Ishikawa.

The diagram resembles a fish skeleton:
* The **fish head** (on the right) represents the **effect** — the problem or outcome being analyzed.
* The **backbone** is the central horizontal line.
* The **ribs/bones** branching off the backbone represent **categories of causes**.
* Smaller bones branching off the ribs represent **specific causes** within each category.

**Common cause categories (the 6 Ms used in manufacturing):**

| Category | Description |
|----------|-------------|
| **Man** | Human factors — skills, training, fatigue |
| **Machine** | Equipment, tools, technology |
| **Method** | Processes, procedures, workflows |
| **Material** | Raw materials, components, data |
| **Measurement** | Metrics, calibration, data accuracy |
| **Mother Nature (Environment)** | Environmental conditions, workspace |

**Steps to create a Fishbone diagram:**
1. Define and write the problem (effect) at the fish head.
2. Identify the main cause categories and draw them as branches.
3. Brainstorm potential causes for each category using the "5 Whys" technique.
4. Analyze the diagram to identify the most likely root causes.
5. Prioritize causes for further investigation and corrective action.

**Benefits:**
* Encourages team participation and structured thinking.
* Visualizes complex cause-and-effect relationships.
* Helps prevent recurrence by addressing root causes, not just symptoms.
* Widely used in quality management (Six Sigma, TQM, Agile retrospectives).

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. What is the process of calculating the three-point estimating method?

The **three-point estimating** method improves the accuracy of estimates by considering uncertainty and risk. Instead of a single estimate, three scenarios are defined for each task:

| Estimate | Symbol | Description |
|----------|--------|-------------|
| **Optimistic** | O | Best-case scenario — everything goes perfectly |
| **Most Likely** | M | The realistic, most probable outcome |
| **Pessimistic** | P | Worst-case scenario — maximum problems occur |

**Two formulas are used:**

**1. Triangular Distribution (Simple Average):**

$$E = \frac{O + M + P}{3}$$

**2. Beta Distribution (PERT — Program Evaluation and Review Technique):**

$$E = \frac{O + 4M + P}{6}$$

The PERT formula gives **four times the weight** to the most likely estimate, making it more accurate for project planning.

**Standard Deviation (for PERT):**

$$SD = \frac{P - O}{6}$$

**Example:**
A software module has the following estimates:
* Optimistic (O) = 4 days
* Most Likely (M) = 6 days
* Pessimistic (P) = 14 days

*Triangular estimate:*
$$E = \frac{4 + 6 + 14}{3} = 8 \text{ days}$$

*PERT estimate:*
$$E = \frac{4 + (4 \times 6) + 14}{6} = \frac{42}{6} = 7 \text{ days}$$

*Standard Deviation:*
$$SD = \frac{14 - 4}{6} \approx 1.67 \text{ days}$$

**Benefits:**
* Accounts for uncertainty in task estimation.
* Reduces the risk of overly optimistic single-point estimates.
* Widely used in project scheduling (CPM, PERT networks) and Agile story point estimation.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. What is Work Breakdown Structure (WBS)?

A **Work Breakdown Structure (WBS)** is a hierarchical decomposition of the total scope of work required to complete a project. It organizes and defines the project\'s total work into smaller, manageable components called **work packages**.

**Key characteristics:**
* The WBS is **deliverable-oriented**, not activity-oriented — each node represents a deliverable or outcome, not an action.
* It follows the **100% Rule**: the WBS must include 100% of the work defined in the project scope and capture all deliverables (internal, external, and interim).
* Each descending level represents a more detailed breakdown of the parent element.

**WBS Structure Levels:**

| Level | Description | Example |
|-------|-------------|---------|
| Level 1 | Project | E-Commerce Website |
| Level 2 | Major Deliverables | Frontend, Backend, Database |
| Level 3 | Sub-deliverables | UI Design, API Development |
| Level 4 | Work Packages | Login Page, Product Listing API |

**Types of WBS:**
* **Deliverable-based WBS** − Organized around the project\'s outputs.
* **Phase-based WBS** − Organized around project phases (initiation, planning, execution, closure).

**Benefits of WBS:**
* Provides a clear picture of project scope and prevents scope creep.
* Helps in accurate cost and time estimation.
* Enables assignment of responsibilities for each work package.
* Forms the foundation for project schedule (Gantt chart) and resource planning.
* Facilitates progress tracking and control.

**WBS Dictionary:** A companion document that provides detailed information about each WBS element including description, responsible party, schedule milestones, required resources, and acceptance criteria.

**Agile WBS / Product Breakdown Structure (PBS):**  
In Agile and hybrid projects, the traditional WBS is complemented or replaced by:
* **Product Breakdown Structure (PBS)** − Breaks the product into components and features rather than tasks, aligning with backlog structure.
* **Feature Tree / Story Map** − User stories and epics are organized hierarchically (Theme → Epic → Feature → User Story) in tools like **Jira**, **Azure DevOps**, or **Linear**, serving as a living WBS that evolves each sprint.
* **SAFe Program Backlog** − In the Scaled Agile Framework, the WBS equivalent is the Program Backlog (Epics → Features) and Team Backlog (Stories → Tasks), managed across Program Increments (PI).

**Modern WBS Tooling:**

| Tool | Capability |
|------|-----------|
| **Microsoft Project** | Traditional WBS with Gantt chart and resource planning |
| **Jira** | Hierarchical backlog (Epic → Story → Sub-task) as Agile WBS |
| **Azure DevOps** | Work item hierarchy (Epic → Feature → User Story → Task) |
| **Asana / Monday.com** | Visual WBS with timeline and dependency tracking |
| **Miro / FigJam** | Collaborative WBS whiteboarding for remote teams |

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. What is the Pareto principle analysis?

The **Pareto Principle**, also known as the **80/20 Rule**, states that roughly **80% of effects come from 20% of causes**. It was named after Italian economist Vilfredo Pareto, who observed that 80% of Italy\'s land was owned by 20% of the population.

In project and quality management, this principle is applied through **Pareto Analysis** — a technique used to identify and prioritize the most significant problems or causes to focus effort where it will have the greatest impact.

**How Pareto Analysis works:**
1. **Identify and list the problems** or causes to be analyzed.
2. **Measure the frequency or impact** of each problem (e.g., number of defects, cost, time lost).
3. **Sort in descending order** from highest to lowest frequency/impact.
4. **Calculate cumulative percentages** for each problem category.
5. **Draw a Pareto Chart** — a bar chart combined with a line graph showing cumulative percentages.
6. **Identify the vital few** — the 20% of causes responsible for 80% of the problems.
7. **Focus corrective action** on those top causes first.

**Example in Software Projects:**

| Bug Category | Count | Cumulative % |
|-------------|-------|-------------|
| UI/UX Issues | 45 | 45% |
| API Errors | 30 | 75% |
| Database Issues | 15 | 90% |
| Config Errors | 7 | 97% |
| Other | 3 | 100% |

Fixing UI/UX and API issues (20% of categories) resolves 75% of all bugs.

**Applications in project management:**
* Prioritizing bug fixes and quality improvement efforts.
* Identifying the key risks that account for most of the project\'s risk exposure.
* Focusing stakeholder management on the most influential stakeholders.
* Optimizing resource allocation by targeting high-impact tasks.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. What is Gherkin approach for writing user stories?

**Gherkin** is a plain-text, human-readable language used to write acceptance criteria and user stories in a structured format that both business stakeholders and developers can understand. It is the language used by **Behavior-Driven Development (BDD)** frameworks such as Cucumber, SpecFlow, and Behave.

Gherkin bridges the gap between business requirements and automated test specifications by expressing behavior in natural language using a fixed set of keywords.

**Core Keywords:**

| Keyword | Purpose |
|---------|---------|
| `Feature` | High-level description of the feature being tested |
| `Scenario` | A specific example or test case for the feature |
| `Given` | The initial context or precondition |
| `When` | The action or event that occurs |
| `Then` | The expected outcome or result |
| `And` / `But` | Chains multiple Given/When/Then steps |
| `Background` | Common steps shared across all scenarios in a feature |
| `Scenario Outline` | A template scenario run with multiple data sets |
| `Examples` | Data table used with Scenario Outline |

**Basic Syntax Example:**

```gherkin
Feature: User Login

  Scenario: Successful login with valid credentials
    Given the user is on the login page
    When the user enters a valid username "john@example.com"
    And the user enters a valid password "Secret@123"
    Then the user should be redirected to the dashboard
    And a welcome message "Hello, John" should be displayed
```

**Scenario Outline with Examples (data-driven):**

```gherkin
Feature: User Login Validation

  Scenario Outline: Login with different credentials
    Given the user is on the login page
    When the user enters username "<username>" and password "<password>"
    Then the login result should be "<result>"

  Examples:
    | username            | password    | result  |
    | john@example.com    | Secret@123  | success |
    | wrong@example.com   | Secret@123  | failure |
    | john@example.com    | wrongpass   | failure |
```

**Background Example (shared precondition):**

```gherkin
Feature: Shopping Cart

  Background:
    Given the user is logged in
    And the shopping cart is empty

  Scenario: Add item to cart
    When the user adds "Laptop" to the cart
    Then the cart should contain 1 item

  Scenario: Remove item from cart
    Given the user has "Laptop" in the cart
    When the user removes "Laptop" from the cart
    Then the cart should be empty
```

**Benefits of Gherkin:**

* **Shared understanding** — business stakeholders, testers, and developers all read the same requirements.
* **Living documentation** — Gherkin scenarios serve as both specifications and automated test scripts.
* **Reduces ambiguity** — the structured Given/When/Then format forces precise expression of behavior.
* **Early defect detection** — acceptance criteria are defined before development begins (shift-left testing).
* **Reusable steps** — step definitions can be shared across multiple scenarios.

**Gherkin vs Traditional User Stories:**

| Aspect | Traditional User Story | Gherkin Scenario |
|--------|----------------------|-----------------|
| Format | As a [role], I want [goal], so that [benefit] | Given/When/Then |
| Audience | Business + Dev | Business + Dev + QA |
| Testable | Not directly | Directly executable |
| Tooling | Jira, Trello | Cucumber, SpecFlow, Behave |

**Modern Gherkin: The `Rule` Keyword** *(Gherkin 6+)*:  
The `Rule` keyword was introduced to group related scenarios under a single business rule within a feature. This makes large feature files more organized and readable.

```gherkin
Feature: User Account Management

  Rule: Users must be verified before accessing premium features

    Scenario: Verified user accesses premium content
      Given the user has verified their email
      When the user navigates to the premium section
      Then access is granted

    Scenario: Unverified user attempts premium access
      Given the user has NOT verified their email
      When the user navigates to the premium section
      Then the user should see a verification prompt
```

**Gherkin + AI-Assisted BDD** *(Emerging Practice)*:  
Modern teams use AI tools to accelerate BDD adoption:
* **GitHub Copilot** — auto-suggests `Given/When/Then` steps from plain-language descriptions.
* **Jira AI** — converts acceptance criteria written in free text into structured Gherkin scenarios.
* **Cucumber Studio** — a collaborative BDD platform where non-technical stakeholders write and review Gherkin scenarios without touching code.
* **AI test generation** — tools like **Diffblue** and **Testim** generate step definitions and test code from Gherkin scenarios automatically.

**Gherkin in CI/CD Pipelines:**  
Gherkin scenarios are integrated into modern DevOps pipelines (GitHub Actions, Azure Pipelines, Jenkins) where Cucumber or SpecFlow runs acceptance tests automatically on every pull request, providing living documentation that always reflects the current system behavior.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. What are the roles and responsibilities of a Technical Lead?

A **Technical Lead** (Tech Lead) is a senior engineering role responsible for guiding the technical direction of a team or project. Unlike a pure individual contributor, the Tech Lead balances hands-on coding with leadership, mentoring, and coordination responsibilities. The role sits at the intersection of engineering and management.

**Core Responsibilities:**

**1. Technical Direction and Architecture**
* Define and own the technical architecture, design patterns, and technology stack decisions for the project.
* Conduct architecture reviews, proof-of-concepts (PoCs), and technology evaluations.
* Ensure technical decisions align with business goals, scalability, and maintainability.
* Maintain architecture decision records (ADRs) to document key design choices and their rationale.

**2. Code Quality and Standards**
* Establish and enforce coding standards, best practices, and review guidelines.
* Lead and conduct code reviews to ensure quality, security (OWASP compliance), and consistency.
* Define and maintain Definition of Done (DoD) criteria for technical deliverables.
* Introduce and maintain static analysis tools (SonarQube, ESLint, StyleCop) and CI/CD quality gates.

**3. Technical Planning and Estimation**
* Break down high-level requirements into technical tasks and user stories.
* Provide effort estimates for complex technical work during sprint planning and PI Planning.
* Identify technical dependencies, risks, and constraints, and communicate them to the Project Manager / Scrum Master.
* Contribute to the RAID log for technical risks, assumptions, and dependencies.

**4. Mentoring and Team Development**
* Coach and mentor junior and mid-level developers through pair programming, code reviews, and knowledge-sharing sessions.
* Identify skill gaps in the team and recommend training or hiring actions.
* Foster a culture of engineering excellence, psychological safety, and continuous improvement.
* Support team members' career growth and technical progression.

**5. Cross-functional Collaboration**
* Act as the primary technical point of contact for Product Managers, Business Analysts, Architects, and stakeholders.
* Translate business requirements into technical specifications and communicate technical constraints in business terms.
* Collaborate with DevOps, Security, QA, and UX teams to ensure integrated delivery.
* Participate in or facilitate technical discovery workshops (e.g., Event Storming, Story Mapping).

**6. Delivery and Execution**
* Ensure the team delivers high-quality software on schedule by removing technical blockers.
* Balance technical debt management with feature delivery — prioritize refactoring and platform work in the backlog.
* Monitor system health via dashboards, alerts, and performance metrics (DORA metrics: Lead Time, Deployment Frequency, MTTR, Change Failure Rate).
* Coordinate with the Scrum Master or PM to flag risks that may impact sprint commitments.

**7. Security and Compliance**
* Ensure security best practices are embedded in the development process (shift-left security, SAST/DAST).
* Review code and architecture for vulnerabilities aligned with OWASP Top 10.
* Ensure compliance with data privacy regulations (GDPR, HIPAA) at the architecture level.

**Tech Lead vs. Engineering Manager:**

| Dimension | Technical Lead | Engineering Manager |
|-----------|---------------|-------------------|
| Primary focus | Technical excellence + delivery | People management + org health |
| Coding | Active contributor (30–70%) | Minimal or none |
| Reports to | Engineering Manager or CTO | VP Engineering or CTO |
| Hiring | Contributes to interviews | Owns hiring decisions |
| Performance reviews | Input provider | Owner |
| Career path | Staff Engineer → Principal → Architect | EM → Director → VP |

**Modern Tech Lead Skills (2024–2026):**

* **AI tooling adoption** — Evaluating, introducing, and governing AI coding assistants (GitHub Copilot, Cursor, Amazon Q) within the team\'s workflow.
* **Platform engineering awareness** — Collaborating with Platform/DevOps teams on Internal Developer Platforms (IDPs), developer experience, and golden paths.
* **Distributed systems** — Leading technical decisions for cloud-native, microservices, and event-driven architectures (AWS, Azure, GCP).
* **Inner source / open source** — Driving reusable component libraries and contributing to engineering knowledge bases.
* **FinOps awareness** — Understanding cloud cost implications of architectural decisions and working with FinOps practices to optimize spend.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. What is the difference between Agile and Waterfall methodologies?

Agile and Waterfall are two fundamentally different approaches to software project delivery. Choosing between them — or combining them in a hybrid model — depends on the nature of the project, stakeholder needs, and the level of requirements certainty.

**Waterfall:**  
A sequential, linear project management approach where each phase (Requirements → Design → Development → Testing → Deployment → Maintenance) must be completed before the next begins. Requirements are locked upfront and change is costly.

**Agile:**  
An iterative, incremental delivery approach where work is broken into short cycles (sprints/iterations), enabling continuous feedback, adaptation, and delivery of working software frequently.

**Comparison:**

| Dimension | Waterfall | Agile |
|-----------|-----------|-------|
| Approach | Sequential, phase-gated | Iterative, incremental |
| Requirements | Fixed upfront | Evolving throughout |
| Delivery | Single delivery at project end | Frequent releases (every 1–4 weeks) |
| Customer involvement | At start and end | Continuous collaboration |
| Change tolerance | Low — changes are costly | High — embraces change |
| Documentation | Heavy upfront documentation | Lightweight, just-enough docs |
| Team structure | Siloed (BA, Dev, QA in sequence) | Cross-functional, self-organizing |
| Risk management | Risks identified upfront | Risks surfaced and addressed iteratively |
| Best suited for | Fixed scope, regulated projects | Complex, innovative, fast-changing products |
| Examples | Construction, compliance systems | SaaS products, mobile apps, AI systems |

**Hybrid (Water-Scrum-Fall):**  
Many enterprise organisations adopt a hybrid model — Waterfall governance (fixed budget, milestones, contracts) wrapped around Agile execution (sprints, backlog, daily standups). This is common in SAFe implementations.

**When to choose Waterfall:**
* Regulatory or compliance-driven projects (FDA, ISO, government contracts)
* Projects with fully defined, stable requirements
* Fixed-price contracts where scope changes are contractually restricted

**When to choose Agile:**
* Products where requirements will evolve based on user feedback
* Innovation, digital transformation, or startup contexts
* Teams co-located or comfortable with remote collaboration tooling

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. What is a Sprint Retrospective and how is it conducted?

A **Sprint Retrospective** is a Scrum ceremony held at the end of each sprint where the team inspects how they worked together and identifies improvements for the next sprint. It is a core pillar of Agile\'s **continuous improvement** principle.

**Scrum Guide Definition:**  
The Sprint Retrospective is an opportunity for the Scrum Team to inspect itself and create a plan for improvements to be enacted during the next Sprint. It is timeboxed to a maximum of **3 hours for a one-month sprint** (proportionally shorter for shorter sprints).

**Participants:** Scrum Team (Developers + Scrum Master + Product Owner)

**Standard Agenda (3 key questions):**
1. **What went well?** — Practices, tools, or behaviors to keep and reinforce
2. **What didn\'t go well?** — Pain points, blockers, process failures to address
3. **What will we improve?** — 1–3 concrete, actionable improvements for the next sprint

**Popular Retrospective Formats:**

| Format | Description |
|--------|-------------|
| **Start / Stop / Continue** | What should we start doing, stop doing, and continue doing? |
| **4Ls** | Liked, Learned, Lacked, Longed For |
| **Mad / Sad / Glad** | Emotional temperature check on the sprint |
| **Sailboat** | Wind (what helped), Anchors (what slowed us), Rocks (risks ahead), Sun (the goal) |
| **5 Whys** | Root cause analysis for recurring issues |
| **Timeline** | Team maps key events of the sprint chronologically to spot patterns |

**Modern Remote Retrospective Tools:**
* **Miro / FigJam** — Virtual whiteboards with sticky note templates
* **RetroTool / EasyRetro** — Dedicated retrospective platforms
* **Parabol** — Free, Agile-first retrospective and standup tool
* **Confluence / Notion** — Document-based async retrospectives for distributed teams

**Output:** A short list of improvement actions (ideally 1–3) added as user stories or tasks to the next sprint backlog, with clear owners and acceptance criteria.

**Common Anti-patterns to Avoid:**
* Turning the retro into a blame session
* Generating a long list of actions with no owners
* Skipping the retro when the team is busy
* Repeating the same improvements sprint after sprint without follow-through

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. What is the Critical Path Method (CPM) in project management?

The **Critical Path Method (CPM)** is a project scheduling algorithm used to determine the longest sequence of dependent tasks that defines the minimum possible project duration. Tasks on the critical path have **zero float (slack)** — any delay in them directly delays the project completion date.

**Key Concepts:**

| Term | Definition |
|------|------------|
| **Activity** | A discrete task with a defined duration |
| **Dependency** | Relationship between tasks (FS, SS, FF, SF) |
| **Early Start (ES)** | Earliest a task can start |
| **Early Finish (EF)** | ES + Duration |
| **Late Start (LS)** | Latest a task can start without delaying the project |
| **Late Finish (LF)** | LS + Duration |
| **Float / Slack** | LF − EF (or LS − ES) — time a task can be delayed without affecting project end |
| **Critical Path** | The sequence of tasks with zero float |

**Steps to calculate the Critical Path:**
1. **List all activities** and their durations.
2. **Identify dependencies** between activities.
3. **Draw the network diagram** (Activity on Node or Activity on Arrow).
4. **Forward pass** — calculate Early Start and Early Finish for each task.
5. **Backward pass** — calculate Late Start and Late Finish from the project end.
6. **Calculate float** for each task: Float = LS − ES.
7. **Identify the critical path** — all tasks with Float = 0.

**Example Network:**

```
Start → A(3d) → B(4d) → D(2d) → End   ← Critical Path (9 days)
              → C(6d) → D(2d)          (C has 0 float too if it joins critical path)
```

**Benefits:**
* Identifies which tasks drive the project end date.
* Helps prioritise resource allocation to critical tasks.
* Enables schedule compression via **fast-tracking** (parallelise tasks) or **crashing** (add resources).
* Provides basis for schedule risk analysis and what-if scenarios.

**CPM vs. PERT:**

| Aspect | CPM | PERT |
|--------|-----|------|
| Duration | Single deterministic estimate | Three-point estimate (O, M, P) |
| Focus | Schedule optimisation | Schedule uncertainty/risk |
| Best for | Repetitive, well-understood tasks | R&D, novel, uncertain projects |

**Modern tooling:** Microsoft Project, Primavera P6, Smartsheet, and ProjectLibre all compute the critical path automatically from task dependencies.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. What is Earned Value Management (EVM)?

**Earned Value Management (EVM)** is a project performance measurement technique that integrates **scope**, **schedule**, and **cost** into a single integrated framework. It provides objective data on how much work has been completed relative to what was planned and what was spent.

**Core EVM Metrics:**

| Metric | Abbreviation | Definition |
|--------|-------------|------------|
| Planned Value | PV | Budgeted cost of work scheduled to be done by a point in time |
| Earned Value | EV | Budgeted cost of work actually completed (% complete × Budget at Completion) |
| Actual Cost | AC | Actual money spent on the work completed so far |
| Budget at Completion | BAC | Total approved budget for the project |

**Key Variances:**

$$\text{Schedule Variance (SV)} = EV - PV$$
$$\text{Cost Variance (CV)} = EV - AC$$

* SV > 0 → Ahead of schedule; SV < 0 → Behind schedule
* CV > 0 → Under budget; CV < 0 → Over budget

**Performance Indices:**

$$\text{Schedule Performance Index (SPI)} = \frac{EV}{PV}$$
$$\text{Cost Performance Index (CPI)} = \frac{EV}{AC}$$

* SPI / CPI > 1.0 → Performing better than planned
* SPI / CPI < 1.0 → Performing worse than planned

**Forecasting:**

$$\text{Estimate at Completion (EAC)} = \frac{BAC}{CPI}$$
$$\text{Estimate to Complete (ETC)} = EAC - AC$$
$$\text{Variance at Completion (VAC)} = BAC - EAC$$

**Example:**
* BAC = $100,000 | Project is 40% complete | AC = $50,000
* EV = 40% × $100,000 = **$40,000**
* PV (planned 50% done) = $50,000
* CV = $40,000 − $50,000 = **−$10,000** (over budget)
* SV = $40,000 − $50,000 = **−$10,000** (behind schedule)
* CPI = 40,000 / 50,000 = **0.8** (spending $1.25 for every $1 of value delivered)
* EAC = $100,000 / 0.8 = **$125,000** (project forecast to cost $125K)

**Benefits:**
* Provides early warning of cost and schedule problems.
* Enables data-driven forecasting of final project cost and completion date.
* Required by US Federal Government contracts and widely used in Defence, Aerospace, and large IT programs.
* Integrated into Microsoft Project, Primavera P6, and project portfolio management (PPM) tools.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. What is a Project Charter and what does it contain?

A **Project Charter** is a formal document that officially authorises the existence of a project and grants the Project Manager the authority to apply organisational resources to project activities. It is typically issued by a **project sponsor** (senior stakeholder) and serves as the project\'s constitution.

**Key Contents of a Project Charter:**

| Section | Description |
|---------|-------------|
| **Project Title** | Name and unique identifier of the project |
| **Project Purpose / Business Case** | Why the project is being undertaken and the problem/opportunity it addresses |
| **Objectives** | Specific, measurable goals (aligned to SMART criteria or OKRs) |
| **Scope Summary** | High-level description of what is in and out of scope |
| **Deliverables** | Key outputs the project will produce |
| **Milestones** | Major schedule checkpoints and target dates |
| **Budget Summary** | High-level cost estimate and approved budget |
| **Stakeholders** | Key stakeholders, their roles, and level of influence/interest |
| **Project Team** | Project Manager, Tech Lead, and core team members |
| **Assumptions and Constraints** | Factors assumed to be true and fixed limitations |
| **Risks (High Level)** | Initial identification of major risks |
| **Success Criteria** | How project success will be measured |
| **Approval / Sign-off** | Sponsor signature authorising the project |

**Why the Project Charter matters:**
* Formally authorises the project — without it, the PM has no mandate to spend budget or assign resources.
* Aligns all stakeholders on objectives and scope before work begins.
* Serves as a reference document throughout the project to resolve scope disputes.
* Required by **PMBOK** as an output of the **Develop Project Charter** process (Initiating Process Group).

**Project Charter vs. Project Plan:**

| Aspect | Project Charter | Project Plan |
|--------|----------------|-------------|
| Purpose | Authorise and initiate | Plan and execute |
| Detail level | High-level | Detailed |
| Created by | Sponsor + PM | PM + Team |
| Timing | Before project starts | After charter approval |
| Length | 1–3 pages | Multi-document |

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. What is the difference between a Product Owner and a Project Manager?

The **Product Owner (PO)** and **Project Manager (PM)** are distinct roles that often coexist in organisations running Agile or hybrid delivery models. They have different focuses, accountabilities, and skill sets.

**Product Owner:**  
A Scrum role (defined in the Scrum Guide) responsible for **maximising the value of the product** by managing and prioritising the product backlog. The PO represents the voice of the customer and business stakeholders.

**Project Manager:**  
A role responsible for **delivering the project on time, within scope and budget**, managing risks, stakeholders, resources, and governance. The PM is outcome-focused at the project level, not the product level.

**Comparison:**

| Dimension | Product Owner | Project Manager |
|-----------|--------------|----------------|
| Primary focus | Product value and backlog | Project delivery and governance |
| Accountability | What gets built and why | When, how much, who builds it |
| Framework | Scrum / Agile | PMBOK / PRINCE2 / SAFe / Hybrid |
| Time horizon | Ongoing (product lifecycle) | Fixed (project start to close) |
| Stakeholder management | Business + customers | All stakeholders (exec, vendors, team) |
| Success metric | Business outcomes, user adoption | On-time, on-budget, in-scope delivery |
| Backlog ownership | Yes — owns and prioritises | No — consumes the schedule |
| Budget ownership | Typically no | Yes |
| Reports to | CPO / Head of Product | PMO / Programme Manager |

**In SAFe (Scaled Agile Framework):**  
The roles are further separated — the **Product Manager** owns the **Program Backlog** (features), while the **Product Owner** owns the **Team Backlog** (stories). A **Release Train Engineer (RTE)** performs the coordination role similar to a Programme Manager.

**Overlap in hybrid organisations:**  
In smaller organisations or hybrid projects, one person may wear both hats. However, the tension between "build the right thing" (PO) and "build the thing right on time" (PM) means separating the roles leads to better outcomes in complex projects.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. What is Change Management in project management?

**Change Management** in project management refers to the structured process for requesting, evaluating, approving, and implementing changes to a project\'s agreed scope, schedule, cost, or quality baseline. It prevents unauthorised scope creep while allowing necessary changes to be incorporated in a controlled manner.

**Change Control Process:**

1. **Change Request (CR) Raised** — Any stakeholder identifies a need to change the agreed baseline and submits a formal Change Request document.
2. **Impact Assessment** — The PM, Tech Lead, and relevant SMEs assess the impact on scope, schedule, cost, quality, risks, and resources.
3. **Change Control Board (CCB) Review** — The CCB (sponsor, PM, key stakeholders) reviews the CR and impact assessment.
4. **Decision** — Approved / Rejected / Deferred with documented rationale.
5. **Implementation** — Approved changes are planned, resourced, and executed.
6. **Baseline Update** — Project baselines (scope, schedule, cost) are formally updated to reflect the approved change.
7. **Communication** — All affected stakeholders are notified of the approved change.

**Types of Change:**

| Type | Description |
|------|-------------|
| **Scope change** | Addition, removal, or modification of deliverables |
| **Schedule change** | Change to milestones or delivery dates |
| **Cost change** | Budget adjustment or reallocation |
| **Quality change** | Modification to acceptance criteria or standards |
| **Risk-driven change** | Change triggered by a materialised risk or issue |

**Agile Change Management:**  
In Agile teams, change is embraced by design — the product backlog is continuously refined and reprioritised. However, formal change control still applies to:
* Contract scope and commercial agreements
* Regulatory compliance requirements
* Programme-level milestones and budget in SAFe PI Planning

**Organisational Change Management (OCM):**  
Beyond project change control, OCM addresses the **people side of change** — managing resistance, communication, training, and adoption when systems, processes, or structures change. Frameworks include **Prosci ADKAR** (Awareness, Desire, Knowledge, Ability, Reinforcement) and **Kotter\'s 8-Step Model**.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. What are DORA metrics and why do they matter?

**DORA metrics** (DevOps Research and Assessment) are a set of four key metrics developed by the DORA research team (now part of Google Cloud) that measure the **performance of software delivery and operational stability**. They are the industry-standard benchmark for engineering team effectiveness.

**The Four DORA Metrics:**

| Metric | Definition | Measures |
|--------|-----------|----------|
| **Deployment Frequency (DF)** | How often the team deploys to production | Speed / Throughput |
| **Lead Time for Changes (LT)** | Time from code commit to running in production | Speed / Efficiency |
| **Change Failure Rate (CFR)** | % of deployments that cause a production failure | Quality / Stability |
| **Mean Time to Restore (MTTR)** | Time to restore service after a production failure | Resilience / Recovery |

**Performance Tiers (DORA 2023 Report):**

| Tier | Deployment Frequency | Lead Time | Change Failure Rate | MTTR |
|------|---------------------|-----------|--------------------|---------|
| **Elite** | On-demand (multiple/day) | < 1 hour | 0–5% | < 1 hour |
| **High** | Daily to weekly | 1 day – 1 week | 5–10% | < 1 day |
| **Medium** | Weekly to monthly | 1 week – 1 month | 10–15% | 1 day – 1 week |
| **Low** | < Once per month | > 6 months | 46–60% | > 6 months |

**Why DORA metrics matter:**
* Provide **objective, team-level** engineering performance data to replace subjective opinions.
* Correlate directly with **business outcomes** — elite performers are 2× more likely to meet commercial goals (DORA research).
* Help Tech Leads and Engineering Managers identify bottlenecks in the delivery pipeline.
* Drive conversations about CI/CD maturity, testing automation, incident management, and technical debt.
* Adopted by Google, Microsoft, Amazon, and most mature DevOps organisations as standard OKR inputs.

**How to improve DORA metrics:**

| Metric | Key Improvement Levers |
|--------|------------------------|
| Deployment Frequency | Trunk-based development, feature flags, automated CI/CD pipelines |
| Lead Time for Changes | Smaller PRs, faster code reviews, automated testing, pipeline optimisation |
| Change Failure Rate | Shift-left testing, canary/blue-green deployments, SAST/DAST in pipeline |
| MTTR | Observability (logs, traces, metrics), runbooks, chaos engineering, on-call rotation |

**DORA + SPACE Framework:**  
Modern engineering organisations combine DORA (flow and stability metrics) with the **SPACE framework** (Satisfaction, Performance, Activity, Communication, Efficiency) to get a more holistic view of developer productivity beyond just deployment speed.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>
