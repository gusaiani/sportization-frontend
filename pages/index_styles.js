import styled from 'styled-components'

export const Img = styled.img`
  display: block;
  margin: 100px auto;
  width: 121px;
`

export const Links = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 100px auto;
  max-width: 300px;
  width: 100%;

  a {
    align-items: center;
    border-radius: 500rem;
    color: white;
    display: flex;
    font-size: 28px;
    height: 60px;
    justify-content: center;
    width: 60px;

    &.facebook { background-color: #3b5998; }
    &.twitter { background-color: #1da1f2; }
    &.instagram { background: radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%); }
    &.youtube { background-color: #ff0000; }
  }
`
