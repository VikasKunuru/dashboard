import React, { useEffect, useState } from 'react';
import '../App.css';
import { Box, Heading } from '@chakra-ui/react';
import { Chart, LineController, LinearScale, PointElement, LineElement, TimeScale, Title } from 'chart.js';
import 'chartjs-adapter-date-fns';
import Timeline from "react-timelines";

import "react-timelines/lib/css/style.css";

import { buildTimebar, buildTrack } from "./builders";


const timebar = buildTimebar();

Chart.register(LineController, LinearScale, PointElement, LineElement, TimeScale, Title);

const FDMaturityTimeline = () => {
  const tracksById = [
    { id: 1, title: "Utkarsh FD 1", start: new Date(2024, 0, 1), end: new Date(2024, 6, 31) },
    { id: 2, title: "Shriram FD plan 2", start: new Date(2024, 0, 1), end: new Date(2025, 3, 30) },
    { id: 3, title: "Bajaj Finserv FD1", start: new Date(2024, 4, 1), end: new Date(2025, 3, 15) },
    { id: 4, title: "Mahindra FD Plan 2", start: new Date(2024, 5, 1), end: new Date(2026, 5, 30) }
  ].reduce((acc, data) => {
    const track = buildTrack(data);
    acc[track.id] = track;
    return acc;
  }, {});

  const [tracksState, setTracksState] = useState({
    tracksById,
    tracks: Object.values(tracksById)
  });

  console.log("tracksState::", tracksState,tracksById);
  const { tracks } = tracksState;
  const start = new Date("2024-01-01");
  const end = new Date("2026-12-31");

  console.log("check the track", tracks, timebar);

  return (
    <Box flex={1} p={2} bg="gray.50" shadow="md" height="100%">
      <Heading as="h4" size="md" mb={2}>FD Maturity Timeline</Heading>
      <Box overflowX="auto" h="210px"  width= 'calc(100% - 8px)' >
        <Timeline
          className="timeline"
          style={{ margin:0, padding: 0}}
          scale={{ start, end }}
          timebar={timebar}
          tracks={tracks}
        />
      </Box>
    </Box>
  );
};

export default FDMaturityTimeline;
