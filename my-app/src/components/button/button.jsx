import './button.css';
export default function Button(props) {
    const {type, onClick, children} = props;
    const style = type ? `button ${props.type}` : 'button'
    return (
        <button
            className={style}
            onClick={onClick}
        >
            {children}
        </button>
    )
}
