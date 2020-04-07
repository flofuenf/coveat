import React from "react";
import Typography from "@material-ui/core/Typography";

export default function ProviderDetail(props) {
    const provider = props.provider();
    return (
        <div>
            <Typography variant={"h1"}>{provider.id}</Typography>
            <Typography variant={"h1"}>{provider.name}</Typography>
        </div>
    );
}