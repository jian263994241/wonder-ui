(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{300:function(e,a,r){"use strict";r.r(a);var l=r(0),t=r.n(l),n=r(10),u=[{label:"苹果",value:"0"},{label:"橘子",value:"1"},{label:"香蕉",value:"2"}];a.default=n.p.create()((function e(a){var r=a.form,l=r.getFieldDecorator,i=r.validateFields,c=r.resetFields,o=t.a.useCallback((function(){i((function(e,a){if(e){var r=n.p.getHeadError(e);return n.l.toast(r.message)}}))}),[]),s=t.a.useCallback((function(){c()}),[]);return t.a.createElement(n.u,{name:"Form",navbar:!0},t.a.createElement(n.r,{renderHeader:function e(){return"基本"}},l("field_1",{rules:[{required:!0,message:"请填写[基本]字段"}]})(t.a.createElement(n.q,{placeholder:"请输入"},"基本")),l("field_2",{rules:[{required:!0,message:"请填写[多行]字段"}]})(t.a.createElement(n.q,{placeholder:"请输入",multiline:!0},"多行")),r.getFieldDecorator("group2",{initialValue:"0",rules:[{required:!0,message:"请选择[性质]字段"}]})(t.a.createElement(n.q,{renderInput:function e(a,r){var l=a.onChange,u=a.value;return t.a.createElement(n.h,{ref:r,exclusive:!0,data:[{label:"公司",value:"0"},{label:"个人",value:"1"}],onChange:l,value:u})}}," 企业性质 ")),l("field_3",{rules:[{required:!0,message:"请选择[选择]字段"}]})(t.a.createElement(n.v,{extra:"请选择",data:u,cols:1},t.a.createElement(n.s,{arrow:"horizontal"},"选择"))),l("field_4",{rules:[{required:!0,message:"请填写[数字]字段"}]})(t.a.createElement(n.q,{extra:"元",placeholder:"请输入",alignRight:!0,type:"number"},"数字"))),t.a.createElement(n.r,{renderHeader:function e(){return"禁用字段"}},t.a.createElement(n.q,{value:"不可编辑",readOnly:!0},"只读"),t.a.createElement(n.q,{value:"不可编辑",disabled:!0},"禁用")),t.a.createElement(n.c,{top:5,blank:1},t.a.createElement(n.o,null,t.a.createElement(n.e,{fullWidth:!0,size:"large",onClick:s},"重置"),t.a.createElement(n.e,{fullWidth:!0,size:"large",color:"primary",onClick:o},"提交"))))}))}}]);