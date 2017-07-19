import React, {Component} from 'react'
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

  componentDidMount() {
    const descriptor = this.getDescriptor();
    console.log(descriptor);
    this.validator = new schema(descriptor);
  }

  getDescriptor = ()=>{
    const form = this.refs.form;
    const descriptor = {};
    this.getInputs(form).forEach((a)=>{
      const rule = descriptor[a.name] = {};
      if(a.type === 'checkbox'){
        rule.type = 'array';
      }else{
        rule.type = 'string';
      }

      if(a.dataset.enum){
        rule.type = 'enum';
        rule.enum = a.dataset.enum.split(',');
      }

      rule.required = a.dataset.required;
      rule.pattern = a.dataset.pattern;
      rule.message = a.dataset.message;

      a.dataset.max && (rule.max = Number(a.dataset.max));
      a.dataset.mix && (rule.mix = Number(a.dataset.mix));
      a.dataset.len && (rule.len = Number(a.dataset.len));
    });
    return descriptor;
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
