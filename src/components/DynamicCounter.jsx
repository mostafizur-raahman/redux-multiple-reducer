import { useDispatch, useSelector } from "react-redux";
import { ddecrement, dincrement } from "../Redux/DynamicCounter/DynamicActions";


const DynamicCounter = () => {
    const count = useSelector((state) => state);
    console.log(count);
    const dispatch = useDispatch();
    const dincrementHandle = (value) => {
        dispatch(dincrement(value));
    };
    const ddecrementHandle = (value) => {
        dispatch(ddecrement(value));
    };
    return (
        <div>
            <h1 className="text-center text-2xl font-bold my-10 space-y-4">
                Simple counter APP
            </h1>
            <div className="text-center space-y-4">
                <h1 className="text-3xl">Count :{count. dynamicCounter.value}</h1>
                <div>
                    <button
                        onClick={() => dincrementHandle(5)}
                        className="border-2 p-2 bg-sky-500"
                    >
                        Increment
                    </button>
                    <button
                        onClick={() => ddecrementHandle(5)}
                        className="border-2 p-2 bg-red-500 ml-4"
                    >
                        Decrement
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DynamicCounter;
