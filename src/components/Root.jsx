import testTeams from "../data/tests";
import oldWaves from "../data/oldWaveData";
import newWaves from "../data/newWaveData";
import {TestRow} from "./exports";

export default function(props) {
	return <table cellSpacing="0" className="balance-table">
		<thead>
			<tr>
				<th>Team \ Wave</th>
				{oldWaves.map(function(wave, idx) {
					return <td key={idx}>{ wave.name }</td>
				})}
			</tr>
		</thead>
		{testTeams.map(function({name, team}, idx) {
			return [
				<TestRow key={idx+"_1"} waves={oldWaves} name={"old"+name} team={team} />,
				<TestRow key={idx+"_2"} newRow={true} waves={newWaves} name={"new"+name} team={team} />
			]
		})}
	</table>
}
