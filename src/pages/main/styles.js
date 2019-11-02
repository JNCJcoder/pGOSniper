import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
	sobreText: {
		color: "#FFF",			// Light
		//color: "#000",		// Dark
		fontWeight: "bold"
	},
	
	container: {
		flex: 1,
		backgroundColor: "#FAFAFA"			// Light
		//backgroundColor: "#121212",		// Dark
	},
	list: {
		padding: 5,
		justifyContent: "center",
	},
	topicContainer: {
		backgroundColor: "#FFF",		// Light
		//backgroundColor: "#151515",	// Dark
		borderRadius: 5,
		borderWidth: 1,
		borderColor: "#DDD",	// Light
		//borderColor: "#111",	// Dark
		padding: 15,
		marginBottom: 15
	},
	topicTitle: {
		fontSize: 18,
		fontWeight: "bold",
		color: "#333" // Light
		//color: "#FFF"	// Dark	
	},
	infoContainer: {
		flexDirection: "row"
	},
	topicAuthor: { 
		fontSize: 12, 
	},
	topicDescription: {
		fontSize: 16,
		color: "#999",		// Light
		//color: "#F5F5F5",	// Dark
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