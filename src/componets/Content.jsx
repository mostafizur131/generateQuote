import { useState } from "react";


const Content = () => {
    const [text, setText] = useState(null)
    const showText = () => {
        setText("Love is always patient and kind. It is never jealous. Love is never boastful or conceited. It is never rude or selfish. It does not take offense and is not resentful. Love takes no pleasure in other people’s sins, but delights in the truth. It is always ready to excuse, to trust, to hope, and to endure whatever comes.");
    }
    return (
        <section className="px-7 py-16 bg-gray-200 text-gray-900 ">
            <div className="container mx-auto flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
                <div className="w-full md:w-1/2 p-2 lg:p-5">
                    <button type="button" className="font-semibold rounded bg-red-400 text-white px-6 py-2 my-3" onClick={showText}>Show Text</button>
                    <p className="text-2xl text-justify">{text}</p>
                </div>
                <div className="w-full md:w-1/2">
                    <img src="https://www.floraqueen.com/blog/wp-content/uploads/2020/03/shutterstock_261847937.jpg" alt="" className="rounded-lg" />
                </div>
            </div>

        </section>
    );
};

export default Content;