import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Modal from '../Modal';
import {StyleCitys, Panel, Subbar} from './Styled';
import IconClose from '../SvgIcon/Close';
import Toolbar from '../Toolbar';
import ScrollView from '../ScrollView';

// 数据来源 http://passer-by.com/data_location/list.json


export default class Citys extends Component {

  static propTypes = {
    visible: PropTypes.bool,
    onCancel: PropTypes.func,
    onSelect: PropTypes.func,
  }

  state = {
    provinceList : [],
    cityList: [],
    areaList: [],
    province: {},
    city: {},
    area: {},
    activePanel: 'province',
  }

  data = null;

  componentWillMount(){
    this.getProvinceList();
  }

  getProvinceList = ()=>{
    this.getJSONP('//img.99bill.com/seashell/webapp/lib/jsonp/citys.js', (data)=>{
      this.data = data;
      const provinceList = [],city={},area={};
      for(let code in data){
        if(!(code%1e4)){
          //获取所有的省级行政单位
          provinceList.push({
            id: code,
            name: data[code]
          });
        }
      }
      this.setState({provinceList});
    })
  }

  getJSONP = (url, callback)=>{
    let script = document.createElement('script');
    script.src = url;
    script.onload = ()=> {
      script.parentNode.removeChild(script);
      delete window.jsonp_location;
    };
    window.jsonp_location = callback;
    document.body.appendChild(script);
  }

  selectProvince = ({id, name})=>{

    const cityList = [], areaList = [] ,data = this.data;
    let hasCity = false, activePanel = '';
    for(let code in data){
      let p = code - id;
      if(p>0&&p<1e4){
         //同省的城市或地区
        if(!(code%100)){
          //市
          hasCity = true;
          activePanel = 'city';
          cityList.push({
            id: code,
            name: data[code]
          })
        }else if(!hasCity){
          //区
          activePanel = 'area';
          areaList.push({
            id: code,
            name: data[code]
          })
        }
      }
    }

    this.setState({cityList, areaList, province: {id, name}, city: {}, area: {}, activePanel});

  }

  selectCity = ({id, name})=>{
    const onSelect = this.props.onSelect || function(){};
    const onCancel = this.props.onCancel;
    const {province, area} = this.state;
    const areaList = [], data = this.data;
    for(let code in data){
      var c = code- id;
      if(c>0&&c<100){
        areaList.push({
          id: code,
          name: data[code]
        })
      }
    }

    const city = {id, name};

    if(areaList.length > 0){
      this.setState({
        areaList,
        city,
        area: {},
        activePanel: 'area'
      });
    }else{
      this.setState({city}, onSelect.bind(null, {province, city, area}));
      onCancel && onCancel();
    }

  }

  selectArea = ({id, name})=>{
    const onSelect = this.props.onSelect || function(){};
    const onCancel = this.props.onCancel;
    const {province, city} = this.state;
    const area = {id, name};
    this.setState({area}, onSelect.bind(null, {province, city, area}));

    onCancel && onCancel();
  }

  resetCityList = ()=>{
    this.setState({
      // cityList: [],
      // areaList: [],
      // city: {},
      // area: {},
      activePanel: 'province'
    })
  }

  resetAreaList = ()=>{
    this.setState({
      // areaList: [],
      // area: {},
      activePanel: 'city'
    })
  }

  componentDidUpdate(prevProps, prevState){

    if(this.state.cityList.length != prevState.cityList.length){
      this.cityPanel.scrollTop();
    }

    if(this.state.areaList.length != prevState.areaList.length){
      this.areaPanel.scrollTop();
    }
  }

  render(){

    const {
      onCancel,
      onSelect,
      visible,
    } = this.props;

    if(this.state.provinceList.length === 0){
      return null;
    }

    let index = 0;
    switch (this.state.activePanel) {
      case 'province':
        index = 0
        break;
      case 'city':
        index = 1
        break;
      case 'area':
        index = 2
        break;

    }

    return (
      <Modal
        onCancel={onCancel}
        overlay
        visible={visible}
      >
        <Toolbar>
          <div className="left"> <IconClose onClick={onCancel}/> </div>
          <div className="center">所在地区</div>
        </Toolbar>
        <Subbar onTouchMove={e=>e.preventDefault()}>
          <div
            onClick={this.resetCityList}
            className={this.state.activePanel === 'province'?'active': ''}
          >
            <nobr>{this.state.province.id ? this.state.province.name : '选择省'}</nobr>
          </div>
          {
            this.state.cityList.length > 0 && (
              <div onClick={this.resetAreaList} className={this.state.activePanel === 'city'?'active': ''} >
                <nobr>{this.state.city.id ? this.state.city.name : '选择市'}</nobr>
              </div>
            )
          }
          {
            this.state.areaList.length > 0 && (
              <div className={this.state.activePanel === 'area'?'active': ''} >
                <nobr>{this.state.area.id ? this.state.area.name : '选择区'}</nobr>
              </div>
            )
          }

        </Subbar>

        <StyleCitys index={index}>
          <Panel>
            <ul>
              {
                this.state.provinceList.map(({id, name})=>{
                  return (
                    <li
                      key={id}
                      onClick={this.selectProvince.bind(null, {id, name})}
                      className={id === this.state.province.id ? 'active': ''}
                    >
                      {name}
                    </li>
                  )
                })
              }
            </ul>
          </Panel>
          <Panel innerRef={(x)=>this.cityPanel = x}>
            <ul>
              {
                this.state.cityList.map(({id, name})=>{
                  return (
                    <li
                      key={id}
                      onClick={this.selectCity.bind(null, {id, name})}
                      className={id === this.state.city.id ? 'active': ''}
                    >
                      {name}
                    </li>
                  )
                })
              }
            </ul>
          </Panel>
          <Panel innerRef={(x)=>this.areaPanel = x}>
            <ul>
              {
                this.state.areaList.map(({id, name})=>{
                  return (
                    <li
                      key={id}
                      onClick={this.selectArea.bind(null, {id,name})}
                      className={id === this.state.area.id ? 'active': ''}
                    >
                      {name}
                    </li>
                  )
                })
              }
            </ul>
          </Panel>
        </StyleCitys>
      </Modal>
    )
  }
}
