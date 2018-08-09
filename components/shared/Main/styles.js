import styled from 'styled-components'

export default styled.div`
  float: left;
  margin-left: 40px;
`

export const Header = styled.div`
  float: left;
  width: calc(100% - 90px);

  h1 {
    margin: 0 0 6px;
  }

  h2 {
    font-weight: normal;
    margin: 0 0 10px;
  }

  h3 {
    font-weight: normal;
    margin: 10px 0 0;
  }

  h4 {
    font-size: 16px;
    font-weight: normal;
    margin: 0 0 10px;
    text-transform: uppercase;
  }
`

export const TeamThumbnail = styled.div`
  background-position: center;
  background-size: cover;
  border-radius: 8px;
  cursor: pointer;
  float: right;
  height: 80px;
  width: 80px;
`
