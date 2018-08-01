import styled from 'styled-components'

export default styled.div`
  color: #222;
  float: left;
  margin-left: 20px;
  position: relative;
  width: 300px;

  > img {
    border-radius: 12px;
    width: 300px;
  }

  div.name {
    background: white;
    border-radius: 8px;
    font-family: 'Helvetica', sans-serif;
    font-size: 22px;
    font-weight: 700;
    left: 10px;
    padding: 4px 8px;
    position: absolute;
    bottom: 14px;
  }

  div.flag {
    align-items: center;
    background: white;
    border-radius: 8px;
    display: flex;
    font-family: 'Helvetica', sans-serif;
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
  }
`
