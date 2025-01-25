import styled from 'styled-components'

let TimelineElements = [
    {
        id: 1,
        title: "Summer Internship @ Guggenheim Securities",
        location: "New York, New York",
        description: "Restructuring Advisory Group",
        icon: "work",
    },
    {
        id: 2,
        title: "Summer Internship @ Jett Capital Advisors",
        location: "New York, New York",
        description: "A boutique investment bank focusing on mining, metals and clean tech. ",
        icon: "work",
    },
    {
        id: 3,
        title: "Undergrad @ Wharton",
        location: "Philadelphia, Pennsylvania",
        description: "Summa Cum Laude",
        icon: "school",
    },
    {
        id: 5,
        title: "High School Diploma @ Cheshire High School",
        location: "Cheshire, Connecticut",
        description: "Valedictorian",
        icon: "school",
    },
];

export const BtnWrap = styled.nav`
    display: flex;
    align-items: center;        
`
export default TimelineElements;

