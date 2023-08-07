import { useState, createContext } from 'react';

const counterContext = createContext();

export const CounterProvider = ({ children }) => {

    const [context, setContext] = useState(0);

    const increment = () => {
        return setContext(context + 1);

    }

    const decrement = () => {
        return setContext(context - 1);

    }

    return (
        <counterContext.Provider value={{ context, increment, decrement }}>
            {children}
        </counterContext.Provider>
    )
}

export default counterContext;