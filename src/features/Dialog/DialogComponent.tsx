import React from "react";
import { Dialog as DialogType } from "../../types/DialogTypes";
import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "./DialogComponent.css";

interface DialogProps {
    dialog: DialogType[];
}

const DialogComponent: React.FC<DialogProps> = ({ dialog }) => {
    return (
        <div className="dialog-container">
            {dialog.map((dialogItem) => (
                <Accordion key={dialogItem.index} className="dialog-item">
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        sx={{ width: "100%", justifyContent: "space-between" }}
                    >
                        <div className="name-speech-row">
                            <div className="speaker-label">
                                {dialogItem.speakerNameTarget}:
                            </div>
                            <div className="speech">
                                {dialogItem.speechTarget}
                            </div>
                        </div>
                    </AccordionSummary>
                    <AccordionDetails>
                        <div className="name-speech-row">
                            <div className="speaker-label">
                                {dialogItem.speakerNameNative}:
                            </div>
                            <div className="speech">
                                {dialogItem.speechNative}
                            </div>
                        </div>
                    </AccordionDetails>
                </Accordion>
            ))}
        </div>
    );
};

export default DialogComponent;
