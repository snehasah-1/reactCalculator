import Buttons from "./Button";
import {calNumbtn,calOpbtn} from "./ButtonStyle";
import {connect} from 'react-redux';
import {calculate} from '../action/reducer';
import {ActionTypes} from '../action/action.types';

const CalculatorButton = ({calculateReducer, calculate}) => {
	const operators = [
		{ '+': 'ADD' },
		{ '-': 'SUBTRACT' },
		{ 'x': 'MULTIPLY' },
		{ '/': 'DIVIDE' },
		{'AC': 'ALL_CLEAR'},
		{'=': 'EQUAL'},
		{'-/+': 'MINUS_PLUS'},
		{'%': "PERCENT"}
	];
	const handleClick = (btnVal) => {
		if(isNaN(btnVal)) {
			const ops = operators.find((item) => item.hasOwnProperty(btnVal));
			console.log(ops[btnVal])
			calculate(ActionTypes[ops[btnVal]],calculateReducer.currentInput);
		} else {
			calculate("INPUT",calculateReducer.currentInput + btnVal);
		}
	}
	return (
			<div className='calculator' style={{marginTop: "-6px"}}>
					<div>
							<Buttons btnStyle={calNumbtn} onclick={() => handleClick("AC")} btnName={"AC"} />
							<Buttons btnStyle={calOpbtn} onclick={() => handleClick("-/+")} btnName={"-/+"} />
							<Buttons btnStyle={calOpbtn} onclick={() => handleClick("%")} btnName={"%"} />
							<Buttons btnStyle={calOpbtn} onclick={() => handleClick("/")} btnName={"/"} />
					</div>
					<div>
							<Buttons btnStyle={calNumbtn} onclick={() => handleClick(7)} btnName={"7"} />
							<Buttons btnStyle={calNumbtn} onclick={() => handleClick(8)} btnName={"8"} />
							<Buttons btnStyle={calNumbtn} onclick={() => handleClick(9)} btnName={"9"} />
							<Buttons btnStyle={calOpbtn} onclick={() => handleClick("x")} btnName={"x"} />
					</div>
					<div>
							<Buttons btnStyle={calNumbtn} onclick={() => handleClick(4)} btnName={"4"} />
							<Buttons btnStyle={calNumbtn} onclick={() => handleClick(5)} btnName={"5"} />
							<Buttons btnStyle={calNumbtn} onclick={() => handleClick(6)} btnName={"6"} />
							<Buttons btnStyle={calOpbtn} onclick={() => handleClick("-")} btnName={"-"} />
					</div>
					<div>
							<Buttons btnStyle={calNumbtn} onclick={() => handleClick(1)} btnName={"1"} />
							<Buttons btnStyle={calNumbtn} onclick={() => handleClick(2)} btnName={"2"} />
							<Buttons btnStyle={calNumbtn} onclick={() => handleClick(3)} btnName={"3"} />
							<Buttons btnStyle={calOpbtn} onclick={() => handleClick("+")} btnName={"+"} />
					</div>
					<div>
							<Buttons btnStyle={calNumbtn} onclick={() => handleClick(0)} btnName={"0"} />
							<Buttons btnStyle={calOpbtn} onclick={() => handleClick(".")} btnName={"."} />
							<Buttons btnStyle={calOpbtn} onclick={() => handleClick("=")} btnName={"="} />
					</div>
			</div>
	);
}

const mapStateToProps = state => ({
    calculateReducer: state.calculateReducer
});
const mapDispatchToProps = disptach => ({
    calculate: (type,data) => {
        disptach(calculate(type,data));
    }
})

export default connect(mapStateToProps,mapDispatchToProps)(CalculatorButton);