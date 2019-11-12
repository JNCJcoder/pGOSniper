import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
	sobreText: {
		color: "#FFF",
		fontWeight: "bold"
	},
	
	container: {
		flex: 1,
	},
	list: {
		padding: 5,
		justifyContent: "center",
	},
	topicContainer: {
		borderRadius: 5,
		borderWidth: 1,
		borderColor: "#DDD",
		padding: 15,
		marginBottom: 15
	},
	topicTitle: {
		fontSize: 18,
		fontWeight: "bold",
	},
	infoContainer: {
		flexDirection: "row"
	},
	topicAuthor: { 
		fontSize: 12, 
	},
	topicDescription: {
		fontSize: 16,
		marginTop: 5,
		lineHeight: 24
	},
	coordsContainer: {
		justifyContent: "center",
		flexDirection: "row"
	},
	topicCoord: {
		flex: 2,
		fontSize: 18,
		fontWeight: "bold",
		borderRadius: 0,
		borderWidth: 3,
		borderColor: "#F00"
	},
	copyButton: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 1,
		borderWidth: 2,
		borderColor: "#F00"

	},
	copyButtonText: {
		fontSize: 16,
		fontWeight: "bold",
		color: "#F00"
	}
});

export default styles;