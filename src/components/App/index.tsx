import React, {FC, useReducer, useState} from "react";
import block from "bem-cn-lite";
import {Box, Modal} from "@material-ui/core";

import AddProtection from "../AddProtection";
import TakeProfit from "../TakeProfit";

import {
    initialTakeProfitState,
    takeProfitStore,
    TakeProfitContext,
} from "../../stores/takeProfitStore";

const b = block("app");

const App: FC = () => {
    const [state, dispatch] = useReducer(takeProfitStore, initialTakeProfitState);

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <TakeProfitContext.Provider value={{ state, dispatch }}>
            {/* APP */}
            <div className={b()}>
                <header className={b("header")}>
                    <h1 className={b("title", "visually-hidden")}>
                        Bitsgap markup test task
                    </h1>
                </header>

                <main className={b("main")}>
                    <Box>
                        <AddProtection onClick={handleOpen}/>
                    </Box>
                </main>

                <footer className={b("footer")}>
                    <p className="visually-hidden">Footer</p>
                </footer>
            </div>

            {/* MODAL */}
            <Modal
                open={open}
                onClose={handleClose}
            >
                <Box>
                    <TakeProfit onClose={handleClose}/>
                </Box>
            </Modal>
        </TakeProfitContext.Provider>
    );
};

export default App;
