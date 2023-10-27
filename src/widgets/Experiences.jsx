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

export default function Experiences() {
	return (
		<Timeline position='alternate'>
			<TimelineItem>
				<TimelineOppositeContent style={{ color: "white" }}>
					May - July 2019
				</TimelineOppositeContent>
				<TimelineSeparator>
					<TimelineDot />
					<TimelineConnector />
				</TimelineSeparator>
				<TimelineContent style={{ color: "white" }}>
					Maitri Infosoft Private Limited
					<Typography>
						Developed an Inventory System for warehouse to maintain Clients,
						Supply and Goods records of the warehouse.
					</Typography>
				</TimelineContent>
			</TimelineItem>
			<TimelineItem>
				<TimelineOppositeContent style={{ color: "white" }}>
					June 2023 - Aug 2023
				</TimelineOppositeContent>
				<TimelineSeparator>
					<TimelineDot />
					<TimelineConnector />
				</TimelineSeparator>
				<TimelineContent style={{ color: "white" }}>
					GirlScript Summer of Code
					<Typography>
						- I have made a significant contribution by writing over 2000 lines
						of code.
						<br /> - I created a user-friendly and visually appealing widget
						that will assist others in building their projects without the need
						for extensive time and effort in app development.
					</Typography>
				</TimelineContent>
			</TimelineItem>
		</Timeline>
	);
}
