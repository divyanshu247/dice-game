import styled from "styled-components";
const TotalScore=({score})=>{
    return(
        <ScoreContainer>
            <h1>{score}</h1>
            <p>TotalScore</p>
        </ScoreContainer>
    );
};
export default TotalScore;
const ScoreContainer=styled.div`
max-width:200px;
text-align:center;
h1{
font-size:100px;
line-align:center;}
p{font-size:25px;
font-weight:500px;}
`;
