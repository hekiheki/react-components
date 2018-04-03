import React,{Component} from 'react';
import PropTypes from 'prop-types';
import './Input.scss';

class Input extends Component {
    handlePressEnter(e){
        if(this.props.disabled){
            return;
        }
        if(e.keyCode === 13){
            this.props.onPressEnter(e)
        }
    }
    handleChange(e){
        if(this.props.disabled){
            return;
        }
        this.props.onChange(e);
    }
    render(){
        const { placeholder, value, defaultValue, disabled, id, type, size } = this.props;

        const defaultClass = 'heki-input';
        const sizeClass = size === "default" ? '' : ' '+defaultClass + '-' + size ;
        const disableClass = disabled ? ' '+defaultClass + '-disabled' : '';
    
        return (
           <input 
            className={defaultClass+sizeClass+disableClass}
            type={type}
            value={defaultValue ? defaultValue : value}
            placeholder={placeholder}
            id={id}
            onKeyDown={this.handlePressEnter.bind(this)}
            onChange={this.handleChange.bind(this)}
            />
        )
    }
}

Input.propTypes = {
    placeholder: PropTypes.string,
    value: PropTypes.string,
    defaultValue: PropTypes.string,
    disabled: PropTypes.bool,
    id: PropTypes.string,
    type: PropTypes.string,
    onPressEnter: PropTypes.func,
    size: PropTypes.oneOf(['small','default','large'])
}
Input.defaultProps = {
    placeholder: '',
    value: '',
    defaultValue: '',
    disabled: false,
    id: null,
    type: 'text',
    onPressEnter(){},
    size: 'default',
}

export default Input;