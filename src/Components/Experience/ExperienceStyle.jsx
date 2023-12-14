import styled from 'styled-components'


export const ExperienceTitle = styled.h2`
  text-align: center;
  font-size: 36px;
  font-weight: 600;
  color: ${({ theme }) => theme.white};
  margin-bottom: 20px;
margin-top: 40px  
`

export const ExperienceDesc = styled.div`
    text-align: center;
      border: 20px solid 
    font-size: 18px;
    max-width: 700px;
    color: ${({ theme }) => theme.text_secondary};
    @media (max-width: 768px) {
        font-size: 16px;
    }
`;