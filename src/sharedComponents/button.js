import React from 'react'
import CircularProgress from "@material-ui/core/CircularProgress";

const Button = function (props) {
    const {
        isLoading,
        type,
        className,
        btnTitle,
        onClick,
        style = {}
    } = props;

    return (
        <>
            <button
                type={type}
                className={className}
                onClick={onClick}
                style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                    ...style
                }}
            >
                <div style={{ color: "#fff" }}>{isLoading && <CircularProgress size={20} color="inherit" />}</div>
                {!isLoading && <span> {btnTitle} </span>}
            </button>
        </>
    )
}

export default Button;