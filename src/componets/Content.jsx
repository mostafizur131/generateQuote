import { useState } from "react";


const Content = () => {
    const loveQuotes = [
    {
        quote:"Love has nothing to do with what you are expecting to get–only with what you are expecting to give–which is everything.",
        author: "Katharine Hepburn"
    },
    {
        quote:"It is a curious thought, but it is only when you see people looking ridiculous that you realize just how much you love them.",
        author: "Agatha Christie"
    },
    {
        quote:"The greatest happiness of life is the conviction that we are loved; loved for ourselves, or rather, loved in spite of ourselves.",
        author: "Victor Hugo"
    },
    {
        quote:"There is always madness in love. But there is also always some reason in madness.",
        author: "Friedrich Nietzsche"
    },
    {
        quote:"Have enough courage to trust love one more time and always one more time.",
        author: "Maya Angelou"
    },
    {
        quote:"Love does not consist in gazing at each other, but in looking outward together in the same direction.",
        author: "Antoine de Saint-Exupéry"
    },
    {
        quote:"Love is a fire. But whether it is going to warm your hearth or burn down your house, you can never tell.",
        author: "Joan Crawford"
    },

]
    const [text, setText] = useState({})
    const [displayText, setDisplayText] = useState('');

    const handleShowText = () => {
       let randomQuote = Math.floor(Math.random() * loveQuotes.length);
       setText(loveQuotes[randomQuote])
    }

    
    const handleDisplayText = (e) => {
        e.preventDefault();
       const text = e.target.inputText.value;
        setDisplayText(text)
    }

    return (
        <section className="px-7 py-16 bg-gray-200 text-gray-900 lg:h-[75vh]">
            <div className="container mx-auto flex flex-col overflow-hidden lg:flex-row gap-2">
                <div className="w-full md:w-1/2 px-2 lg:px-5">
                    <button type="button" className="font-semibold rounded bg-red-400 text-white px-6 py-2 my-3" onClick={handleShowText}>Get Quote</button>
                    {Object.entries(text).length === 0 ?<div className="bg-gray-300 rounded-lg p-5">
                        <p className="text-2xl text-justify">Please press the button to get a Love Quote! ♥♥♥</p>
                    </div>: <div className="bg-gray-300 rounded-lg p-5">
                        <p className="text-2xl text-justify">{text.quote}</p>
                        <span className="text-lg font-medium italic mt-2 ">- {text.author}</span>
                    </div>}
                </div>
                <div className="w-full md:w-1/2">
                    <form onSubmit={handleDisplayText} >
                    <div className="col-span-full">
                        <label  className="text-lg font-bold pt-5 pb-4 block">Provide Text</label>
                        <textarea  id="inputText" name="inputText" placeholder="" className="w-full h-32 rounded-md focus:ring focus:ri focus:ri text-gray-900 text-base font-semibold p-2"></textarea>
				    </div>
                        <button type="submit" className="font-semibold rounded bg-red-400 text-white px-6 py-2 my-3">Display Text</button>
                </form>
                {displayText && <div className="bg-gray-300 rounded-lg p-5">
                        <p className="text-2xl text-justify">{displayText}</p>
                    </div>}
                </div>
                    
            </div>

        </section>
    );
};

export default Content;