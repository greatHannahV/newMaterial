import styled from 'styled-components'

const StyledHeader = styled.div`
  grid-row: 1/2;
  width: 1300px;
  height: 4.2rem;
  margin: 0 auto;
  margin-bottom: 40px;
  padding: 2px;
  box-shadow: 1px 1px 15px -10px rgb(0, 0, 0, 0.8);
  display: grid;
  grid-template-columns: 30px 1fr 1fr;
  grid-template-rows: 1fr;
  justify-content: space-between;
  align-items: center;
`
const Logo = styled.div`
  grid-column: 1/2;
  position: relative;
  height: 35px;
  width: 35px;
  margin-left: 10px;
  display: flex;
  justify-content: space-between;
`

const LogoImg = styled.img`
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  filter: hue-rotate(35deg);
  color: #1b46bd;
`
const LogoText = styled.p`
  padding: 5px;
  grid-column: 2/3;
  margin-left: 25px;
  font-size: 15px;
  line-height: 1;
`
const SearchBar = styled.div`
  grid-column: 3/4;
  margin-left: auto;
  padding: 10px;
`

function Header() {
  return (
    <StyledHeader>
      <Logo>
        <LogoImg src="https://st3.depositphotos.com/2633985/15106/v/450/depositphotos_151060358-stock-illustration-tomato-with-leaves-icon.jpg"></LogoImg>
      </Logo>
      <LogoText>
        CoolWell
        <br />
        <i style={{ fontSize: '11px' }}> by Devexperts</i>
      </LogoText>
      <SearchBar>
        <input type="text" placeholder="Filter ingredients" />
      </SearchBar>
    </StyledHeader>
  )
}

export default Header
