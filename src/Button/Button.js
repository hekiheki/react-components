import React,{Component} from 'react';
import PropTypes from 'prop-types';
import './Button.scss';

class Button extends Component {
    handleClick(e){
        if(this.props.disabled){
            return;
        }
        this.props.onClick(e);
    }
    render(){
        const { children, size, type, htmlType, disabled } = this.props;

        const defaultClass = "heki-btn";
        const typeClass = type ? ' '+defaultClass + '-' + type : '';
        const sizeClass = size === "default" ? '' : ' '+defaultClass + '-' + size ;
        const disableClass = disabled ? ' '+defaultClass + '-disabled' : '';
        return (
            <button 
                className={defaultClass + typeClass + sizeClass + 
            disableClass} 
                type={htmlType}
                onClick={this.handleClick.bind(this)}
            >
                <span>{children}</span>
            </button>
        )
    }
}

Button.propTypes = {
    children: PropTypes.any,
    size: PropTypes.oneOf(['small','default','large']),
    type: PropTypes.oneOf(['primary', 'dashed','danger']),
    htmlType: PropTypes.oneOf(['submit', 'reset','button']),
    onClick: PropTypes.func,
    disabled: PropTypes.bool
}
Button.defaultProps = {
    children: null,
    size: 'default',
    type: null,
    htmlType: null,
    onClick(){},
    disabled: false
}

export default Button;