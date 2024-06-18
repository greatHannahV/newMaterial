import styled from 'styled-components'

const StyledFooter = styled.div`
  box-shadow: 1px 1px 15px -12px rgb(0, 0, 0, 0.8);
  grid-row: 3/4;
  text-align: center;
  padding: 20px 50px;
`
const StyledP = styled.p`
  line-height: 1.8;
`

function Footer() {
  return (
    <StyledFooter>
      <StyledP>
        Please don't try these recipes at home. We hope that they will inspire
        you to cook more, but consider that their main idea is your coding task
        for Devexperts.
      </StyledP>
      <StyledP> Copyright © 2024. All rights reserved.</StyledP>
    </StyledFooter>
  )
}

export default Footer
