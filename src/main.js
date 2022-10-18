let appController = (function(){

	const app = document.querySelector('#app');

	const _render = (props) => {
		let div = document.createElement('div');
		div.innerHTML = props.text;
		[...div.children].forEach(item => {
			props.parent.append(item);
		});
	};

	const _clear_page = (props) => {
		while(app.firstChild){
			app.removeChild(app.firstChild);
		}
	};

	const _footer = (props) => {
		if(app.querySelector('footer') == null){
			let text = `
				<footer>
					<a href="https://github.com/hugekontrast" target="_blank">ashishk</a><svg xmlns="http://www.w3.org/2000/svg" width="192" height="192" fill="#000000" viewBox="0 0 256 256"><path d="M224,100a8,8,0,0,1-4.9,7.4,8.5,8.5,0,0,1-3.1.6,8.3,8.3,0,0,1-5.7-2.3L186,81.3l-36.4,36.4A8,8,0,0,1,144,120a8.3,8.3,0,0,1-5.7-2.3,8,8,0,0,1,0-11.3L174.7,70,150.3,45.7a8.4,8.4,0,0,1-1.7-8.8A8,8,0,0,1,156,32h60a8,8,0,0,1,8,8Zm-40,36a8,8,0,0,0-8,8v64H48V80h64a8,8,0,0,0,0-16H48A16,16,0,0,0,32,80V208a16,16,0,0,0,16,16H176a16,16,0,0,0,16-16V144A8,8,0,0,0,184,136Z"></path></svg><p>made this</p>
				</footer>
			`;
			_render({'text' : text, 'parent' : app});
		}
	};

	const _error_page = (props) => {
		_clear_page();
		let text = `
			<div class="message">
				<svg xmlns="http://www.w3.org/2000/svg" width="192" height="192" fill="#000000" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M128,24A104,104,0,1,0,232,128,104.2,104.2,0,0,0,128,24Zm-8,56a8,8,0,0,1,16,0v56a8,8,0,0,1-16,0Zm8,104a12,12,0,1,1,12-12A12,12,0,0,1,128,184Z"></path></svg>
				<p>An </p><br>
				<p>error </p><br>
				<p class="highlight">occured.</p>
			</div>
		`;
		_footer();
		_render({'text' : text, 'parent' : app});
	};

	const _disconnected_page = (props) => {
		_clear_page();
		let text = `
			<div class="message">
				<svg xmlns="http://www.w3.org/2000/svg" width="192" height="192" fill="#000000" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M223.3,116a117.3,117.3,0,0,1,.7,12A96,96,0,0,1,70,204.5c24.6-6.2,53.5-18.5,82-34.9S205.6,134.2,223.3,116Zm22.5-56c-5.5-9.5-20.3-18.4-59.8-8.5A96,96,0,0,0,32,128a117.3,117.3,0,0,0,.7,12C4.4,169.2,4.8,186.5,10.2,196c3.7,6.4,11.9,12.8,29.8,12.8a121.7,121.7,0,0,0,25.5-3.2l4.5-1.1a105,105,0,0,1-14.2-13.3c-18.7,3.3-29.3,1-31.7-3.2-1.5-2.6-.7-7.5,2.3-13.4A85.7,85.7,0,0,1,37.1,159a95.2,95.2,0,0,0,18.7,32.2l6.2-1.3c24-5.3,53.1-17.5,82-34.2s54-35.8,70.6-53.9a62,62,0,0,0,4.3-4.8,95.2,95.2,0,0,0-18.7-32.2,83.9,83.9,0,0,1,19-1.5c6.6.4,11.2,2.1,12.7,4.7,2.4,4.2-.9,14.5-13,29a107.3,107.3,0,0,1,4.4,19l3.1-3.3C251.7,85.2,250.9,68.9,245.8,60Z"></path></svg>
				<p>Allow</p><br>
				<p class="highlight">location,</p><br>
				<p>please.</p>
			</div>
		`;
		_footer();
		_render({'text' : text, 'parent' : app});
	};

	const _loader = function(props){
		_clear_page();
		let text = `
			<svg class="loader" xmlns="http://www.w3.org/2000/svg" width="192" height="192" fill="#000000" viewBox="0 0 256 256"><path d="M232,128A104,104,0,1,1,84.7,33.4a8.1,8.1,0,0,1,10.6,4,8,8,0,0,1-4,10.6,88,88,0,1,0,73.4,0,8,8,0,0,1-4-10.6,8.1,8.1,0,0,1,10.6-4A104.4,104.4,0,0,1,232,128Z"></path></svg>
		`;
		_footer();
		_render({'text' : text, 'parent' : app});
	};

	let _main = (props) => {
		_clear_page();
		let text = `
			<div class="message">
				${props.svg}
				<p>It's</p><br>
				<p class="highlight">${props.weather[0].description}</p><br>
				<p>now.</p>
			</div>

			<div class="main">
				<div class="temp [ flex-center ]">
					<div class="flex-center mr-auto">
						<p class="temp__value [ highlight ]">${Math.round(props.main.temp)}</p>
				
						<div class="temp__info">
							<svg xmlns="http://www.w3.org/2000/svg" width="192" height="192" fill="#000000" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M168,143.3V48a40,40,0,0,0-80,0v95.3A59.4,59.4,0,0,0,68,188a60,60,0,0,0,120,0A59.4,59.4,0,0,0,168,143.3ZM128,24a24.1,24.1,0,0,1,24,24V80H104V48A24.1,24.1,0,0,1,128,24Z"></path></svg>
							<p>C</p>
						</div>
					</div>

					<div class="userPlace">
						<p class="highlight">${props.name}</p>
						<p>${props.sys.country}</p>
					</div>
				</div>
			</div>
		`;
		_footer();
		_render({'text' : text, 'parent' : app});
	};

	_loader();
	/* GeoLocation code. */
	if ('geolocation' in navigator) {
		navigator.geolocation.getCurrentPosition((data) => {
			const lat = data.coords.latitude;
			const lon = data.coords.longitude;

			fetch(`/weather?hours=${new Date().getHours()}`)
			  .then((response) => response.json())
			  .then((data) =>{
			  	console.log(data);
			  	_main(data);
			  })
			  .catch(err => _error_page());
		}, (err) => {
			_disconnected_page();
		});
	} else {
		_error_page();
	}

}());