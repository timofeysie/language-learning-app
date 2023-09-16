import React from "react";
import { Typography } from "@mui/material";
import { AppliedPattern } from "../../types/AppliedPatternTypes";

interface AppliedPatternComponentProps {
    appliedPatterns: AppliedPattern[];
}

const AppliedPatternComponent: React.FC<AppliedPatternComponentProps> = ({
    appliedPatterns,
}) => {
    return (
        <div>
            {appliedPatterns.map((appliedPattern) => (
                <div key={appliedPattern.id}>
                    <Typography
                        variant="h3"
                        sx={{
                            color: (theme) =>
                                theme.palette.primary.main,
                        }}
                    >
                        {appliedPattern.pattern}
                    </Typography>
                    <Typography variant="body1" color="textSecondary">
                        {appliedPattern.patternTargetText}
                    </Typography>
                    <Typography variant="body1" color="textSecondary">
                        {appliedPattern.patternNativeText}
                    </Typography>
                    {appliedPattern.patternNote && (
                        <Typography variant="body1" color="textSecondary">
                            {appliedPattern.patternNote}
                        </Typography>
                    )}
                </div>
            ))}
        </div>
    );
};

export default AppliedPatternComponent;
