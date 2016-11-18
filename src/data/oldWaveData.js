import rankData from "./rankData";
const data = []

const DSS_Spawner = function(WaveValue, main, team, wave) {
	var TeamExp = 0;
	for(let i=0;i<team.length;i++) {
		TeamExp += rankData[team[i]];
	}

	var ExpFactor = TeamExp / (main ? 1000 : 2000);
	WaveValue = WaveValue + ExpFactor;

	if(wave >= 10) {
		WaveValue = parseInt(1.1 * WaveValue)
	} else if(wave >= 12) {
		WaveValue = parseInt(1.2 * WaveValue);
	} else if(wave >= 14) {
		WaveValue = parseInt(1.3 * WaveValue);
	}
	return parseInt(0.9 * WaveValue);
}

const DSS_AdditionalSpawner = function(team, wave) {
	// var unburrow = wave * 3 * team.length;
	var WaveValue = wave * 30 + team.length * wave * 5 + team.length * 15;
	return DSS_Spawner(WaveValue, false, team, wave); // + unburrow;
}

const DSS_ForceSpawner = function(WaveValue, team, wave) {
	var TeamExp = 0;
	for(let i=0;i<team.length;i++) {
		TeamExp += rankData[team[i]];
	}

	var ExpFactor = TeamExp / 1000;
	WaveValue = WaveValue + ExpFactor;

	return parseInt((0.9 * WaveValue));
}

for(let i=1;i<=20;i+=2) {
	data.push({
		name: 'W'+(i),
		power: function(team) {
			let wave = i;
			return DSS_Spawner(wave * 150 + team.length * wave * 6 + team.length * 25, true, team, wave);
		}
	});
	data.push({
		name: 'W'+(i)+'+',
		power: function(team) {
			let wave = i;
			return DSS_Spawner(wave * 30 + team.length * wave * 5 + team.length * 15, false, team, wave);
		}
	})
}


data.push({
	name: 'Hatch',
	power: function(team) {
		var wave = 6;
		return DSS_ForceSpawner(wave * 210 + team.length * wave * 5 + team.length * 10 + 60, team, wave)
	}
});

data.push({
	name: 'Bunker',
	power: function(team) {
		var wave = 12;
		return DSS_ForceSpawner(wave * 140 + team.length * wave * 5 + team.length * 40, team, wave)
	}
});

data.push({
	name: 'Bunker+',
	power: function(team) {
		var wave = 12;
		return DSS_ForceSpawner(wave * 120 + team.length * wave * 5 + team.length * 35 + 750, team, wave)
	}
});

data.push({
	name: 'Exodus',
	power: function(team) {
		var wave = 14;
		return DSS_ForceSpawner(wave * 180 + team.length * wave * 5 + team.length * 50 + 75, team, wave);
	}
});

data.push({
	name: 'Parts',
	power: function(team) {
		var wave = 17;
		return DSS_ForceSpawner(wave * 140 + team.length * wave * 5 + team.length * 40 + 300, team, wave);
	}
});

data.push({
	name: 'Evac',
	power: function(team) {
		var wave = 19;
		return DSS_ForceSpawner(wave * 170 + team.length * wave * 5 + team.length * 50 + 75, team, wave);
	}
});

data.push({
	name: 'Crit',
	power: function(team) {
		var wave = 12;
		return DSS_ForceSpawner(10000, team, wave) + 210 * 20;
	}
});

export default data;
