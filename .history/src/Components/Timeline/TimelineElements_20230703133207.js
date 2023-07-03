import styled from 'styled-components'

let TimelineElements = [
    {
        id: 1,
        title: "Summer Internship @ Guggenheim Securities",
        location: "New York, New York",
        description: "In the Restructuring Advisory Group",
        date: "Jun 2023 - Aug 2023",
        icon: "work",
    },
    {
        id: 2,
        title: "Summer Internship @ Jett Capital Advisors",
        location: "New York, New York",
        description: "A boutique investment bank focusing on mining, metals and clean tech. ",
        date: "Jun 2022 - Aug 2022",
        icon: "work",
    },
    {
        id: 3,
        title: "Started at Wharton",
        location: "Philadelphia, Pennsylvania",
        description: "Dual degree in Finance/Statistics and Computer Science",
        date: "Aug 2021",
        icon: "school",
    },
    {
        id: 4,
        title: "Freshman year @ Cornell",
        location: "Ithaca, New York",
        description: "I was on the Economics and Computer Science double major track. ",
        date: "Aug 2020 - May 2021",
        icon: "school",
    },
    {
        id: 5,
        title: "High School Diploma @ Cheshire High School",
        location: "Cheshire, Connecticut",
        description: "Valedictorian",
        date: "Aug 2016 - Jun 2020",
        icon: "school",
    },
];

export const BtnWrap = styled.nav`
    display: flex;
    align-items: center;        
`
export default TimelineElements;

