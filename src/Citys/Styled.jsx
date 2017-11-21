import styled from 'styled-components';
import ScrollView from '../ScrollView';
import SwipeableViews from 'react-swipeable-views';

export const StyleCitys = styled(SwipeableViews).attrs({
  containerStyle: {
    width: '100%',
    height: '100%'
  },
  slideStyle:{
    width: '100%',
    height: '100%'
  },
  disabled: true
}) `
  background-color: #fff;
  box-sizing: border-box;
  width: 100%;
  height: 300px;
  overflow: hidden;
`;


export const Panel = styled(ScrollView) `

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
      padding: 10px 20px;
      font-size: 15px;
      position: relative;
      &.active {
        color: #F54D4F;
        &::after {
          background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAcCAYAAAAJKR1YAAAAAXNSR0IArs4c6QAAA61JREFUSA3FVk1oU0EQ3tk0rTZ5wVbEm4KtlurNQxUFoaj4A6atUpEmDWqhtVT0IIiCh3rwIGJVVMSCUptU0ahNf6B4EhTUnkRQQRRFvBQRkb5XTV+TN85G93VfNG0aTfsgzOy3MztfZnZ2F9gcfT+adi5NjCciyKASkJ3TevpOCSowF3wwEPAZYDxFxJUyPjBYRaRecwnMlsQ79S4d9NsqmVTsgoJUcgpmi4iMY/SZHaRvleNfEsLajXuvhD6rGdIba5uR4SEHGYBhzV3SLLFZ20N6yF/NLHhApXJPBodP4C6s8nZFRyYxqeVRxoP15Saaw4xhqR0G2BhnrvXeSO8LGyMl7yXDvbULTGYOqmSoLEihg+lkBLG8EsL29gIjYd1hiBVqFhDguC8Si6mY1PPaZcbb5+cpFZtlsJQE6PZF+k47MGWQtwzpjTVt1FFtSiw6huGJVrLE7ijH3O9BXrrMCNVswiQOUXaUCsBH4LxKC/d+/hsRiYG+r34RTphdBFRwhEventh5OZmLjAf9FSaDZ7RvFtj+ADoAX0dkXtpYBoWzifGT5LydfmUWs87pjf4DGWynhbGpvtRENqCSAQDLxXlDNmREAI4I8x2RLHbRCNRudGBZDFIdFTfvkuly1ZwIHfV091LbZ/dx2kRnaLcZ0lzUnTIVjYfqVkgsG2m8e36JNnG1w5bz695w7KwDm2bAxZXvAgyI1Cq2JaZlDWBrQ4mCZVSNoP8wXQktqgE9Jx5pZe5WFctGT7W9J9LfDwyPORwQVxj6WFSUwoGnDYxg3VYqe3oW3qOneBe0R80082mH9jnkjfSL0nWpHvSvN9LhdlHFVF1vrKu0WPI2lcpl48BGKTs7fJ23vtjYDBSbkPDRlhe2UOkeq/4U7AAdcs4nAxlgqG4hWslBupV80p6IJKmj9ohtILGZSgchkWIsLt5JD9sPjoUs1iFKIzFsbnYbSes+jZdJTEgAPOLpjg2p2Ex1ByHhLFINLvcOIjUqFxMlEaXRAzWpN/DY95ErhG2Q80ICsE4q+wUVy0XPeHWMhWq3WUkccOwPxt4D4zeRWSfUYFSqh17P4i3Q2Tmh4rnoGQmJxUQ7W8imvkqAvdOKitbAtejXXAik+0xJSBjrQf9VRPb3GxrgWyHDtfMi/W/SF851/MceSl/IW766TZQkHad/kuCM7/6fZESMaTMkjMSJrY8a9CaevKeAw0Et3HdZzP/PLytCImB8/65lppkIk0M53XcdU736/oXgT0azTJ6RjQkLAAAAAElFTkSuQmCC');
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
  padding: 0 8px;
  color: #666666;
  display: flex;
  >div{
    float: left;
    padding: 12px;
    margin-right: 5px;
    position: relative;
    height: 100%;
    box-sizing: border-box;
    text-overflow:ellipsis;
    max-width: 100%;
    overflow: hidden;
    &:last-child{
      margin-right: 0;
    }
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
