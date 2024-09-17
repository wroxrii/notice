const request = new XMLHttpRequest();

const container = document.createElement("div");
const loader = document.createElement("div");

container.classList.add("container");
document.body.appendChild(container);

loader.classList.add("loader");
document.body.appendChild(loader);

request.onreadystatechange = () => {
	if (request.readyState === XMLHttpRequest.DONE) {
		loader.classList.add("hidden");

		JSON.parse(request.responseText).record.data.forEach((paragraph) => {
			const element = document.createElement("p");

			element.textContent = paragraph;

			container.appendChild(element);
		});
	}
};

request.open("GET", "https://api.jsonbin.io/v3/b/66e8e058acd3cb34a885c6dd/latest", true);

request.setRequestHeader("X-Master-Key", "$2a$10$1iVWN8E.ZFac5sfiE4wAJO6IzfmJeALxM2T2waWuc5d7KVjAkUtbe");
request.setRequestHeader("X-Access-Key", "$2a$10$a0O7L9oKDQt3S1pvvdZPcO8lIdCTFCODkVy8hcGOh5eTMQaCbEXZ6");

request.send();
