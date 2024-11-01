// eslint-disable-next-line react/prop-types
const Button = ({ name, isBeam = false, containerClass }) => {
    return (
        <button className={`btn ${containerClass}`}>
            {isBeam && (
                <span className="relative flex size-3">
                    <span className="btn-ping" />
                    <span className="btn-ping_dot" />
                </span>
            )}
            {name}
        </button>
    )
}
export default Button