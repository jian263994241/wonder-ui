import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Modal from '../Modal';
import {StyleCitys, Panel, Subbar} from './Styled';
import IconClose from '../Icons/Close';
import Toolbar from '../Toolbar';

export default class Citys extends Component {

  static propTypes = {
    onCancel: PropTypes.func,
    onSelect: PropTypes.func,
  }

  state = {
    provinceList : [],
    province: {},
    cityList: [],
    city: {},
    activePanel: 'province',
  }

  componentDidMount(){

  }

  componentWillMount(){
    this.getChinaList();
  }

  getChinaList = ()=>{
    const xhr = new XMLHttpRequest();
    xhr.timeout = 3000;
    xhr.responseType = "json";
    xhr.open('GET', 'https://ebd.99bill.com/coc-bill-api/3.0/members/card/openAdr', true);
    xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
    xhr.setRequestHeader('pubData', JSON.stringify({"c":"H5","b":"MEMBER-BASE","id":"100","t":Date.now()}));
    xhr.onload = (e)=>{
      const {status, response} = e.target;
      if(status === 200 || status === 304 ){
        if(response.errCode === '00'){
          let provinceCityList = response.provinceCityList;
          let chinaList = provinceCityList.filter(({contryId})=> contryId === '100');
          if(chinaList.length === 1){
            this.setState({
              provinceList: chinaList[0].provinceList
            });
          }
        }
      }
    }
    xhr.send();
  }

  selectProvince = ({provinceName, provinceId})=>{
    const provinceList = this.state.provinceList;
    let provinceInfo = provinceList.filter((p)=>p.provinceId === provinceId);

    if(provinceInfo.length >= 1){
      provinceInfo = provinceInfo[0];
      const cityList = provinceInfo.cityList;

      this.setState({
        province: {provinceName, provinceId},
        activePanel: 'city',
        cityList,
      })
    }

  }

  selectCity = ({cityId, cityName})=>{
    const cityList = this.state.cityList;
    const {onSelect, onCancel} = this.props;
    let cityInfo = cityList.filter((p)=>p.cityId === cityId);
    if(cityInfo.length >= 1){
      cityInfo = cityInfo[0];
      const city = {
        cityId: cityInfo.cityId,
        cityName: cityInfo.cityName,
      };
      this.setState({city}, ()=>{
        onSelect && onSelect({ city, province: this.state.province });
        onCancel && onCancel();
      })
    }
  }

  resetCityList = ()=>{
    this.setState({
      cityList: [],
      city: {},
      activePanel: 'province'
    })
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
        <Subbar>
          <div
            onClick={this.resetCityList}
            className={this.state.activePanel === 'province'?'active': ''}
          >
            {this.state.province.provinceId ? this.state.province.provinceName : '请选择省'}
          </div>
          {
            this.state.activePanel != 'province' && (
              <div
                className={this.state.activePanel === 'city'?'active': ''}
              >
                {this.state.city.cityId ? this.state.city.cityName : '请选择市'}
              </div>
            )
          }
        </Subbar>
        <StyleCitys>
          <Panel hidden={this.state.activePanel != 'province'}>
            {
              this.state.provinceList.map(({provinceName, provinceId})=>{
                return (
                  <li
                    key={provinceId}
                    onClick={this.selectProvince.bind(null, {provinceName, provinceId})}
                    className={provinceId === this.state.province.provinceId ? 'active': ''}
                  >
                    {provinceName}
                  </li>
                )
              })
            }
          </Panel>

          <Panel hidden={this.state.activePanel != 'city'}>
            {
              this.state.cityList.map(({cityId, cityName})=>{
                return (
                  <li
                    key={cityId}
                    onClick={this.selectCity.bind(null, {cityId, cityName})}
                    className={cityName === this.state.city.cityName ? 'active': ''}
                  >
                    {cityName}
                  </li>
                )
              })
            }
            </Panel>

        </StyleCitys>
      </Modal>
    )
  }
}
