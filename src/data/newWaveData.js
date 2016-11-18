import rankData from "./rankData";
const data = []

const DSS_Spawner = function(SoftFactor, HardFactor, team, wave) {
	var ExpFactor = 0;
	for(let i=0;i<team.length;i++) {
		ExpFactor += team[i];
	}
	var averageRank = ExpFactor / team.length;
	var ExpFactor = (4.0 + averageRank) / 10;

	var TeamFactorData = [0.4, 0.4, 0.5, 0.65, 0.8, 1.0, 1.1, 1.2, 1.3, 1.4]
	var TeamFactor = TeamFactorData[team.length-1];

	var WaveFactor = (4 + wave) / 7.;


	if(wave >= 10) {
		WaveFactor = 1.1 * WaveFactor
	} else if(wave >= 12) {
		WaveFactor = 1.2 * WaveFactor;
	} else if(wave >= 14) {
		WaveFactor = 1.3 * WaveFactor;
	}

	var BaseExpFactor = (averageRank) / 7;
	var BaseExpFactor = Math.max(averageRank - 3, 0) / 7;

	var BaseDifficultyFactor = BaseExpFactor * TeamFactor * SoftFactor;
	var BaseWaveFactor = WaveFactor * ExpFactor * TeamFactor * SoftFactor;
	var ScalableWaveFactor = WaveFactor * HardFactor;

	var WaveValue = 1000 * (BaseDifficultyFactor + BaseWaveFactor + ScalableWaveFactor);

	return parseInt(0.9 * WaveValue);
}

for(let i=1;i<=20;i+=2) {
	data.push({
		name: 'W'+(i),
		power: function(team) {
			let wave = i;
			return DSS_Spawner(0.8, 0.2, team, wave);
		}
	});
	data.push({
		name: 'W'+(i)+'+',
		power: function(team) {
			let wave = i;
			return DSS_Spawner(0.45, 0, team, wave);
		}
	})
}


data.push({
	name: 'Hatch',
	power: function(team) {
		var wave = 6;
		return DSS_Spawner(0.8, 0.5, team, wave)
	}
});

data.push({
	name: 'Bunker',
	power: function(team) {
		var wave = 12;
		return DSS_Spawner(0.9, 0.1, team, wave)
	}
});

data.push({
	name: 'Bunker+',
	power: function(team) {
		var wave = 12;
		return DSS_Spawner(0.7, 0.3, team, wave)
	}
});

data.push({
	name: 'Exodus',
	power: function(team) {
		var wave = 14;
		return DSS_Spawner(1.0, 0.2, team, wave);
	}
});

data.push({
	name: 'Parts',
	power: function(team) {
		var wave = 17;
		return DSS_Spawner(0.5, 0, team, wave);
	}
});

data.push({
	name: 'Evac',
	power: function(team) {
		var wave = 19;
		return DSS_Spawner(0.8, 0.5, team, wave);
	}
});

data.push({
	name: 'Crit',
	power: function(team) {
		var wave = 12;
		return DSS_Spawner(1.5, 0.5, team, wave) + 210 * 20;
	}
});

export default data;
