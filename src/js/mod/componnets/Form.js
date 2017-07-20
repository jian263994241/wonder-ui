import React, {Component, Children} from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import $ from '../utils/dom'
import {FormLabel, FormInput, FormTimerButton} from './FormElement'
import schema from 'async-validator'
export default class From extends Component {

  static uiName = 'Form';

  static FormLabel = FormLabel;

  static FormInput = FormInput;

  static FormTimerButton = FormTimerButton;

  static propTypes = {
    className: PropTypes.string,
    onSubmit: PropTypes.func
  };

  static defaultProps = {
    rules: {}
  };

  constructor(props){
    super(props);
    const {rules} = this.props;
    this.validator = new schema(rules);
  }

  getInputs = (form)=>{
    const inputs = [];
    Array.prototype.forEach.call(form.elements, function(a, i){
      if(a.name) {
        inputs.push(a)
      };
    });
    return inputs;
  }

  getValues = ()=>{
    const form = this.refs.form;
    const valus = {};
    this.getInputs(form).forEach((a)=>{
      if(!a.value) return ;
      if(a.type === 'checkbox'){
        valus[a.name] = valus[a.name] || [];
        if(a.checked){
          valus[a.name].push(a.value)
        }
      }else{
        valus[a.name] = a.value;
      }
    })
    return valus;
  }

  submit = (e)=>{
    e.preventDefault();

    const {
      onSubmit
    } = this.props;

    const values = this.getValues();

    this.validator.validate(values, {first: true}, (errors, fields)=>{
      onSubmit && onSubmit(errors, fields, values);
    });

  }

  render() {

    const {
      rules,
      onSubmit,
      children,
      ...rest
    } = this.props;

    return (
      <div {...rest}>
        <form onSubmit={this.submit} noValidate ref="form">
          {children}
        </form>
      </div>

    );
  }
}
