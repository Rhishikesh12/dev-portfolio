/* eslint-disable no-unused-vars */
import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import Typography from "@mui/material/Typography";

export default function Education() {
	return (
		<Timeline position='alternate'>
			<TimelineItem>
				<TimelineOppositeContent style={{ color: "white" }}>
					2020 — 2023
				</TimelineOppositeContent>
				<TimelineSeparator>
					<TimelineDot />
					<TimelineConnector />
				</TimelineSeparator>
				<TimelineContent style={{ color: "white" }}>
					Saraswati College Of Engineering, Kharghar
				</TimelineContent>
			</TimelineItem>
			<TimelineItem>
				<TimelineOppositeContent style={{ color: "white" }}>
					2017 — 2020
				</TimelineOppositeContent>
				<TimelineSeparator>
					<TimelineDot />
					<TimelineConnector />
				</TimelineSeparator>
				<TimelineContent style={{ color: "white" }}>
					Vidyalankar Polytechnic
				</TimelineContent>
			</TimelineItem>
			<TimelineItem>
				<TimelineOppositeContent style={{ color: "white" }}>
					2005 — 2017
				</TimelineOppositeContent>
				<TimelineSeparator>
					<TimelineDot />
					<TimelineConnector />
				</TimelineSeparator>
				<TimelineContent style={{ color: "white" }}>
					Santacruz East Municipal Secondary School
				</TimelineContent>
			</TimelineItem>
		</Timeline>
	);
}
