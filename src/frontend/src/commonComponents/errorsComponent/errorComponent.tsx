import { ListItem, tokens,Text } from "@fluentui/react-components";
import { DismissCircle24Regular, Warning24Regular, InfoRegular } from "@fluentui/react-icons";
import { List } from "lucide-react";
import React from "react";

const ErrorComponent = (props) => {
    const {file} = props;
    return (
      <>
        {file.file_logs.length > 0 ? (
          <List style={{ paddingLeft: "16px" }}>
            {file.file_logs.map((log, logIdx) => (
              <ListItem key={logIdx} style={{ marginLeft: "8px" }}>
                <Text style={{ display: "flex", alignItems: "flex-start" }}>
                  <span style={{
                    flexShrink: 0,
                    display: "inline-block",
                    width: "16px",
                    height: "16px",
                    marginRight: "8px",
                    marginTop: "3px" // Adjust this value to vertically align with first line of text
                  }}>
                    {log.logType === "error" ? (
                      <DismissCircle24Regular style={{
                        color: tokens.colorStatusDangerForeground1,
                        width: "16px",
                        height: "16px"
                      }} />
                    ) : log.logType === "warning" ? (
                        <Warning24Regular style={{ color: "#B89500", width: "16px", height: "16px" }} />
                    ) : (
                          <InfoRegular style={{
                            color: "#007ACC",
                            width: "16px",
                            height: "16px"
                          }} />
                        )}
                  </span>
                  <span>{log.agentType}: {log.description}</span>
                </Text>
              </ListItem>
            ))}
          </List>
        ) : (
          <p style={{ paddingLeft: "24px" }}>No detailed logs available.</p>
        )}
      </>
    );
  };

  export default ErrorComponent;