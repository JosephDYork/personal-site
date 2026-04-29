<script lang="ts">
	const experience = [
		{
			company: 'Chmura Economics & Analytics',
			type: 'Full-time · 4 yrs 5 mos',
			location: 'Cleveland, Ohio, United States · Remote',
			roles: [
				{
					title: 'Software Engineer',
					timeline: 'Dec 2023 - Present · 2 yrs 5 mos',
					bullets: [
						'Created and maintained machine learning pipelines using NLP/NER techniques to classify and deduplicate job posting text bodies.',
						"Refactored and parallelized Chmura's stream processing pipelines for Real Time Analytics software.",
						'Spearheaded efforts to refactor, document, and clean the codebase, reducing cyclomatic complexity and improving readability.'
					]
				},
				{
					title: 'Data Analyst',
					timeline: 'Dec 2021 - Nov 2023 · 2 yrs',
					bullets: [
						'Spearheaded development of new Python and C# libraries to interface with Chmura data programmatically.',
						'Led research and development efforts to integrate new features and datasets into product offerings.',
						'Assisted in creating mathematical models for simulating block-to-block commuting patterns.',
						'Maintained, trained, and tested machine learning models for classifying, deduplicating, and enriching data from more than 2 billion text bodies.'
					]
				}
			]
		},
		{
			company: 'Wright State University',
			type: 'Full-time · 4 yrs 2 mos',
			location: 'Dayton, Ohio, United States · On-site',
			roles: [
				{
					title: 'Vice President, Student Body',
					timeline: 'Sep 2020 - Sep 2021 · 1 yr 1 mo',
					bullets: [
						'Managed a team of 10+ university college representatives with a budget of $100,000+.',
						'Spearheaded university-wide searches for student-trustee positions at WSU Board of Trustees.',
						'Facilitated distribution of $700,000+ in university funding to student organizations.'
					]
				},
				{
					title: 'Program Manager',
					timeline: 'Mar 2019 - Sep 2020 · 1 yr 7 mos',
					bullets: [
						'Worked as Speaker of the House of Representatives, leading SOAR program functions.',
						'Managed a team of 5 analysts and oversaw SOAR execution and project analysis.',
						'Grew program enrollment by more than 15% and expanded service hours to over 10,000.'
					]
				},
				{
					title: 'Assistant Program Manager',
					timeline: 'Aug 2017 - Mar 2019 · 1 yr 8 mos',
					bullets: [
						'Worked as Assistant Speaker of the House of Representatives, helping lead SOAR functions.',
						'Transformed the SOAR program through data insights, growing the program 25%.',
						'Gathered insights on predictors concerning student retention.'
					]
				}
			]
		},
		{
			company: 'The Reynolds and Reynolds Company',
			type: 'Full-time · 4 mos',
			location: 'Beavercreek, Ohio, United States · On-site',
			roles: [
				{
					title: 'Information Technology Intern',
					timeline: 'May 2018 - Aug 2018 · 4 mos',
					bullets: [
						'Created and maintained a database of more than 15 networking closets in the Dayton office.',
						"Assisted in management and deployment of more than 500 Windows Surface Pro 4 devices.",
						'Worked daily with a team of 15+ IT experts supporting 10 departments across 3 locations.'
					]
				}
			]
		}
	];

	const education = [
		{
			school: 'University of Cincinnati',
			degree: 'Master of Engineering, Computer Science',
			timeline: '2025 - 2027',
			details: [
				'Grade: 4.0/4.0',
				'Activities: Club Fencing, 1819 Innovation Hub, Association of Computing Machinery'
			]
		},
		{
			school: 'Wright State University',
			degree: "Bachelor's Degree, Economics",
			timeline: '2017 - 2021',
			details: [
				'Graduated Summa Cum Laude (3.95/4.00), Full Academic Scholarship',
				'Second major in Philosophy; minor in Classical History and Languages.',
				'Capstone: eSports, analyzing the impact of emerging esports on the traditional sports market.'
			]
		}
	];

	const honors = [
		'Ronald F. Hough Scholar (2019)',
		'Economics Scholar of the Term (2020)',
		'Competitive Honors Scholar (2017-2021)',
		'Academic Full Ride Scholarship (2017-2021)',
		'Economics Departmental Scholarship (2020)'
	];

	const leadership = [
		"Student Government: Vice President, Speaker of the House, Assistant Speaker of the House, House Intern",
		'Sigma Phi Epsilon: Vice President of Learning, Senior Marshall, Historian',
		'Club Tennis: Vice President, Treasurer',
		'Club Quizbowl: Vice President'
	];

	const volunteering = [
		'Executive Director - Ohio Student Government Association (Mar 2019 - Jul 2020)',
		'Eagle Scout, Lead Volunteer - Boy Scouts of America (Jun 2011 - Feb 2017)'
	];
