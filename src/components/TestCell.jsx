export default function(props) {
	var {wave, team} = props;
	return (
		<td>{ wave.power(team) }</td>
	)
}
