import React from "react";
import { Dialog as DialogType } from "../../types/DialogTypes";
import {
    Accordion,
    Typography,
    AccordionSummary,
    AccordionDetails,
} from "@mui/material";
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
                                <Typography variant="subtitle1">
                                    {dialogItem.speakerNameTarget}:
                                </Typography>
                            </div>
                            <div className="speech">
                                <Typography variant="h5">
                                    {dialogItem.speechTarget}
                                </Typography>
                            </div>
                        </div>
                    </AccordionSummary>
                    <AccordionDetails>
                        <div className="name-speech-row">
                            <div className="speaker-label">
                            <Typography variant="subtitle1">
                                {dialogItem.speakerNameNative}:
                                </Typography>
                            </div>
                            <div className="speech">
                            <Typography variant="h6">
                                {dialogItem.speechNative}
                                </Typography>
                            </div>
                        </div>
                    </AccordionDetails>
                </Accordion>
            ))}
        </div>
    );
};

export default DialogComponent;
