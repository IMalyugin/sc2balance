import testdata from "../data/tests";
import {TestCell} from "./exports";
export default function(props) {
	var {name, team, newRow, waves} = props;
	return (<tr className={newRow ? "new-row" : null}>
		<th><a title={team.join(",")}>{name}</a></th>
		{waves.map(function(wave, idx) {
			return <TestCell key={idx} wave={wave} team={team} />
		})}
	</tr>)
}
