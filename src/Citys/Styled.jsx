import styled from 'styled-components';
import ScrollView from '../ScrollView';

export const StyleCitys = styled.div `
  background-color: #fff;
  box-sizing: border-box;
  width: 100%;
  height: 300px;
  overflow: hidden;
`;


export const Panel = styled(ScrollView) `

  display: ${props=>props.hidden ? 'none': 'block'};

  ul{
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    color: #333333;

    >li {
      width: 100%;
      height: 44px;
      list-style: none;
      box-sizing: border-box;
      padding: 10px 22px;
      font-size: 15px;
      position: relative;
      &.active {
        color: #F54D4F;
        &::after {
          background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAaCAYAAADWm14/AAAAAXNSR0IArs4c6QAAAz5JREFUSA3FVl9IU2EUP+fu6tDdrayHwteUegvxMUKREovYJjL6sw0lSkQwCHqIilgvUUQZRQpW5toE0crdqxgIQRBFT0X1GEKPlVHkvYttzns633RDp0432vpg+/6c73y/33fO73wbwn9o5PU6DDQmCUCXSo1PgYCkgz5CRPuBoEouNQFj5t1NxjyEAD9kqdzLfenanM91CojuI2CCEA44wuqrkqVA97c28G37xHURoUuAi3FJCMTa3buIzKec9zJGv6GE1UcCXLSiExCKn1+gCQ79dsabtNfUnU8hL30VVQM06rHoWnyS1d7Cef+kWGkfDmr6cgJFrQJDTdxisBbO+awsoxMH1RXggkjRUqD73Z0EdCaleIvcWjEU+SIAs1tRUqD73I0ANC1EJ4GlQxkeD2YDp+f/PAIxn6eGgVOKlxCv5wIXJGR+HIIcBrsiV53AoaFYmlkhPXV6thjR+AT7buNy02w1dRcA1JxHSQi0lxm3GslfmdrM6bGOUSje+JMY5R+YPSy6j3YHP7OBgLnO9swyp6jMCwhzTOKY7nVdzljyHBgTiV4+oxkRv8tW2Yl9Y8ZmjkiJMOp3HTYJxGOBXBdH7SFtbDPO6T2639lFJvTzzeMWwKbKsPombduoT4nQFlKn2Pkchw/BxGC03V2/kWPazm98E5hwV8wRpdP5gAufTBUoIbWXw/eAa7fCTJIWPemsFhtytVhHWy2ZC0+YuCxJeE0JRUK59q9lyxAQRqVyRzeTeMkkqs04anTWU7GWk1ijDvfWRDIpFF/FPhHb4wgrPv+2ggAODMwr1vI2juUMk6g3ZuNBFtaqx4r/1chG0hxlzezm1H1Q0OFjEhyI/NsKAsIdH479BFk+wqPfROAx/K4r2ccan9/fZttBZvZNlqxODIWi2Xs2O191u7Sj4XU3cxSm+GNBCY5zZYwIG5dqN6/dSyme5MbK4Wdv0z6F9OsSWARz9xCYdxgsZpGkBhPIQQv0PCU6BJ8S1oYLAV3uk5PAIglXP9+4i0l85bBbeU2I7qo9rF5cflCh41UayD5Iqa3rYcAXDL5zCXycy+1S9r5C5xsS4Pc8qdhtHg7VayYyzYr3F6r4tUj+BRqrM3Aubii9AAAAAElFTkSuQmCC');
          content: '';
          width: 18px;
          height: 14px;
          background-size: cover;
          position: absolute;
          right: 12px;
          top:12px;
        }
      }
    }
  }

`;


export const Subbar = styled.div `
  width: 100%;
  height: 44px;
  background-color: #F8F8F8;
  box-sizing: border-box;
  padding: 0 12px;
  color: #666666;
  display: flex;
  >div{
    float: left;
    padding: 10px;
    position: relative;
    height: 100%;
    box-sizing: border-box;
    text-overflow:ellipsis;
    max-width: 50%;
    overflow: hidden;
    &.active {
      color: #F54D4F;
      ::after{
        content: '';
        display: block;
        position: absolute;
        width: 100%;
        height: 2px;
        background-color: #F54D4F;
        bottom: 0;
        left: 0;
      }
    }
  }
`
