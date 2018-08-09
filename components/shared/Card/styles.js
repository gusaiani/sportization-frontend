import styled from 'styled-components'

export default styled.div`
  border-radius: 10px;
  background-position: center;
  background-size: cover;
  position: relative;
  height: 400px;
  width: 300px;
`

export const Name = styled.div`
  background: white;
  border-radius: 8px;
  font-size: 22px;
  font-weight: 700;
  left: 10px;
  padding: 4px 8px;
  position: absolute;
  bottom: 14px;
`

export const Flag = styled.div`
  align-items: center;
  background: white;
  border-radius: 8px;
  display: flex;
  font-size: 18px;
  font-weight: 300;
  right: 10px;
  padding: 4px 4px 4px 6px;
  position: absolute;
  text-transform: uppercase;
  bottom: 14px;

  img {
    border-radius: 6px;
    margin-left: 6px;
    width: 36px;
  }
`
