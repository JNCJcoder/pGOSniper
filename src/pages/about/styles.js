import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 20,
		backgroundColor: "#FAFAFA",
	},
	tituloText: {
		flex: 1,
		fontSize: 32,
		fontWeight: "bold",
		textAlign: "center",
		alignItems: "center"
	},
	versaoText: {
		flex: 1,
		fontSize: 20,
		marginBottom: 180,
		textAlign: "center",
		alignItems: "center"
	},
	infoText: {
		flex: 1,
		fontSize: 20,
		textAlign: "center",
		alignItems: "center"
	},
	subredditText: {
		flex: 1,
		fontSize: 24,
		fontWeight: "bold",
		color: "#00F",
		textAlign: "center",
		alignItems: "center"
	},
	jsonText: {
		flex: 1,
		fontSize: 17,
		textAlign: "center",
		alignItems: "center"
	},
	endText: {
		flex: 0,
		fontSize: 16,
		fontWeight: "bold"
	}
});

export default styles;