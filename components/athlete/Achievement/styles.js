import styled from 'styled-components'

export default styled.div`
    border-radius: 10px;
    border: 1px solid #ccc;
    float: left;
    width: 180px;
    display: flex;
    flex-align: center;
    flex-direction: column;
    justify-content: center;
    min-height: 200px;
    margin-right: 16px;

    &.1st {
      background-color: blue;
    }

    &.2nd {
      background-color: yellow;
    }

    &.3rd {
      background-color: green;
    }

    p {
      text-align: center;
      &.event {
        font-weight: bold;
      }
      &.rank {
        font-size: 24px;
      }
    }
  }
`
