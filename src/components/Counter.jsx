import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../Redux/Counter/Actions";

const Counter = () => {
    const count = useSelector((state) => state);
    console.log(count);

    const dispatch = useDispatch();
    const incrementHandle = () => {
        dispatch(increment());
    };
    const decrementHandle = () => {
        dispatch(decrement());
    };
    return (
        <div>
            <h1 className="text-center text-2xl font-bold my-10 space-y-4">
                Simple counter APP
            </h1>
            <div className="text-center space-y-4">
                <h1 className="text-3xl">Count :{count.counter.value}</h1>
                <div>
                    <button
                        onClick={incrementHandle}
                        className="border-2 p-2 bg-sky-500"
                    >
                        Increment
                    </button>
                    <button
                        onClick={decrementHandle}
                        className="border-2 p-2 bg-red-500 ml-4"
                    >
                        Decrement
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Counter;
