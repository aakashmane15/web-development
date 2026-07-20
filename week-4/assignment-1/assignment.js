const express = require('express');
const app = express();

const users = [{
	userName: "John",
	kidneys: [{
		healthy: false
	}, {
		healthy: true
	}]
}];

app.use(express.json());

app.get("/", (req, res) => {
	const johnKidneys = users[0].kidneys;
	const numberOfKidneys = johnKidneys.length;
	let numberOfHealthyKidneys = 0;

	for (let i = 0; i < numberOfKidneys; i++) {
		if (johnKidneys[i].healthy) {
			numberOfHealthyKidneys = numberOfHealthyKidneys + 1;
		}
	}

	let numberOfUnhealthyKidneys = numberOfKidneys - numberOfHealthyKidneys;

	res.json({
		numberOfKidneys,
		numberOfHealthyKidneys,
		numberOfUnhealthyKidneys
	});
})

app.post("/", (req, res) => {
	const isHealthy = req.body.isHealthy;
	users[0].kidneys.push({
		healthy: isHealthy
	});

	res.json({
		msg: "Kidney has been added!"
	});
})

app.put("/", (req, res) => {
	for (let i = 0; i < users[0].kidneys.length; i++) {
		users[0].kidneys[i].healthy = true;
	}

	res.json({
		msg: "Kidneys have been replaced!"
	})
})

app.delete("/", (req, res) => {
	const newKidneys = [];

	for (let i = 0; i < users[0].kidneys.length; i++) {
		if (users[0].kidneys.healthy) {
			newKidneys.push({
				healthy: true
			});
		}
	
		users[0].kidneys = newKidneys; 	
	}

	res.json({
		msg: "New kidneys pushed succesfully!"
	})
})

app.listen(3000);