import { Button } from 'reactstrap';

const Buttons = ({onclick, btnName, btnStyle}) => {
    return (
        <Button className="button" style={btnStyle} onClick={onclick}>{btnName}</Button>
    )
}

export default Buttons;