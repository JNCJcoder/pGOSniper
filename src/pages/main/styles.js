import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
	sobreText: {
		color: "#FFFFFF",
		fontWeight: "bold"
	},
	container: {
		flex: 1,
		backgroundColor: "#FAFAFA"
	},
	list: { padding: 10 },
	productcontainer: {
		backgroundColor: "#FFF",
		borderWidth: 1,
		borderColor: "#DDD",
		borderRadius: 5,
		padding: 15,
		marginBottom: 15,
	},
	topicTitle: {
		fontSize: 18,
		fontWeight: "bold",
		color: "#333"
	},
	topicDescription: {
		fontSize: 16,
		color: "#999",
		marginTop: 5,
		lineHeight: 24
	},
	topicAuthor: { fontSize: 12, },
	topicCoord: {
		fontSize: 18,
		fontWeight: "bold",
		borderColor: "#FF0000",
		marginRight: 8,
		borderRadius: 0,
		borderWidth: 3
	},
	copyButton: {
		flex: 1,
		borderRadius: 1,
		borderWidth: 2,
		borderColor: "#FF0000",
		justifyContent: "center",
		alignItems: "center",
	},
	copyButtonText: {
		fontSize: 16,
		fontWeight: "bold",
		color: "#FF0000"
	},
	loadingText: {
		flex: 1,
		fontSize: 48,
		fontWeight: "bold",
		marginTop: 5,
		padding: 20
	},
	coordsorder: {
		flexDirection: "row"
	}
});

export default styles;