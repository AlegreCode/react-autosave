import UseAnimations from "react-useanimations";
import loading from "react-useanimations/lib/loading";
import checkbox from "react-useanimations/lib/checkBox";

function StatusBar(props) {
    return (
        <>
            {props.sending &&
            <div className="flex justify-center items-center">
                <span className="text-green-700">Sending...</span><UseAnimations animation={loading} size={36} strokeColor={"#15803d"} />
            </div>
            }
            {!props.sending &&
            <div className="flex justify-center items-center gap-1">
                <span className="text-green-700">Saved</span><UseAnimations reverse={true} animation={checkbox} size={36} strokeColor={"#15803d"} autoplay={true} />
            </div>
            }
        </>
    )
}

export default StatusBar;