</script>

<svelte:head>
	<title>Resume - Joseph D. York</title>
	<meta name="description" content="Resume and experience overview for Joseph D. York." />
</svelte:head>

<main class="page">
	<section class="section">
		<h2 class="section-title">Experience</h2>
		<ul class="stack">
			{#each experience as company}
				<li class="company">
					<div class="company-head">
						<h3>{company.company}</h3>
						<p>{company.type}</p>
						<p>{company.location}</p>
					</div>
					<ul class="roles">
						{#each company.roles as role}
							<li class="role-entry">
								<h4>{role.title}</h4>
								<p>{role.timeline}</p>
								<ul class="bullets">
									{#each role.bullets as bullet}
										<li>{bullet}</li>
									{/each}
								</ul>
							</li>
						{/each}
					</ul>
				</li>
			{/each}
		</ul>
	</section>

	<section class="section">
		<h2 class="section-title">Education</h2>
		<ul class="stack">
			{#each education as item}
				<li class="edu-entry">
					<h3>{item.school}</h3>
					<p>{item.degree}</p>
					<p>{item.timeline}</p>
					<ul class="bullets">
						{#each item.details as detail}
							<li>{detail}</li>
						{/each}
					</ul>
				</li>
			{/each}
		</ul>
	</section>

	<section class="section no-border">
		<h2 class="section-title">Additional</h2>
		<div class="detail-grid">
			<article class="detail-card">
				<h3>Scholarships and Honors</h3>
				<ul class="bullets">
					{#each honors as item}
						<li>{item}</li>
					{/each}
				</ul>
			</article>
			<article class="detail-card">
				<h3>Leadership</h3>
				<ul class="bullets">
					{#each leadership as item}
						<li>{item}</li>
					{/each}
				</ul>
			</article>
			<article class="detail-card">
				<h3>Volunteering</h3>
				<ul class="bullets">
					{#each volunteering as item}
						<li>{item}</li>
					{/each}
				</ul>
			</article>
		</div>
	</section>
</main>

<style>
	.page {
		max-width: var(--content-max);
		margin: 0 auto;
		padding: var(--page-top) 0 var(--page-bottom);
		display: grid;
		gap: 2rem;
	}

	.section {
		padding-bottom: 1.25rem;
		border-bottom: 1px solid var(--line);
	}

	.section-title {
		margin: 0 0 1rem;
		font-size: var(--section-title-size);
		font-weight: 500;
		letter-spacing: 0;
	}

	h2,
	h3,
	h4 {
		margin: 0;
		line-height: 1.2;
	}

	h2 {
		font-size: 1.25rem;
		margin-bottom: 0.5rem;
	}

	h3 {
		font-size: 1.05rem;
		margin-bottom: 0.2rem;
	}

	h4 {
		font-size: 0.98rem;
		margin-bottom: 0.2rem;
	}

	p {
		margin: 0;
	}

	.stack {
		padding: 0;
		margin: 0;
		list-style: none;
		display: grid;
		gap: 1.4rem;
	}

	.company {
		padding-bottom: 1.1rem;
		border-bottom: 1px solid var(--line);
	}

	.company:last-child {
		padding-bottom: 0;
		border-bottom: 0;
	}

	.company-head p {
		font-size: 0.92rem;
	}

	.roles {
		padding: 0;
		margin: 0.8rem 0 0;
		list-style: none;
		display: grid;
		gap: 0.9rem;
	}

	.role-entry {
		padding-left: 0.9rem;
		border-left: 1px solid var(--line);
	}

	.edu-entry {
		padding-bottom: 0.9rem;
		border-bottom: 1px solid var(--line);
	}

	.edu-entry:last-child {
		padding-bottom: 0;
		border-bottom: 0;
	}

	.bullets {
		margin: 0.45rem 0 0;
		padding-left: 1.1rem;
		display: grid;
		gap: 0.35rem;
	}

	.detail-grid {
		display: grid;
		grid-template-columns: repeat(3, minmax(0, 1fr));
		gap: 1rem;
	}

	.detail-card {
		padding: 0.8rem;
		border: 1px solid var(--line);
	}

	.detail-card h3 {
		font-size: 0.96rem;
		margin-bottom: 0.35rem;
	}

	.no-border {
		border-bottom: 0;
	}

	@media (max-width: 760px) {
		.page {
			padding: var(--page-top-mobile) 0 var(--page-bottom-mobile);
		}

		.detail-grid {
			grid-template-columns: 1fr;
		}
	}
</style>
