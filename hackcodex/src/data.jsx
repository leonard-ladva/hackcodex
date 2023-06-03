import CallMomButton from "./actionButtons/callMom";
import ButtonData from "./components/button/button-data";

const HomePage = new ButtonData("Home", "Home Page", null, "blue", [
	new ButtonData("Entertainment", "Task Page", null, "blue", [
		new ButtonData("Music", "Task 1 Page", null, "blue", [
			new ButtonData("Task 1.1", "Task 1 Page", null, "blue"),
			new ButtonData("Task 1.2", "Task 1 Page", null, "blue"),
			new ButtonData("Task 1.3", "Task 1 Page", null, "blue"),
		]),
		new ButtonData("Podcast", "Task 1 Page", null, "blue", [
			new ButtonData("Task 2.1", "Task 1 Page", null, "blue"),
			new ButtonData("Task 2.2", "Task 1 Page", null, "blue"),
			new ButtonData("Task 2.3", "Task 1 Page", null, "blue"),
		]),
		new ButtonData("Task 3", "Task 1 Page", null, "blue", [
			new ButtonData("Task 3.1", "Task 1 Page", null, "blue"),
			new ButtonData("Task 3.2", "Task 1 Page", null, "blue"),
			new ButtonData("Task 3.3", "Task 1 Page", null, "blue"),
		]),
	]),
	new ButtonData("Work", "Task Page", null, "blue", [
		new ButtonData("Task 1", "Task 1 Page", null, "blue", [
			new ButtonData("Task 1.1", "Task 1 Page", null, "blue"),
			new ButtonData("Task 1.2", "Task 1 Page", null, "blue"),
			new ButtonData("Task 1.3", "Task 1 Page", null, "blue"),
		]),
		new ButtonData("Task 2", "Task 1 Page", null, "blue", [
			new ButtonData("Task 2.1", "Task 1 Page", null, "blue"),
			new ButtonData("Task 2.2", "Task 1 Page", null, "blue"),
			new ButtonData("Task 2.3", "Task 1 Page", null, "blue"),
		]),
		new ButtonData("Task 3", "Task 1 Page", null, "blue", [
			new ButtonData("Task 3.1", "Task 1 Page", null, "blue"),
			new ButtonData("Task 3.2", "Task 1 Page", null, "blue"),
			new ButtonData("Task 3.3", "Task 1 Page", null, "blue"),
		]),
	]),
	new ButtonData("Social", "Task Page", null, "blue", [
		new ButtonData("Message", "Task 1 Page", null, "blue", [
			new ButtonData("Task 1.1", "Task 1 Page", null, "blue"),
			new ButtonData("Task 1.2", "Task 1 Page", null, "blue"),
			new ButtonData("Task 1.3", "Task 1 Page", null, "blue"),
		]),
		new ButtonData("Email", "Task 1 Page", null, "blue", [
			new ButtonData("Task 2.1", "Task 1 Page", null, "blue"),
			new ButtonData("Task 2.2", "Task 1 Page", null, "blue"),
			new ButtonData("Task 2.3", "Task 1 Page", null, "blue"),
		]),
		new ButtonData("Call", "Task 1 Page", null, "blue", [
			CallMomButton,
			new ButtonData("Task 3.2", "Task 1 Page", null, "blue"),
			new ButtonData("Task 3.3", "Task 1 Page", null, "blue"),
		]),
	]),
],);

export default HomePage;