<script>
	let data = {
		name: '',
		email: '',
		subject: '',
		content: ''
	};

	// @ts-ignore
	$: invalidForm = Object.keys(data).filter((k) => !!data[k]).length !== 4;

	// @ts-ignore
	function handleSubmit(ev) {
		const api = 'https://portfolio-server-hqce.onrender.com/send-message';
		ev.preventDefault();
		fetch(api, {
			method: 'POST',
			body: JSON.stringify(data),
			headers: { 'Content-Type': 'application/json' }
		}).then(
			() =>
				(data = {
					name: '',
					email: '',
					subject: '',
					content: ''
				})
		);
	}

	// @ts-ignore
	function handleFieldChange(ev) {
		data = {
			...data,
			[ev.target.name]: ev.target.value
		};
	}
</script>

<section class="section" id="contact">
	<div class="container">
		<div class="section-content">
			<div class="section-header">
				<h4 class="section-subtitle">I'm available for hire</h4>
				<h3 class="section-title">Contact Me</h3>
			</div>

			<form class="d-flex wrap" on:submit={handleSubmit}>
				<div class="expand-md">
					<div class="form-input">
						<input
							required
							type="text"
							name="name"
							placeholder="Your Name"
              value={data.name}
							on:input={handleFieldChange}
						/>
					</div>
					<div class="form-input">
						<input
							required
							type="email"
							name="email"
							placeholder="Your Email"
              value={data.email}
							on:input={handleFieldChange}
						/>
					</div>
					<div class="form-input">
						<input
							required
							type="tel"
							name="subject"
							placeholder="Your Phone"
              value={data.subject}
							on:input={handleFieldChange}
						/>
					</div>
				</div>
				<div class="expand-md">
					<div class="form-input h-100">
						<textarea
							required
							name="content"
							placeholder="Your Message"
							class="h-100"
              value={data.content}
							on:input={handleFieldChange}
						/>
					</div>
				</div>

				<div class="expand-full d-flex justify-center margin-top">
					<button disabled={invalidForm} type="submit" class="btn primary">Submit</button>
				</div>
			</form>
		</div>
	</div>
</section>
