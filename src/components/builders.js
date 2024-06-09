const dummyData = [
  { id: 1, title: "Utkarsh FD 1", start: new Date(2024, 0, 1), end: new Date(2024, 6, 31) },
  { id: 2, title: "Shriram FD plan 2", start: new Date(2024, 0, 1), end: new Date(2025, 3, 30) },
  { id: 3, title: "Bajaj Finserv FD1", start: new Date(2024, 4, 1), end: new Date(2025, 3, 15) },
  { id: 4, title: "Mahindra FD Plan 2", start: new Date(2024, 5, 1), end: new Date(2026, 5, 30) }
];

export const buildTimebar = () => {
  const years = [2024, 2025, 2026];
  const months = [
    "J", "F", "M", "A", "M", "J", 
    "J", "A", "S", "O", "N", "D"
  ];

  const yearSegments = years.map(year => ({
    id: `year-${year}`,
    title: `${year}`,
    start: new Date(year, 0, 1),
    end: new Date(year + 1, 0, 1)
  }));

  const monthSegments = years.flatMap(year =>
    months.map((month, index) => ({
      id: `month-${year}-${index + 1}`,
      title: month,
      start: new Date(year, index, 1),
      end: new Date(year, index + 1, 1)
    }))
  );

  return [
    {
      id: 'years',
      // title: '',
      cells: yearSegments
    },
    {
      id: 'months',
      // title: '',
      cells: monthSegments
    }
  ];
};

export const buildTrack = (data) => ({
  id: `track-${data.id}`,
  // title: data.title,
  elements: [
    {
      id: `element-${data.id}`,
      title: data.title,
      start: data.start,
      end: data.end
    }
  ]
});
