import * as React from "react";

type QueryState = {
    [key: string]: {
        data: any | null;
        isLoading: boolean;
        error: string | null;
    };
};

const queryContext = React.createContext<[QueryState, React.Dispatch<React.SetStateAction<QueryState>>]>([
    {},
    () => {}
]);

export function QueryProvider({ children }: { children: React.ReactNode }) {
    const tuple = React.useState({});
    
    return (
        <queryContext.Provider value={tuple}>
            {children}
        </queryContext.Provider>
    );
}

export function useQuery(url: string) {
    const [state, setState] = React.useContext(queryContext);

    React.useEffect(() => {
        const update = (newState: Partial<QueryState[keyof QueryState]>) => setState((prevState) => ({
            ...prevState, [url]: { ...prevState[url], ...newState }
        }));
        
        let ignore = false;
        
        const handleFetch = async () => {
            update({ data: null, isLoading: true, error: null });

            try {
                const res = await fetch(url);

                if (ignore) {
                    return;
                }
                
                if (res.ok === false) {
                    throw new Error(`Error fetching ${url}`);
                }
                
                const data = await res.json();

                update({ data, isLoading: false, error: null });
            } catch (e: Error | any) {
                update({ error: e.message, isLoading: false, data: null });
            }
        };
        handleFetch();
    }, [url]);
    return state[url] || { data: null, isLoading: true, error: null };
}
