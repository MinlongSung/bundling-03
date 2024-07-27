import React from "react";
import { createRoot } from 'react-dom/client';
import { MainComponent } from './optional';
import "./basic";

const root = createRoot(document.getElementById('root'));
root.render(
    <>
        <MainComponent text="Hello World From React"></MainComponent>
    </>
)