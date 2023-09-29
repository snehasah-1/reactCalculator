import { useState } from 'react';
import {Input} from 'reactstrap';
import {connect} from 'react-redux';

const CalculatorDisplay = ({calculateReducer}) => {
    const [displayValue, setDisplayValue] = useState(calculateReducer.total);
    const {total,currentInput} = calculateReducer;
    return (
        <div className='calculator'>
            <h3 style={{color:"#fff"}}>Calculotor</h3>
            <Input type='text' className='calInput' name='cal-display' id='cal-display' value={displayValue || (Number(currentInput) ? currentInput: total)} onChange={(e) => setDisplayValue(e.target.value)}  />
        </div>
    )
}

const mapStateToProps = state => ({
    calculateReducer: state.calculateReducer
});
const mapDispatchToProps = dispatch => ({
})

export default connect(mapStateToProps,mapDispatchToProps)(CalculatorDisplay);