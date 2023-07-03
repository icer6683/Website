import styled from 'styled-components'

let TimelineElements = [
    {
        id: 1,
        title: "Rest of Undegraduate @ Wharton",
        location: "Philadelphia, Pennsylvania",
        description: "Class of 2024",
        buttonText: "Wharton",
        date: "May 2021 - Present",
        icon: "school",
        link: "https://undergrad.wharton.upenn.edu/"
    },
    {
        id: 2,
        title: "Summer Internship @ Jett Capital Advisors",
        location: "New York, New York",
        description: "A boutique investment bank focusing on mining & metals along with clean tech. ",
        date: "Jun 2022 - Aug 2022",
        icon: "work",
    },
    {
        id: 3,
        title: "Freshman year @ Cornell",
        location: "Ithaca, New York",
        description: "I was on the Economics and Computer Science double major track. ",
        buttonText: "Cornell",
        date: "Aug 2020 - May 2021",
        icon: "school",
        link: "https://www.cornell.edu/"
    },
    {
        id: 4,
        title: "High School Diploma @ Cheshire High School",
        location: "Cheshire, Connecticut",
        description: "Valedictorian",
        buttonText: "Cheshire High School",
        date: "Aug 2016 - Jun 2020",
        icon: "school",
        link: "https://sites.google.com/a/cheshire.k12.ct.us/chs/"
    },
];

export const BtnWrap = styled.nav`
    display: flex;
    align-items: center;        
`
export default TimelineElements;

