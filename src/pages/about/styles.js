import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
	container: {
		flex: 1,
		textAlign: "center",
		alignItems: "center",
		backgroundColor: "#FAFAFA"
	},
	tituloText: {
		flex: 0,
		fontSize: 32,
		fontWeight: "bold"
	},
	versaoText: {
		flex: 1,
		fontSize: 20
	},
	infoContainer: {
		flex: 4,
		textAlign: "center",
		alignItems: "center",
		width: "90%"
	},
	infoText: {
		width: "89%",
		textAlign: "center",
		fontSize: 20
	},
	subredditText: {
		justifyContent: "center",
		fontSize: 24,
		fontWeight: "bold",
		color: "#00F"
	},
	jsonText: { 
		fontSize: 17
	},
	endContainer: {
		flex: 1,
		justifyContent: "center"
	},
	endText: {
		fontSize: 16,
		fontWeight: "bold"
	}
});

export default styles;